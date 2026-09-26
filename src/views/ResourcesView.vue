<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- HERO -->
    <section class="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden text-center">
      <HeroCanvas :opacity="0.65" :particleCount="52" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span>{{ $t('resources.hero.badge') }}</span>
        </div>

        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          {{ $t('resources.hero.title') }} <span class="text-amber-600">{{ $t('resources.hero.titleHighlight') }}</span>
        </h1>

        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('resources.hero.desc') }}
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#api-docs"
            class="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-sm shadow-md transition-all"
          >
            {{ $t('resources.hero.discover') }}
          </a>
          <router-link
            to="/lien-he"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-sm border border-zinc-200 shadow-sm transition-all"
          >
            {{ $t('resources.hero.consult') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- RESOURCES GRID -->
    <section class="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <!-- 1. API & Webhook -->
        <div id="api-docs" class="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl">
              ⚡
            </div>
            <h3 class="text-xl font-bold text-zinc-900">{{ $t('resources.grid.b1Title') }}</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              {{ $t('resources.grid.b1Desc') }}
            </p>
            <ul class="space-y-2 text-xs text-zinc-600 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b1F1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b1F2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b1F3') }}</li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-zinc-100">
            <a
              :href="$links.docs" target="_blank" rel="noopener"
              class="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              <span>{{ $t('resources.grid.b1Btn') }}</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- 2. Hướng dẫn tích hợp thiết bị -->
        <div class="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl">
              📱
            </div>
            <h3 class="text-xl font-bold text-zinc-900">{{ $t('resources.grid.b2Title') }}</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              {{ $t('resources.grid.b2Desc') }}
            </p>
            <ul class="space-y-2 text-xs text-zinc-600 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b2F1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b2F2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b2F3') }}</li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-zinc-100">
            <router-link :to="$localeRoute('contact')" class="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1">
              <span>{{ $t('resources.grid.b2Btn') }}</span>
              <span>→</span>
            </router-link>
          </div>
        </div>

        <!-- 3. Cẩm nang vận hành -->
        <div class="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl">
              📖
            </div>
            <h3 class="text-xl font-bold text-zinc-900">{{ $t('resources.grid.b3Title') }}</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              {{ $t('resources.grid.b3Desc') }}
            </p>
            <ul class="space-y-2 text-xs text-zinc-600 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b3F1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b3F2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('resources.grid.b3F3') }}</li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-zinc-100">
            <button 
              @click="$emit('open-modal', { type: 'demo', moduleName: 'Cẩm nang Logistics eCor' })"
              class="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              <span>{{ $t('resources.grid.b3Btn') }}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion -->
      <div class="mt-20 max-w-4xl mx-auto text-left">
        <h3 class="text-2xl font-extrabold text-zinc-900 text-center mb-8">{{ $t('resources.faq.title') }}</h3>
        <div class="space-y-3">
          <div class="p-5 rounded-2xl bg-white border border-zinc-200">
            <h4 class="font-bold text-sm text-zinc-900">{{ $t('resources.faq.q1') }}</h4>
            <p class="mt-2 text-xs text-zinc-600 leading-relaxed">{{ $t('resources.faq.a1') }}</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-zinc-200">
            <h4 class="font-bold text-sm text-zinc-900">{{ $t('resources.faq.q2') }}</h4>
            <p class="mt-2 text-xs text-zinc-600 leading-relaxed">{{ $t('resources.faq.a2') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroCanvas from '@/components/HeroCanvas.vue'
import { useI18n } from 'vue-i18n'

defineEmits(['open-modal'])

const { t } = useI18n()
</script>
