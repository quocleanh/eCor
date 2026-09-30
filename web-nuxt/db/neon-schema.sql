-- Bảng bài viết kênh kiến thức cho ecor.vn/kien-thuc — chạy 1 lần trên Neon (SQL Editor)
-- n8n (WF5) ghi vào đây; Nuxt đọc lúc build (prerender) để tạo trang tĩnh.
CREATE TABLE IF NOT EXISTS posts (
  id               SERIAL PRIMARY KEY,
  source_id        INT UNIQUE,                 -- id bài trong DB nội dung (contents.id) — để cập nhật lại khi sửa
  slug             TEXT NOT NULL UNIQUE,       -- /kien-thuc/<slug>
  title            TEXT NOT NULL,
  meta_description TEXT,
  body_md          TEXT NOT NULL,              -- Markdown
  pillar           TEXT,                       -- nhóm chủ đề (Nhập kho & kiểm hàng, ...)
  keywords         TEXT[] NOT NULL DEFAULT '{}',
  image_url        TEXT,                       -- ảnh trên Google Cloud Storage
  image_alt        TEXT,
  status           TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'hidden')),
  published_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts (status, published_at DESC);

-- Ẩn 1 bài khỏi web (rebuild để áp dụng):  UPDATE posts SET status = 'hidden' WHERE slug = '...';
