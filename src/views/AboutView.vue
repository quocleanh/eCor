<template>
  <div class="bg-zinc-50 min-h-screen py-16 md:py-24 relative overflow-hidden">
    <HeroCanvas :opacity="0.65" :particleCount="52" />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- HERO -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          {{ $t('about.hero.badge') }}
        </div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
          {{ $t('about.hero.title') }} <span class="gradient-text">{{ $t('about.hero.titleHighlight') }}</span>
        </h1>
        <p class="text-zinc-600 mt-4 text-base sm:text-lg leading-relaxed">
          {{ $t('about.hero.desc') }}
        </p>
      </div>

      <!-- SỐ LIỆU CHỨNG MINH (E-E-A-T) -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div class="bg-white p-6 rounded-3xl border border-zinc-200/90 text-center shadow-sm hover-lift">
          <div class="text-4xl font-extrabold text-amber-600">10,000+</div>
          <div class="text-sm font-semibold text-zinc-800 mt-1">{{ $t('about.metrics.m1.title') }}</div>
          <p class="text-xs text-zinc-500 mt-1">{{ $t('about.metrics.m1.desc') }}</p>
        </div>
        <div class="bg-white p-6 rounded-3xl border border-zinc-200/90 text-center shadow-sm hover-lift">
          <div class="text-4xl font-extrabold text-amber-600">99.98%</div>
          <div class="text-sm font-semibold text-zinc-800 mt-1">{{ $t('about.metrics.m2.title') }}</div>
          <p class="text-xs text-zinc-500 mt-1">{{ $t('about.metrics.m2.desc') }}</p>
        </div>
        <div class="bg-white p-6 rounded-3xl border border-zinc-200/90 text-center shadow-sm hover-lift">
          <div class="text-4xl font-extrabold text-amber-600">5+ Năm</div>
          <div class="text-sm font-semibold text-zinc-800 mt-1">{{ $t('about.metrics.m3.title') }}</div>
          <p class="text-xs text-zinc-500 mt-1">{{ $t('about.metrics.m3.desc') }}</p>
        </div>
        <div class="bg-white p-6 rounded-3xl border border-zinc-200/90 text-center shadow-sm hover-lift">
          <div class="text-4xl font-extrabold text-amber-600">24/7</div>
          <div class="text-sm font-semibold text-zinc-800 mt-1">{{ $t('about.metrics.m4.title') }}</div>
          <p class="text-xs text-zinc-500 mt-1">{{ $t('about.metrics.m4.desc') }}</p>
        </div>
      </div>

      <!-- SỨ MỆNH & BẢO MẬT DỮ LIỆU -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div class="space-y-6">
          <h2 class="text-2xl sm:text-3xl font-bold text-zinc-900">
            {{ $t('about.philosophy.title') }}
          </h2>
          <p class="text-zinc-600 text-sm sm:text-base leading-relaxed">
            {{ $t('about.philosophy.desc') }}
          </p>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold flex-shrink-0">✓</span>
              <div>
                <strong class="text-zinc-900">{{ $t('about.philosophy.f1Title') }}</strong> {{ $t('about.philosophy.f1Desc') }}
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold flex-shrink-0">✓</span>
              <div>
                <strong class="text-zinc-900">{{ $t('about.philosophy.f2Title') }}</strong> {{ $t('about.philosophy.f2Desc') }}
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold flex-shrink-0">✓</span>
              <div>
                <strong class="text-zinc-900">{{ $t('about.philosophy.f3Title') }}</strong> {{ $t('about.philosophy.f3Desc') }}
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-zinc-900 to-amber-950 rounded-3xl p-8 text-white shadow-xl space-y-6">
          <h3 class="text-xl font-bold text-amber-400">{{ $t('about.security.title') }}</h3>
          <p class="text-zinc-300 text-sm leading-relaxed">
            {{ $t('about.security.desc') }}
          </p>
          <ul class="space-y-3 text-xs text-zinc-300">
            <li class="flex items-center gap-2.5">
              <span class="text-amber-400 font-bold text-sm">🛡️</span>
              <span>{{ $t('about.security.f1') }}</span>
            </li>
            <li class="flex items-center gap-2.5">
              <span class="text-amber-400 font-bold text-sm">🛡️</span>
              <span>{{ $t('about.security.f2') }}</span>
            </li>
            <li class="flex items-center gap-2.5">
              <span class="text-amber-400 font-bold text-sm">🛡️</span>
              <span>{{ $t('about.security.f3') }}</span>
            </li>
          </ul>
          <div class="pt-2">
            <router-link :to="$localeRoute('contact')" class="inline-block bg-white text-zinc-900 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors">
              {{ $t('about.security.btn') }}
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import HeroCanvas from '@/components/HeroCanvas.vue'
const { t } = useI18n()
</script>
