// Chi tiết 1 bài: HTML đã render, mục lục, FAQ, bài liên quan
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') || ''
  const post = await getPost(slug)
  if (!post) throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy bài viết' })
  return post
})
