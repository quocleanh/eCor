<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- HERO -->
    <section class="relative pt-12 pb-10 lg:pt-16 lg:pb-12 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="text-xs text-zinc-500" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-amber-600">Trang chủ</NuxtLink>
          <span class="mx-1.5">/</span>
          <span class="text-zinc-700">Kiến thức</span>
        </nav>
        <div class="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Trung tâm kiến thức &amp; kinh nghiệm thực chiến
        </div>
        <h1 class="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-3xl">
          Làm kho gọn, đúng, ít thất thoát — <span class="text-amber-600">kinh nghiệm dùng được ngay</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
          Quy trình nhập, xuất, kiểm kê và sắp xếp kho cho cửa hàng và doanh nghiệp nhỏ. Viết cho người làm thực tế,
          áp dụng được với sổ sách hiện có.
        </p>

        <!-- Tìm kiếm -->
        <div class="w-full max-w-2xl mt-8">
          <form class="p-1.5 bg-white rounded-xl shadow-md border border-zinc-100 flex flex-col sm:flex-row items-center gap-2" @submit.prevent="focusResults">
            <div class="flex items-center gap-2 px-2 flex-1 w-full">
              <svg class="w-5 h-5 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 1 1 4 10.5a6.5 6.5 0 0 1 13 0Z" />
              </svg>
              <input
                v-model="search"
                type="text"
                placeholder="Tìm bài viết, quy trình, từ khóa..."
                class="w-full py-2.5 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
              >
            </div>
            <button type="submit" class="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-zinc-900 text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-1.5">
              Tìm kiếm
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </form>
          <div v-if="topKeywords.length" class="flex flex-wrap items-center gap-2 mt-3 text-xs">
            <span class="text-zinc-500">Tìm nhanh:</span>
            <button
              v-for="kw in topKeywords" :key="kw"
              type="button"
              class="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 hover:bg-amber-100 hover:text-amber-700 transition-colors"
              @click="search = kw"
            >
              #{{ kw }}
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- Thanh chủ đề -->
    <section v-if="pillars.length > 1" class="border-y border-zinc-100 bg-white/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 overflow-x-auto py-3" style="scrollbar-width: none;">
          <button
            v-for="p in ['Tất cả', ...pillars]" :key="p" type="button"
            class="px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
            :class="active === p ? 'bg-amber-400 text-zinc-900 shadow-sm' : 'bg-zinc-100 text-zinc-600 hover:bg-amber-100 hover:text-amber-700'"
            @click="active = p; page = 1"
          >
            {{ p }} ({{ p === 'Tất cả' ? posts.length : posts.filter(x => x.pillar === p).length }})
          </button>
        </div>
      </div>
    </section>

    <!-- DANH SÁCH BÀI -->
    <section id="ket-qua" class="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p v-if="!filtered.length" class="text-zinc-500">Không tìm thấy bài viết phù hợp.</p>

      <!-- Bài mới nhất -->
      <NuxtLink
        v-if="featured"
        :to="`/kien-thuc/${featured.slug}`"
        class="group grid md:grid-cols-2 gap-6 lg:gap-10 bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
      >
        <div class="aspect-[3/2] md:aspect-auto overflow-hidden relative" :class="featured.image_url ? 'bg-amber-50' : 'bg-gradient-to-br from-zinc-900 to-zinc-800'">
          <span class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-amber-400 text-zinc-900 text-[11px] font-bold uppercase tracking-wide shadow">
            Mới nhất
          </span>
          <img v-if="featured.image_url" :src="featured.image_url" :alt="featured.image_alt || featured.title"
            class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="eager" width="1536" height="1024">
          <div v-else class="w-full h-full flex flex-col items-center justify-center gap-3 text-amber-400/90">
            <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span class="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">eCor Kiến thức</span>
          </div>
        </div>
        <div class="p-6 lg:p-10 flex flex-col justify-center">
          <div class="text-xs font-semibold text-amber-700">{{ featured.pillar }}</div>
          <h2 class="mt-2 text-2xl lg:text-3xl font-extrabold text-zinc-900 leading-snug group-hover:text-amber-700 transition-colors">
            {{ featured.title }}
          </h2>
          <p class="mt-3 text-sm text-zinc-600 leading-relaxed">{{ featured.meta_description }}</p>
          <div class="mt-5 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-bold text-zinc-900">Đội ngũ eCor</span>
                <span class="text-[11px] text-zinc-500">{{ fmtDate(featured.published_at) }} · {{ featured.reading_minutes }} phút đọc</span>
              </div>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold text-zinc-900 group-hover:text-amber-700">
              Đọc tiếp
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </NuxtLink>

      <div v-if="pageItems.length" class="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-amber-600">Bài viết mới xuất bản</span>
          <h2 class="text-xl font-extrabold text-zinc-900 tracking-tight">Kiến thức thực chiến vận hành kho</h2>
        </div>
        <div class="text-xs text-zinc-500">
          Hiển thị {{ pageItems.length }} / {{ rest.length }} bài viết
        </div>
      </div>

      <div v-if="pageItems.length" class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="p in pageItems" :key="p.slug" :to="`/kien-thuc/${p.slug}`"
          class="group flex flex-col bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          <div class="aspect-[3/2] bg-amber-50 overflow-hidden relative">
            <span class="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 backdrop-blur text-[11px] font-semibold text-amber-700 uppercase">
              {{ p.pillar }}
            </span>
            <img v-if="p.image_url" :src="p.image_url" :alt="p.image_alt || p.title"
              class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" width="1536" height="1024">
            <div v-else class="w-full h-full flex items-center justify-center text-4xl">📦</div>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center gap-2 text-xs text-zinc-500">
              <span>{{ fmtDate(p.published_at) }}</span>
              <span>·</span>
              <span>{{ p.reading_minutes }} phút đọc</span>
            </div>
            <h3 class="mt-2 text-lg font-bold text-zinc-900 leading-snug group-hover:text-amber-700 transition-colors">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-zinc-600 leading-relaxed line-clamp-3">{{ p.meta_description }}</p>
            <div class="mt-auto pt-4 flex items-center justify-between text-xs text-zinc-500">
              <span class="font-medium">Đội ngũ eCor</span>
              <svg class="w-4 h-4 text-zinc-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Phân trang -->
      <div v-if="totalPages > 1" class="mt-10 flex items-center justify-center gap-2">
        <button
          type="button" :disabled="page === 1"
          class="w-10 h-10 rounded-lg bg-white shadow-sm border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          @click="page--"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          v-for="n in totalPages" :key="n" type="button"
          class="w-10 h-10 rounded-lg font-bold text-sm flex items-center justify-center transition-colors"
          :class="n === page ? 'bg-amber-400 text-zinc-900 shadow-sm' : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50'"
          @click="page = n"
        >
          {{ n }}
        </button>
        <button
          type="button" :disabled="page === totalPages"
          class="w-10 h-10 rounded-lg bg-white shadow-sm border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          @click="page++"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>

    <!-- Bản tin hàng tuần -->
    <section class="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <NewsletterSection />
    </section>
  </div>
</template>

<script setup>
import { useEcorSeo } from '@/composables/useEcorSeo'
import { useJsonLd } from '@/composables/useJsonLd'

const route = useRoute()
const { data: posts } = await useFetch('/api/kien-thuc', { default: () => [] })

function focusResults() {
  document.getElementById('ket-qua')?.scrollIntoView({ behavior: 'smooth' })
}

const pillars = computed(() => [...new Set(posts.value.map(p => p.pillar).filter(Boolean))])
const active = ref(typeof route.query.pillar === 'string' && pillars.value.includes(route.query.pillar) ? route.query.pillar : 'Tất cả')
const search = ref(typeof route.query.q === 'string' ? route.query.q : '')
const page = ref(1)
const pageSize = 6

const topKeywords = computed(() => {
  const count = new Map()
  for (const p of posts.value) {
    for (const kw of p.keywords || []) count.set(kw, (count.get(kw) || 0) + 1)
  }
  return [...count.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([kw]) => kw)
})

const byCategory = computed(() => active.value === 'Tất cả' ? posts.value : posts.value.filter(p => p.pillar === active.value))

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return byCategory.value
  return byCategory.value.filter(p =>
    p.title.toLowerCase().includes(q) ||
    (p.meta_description || '').toLowerCase().includes(q) ||
    (p.keywords || []).some(k => k.toLowerCase().includes(q)),
  )
})

const featured = computed(() => (search.value.trim() ? null : filtered.value[0]))
const rest = computed(() => (featured.value ? filtered.value.slice(1) : filtered.value))

const totalPages = computed(() => Math.max(1, Math.ceil(rest.value.length / pageSize)))
const pageItems = computed(() => {
  const start = (page.value - 1) * pageSize
  return rest.value.slice(start, start + pageSize)
})

watch([active, search], () => { page.value = 1 })

const fmtDate = d => new Date(d).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })

useEcorSeo({
  title: 'Kiến thức quản lý kho cho cửa hàng và doanh nghiệp nhỏ | eCor',
  description: 'Quy trình nhập, xuất, kiểm kê, sắp xếp kho và chống thất thoát — kinh nghiệm thực tế cho cửa hàng, thủ kho và doanh nghiệp nhỏ tại Việt Nam.',
  image: '/images/og/og-wms.jpg',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://ecor.vn' },
    { '@type': 'ListItem', position: 2, name: 'Kiến thức', item: 'https://ecor.vn/kien-thuc' },
  ],
})
</script>
