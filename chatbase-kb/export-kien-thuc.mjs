// Xuất bài viết kênh Kiến thức (bảng `posts` trên Neon) thành 1 file Markdown để nạp vào Chatbase.
//
// Chạy từ thư mục web-nuxt (nơi đã cài @neondatabase/serverless):
//   cd web-nuxt
//   node ../chatbase-kb/export-kien-thuc.mjs
//
// Cần biến môi trường DATABASE_URL (giống biến Nuxt dùng lúc build).
// Kết quả: chatbase-kb/13-kien-thuc-bai-viet.md
//
// Chạy lại mỗi khi có bài mới, rồi upload lại file đó vào Chatbase → Sources → Files.

import { neon } from '@neondatabase/serverless'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const url = process.env.DATABASE_URL
if (!url) {
  console.error('Thiếu DATABASE_URL. Ví dụ: DATABASE_URL="postgres://..." node ../chatbase-kb/export-kien-thuc.mjs')
  process.exit(1)
}

const outDir = dirname(fileURLToPath(import.meta.url))
const outFile = resolve(outDir, '13-kien-thuc-bai-viet.md')

const sql = neon(url)
const rows = await sql`
  SELECT slug, title, meta_description, body_md, pillar, keywords, published_at, updated_at
  FROM posts
  WHERE status = 'published' AND published_at <= now()
  ORDER BY published_at DESC`

const parts = [
  '# Kênh Kiến thức eCor — toàn bộ bài viết đã đăng',
  '',
  'Nguồn: ecor.vn/kien-thuc. Đây là nội dung hướng dẫn nghiệp vụ kho vận do eCor biên soạn.',
  'Khi trả lời khách từ phần này, hãy dẫn link bài viết tương ứng để khách đọc chi tiết.',
  `Xuất ngày: ${new Date().toISOString().slice(0, 10)} — ${rows.length} bài.`,
  '',
  '---',
  '',
]

for (const p of rows) {
  parts.push(`## ${p.title}`)
  parts.push('')
  parts.push(`**Link:** https://ecor.vn/kien-thuc/${p.slug}`)
  if (p.pillar) parts.push(`**Nhóm chủ đề:** ${p.pillar}`)
  if (p.keywords?.length) parts.push(`**Từ khóa:** ${p.keywords.join(', ')}`)
  if (p.meta_description) parts.push(`**Tóm tắt:** ${p.meta_description}`)
  parts.push('')
  parts.push(p.body_md.trim())
  parts.push('')
  parts.push('---')
  parts.push('')
}

mkdirSync(outDir, { recursive: true })
writeFileSync(outFile, parts.join('\n'), 'utf8')
console.log(`Đã xuất ${rows.length} bài → ${outFile}`)
