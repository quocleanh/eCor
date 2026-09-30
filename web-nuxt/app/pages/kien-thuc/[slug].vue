<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <article v-if="post" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <!-- Breadcrumb -->
      <nav class="text-xs text-zinc-500" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-amber-600">Trang chủ</NuxtLink>
        <span class="mx-1.5">/</span>
        <NuxtLink to="/kien-thuc" class="hover:text-amber-600">Kiến thức</NuxtLink>
        <span class="mx-1.5">/</span>
        <span class="text-zinc-700">{{ post.pillar }}</span>
      </nav>

      <header class="mt-5 max-w-3xl">
        <div class="text-xs font-semibold text-amber-700">{{ post.pillar }}</div>
        <h1 class="mt-2 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-zinc-900 tracking-tight leading-[1.2]">
          {{ post.title }}
        </h1>
        <p v-if="post.meta_description" class="mt-4 text-lg text-zinc-600 leading-relaxed">{{ post.meta_description }}</p>
        <div class="mt-4 text-sm text-zinc-500">
          Đội ngũ eCor · <time :datetime="post.published_at">{{ fmtDate(post.published_at) }}</time> · {{ post.reading_minutes }} phút đọc
        </div>
      </header>

      <figure v-if="post.image_url" class="mt-8 max-w-4xl">
        <img :src="post.image_url" :alt="post.image_alt || post.title" width="1536" height="1024"
          class="w-full rounded-3xl border border-zinc-200 shadow-sm" loading="eager" fetchpriority="high">
      </figure>

      <div class="mt-10 grid lg:grid-cols-[minmax(0,1fr)_260px] gap-12">
        <!-- Nội dung -->
        <div class="min-w-0">
          <div class="ecor-prose max-w-3xl" v-html="post.html" />

          <!-- CTA nhẹ, cuối bài -->
          <aside class="mt-12 max-w-3xl rounded-3xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
            <div class="text-sm font-semibold text-amber-800">Khi kho bắt đầu vượt sức sổ sách</div>
            <p class="mt-2 text-sm text-zinc-700 leading-relaxed">
              eCor WMS quản lý kho theo vị trí và hạn dùng, kết nối trực tiếp với bán hàng (POS) và kế toán — để tồn kho luôn khớp giữa quầy, kho và kênh online.
            </p>
            <NuxtLink to="/wms" class="mt-4 inline-flex items-center gap-1 text-sm font-bold text-amber-700 hover:text-amber-800">
              Tìm hiểu eCor WMS <span>→</span>
            </NuxtLink>
          </aside>
        </div>

        <!-- Mục lục -->
        <aside v-if="post.toc.length > 2" class="hidden lg:block">
          <div class="sticky top-24">
            <div class="text-xs font-bold uppercase tracking-wide text-zinc-500">Trong bài này</div>
            <ol class="mt-3 space-y-2 text-sm border-l border-zinc-200">
              <li v-for="h in post.toc" :key="h.id">
                <a :href="`#${h.id}`" class="block -ml-px pl-3 border-l border-transparent text-zinc-600 hover:text-amber-700 hover:border-amber-400 leading-snug">
                  {{ h.text }}
                </a>
              </li>
            </ol>
          </div>
        </aside>
      </div>

      <!-- Bài liên quan -->
      <section v-if="post.related.length" class="mt-16 pt-10 border-t border-zinc-200">
        <h2 class="text-xl font-bold text-zinc-900">Đọc tiếp</h2>
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="r in post.related" :key="r.slug" :to="`/kien-thuc/${r.slug}`"
            class="group flex flex-col bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div class="aspect-[3/2] bg-amber-50 overflow-hidden">
              <img v-if="r.image_url" :src="r.image_url" :alt="r.image_alt || r.title" class="w-full h-full object-cover" loading="lazy" width="1536" height="1024">
              <div v-else class="w-full h-full flex items-center justify-center text-4xl">📦</div>
            </div>
            <div class="p-5">
              <div class="text-xs font-semibold text-amber-700">{{ r.pillar }}</div>
              <h3 class="mt-1.5 font-bold text-zinc-900 leading-snug group-hover:text-amber-700">{{ r.title }}</h3>
            </div>
          </NuxtLink>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup>
import { useEcorSeo } from '@/composables/useEcorSeo'
import { useJsonLd } from '@/composables/useJsonLd'

const route = useRoute()
const slug = String(route.params.slug || '')
const { data: post, error } = await useFetch(`/api/kien-thuc/${slug}`)
if (error.value || !post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy bài viết', fatal: true })
}

const p = post.value
const url = `https://ecor.vn/kien-thuc/${p.slug}`
const fmtDate = d => new Date(d).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })

const { ogImage } = useEcorSeo({
  title: `${p.title} | eCor`,
  description: p.meta_description || p.title,
  image: p.image_url || '/images/og/og-wms.jpg',
  type: 'article',
})
useSeoMeta({
  articlePublishedTime: p.published_at,
  articleModifiedTime: p.updated_at,
  articleSection: p.pillar || undefined,
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://ecor.vn' },
    { '@type': 'ListItem', position: 2, name: 'Kiến thức', item: 'https://ecor.vn/kien-thuc' },
    { '@type': 'ListItem', position: 3, name: p.title, item: url },
  ],
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: p.title,
  description: p.meta_description || undefined,
  image: [ogImage],
  datePublished: p.published_at,
  dateModified: p.updated_at,
  inLanguage: 'vi-VN',
  articleSection: p.pillar || undefined,
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  author: { '@type': 'Organization', name: 'eCor', url: 'https://ecor.vn' },
  publisher: { '@type': 'Organization', name: 'eCor', logo: { '@type': 'ImageObject', url: 'https://ecor.vn/ecor-logo.png' } },
})

if (p.faq.length) {
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  })
}
</script>
