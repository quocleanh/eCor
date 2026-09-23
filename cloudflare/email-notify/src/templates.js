const BRAND_YELLOW = '#F5B800';
const LOGO_URL = 'https://ecor.vn/ecor-logo.png';
const SITE_URL = 'https://ecor.vn';
const HOTLINE = '0822 235 858';
const HOTLINE_TEL = '0822235858';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(str) {
  return escapeHtml(str).replace(/\n/g, '<br>');
}

function modulesLabel(d) {
  const modules = Array.isArray(d.modules) ? d.modules.join(', ') : d.modules;
  return modules || '-';
}

function now() {
  return new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
}

// Khung email dùng chung: bảng 600px, nền trắng, viền xám nhạt, dải vàng
// thương hiệu trên đầu. Dùng table thay vì flex/grid để tương thích rộng
// với các trình đọc email (Outlook, Gmail app, v.v).
function shell({ badge, badgeColor = '#B45309', badgeBg = '#FEF3C7', title, intro, bodyHtml, ctaHtml, footerNote }) {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7;">
          <tr>
            <td style="height:6px;background:linear-gradient(90deg,${BRAND_YELLOW},#FFD043,${BRAND_YELLOW});font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 20px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <img src="${LOGO_URL}" alt="ecor" height="32" style="height:32px;display:block;">
                  </td>
                  <td align="right">
                    <span style="display:inline-block;padding:5px 12px;border-radius:999px;background:${badgeBg};color:${badgeColor};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;">${escapeHtml(badge)}</span>
                  </td>
                </tr>
              </table>
              <h1 style="margin:20px 0 8px 0;font-size:22px;line-height:1.3;color:#18181b;font-weight:800;">${title}</h1>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#52525b;">${intro}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px 32px;">
              ${bodyHtml}
              ${ctaHtml || ''}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background:#fafafa;border-top:1px solid #f0f0f1;text-align:center;">
              <p style="margin:0 0 4px 0;font-size:12px;color:#71717a;"><strong>ecor.vn</strong> &bull; Nền tảng số hóa Kho vận &amp; Chuỗi cung ứng (WMS &bull; TMS &bull; POS &bull; Account)</p>
              <p style="margin:0;font-size:11px;color:#a1a1aa;">${footerNote || 'Hotline hỗ trợ: ' + HOTLINE}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function fieldRow(label, valueHtml) {
  return `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;font-size:12px;color:#a1a1aa;width:150px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;font-size:14px;color:#18181b;font-weight:600;">${valueHtml}</td>
  </tr>`;
}

function detailsTable(d) {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid #e4e4e7;border-radius:12px;padding:4px 16px;margin:0;">
    ${fieldRow('Họ tên', escapeHtml(d.name))}
    ${fieldRow('Điện thoại', `<a href="tel:${escapeHtml(d.phone)}" style="color:#B45309;text-decoration:none;">${escapeHtml(d.phone)}</a>`)}
    ${fieldRow('Email', d.email ? `<a href="mailto:${escapeHtml(d.email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(d.email)}</a>` : '-')}
    ${fieldRow('Công ty', escapeHtml(d.company) || '-')}
    ${fieldRow('Giải pháp quan tâm', escapeHtml(modulesLabel(d)))}
    ${fieldRow('Quy mô', escapeHtml(d.scale) || '-')}
    ${fieldRow('Ghi chú', nl2br(d.notes) || '-')}
  </table>`;
}

function buttonHtml(href, label, { primary = true } = {}) {
  const bg = primary ? BRAND_YELLOW : '#18181b';
  const color = primary ? '#18181b' : '#ffffff';
  return `<a href="${href}" style="display:inline-block;padding:12px 20px;border-radius:10px;background:${bg};color:${color};font-size:13px;font-weight:700;text-decoration:none;">${escapeHtml(label)}</a>`;
}

// --- Email #1: gửi cho admin/sales khi có lead mới ---

export function buildAdminEmail(d) {
  const subject = `🔔 Lead mới: ${d.name} vừa điền form liên hệ`;

  const text = [
    'Có khách hàng mới điền form liên hệ trên website.',
    '',
    `Họ tên: ${d.name}`,
    `SĐT: ${d.phone}`,
    `Email: ${d.email || '-'}`,
    `Công ty: ${d.company || '-'}`,
    `Giải pháp quan tâm: ${modulesLabel(d)}`,
    `Quy mô: ${d.scale || '-'}`,
    `Ghi chú: ${d.notes || '-'}`,
    '',
    `Thời gian: ${now()}`
  ].join('\n');

  const bodyHtml = `
    <div style="margin:0 0 16px 0;padding:14px 16px;background:#FEF3C7;border:1px solid #FDE68A;border-radius:10px;font-size:13px;color:#92400E;">
      ⏱️ <strong>Cam kết phản hồi trong 15 phút</strong> &mdash; vui lòng liên hệ khách hàng sớm nhất có thể. Thời gian nhận lead: <strong>${escapeHtml(now())}</strong>
    </div>
    ${detailsTable(d)}
  `;

  const ctaHtml = `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:20px;">
      <tr>
        <td style="padding-right:10px;">${buttonHtml(`tel:${d.phone}`, 'Gọi ngay cho khách')}</td>
        ${d.email ? `<td>${buttonHtml(`mailto:${d.email}`, 'Trả lời Email', { primary: false })}</td>` : ''}
      </tr>
    </table>
  `;

  const html = shell({
    badge: 'Hot Lead',
    title: 'Khách hàng mới điền form liên hệ trên website',
    intro: 'Hệ thống vừa ghi nhận một yêu cầu tư vấn mới từ ecor.vn. Vui lòng xử lý theo cam kết SLA dịch vụ.',
    bodyHtml,
    ctaHtml
  });

  return { subject, text, html };
}

// --- Email #2: gửi cảm ơn/xác nhận cho khách hàng đã để lại thông tin ---

export function buildCustomerEmail(d) {
  const subject = 'Cảm ơn bạn đã liên hệ với ecor — Chúng tôi sẽ phản hồi sớm';

  const text = [
    `Kính chào ${d.name},`,
    '',
    'Cảm ơn bạn đã để lại thông tin liên hệ với ecor. Đội ngũ tư vấn của chúng tôi đã nhận được yêu cầu và sẽ liên hệ lại trong vòng 15 phút làm việc (08:00 - 18:00).',
    '',
    'Thông tin bạn đã gửi:',
    `Họ tên: ${d.name}`,
    `SĐT: ${d.phone}`,
    `Công ty: ${d.company || '-'}`,
    `Giải pháp quan tâm: ${modulesLabel(d)}`,
    '',
    `Cần hỗ trợ gấp? Gọi hotline ${HOTLINE} hoặc chat Zalo.`,
    '',
    'Trân trọng,',
    'Đội ngũ ecor.vn'
  ].join('\n');

  const bodyHtml = `
    <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6;color:#3f3f46;">
      Kính chào <strong>${escapeHtml(d.name)}</strong>${d.company ? ` (${escapeHtml(d.company)})` : ''}, đội ngũ chuyên gia tư vấn giải pháp của <strong>ecor</strong> đã nhận được đầy đủ thông tin từ bạn.
    </p>
    <div style="margin:0 0 16px 0;padding:14px 16px;background:#FEF3C7;border:1px solid #FDE68A;border-radius:10px;font-size:13px;color:#92400E;">
      ⏱️ Chuyên viên tư vấn sẽ liên hệ qua điện thoại hoặc Zalo trong vòng <strong>15 phút làm việc</strong> (08:00&ndash;18:00) để trao đổi và sắp xếp lịch demo/khảo sát.
    </div>
    <p style="margin:0 0 8px 0;font-size:12px;color:#a1a1aa;text-transform:uppercase;letter-spacing:.03em;font-weight:700;">Thông tin bạn đã gửi</p>
    ${detailsTable(d)}
  `;

  const ctaHtml = `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:20px;">
      <tr>
        <td style="padding-right:10px;">${buttonHtml(`tel:${HOTLINE_TEL}`, `Gọi hotline ${HOTLINE}`)}</td>
        <td>${buttonHtml(`https://zalo.me/${HOTLINE_TEL}`, 'Chat Zalo', { primary: false })}</td>
      </tr>
    </table>
  `;

  const html = shell({
    badge: 'Đã tiếp nhận',
    badgeColor: '#15803d',
    badgeBg: '#DCFCE7',
    title: 'Yêu cầu tư vấn của bạn đã được ghi nhận!',
    intro: 'Cảm ơn bạn đã quan tâm đến ecor. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.',
    bodyHtml,
    ctaHtml,
    footerNote: `Email này được gửi tự động để xác nhận yêu cầu của bạn tại ${SITE_URL}.`
  });

  return { subject, text, html };
}
