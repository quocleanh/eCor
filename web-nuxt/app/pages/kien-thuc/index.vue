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
          Kiến thức quản lý kho
        </div>
        <h1 class="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-3xl">
          Làm kho gọn, đúng, ít thất thoát — <span class="text-amber-600">kinh nghiệm dùng được ngay</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
          Quy trình nhập, xuất, kiểm kê và sắp xếp kho cho cửa hàng và doanh nghiệp nhỏ. Viết cho người làm thực tế,
          áp dụng được với sổ sách hiện có.
        </p>

        <div v-if="pillars.length > 1" class="mt-8 flex flex-wrap gap-2">
          <button
            v-for="p in ['Tất cả', ...pillars]" :key="p" type="button"
            class="px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors"
            :class="active === p ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-700 border-zinc-200 hover:border-amber-300 hover:text-amber-700'"
            @click="active = p"
          >
            {{ p }}
          </button>
        </div>
      </div>
    </section>

    <!-- DANH SÁCH BÀI -->
    <section class="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p v-if="!shown.length" class="text-zinc-500">Chưa có bài viết.</p>

      <!-- Bài mới nhất -->
      <NuxtLink
        v-if="featured"
        :to="`/kien-thuc/${featured.slug}`"
        class="group grid md:grid-cols-2 gap-6 lg:gap-10 bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
      >
        <div class="aspect-[3/2] md:aspect-auto bg-amber-50 overflow-hidden">
          <img v-if="featured.image_url" :src="featured.image_url" :alt="featured.image_alt || featured.title"
            class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="eager" width="1536" height="1024">
          <div v-else class="w-full h-full flex items-center justify-center text-5xl">📦</div>
        </div>
        <div class="p-6 lg:p-10 flex flex-col justify-center">
          <div class="text-xs font-semibold text-amber-700">{{ featured.pillar }}</div>
          <h2 class="mt-2 text-2xl lg:text-3xl font-extrabold text-zinc-900 leading-snug group-hover:text-amber-700 transition-colors">
            {{ featured.title }}
          </h2>
          <p class="mt-3 text-sm text-zinc-600 leading-relaxed">{{ featured.meta_description }}</p>
          <div class="mt-5 text-xs text-zinc-500">{{ fmtDate(featured.published_at) }} · {{ featured.reading_minutes }} phút đọc</div>
        </div>
      </NuxtLink>

      <div v-if="rest.length" class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="p in rest" :key="p.slug" :to="`/kien-thuc/${p.slug}`"
          class="group flex flex-col bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          <div class="aspect-[3/2] bg-amber-50 overflow-hidden">
            <img v-if="p.image_url" :src="p.image_url" :alt="p.image_alt || p.title"
              class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" width="1536" height="1024">
            <div v-else class="w-full h-full flex items-center justify-center text-4xl">📦</div>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="text-xs font-semibold text-amber-700">{{ p.pillar }}</div>
            <h3 class="mt-2 text-lg font-bold text-zinc-900 leading-snug group-hover:text-amber-700 transition-colors">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-zinc-600 leading-relaxed line-clamp-3">{{ p.meta_description }}</p>
            <div class="mt-auto pt-4 text-xs text-zinc-500">{{ fmtDate(p.published_at) }} · {{ p.reading_minutes }} phút đọc</div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useEcorSeo } from '@/composables/useEcorSeo'
import { useJsonLd } from '@/composables/useJsonLd'

const { data: posts } = await useFetch('/api/kien-thuc', { default: () => [] })

const pillars = computed(() => [...new Set(posts.value.map(p => p.pillar).filter(Boolean))])
const active = ref('Tất cả')
const shown = computed(() => active.value === 'Tất cả' ? posts.value : posts.value.filter(p => p.pillar === active.value))
const featured = computed(() => shown.value[0])
const rest = computed(() => shown.value.slice(1))

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
