# Kênh kiến thức `/kien-thuc`

Bài viết do hệ thống nội dung (n8n) ghi vào bảng `posts` trên **Neon**; Nuxt đọc lúc **build** và prerender thành trang tĩnh
(`/kien-thuc` + `/kien-thuc/<slug>`), kèm sitemap, canonical, JSON-LD (Article, BreadcrumbList, FAQPage).

## Cài đặt (1 lần)

1. **Neon**: mở SQL Editor, chạy `db/neon-schema.sql`.
2. **Cloudflare** (Workers/Pages → project `ecor` → Settings → Variables): thêm biến **build** `DATABASE_URL` = chuỗi kết nối Neon.
   Chỉ dùng lúc build, không xuất ra trình duyệt.
3. **Cloudflare**: tạo *Deploy hook* (build lại khi có bài mới), dán URL vào `config.website.deploy_hook_url` phía n8n.
4. Ảnh bài viết nằm trên Google Cloud Storage (bucket public): `https://storage.googleapis.com/<bucket>/kien-thuc/<file>.jpg`.

## Chạy local

- Không có `DATABASE_URL` → dùng dữ liệu mẫu `app/server/data/kien-thuc.sample.json` để dựng giao diện.
- Có `DATABASE_URL` trong `.env` → đọc bài thật từ Neon.

```bash
npm run dev        # http://localhost:3000/kien-thuc
npm run generate   # build tĩnh như trên Cloudflare
```

## Tệp liên quan

- `app/server/utils/blog.ts` — đọc Neon, render Markdown → HTML (chặn HTML thô), mục lục, tách FAQ
- `app/server/api/kien-thuc/*` — API dùng lúc prerender · `app/server/api/sitemap-kien-thuc.get.ts` — URL cho sitemap
- `app/pages/kien-thuc/index.vue`, `app/pages/kien-thuc/[slug].vue` — giao diện
- Ẩn 1 bài: `UPDATE posts SET status = 'hidden' WHERE slug = '...';` rồi build lại.
