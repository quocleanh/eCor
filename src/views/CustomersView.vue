<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      <HeroCanvas :opacity="0.65" :particleCount="52" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span>{{ $t('customers.hero.badge') }}</span>
        </div>

        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          {{ $t('customers.hero.title') }} <span class="text-amber-600">{{ $t('customers.hero.titleHighlight') }}</span>
        </h1>

        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('customers.hero.desc') }}
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cases"
            class="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md transition-all"
          >
            {{ $t('customers.hero.discover') }}
          </a>
          <button
            @click="$emit('open-modal', { type: 'demo', moduleName: 'Khách Hàng eCor' })"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm transition-all"
          >
            {{ $t('customers.hero.consult') }}
          </button>
        </div>
      </div>
    </section>

    <!-- 2. FOUR METRICS -->
    <section class="py-12 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">450+</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('customers.metrics.m1.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('customers.metrics.m1.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">1,200,000+</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('customers.metrics.m2.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('customers.metrics.m2.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">99.98%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('customers.metrics.m3.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('customers.metrics.m3.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">35% – 60%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('customers.metrics.m4.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('customers.metrics.m4.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. CASE STUDIES FILTER & CARDS -->
    <section id="cases" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between gap-4 pb-8">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('customers.cases.badge') }}</span>
          <h2 class="text-3xl font-extrabold text-zinc-900 mt-1">{{ $t('customers.cases.title') }}</h2>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap gap-2 text-xs font-bold">
          <button 
            @click="filter = 'all'" 
            class="px-4 py-2 rounded-full transition-all"
            :class="filter === 'all' ? 'bg-amber-400 text-zinc-900 font-bold shadow' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'"
          >
            {{ $t('customers.cases.filterAll') }}
          </button>
          <button 
            @click="filter = 'retail'" 
            class="px-4 py-2 rounded-full transition-all"
            :class="filter === 'retail' ? 'bg-amber-400 text-zinc-900 font-bold shadow' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'"
          >
            {{ $t('customers.cases.filterRetail') }}
          </button>
          <button 
            @click="filter = 'cold'" 
            class="px-4 py-2 rounded-full transition-all"
            :class="filter === 'cold' ? 'bg-amber-400 text-zinc-900 font-bold shadow' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'"
          >
            {{ $t('customers.cases.filterCold') }}
          </button>
          <button 
            @click="filter = '3pl'" 
            class="px-4 py-2 rounded-full transition-all"
            :class="filter === '3pl' ? 'bg-amber-400 text-zinc-900 font-bold shadow' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'"
          >
            {{ $t('customers.cases.filter3PL') }}
          </button>
        </div>
      </div>

      <div class="space-y-12 text-left">
        <!-- CASE 1: Y-STYLE -->
        <div 
          v-if="filter === 'all' || filter === 'retail'"
          class="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div class="lg:col-span-6 space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('customers.cases.c1.tag') }}</span>
              <span class="text-xs text-zinc-400 font-mono">{{ $t('customers.cases.c1.code') }}</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">{{ $t('customers.cases.c1.title') }}</h3>
            <p class="text-xs text-zinc-500 font-medium">{{ $t('customers.cases.c1.infra') }}</p>

            <div class="space-y-2 text-xs pt-1">
              <div class="p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                <strong class="text-amber-600 block">⚠️ {{ $t('customers.cases.c1.challengeLabel') }}</strong>
                <span class="text-zinc-600">{{ $t('customers.cases.c1.challengeDesc') }}</span>
              </div>
              <div class="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                <strong class="text-amber-700 block">✓ {{ $t('customers.cases.c1.solutionLabel') }}</strong>
                <span class="text-zinc-600">{{ $t('customers.cases.c1.solutionDesc') }}</span>
              </div>
            </div>

            <div class="p-3 bg-zinc-50 rounded-xl border-l-4 border-amber-600 text-xs italic text-zinc-600">
              {{ $t('customers.cases.c1.quote') }}
              <div class="not-italic font-bold text-zinc-800 mt-2 text-[11px]">
                {{ $t('customers.cases.c1.author') }}
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-100 text-center">
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c1.r1Title') }}</span>
                <strong class="text-sm font-black text-amber-700">{{ $t('customers.cases.c1.r1Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c1.r1Desc') }}</span>
              </div>
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c1.r2Title') }}</span>
                <strong class="text-sm font-black text-amber-600">{{ $t('customers.cases.c1.r2Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c1.r2Desc') }}</span>
              </div>
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c1.r3Title') }}</span>
                <strong class="text-sm font-black text-amber-600">{{ $t('customers.cases.c1.r3Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c1.r3Desc') }}</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
              <img src="/images/assets/customer-ystyle.png" alt="Y-Style Case Study" class="w-full h-72 sm:h-80 object-cover" />
              <div class="p-3 bg-white flex justify-between text-xs text-zinc-600 font-medium">
                <span>{{ $t('customers.cases.c1.imgNote1') }}</span>
                <span class="text-amber-600 font-bold">{{ $t('customers.cases.c1.imgNote2') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CASE 2: GREENFARM -->
        <div 
          v-if="filter === 'all' || filter === 'cold'"
          class="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div class="lg:col-span-6 space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('customers.cases.c2.tag') }}</span>
              <span class="text-xs text-zinc-400 font-mono">{{ $t('customers.cases.c2.code') }}</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">{{ $t('customers.cases.c2.title') }}</h3>
            <p class="text-xs text-zinc-500 font-medium">{{ $t('customers.cases.c2.infra') }}</p>

            <div class="space-y-2 text-xs pt-1">
              <div class="p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                <strong class="text-amber-600 block">⚠️ Thách thức ban đầu:</strong>
                <span class="text-zinc-600">{{ $t('customers.cases.c2.challengeDesc') }}</span>
              </div>
              <div class="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                <strong class="text-amber-700 block">✓ Giải pháp từ ecor:</strong>
                <span class="text-zinc-600">{{ $t('customers.cases.c2.solutionDesc') }}</span>
              </div>
            </div>

            <div class="p-3 bg-zinc-50 rounded-xl border-l-4 border-amber-600 text-xs italic text-zinc-600">
              {{ $t('customers.cases.c2.quote') }}
              <div class="not-italic font-bold text-zinc-800 mt-2 text-[11px]">
                {{ $t('customers.cases.c2.author') }}
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-100 text-center">
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c2.r1Title') }}</span>
                <strong class="text-sm font-black text-amber-600">{{ $t('customers.cases.c2.r1Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c2.r1Desc') }}</span>
              </div>
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c2.r2Title') }}</span>
                <strong class="text-sm font-black text-amber-700">{{ $t('customers.cases.c2.r2Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c2.r2Desc') }}</span>
              </div>
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c2.r3Title') }}</span>
                <strong class="text-sm font-black text-amber-600">{{ $t('customers.cases.c2.r3Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c2.r3Desc') }}</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
              <img src="/images/assets/customer-greenfarm.png" alt="GreenFarm Case Study" class="w-full h-72 sm:h-80 object-cover" />
              <div class="p-3 bg-white flex justify-between text-xs text-zinc-600 font-medium">
                <span>{{ $t('customers.cases.c2.imgNote1') }}</span>
                <span class="text-amber-700 font-bold">{{ $t('customers.cases.c2.imgNote2') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CASE 3: VINALOGISTICS -->
        <div 
          v-if="filter === 'all' || filter === '3pl'"
          class="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div class="lg:col-span-6 space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('customers.cases.c3.tag') }}</span>
              <span class="text-xs text-zinc-400 font-mono">{{ $t('customers.cases.c3.code') }}</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">{{ $t('customers.cases.c3.title') }}</h3>
            <p class="text-xs text-zinc-500 font-medium">{{ $t('customers.cases.c3.infra') }}</p>

            <div class="space-y-2 text-xs pt-1">
              <div class="p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                <strong class="text-amber-600 block">⚠️ Thách thức ban đầu:</strong>
                <span class="text-zinc-600">{{ $t('customers.cases.c3.challengeDesc') }}</span>
              </div>
              <div class="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                <strong class="text-amber-700 block">✓ Giải pháp từ ecor:</strong>
                <span class="text-zinc-600">{{ $t('customers.cases.c3.solutionDesc') }}</span>
              </div>
            </div>

            <div class="p-3 bg-zinc-50 rounded-xl border-l-4 border-amber-600 text-xs italic text-zinc-600">
              {{ $t('customers.cases.c3.quote') }}
              <div class="not-italic font-bold text-zinc-800 mt-2 text-[11px]">
                {{ $t('customers.cases.c3.author') }}
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-100 text-center">
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c3.r1Title') }}</span>
                <strong class="text-sm font-black text-amber-700">{{ $t('customers.cases.c3.r1Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c3.r1Desc') }}</span>
              </div>
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c3.r2Title') }}</span>
                <strong class="text-sm font-black text-amber-700">{{ $t('customers.cases.c3.r2Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c3.r2Desc') }}</span>
              </div>
              <div class="p-2 bg-zinc-50 rounded-lg">
                <span class="text-[10px] text-zinc-400 block uppercase">{{ $t('customers.cases.c3.r3Title') }}</span>
                <strong class="text-sm font-black text-amber-600">{{ $t('customers.cases.c3.r3Val') }}</strong>
                <span class="text-[10px] text-zinc-500 block">{{ $t('customers.cases.c3.r3Desc') }}</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
              <img src="/images/assets/customer-vinalogistics.png" alt="{{ $t('customers.partners.p3Name') }} Case Study" class="w-full h-72 sm:h-80 object-cover" />
              <div class="p-3 bg-white flex justify-between text-xs text-zinc-600 font-medium">
                <span>{{ $t('customers.cases.c3.imgNote1') }}</span>
                <span class="text-amber-700 font-bold">{{ $t('customers.cases.c3.imgNote2') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. VIDEO PHỎNG VẤN HIỆN TRƯỜNG -->
    <section class="py-20 bg-zinc-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 space-y-4 text-left">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400">{{ $t('customers.video.badge') }}</span>
            <h3 class="text-3xl font-extrabold tracking-tight">
              {{ $t('customers.video.title') }}
            </h3>
            <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {{ $t('customers.video.desc') }}
            </p>
            <div class="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-2 font-medium">
              <div>✓ {{ $t('customers.video.f1') }}</div>
              <div>✓ {{ $t('customers.video.f2') }}</div>
              <div>✓ {{ $t('customers.video.f3') }}</div>
              <div>✓ {{ $t('customers.video.f4') }}</div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="relative rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl group">
              <img src="/images/assets/video-megahub.png" alt="Mega Hub ecor WMS & AGV Robot" class="w-full h-72 sm:h-96 object-cover" />
              <div class="absolute inset-0 bg-zinc-950/40 flex items-center justify-center group-hover:bg-zinc-950/20 transition-all cursor-pointer">
                <div class="w-16 h-16 rounded-full bg-amber-400 text-zinc-900 font-bold flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div class="absolute bottom-3 left-4 right-4 flex justify-between text-xs text-zinc-300 bg-zinc-950/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span>{{ $t('customers.video.duration') }}</span>
                <span>{{ $t('customers.video.quality') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. MẠNG LƯỚI ĐỐI TÁC HÀNG ĐẦU -->
    <section class="py-16 bg-white border-t border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-zinc-400">{{ $t('customers.partners.badge') }}</span>
        <h3 class="mt-1 text-2xl font-extrabold text-zinc-900">{{ $t('customers.partners.title') }}</h3>

        <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
          <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
            <div class="font-bold text-zinc-800 text-sm">{{ $t('customers.partners.p1Name') }}</div>
            <div class="text-[10px] text-zinc-400 mt-0.5">{{ $t('customers.partners.p1Desc') }}</div>
          </div>
          <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
            <div class="font-bold text-zinc-800 text-sm">{{ $t('customers.partners.p2Name') }}</div>
            <div class="text-[10px] text-zinc-400 mt-0.5">{{ $t('customers.partners.p2Desc') }}</div>
          </div>
          <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
            <div class="font-bold text-zinc-800 text-sm">VinaLogistics</div>
            <div class="text-[10px] text-zinc-400 mt-0.5">{{ $t('customers.partners.p3Desc') }}</div>
          </div>
          <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
            <div class="font-bold text-zinc-800 text-sm">{{ $t('customers.partners.p4Name') }}</div>
            <div class="text-[10px] text-zinc-400 mt-0.5">{{ $t('customers.partners.p4Desc') }}</div>
          </div>
          <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
            <div class="font-bold text-zinc-800 text-sm">{{ $t('customers.partners.p5Name') }}</div>
            <div class="text-[10px] text-zinc-400 mt-0.5">{{ $t('customers.partners.p5Desc') }}</div>
          </div>
          <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
            <div class="font-bold text-zinc-800 text-sm">{{ $t('customers.partners.p6Name') }}</div>
            <div class="text-[10px] text-zinc-400 mt-0.5">{{ $t('customers.partners.p6Desc') }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroCanvas from '@/components/HeroCanvas.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineEmits(['open-modal'])

const { t } = useI18n()
const filter = ref('all')
</script>
