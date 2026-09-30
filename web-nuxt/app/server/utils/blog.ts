// Đọc bài viết kênh kiến thức từ Neon (Postgres). Chạy lúc build/prerender trên Cloudflare
// hoặc khi `nuxt dev`. Chưa đặt DATABASE_URL → dùng dữ liệu mẫu để dựng giao diện.
import { neon } from '@neondatabase/serverless'
import { Marked } from 'marked'
import sample from '../data/kien-thuc.sample.json'

export interface PostRow {
  id: number
  slug: string
  title: string
  meta_description: string | null
  body_md: string
  pillar: string | null
  keywords: string[]
  image_url: string | null
  image_alt: string | null
  published_at: string
  updated_at: string
}

export type PostSummary = Omit<PostRow, 'body_md' | 'keywords'> & { reading_minutes: number }

function dbUrl(): string {
  const cfg = useRuntimeConfig()
  return (cfg.databaseUrl as string) || process.env.DATABASE_URL || ''
}

const readingMinutes = (md: string) => Math.max(1, Math.round(md.split(/\s+/).filter(Boolean).length / 220))

async function allPosts(): Promise<PostRow[]> {
  const url = dbUrl()
  if (!url) {
    // Dữ liệu mẫu CHỈ dùng khi chạy `nuxt dev`. Build thật mà thiếu DATABASE_URL → không có bài (tránh đăng bài mẫu lên web thật)
    if (import.meta.dev) return (sample as PostRow[]).slice().sort((a, b) => b.published_at.localeCompare(a.published_at))
    console.warn('[kien-thuc] Thiếu DATABASE_URL — trang /kien-thuc sẽ không có bài. Đặt biến này trong Cloudflare (build).')
    return []
  }
  const sql = neon(url)
  const rows = await sql`
    SELECT id, slug, title, meta_description, body_md, pillar, keywords, image_url, image_alt,
           published_at, updated_at
    FROM posts WHERE status = 'published' AND published_at <= now()
    ORDER BY published_at DESC`
  return rows.map((r: any) => ({
    ...r,
    published_at: new Date(r.published_at).toISOString(),
    updated_at: new Date(r.updated_at).toISOString(),
  })) as PostRow[]
}

export async function listPosts(): Promise<PostSummary[]> {
  const posts = await allPosts()
  return posts.map(({ body_md, keywords, ...p }) => ({ ...p, reading_minutes: readingMinutes(body_md) }))
}

// ---------- Markdown → HTML ----------
const slugifyVi = (s: string) => s.toLowerCase().replace(/đ/g, 'd').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80)

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

interface Heading { id: string; text: string }

function render(md: string) {
  const toc: Heading[] = []
  const used = new Set<string>()
  const marked = new Marked({ gfm: true, breaks: false })
  marked.use({
    renderer: {
      // Nội dung do AI viết: không cho HTML thô lọt vào trang
      html({ text }) { return escapeHtml(text) },
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens)
        let id = slugifyVi(inner) || 'muc'
        while (used.has(id)) id += '-2'
        used.add(id)
        if (depth === 2) toc.push({ id, text: inner.replace(/<[^>]+>/g, '') })
        const level = Math.min(depth + 0, 6) // bài không có H1 (tiêu đề nằm ngoài), ## → h2
        return `<h${level} id="${id}">${inner}</h${level}>\n`
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const safe = /^(https?:|\/|#|mailto:)/i.test(href) ? href : '#'
        const ext = /^https?:/i.test(safe) && !/^https?:\/\/(www\.)?ecor\.vn/i.test(safe)
        return `<a href="${safe}"${title ? ` title="${escapeHtml(title)}"` : ''}${ext ? ' target="_blank" rel="noopener nofollow"' : ''}>${text}</a>`
      },
      table(token) {
        // bọc bảng để cuộn ngang trên điện thoại
        const header = token.header.map(c => `<th>${this.parser.parseInline(c.tokens)}</th>`).join('')
        const body = token.rows.map(r => `<tr>${r.map(c => `<td>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`).join('')
        return `<div class="table-wrap"><table><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table></div>\n`
      },
    },
  })
  const html = marked.parse(md, { async: false }) as string
  return { html, toc }
}

// Tách mục "Câu hỏi thường gặp" (### câu hỏi + đoạn trả lời) để làm FAQPage JSON-LD
function extractFaq(md: string) {
  const m = md.match(/^##\s*Câu hỏi thường gặp[^\n]*\n([\s\S]*?)(?=^##\s|(?![\s\S]))/im)
  if (!m) return []
  const out: { q: string; a: string }[] = []
  const re = /^###\s*(.+)\n([\s\S]*?)(?=^###\s|(?![\s\S]))/gm
  let x: RegExpExecArray | null
  while ((x = re.exec(m[1]))) {
    const q = x[1].replace(/^\d+[.)]\s*/, '').replace(/[*_`]/g, '').trim()
    const a = x[2].replace(/^Trả lời:\s*/i, '').replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim()
    if (q && a) out.push({ q, a })
  }
  return out
}

export async function getPost(slug: string) {
  // allPosts() đã sắp xếp published_at DESC (mới nhất trước)
  const posts = await allPosts()
  const i = posts.findIndex(p => p.slug === slug)
  if (i < 0) return null
  const p = posts[i]
  const { html, toc } = render(p.body_md)
  const related = posts
    .filter(x => x.slug !== slug)
    .sort((a, b) => Number(b.pillar === p.pillar) - Number(a.pillar === p.pillar))
    .slice(0, 3)
    .map(({ body_md, keywords, ...r }) => ({ ...r, reading_minutes: readingMinutes(body_md) }))
  // Bài trước (cũ hơn, xuất bản trước) / bài sau (mới hơn) theo thứ tự thời gian đăng
  const toNav = (x?: PostRow) => x ? { slug: x.slug, title: x.title } : null
  const prevPost = toNav(posts[i + 1])
  const nextPost = toNav(i > 0 ? posts[i - 1] : undefined)
  const { body_md, ...rest } = p
  return { ...rest, html, toc, faq: extractFaq(body_md), reading_minutes: readingMinutes(body_md), related, prevPost, nextPost }
}
