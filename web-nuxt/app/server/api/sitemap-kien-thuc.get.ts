// Nguồn URL động cho @nuxtjs/sitemap: mỗi bài kiến thức 1 dòng, kèm ngày cập nhật
export default defineSitemapEventHandler(async () => {
  const posts = await listPosts()
  return [
    { loc: '/kien-thuc', _i18nTransform: false },
    ...posts.map(p => ({ loc: `/kien-thuc/${p.slug}`, lastmod: p.updated_at, _i18nTransform: false })),
  ]
})
