import { connect } from 'cloudflare:sockets';
import { buildAdminEmail, buildCustomerEmail } from './templates.js';

export default {
  async fetch(request, env) {
    const cors = corsHeaders(env, request.headers.get('Origin'));

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405, cors);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ error: 'invalid_json' }, 400, cors);
    }

    if (!data.name || !data.phone) {
      return json({ error: 'missing_fields' }, 400, cors);
    }

    const admin = buildAdminEmail(data);
    try {
      await sendMail(env, { to: env.MAIL_TO, ...admin });
    } catch (err) {
      // Log for `wrangler tail`, nhưng không chặn trải nghiệm người dùng
      // chỉ vì gửi email nội bộ thất bại.
      console.error('smtp_send_admin_failed', err && err.message);
    }

    if (data.email) {
      const customer = buildCustomerEmail(data);
      try {
        await sendMail(env, { to: data.email, ...customer });
      } catch (err) {
        console.error('smtp_send_customer_failed', err && err.message);
      }
    }

    return json({ ok: true }, 200, cors);
  }
};

function corsHeaders(env, origin) {
  const allowed = [env.ALLOWED_ORIGIN, ...(env.EXTRA_ALLOWED_ORIGINS || '').split(',')]
    .map((o) => o.trim())
    .filter(Boolean);
  const isLocalhost = origin && /^https?:\/\/localhost(:\d+)?$/.test(origin);
  const allowOrigin = origin && (allowed.includes(origin) || isLocalhost) ? origin : env.ALLOWED_ORIGIN;

  return {
    'Access-Control-Allow-Origin': allowOrigin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin'
  };
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors }
  });
}

// --- Minimal SMTP client over Cloudflare TCP Sockets ---

const enc = new TextEncoder();
const dec = new TextDecoder();

async function sendMail(env, { to, subject, text, html }) {
  const port = Number(env.SMTP_PORT || 465);
  const implicitTls = String(env.SMTP_SECURE) !== 'false';

  let socket = connect(
    { hostname: env.SMTP_HOST, port },
    { secureTransport: implicitTls ? 'on' : 'starttls', allowHalfOpen: false }
  );

  let { reader, writer } = openStreams(socket);

  let resp = await readResponse(reader);
  assertCode(resp, '220', 'greeting_failed');

  resp = await cmd(writer, reader, `EHLO ${env.SMTP_HOST}`);
  assertCode(resp, '250', 'ehlo_failed');

  if (!implicitTls) {
    resp = await cmd(writer, reader, 'STARTTLS');
    assertCode(resp, '220', 'starttls_failed');

    reader.releaseLock();
    writer.releaseLock();
    socket = socket.startTls();
    ({ reader, writer } = openStreams(socket));

    resp = await cmd(writer, reader, `EHLO ${env.SMTP_HOST}`);
    assertCode(resp, '250', 'ehlo_after_starttls_failed');
  }

  resp = await cmd(writer, reader, 'AUTH LOGIN');
  assertCode(resp, '334', 'auth_login_failed');

  resp = await cmd(writer, reader, btoa(env.SMTP_USER));
  assertCode(resp, '334', 'auth_user_failed');

  resp = await cmd(writer, reader, btoa(env.SMTP_PASS));
  assertCode(resp, '235', 'auth_pass_failed');

  resp = await cmd(writer, reader, `MAIL FROM:<${env.MAIL_FROM}>`);
  assertCode(resp, '250', 'mail_from_failed');

  resp = await cmd(writer, reader, `RCPT TO:<${to}>`);
  assertCode(resp, '250', 'rcpt_to_failed');

  resp = await cmd(writer, reader, 'DATA');
  assertCode(resp, '354', 'data_failed');

  const message = buildMime(env, to, subject, text, html);
  resp = await cmd(writer, reader, message + '\r\n.');
  assertCode(resp, '250', 'send_failed');

  await cmd(writer, reader, 'QUIT').catch(() => {});
  reader.releaseLock();
  writer.releaseLock();
  await socket.close().catch(() => {});
}

function openStreams(socket) {
  return { reader: socket.readable.getReader(), writer: socket.writable.getWriter() };
}

async function readResponse(reader) {
  let buf = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) throw new Error('smtp_connection_closed');
    buf += dec.decode(value, { stream: true });
    const lines = buf.split('\r\n').filter(Boolean);
    const last = lines[lines.length - 1];
    // Dòng cuối của 1 response nhiều dòng có dạng "250 " (space), các dòng
    // giữa có dạng "250-" (dash).
    if (last && /^\d{3} /.test(last)) {
      return buf;
    }
  }
}

async function cmd(writer, reader, line) {
  await writer.write(enc.encode(line + '\r\n'));
  return readResponse(reader);
}

function assertCode(resp, code, errName) {
  if (!resp.startsWith(code)) {
    throw new Error(`${errName}: ${resp.trim()}`);
  }
}

function buildMime(env, to, subject, text, html) {
  const encodedSubject = `=?UTF-8?B?${b64(subject)}?=`;
  const headers = [
    `From: ${env.MAIL_FROM}`,
    `To: ${to}`,
    `Subject: ${encodedSubject}`,
    'MIME-Version: 1.0'
  ];

  if (!html) {
    return [
      ...headers,
      'Content-Type: text/plain; charset="UTF-8"',
      'Content-Transfer-Encoding: base64',
      '',
      wrap76(b64(text))
    ].join('\r\n');
  }

  const boundary = `----ecor-${Date.now().toString(36)}`;
  return [
    ...headers,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: base64',
    '',
    wrap76(b64(text)),
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    'Content-Transfer-Encoding: base64',
    '',
    wrap76(b64(html)),
    '',
    `--${boundary}--`
  ].join('\r\n');
}

function b64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function wrap76(str) {
  const out = [];
  for (let i = 0; i < str.length; i += 76) {
    out.push(str.slice(i, i + 76));
  }
  return out.join('\r\n');
}
