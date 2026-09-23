export default {
  async fetch(request, env) {
    const cors = corsHeaders(env);

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

    try {
      await sendZaloMessage(env, buildMessage(data));
    } catch (err) {
      // Log for `wrangler tail`, but don't fail the visitor's form submission
      // just because the internal Zalo notification failed.
      console.error('zalo_notify_failed', err && err.message);
    }

    return json({ ok: true }, 200, cors);
  }
};

function corsHeaders(env) {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors }
  });
}

function buildMessage(d) {
  const modules = Array.isArray(d.modules) ? d.modules.join(', ') : (d.modules || '-');
  return [
    '🔔 Khách hàng mới điền form liên hệ trên website',
    `Họ tên: ${d.name}`,
    `SĐT: ${d.phone}`,
    `Email: ${d.email || '-'}`,
    `Công ty: ${d.company || '-'}`,
    `Giải pháp quan tâm: ${modules || '-'}`,
    `Quy mô: ${d.scale || '-'}`,
    `Ghi chú: ${d.notes || '-'}`
  ].join('\n');
}

// Zalo OA access token sống 25 giờ, refresh token sống ~3 tháng và ĐỔI MỚI
// (rotate) sau mỗi lần refresh. Vì vậy phải lưu refresh token mới nhất vào KV
// sau mỗi lần lấy access token, nếu không sau ~3 tháng token sẽ chết hẳn.
async function getAccessToken(env) {
  const storedRefreshToken = await env.ZALO_KV.get('refresh_token');
  const refreshToken = storedRefreshToken || env.ZALO_INITIAL_REFRESH_TOKEN;

  if (!refreshToken) {
    throw new Error('no_refresh_token_available');
  }

  const res = await fetch('https://oauth.zaloapp.com/v4/oa/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      secret_key: env.ZALO_APP_SECRET
    },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      app_id: env.ZALO_APP_ID,
      grant_type: 'refresh_token'
    })
  });

  const body = await res.json();
  if (!body.access_token) {
    throw new Error('token_refresh_failed: ' + JSON.stringify(body));
  }

  await env.ZALO_KV.put('access_token', body.access_token);
  if (body.refresh_token) {
    await env.ZALO_KV.put('refresh_token', body.refresh_token);
  }

  return body.access_token;
}

async function sendZaloMessage(env, text) {
  const accessToken = await getAccessToken(env);

  const res = await fetch('https://openapi.zalo.me/v3.0/oa/message/cs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      access_token: accessToken
    },
    body: JSON.stringify({
      recipient: { user_id: env.ZALO_UID },
      message: { text }
    })
  });

  const body = await res.json();
  if (body.error) {
    throw new Error('zalo_send_failed: ' + JSON.stringify(body));
  }
}
