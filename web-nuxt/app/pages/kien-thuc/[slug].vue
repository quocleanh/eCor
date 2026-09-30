<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <article v-if="post" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <!-- Breadcrumb -->
      <nav class="text-xs text-zinc-500 flex items-center flex-wrap gap-1" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-amber-600">Trang chủ</NuxtLink>
        <span class="mx-1">/</span>
        <NuxtLink to="/kien-thuc" class="hover:text-amber-600">Kiến thức</NuxtLink>
        <span class="mx-1">/</span>
        <span class="text-zinc-700 truncate max-w-[16rem]">{{ post.pillar }}</span>
      </nav>

      <header class="mt-5 max-w-3xl">
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center px-3 py-1 rounded-full bg-amber-400 text-zinc-900 text-[11px] font-bold uppercase tracking-wide shadow-sm">
            {{ post.pillar }}
          </span>
        </div>
        <h1 class="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-zinc-900 tracking-tight leading-[1.2]">
          {{ post.title }}
        </h1>
        <p v-if="post.meta_description" class="mt-4 text-lg text-zinc-600 leading-relaxed">{{ post.meta_description }}</p>

        <div class="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-200">
          <div class="text-sm text-zinc-500">
            Đội ngũ eCor · <time :datetime="post.published_at">{{ fmtDate(post.published_at) }}</time> · {{ post.reading_minutes }} phút đọc
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button" title="Sao chép liên kết"
              class="px-3 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              @click="copyLink"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" /></svg>
              <span class="hidden sm:inline">{{ copied ? 'Đã sao chép' : 'Sao chép link' }}</span>
            </button>
            <a
              :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`"
              target="_blank" rel="noopener" title="Chia sẻ Facebook"
              class="p-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path></svg>
            </a>
            <button
              type="button" title="Lưu đọc lại (lưu trên trình duyệt này)"
              class="px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              :class="isSaved ? 'bg-amber-100 text-amber-700' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'"
              @click="toggle"
            >
              <svg class="w-4 h-4" :fill="isSaved ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z" /></svg>
              <span class="hidden sm:inline">{{ isSaved ? 'Đã lưu' : 'Lưu đọc lại' }}</span>
            </button>
          </div>
        </div>
      </header>

      <figure v-if="post.image_url" class="mt-8 max-w-4xl">
        <img :src="post.image_url" :alt="post.image_alt || post.title" width="1536" height="1024"
          class="w-full rounded-3xl border border-zinc-200 shadow-sm" loading="eager" fetchpriority="high">
      </figure>

      <div class="mt-10 grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12">
        <!-- Nội dung -->
        <div class="min-w-0">
          <div class="ecor-prose max-w-3xl" v-html="post.html" />

          <!-- Tag chủ đề -->
          <div v-if="post.keywords && post.keywords.length" class="mt-10 pt-6 border-t border-zinc-200 max-w-3xl flex flex-wrap items-center gap-2">
            <span class="text-xs text-zinc-500 font-medium mr-1">Chủ đề:</span>
            <NuxtLink
              v-for="kw in post.keywords" :key="kw"
              :to="`/kien-thuc?q=${encodeURIComponent(kw)}`"
              class="px-3 py-1 rounded-full bg-zinc-100 hover:bg-amber-100 hover:text-amber-700 text-xs font-medium text-zinc-600 transition-colors"
            >
              #{{ kw }}
            </NuxtLink>
          </div>

          <!-- CTA sản phẩm liên quan -->
          <aside class="mt-8 max-w-3xl rounded-3xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
            <div class="text-sm font-semibold text-amber-800">{{ productCta.eyebrow }}</div>
            <p class="mt-2 text-sm text-zinc-700 leading-relaxed">{{ productCta.desc }}</p>
            <NuxtLink :to="productCta.href" class="mt-4 inline-flex items-center gap-1 text-sm font-bold text-amber-700 hover:text-amber-800">
              {{ productCta.label }} <span>→</span>
            </NuxtLink>
          </aside>

          <!-- Bài trước / sau -->
          <div v-if="post.prevPost || post.nextPost" class="mt-10 pt-8 border-t border-zinc-200 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NuxtLink
              v-if="post.prevPost" :to="`/kien-thuc/${post.prevPost.slug}`"
              class="p-4 rounded-2xl bg-white border border-zinc-200 hover:border-amber-300 shadow-sm transition-all flex flex-col gap-1 group"
            >
              <span class="text-[11px] font-semibold text-zinc-400 uppercase tracking-wide">← Bài trước</span>
              <span class="text-sm font-bold text-zinc-900 group-hover:text-amber-700 line-clamp-2">{{ post.prevPost.title }}</span>
            </NuxtLink>
            <NuxtLink
              v-if="post.nextPost" :to="`/kien-thuc/${post.nextPost.slug}`"
              class="p-4 rounded-2xl bg-white border border-zinc-200 hover:border-amber-300 shadow-sm transition-all flex flex-col gap-1 text-right group sm:col-start-2"
            >
              <span class="text-[11px] font-semibold text-zinc-400 uppercase tracking-wide">Bài sau →</span>
              <span class="text-sm font-bold text-zinc-900 group-hover:text-amber-700 line-clamp-2">{{ post.nextPost.title }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="flex flex-col gap-6 lg:sticky lg:top-24 self-start">
          <!-- Mục lục -->
          <div v-if="post.toc.length > 2" class="rounded-2xl border border-zinc-200 bg-white p-5">
            <div class="text-xs font-bold uppercase tracking-wide text-zinc-500">Trong bài này</div>
            <ol class="mt-3 space-y-2 text-sm border-l border-zinc-200">
              <li v-for="h in post.toc" :key="h.id">
                <a :href="`#${h.id}`" class="block -ml-px pl-3 border-l border-transparent text-zinc-600 hover:text-amber-700 hover:border-amber-400 leading-snug">
                  {{ h.text }}
                </a>
              </li>
            </ol>
          </div>

          <!-- Bài liên quan -->
          <div v-if="post.related.length" class="rounded-2xl border border-zinc-200 bg-white p-5">
            <div class="text-xs font-bold uppercase tracking-wide text-zinc-500 pb-3 border-b border-zinc-100">Bài viết cùng chủ đề</div>
            <div class="mt-4 flex flex-col gap-4">
              <NuxtLink v-for="r in post.related" :key="r.slug" :to="`/kien-thuc/${r.slug}`" class="group flex flex-col gap-0.5">
                <span class="text-sm font-bold text-zinc-900 group-hover:text-amber-700 leading-snug line-clamp-2">{{ r.title }}</span>
                <span class="text-xs text-zinc-500">{{ r.reading_minutes }} phút đọc</span>
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>

      <!-- Bài liên quan (lưới) -->
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
import { useReadingList } from '@/composables/useReadingList'

const route = useRoute()
const slug = String(route.params.slug || '')
const { data: post, error } = await useFetch(`/api/kien-thuc/${slug}`)
if (error.value || !post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy bài viết', fatal: true })
}

const p = post.value
const canonicalUrl = `https://ecor.vn/kien-thuc/${p.slug}`
const fmtDate = d => new Date(d).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })

const { isSaved, toggle } = useReadingList(p.slug)

const copied = ref(false)
async function copyLink() {
  try {
    await navigator.clipboard.writeText(canonicalUrl)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Trình duyệt chặn Clipboard API — im lặng bỏ qua, không chặn trải nghiệm
  }
}

// Gợi ý module phù hợp theo nhóm chủ đề (pillar) của bài viết
const productCta = computed(() => {
  const pillar = (p.pillar || '').toLowerCase()
  if (/vận tải|giao hàng|xe|tuyến/.test(pillar)) {
    return { eyebrow: 'Khi đội xe bắt đầu khó điều phối', href: '/tms', label: 'Tìm hiểu eCor TMS',
      desc: 'eCor TMS điều phối và giám sát đội xe theo thời gian thực, tối ưu lộ trình giao hàng — kết nối trực tiếp với kho và bán hàng.' }
  }
  if (/bán hàng|pos|đa kênh/.test(pillar)) {
    return { eyebrow: 'Khi quầy bán và kho chưa khớp dữ liệu', href: '/pos', label: 'Tìm hiểu eCor POS',
      desc: 'eCor POS bán hàng tại quầy và đa kênh, đồng bộ tồn kho tức thời với kho vận — không còn bán chồng, xuất nhầm.' }
  }
  if (/kế toán|cod|hóa đơn/.test(pillar)) {
    return { eyebrow: 'Khi đối soát COD tốn quá nhiều thời gian', href: '/ke-toan', label: 'Tìm hiểu eCor Account',
      desc: 'eCor Account tự động hạch toán, đối soát COD và xuất hóa đơn điện tử — kết nối trực tiếp dữ liệu từ kho và bán hàng.' }
  }
  return { eyebrow: 'Khi kho bắt đầu vượt sức sổ sách', href: '/wms', label: 'Tìm hiểu eCor WMS',
    desc: 'eCor WMS quản lý kho theo vị trí và hạn dùng, kết nối trực tiếp với bán hàng (POS) và kế toán — để tồn kho luôn khớp giữa quầy, kho và kênh online.' }
})

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
    { '@type': 'ListItem', position: 3, name: p.title, item: canonicalUrl },
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
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
