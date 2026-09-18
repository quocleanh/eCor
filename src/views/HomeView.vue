<template>
  <div class="overflow-hidden bg-[#fafcff]">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-10 pb-20 lg:pt-16 lg:pb-28">
      <!-- Modern Background: Grid + Ambient Radial Glows -->
      <div class="absolute inset-0 -z-10 h-full w-full bg-[#fafcff] bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
      <div class="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_400px_at_100%_200px,#fef3c7,transparent)] opacity-60 blur-3xl pointer-events-none"></div>
      <div class="absolute top-20 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_400px_at_0%_300px,#e0f2fe,transparent)] opacity-50 blur-3xl pointer-events-none"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle_400px_at_50%_0%,#fffbeb,transparent)] opacity-80 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <!-- Left Hero Content -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <!-- Badge -->
            <div
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-semibold text-amber-700 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>{{ $t('home.hero.badge') }}</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
              {{ $t('home.hero.title') }}
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
              {{ $t('home.hero.subtitle') }}
            </p>

            <!-- Action Buttons -->
            <div class="pt-2 flex flex-wrap items-center gap-4">
              <button @click="$emit('open-modal', { type: 'demo', moduleName: 'all' })"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-95">
                <span>{{ $t('home.hero.register') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button @click="$emit('open-modal', { type: 'demo', moduleName: 'all' })"
                class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm hover:shadow transition-all">
                <div class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>{{ $t('home.hero.demo') }}</span>
              </button>
            </div>

            <!-- Social Proof -->
            <div class="pt-4 flex items-center gap-4">
              <div class="flex -space-x-2 overflow-hidden">
                <span
                  class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold">VL</span>
                <span
                  class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold">LOI</span>
                <span
                  class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold">HUB</span>
              </div>
              <p class="text-sm text-zinc-500">
                <strong class="font-bold text-zinc-800">{{ $t('home.hero.proofNum') }}</strong> {{ $t('home.hero.proof')
                }}
              </p>
            </div>
          </div>

          <!-- Right Hero Interactive Diagram (Circular Hub) -->
          <div class="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0">
            <HeroInteractiveCanvas />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. CORE FEATURE PILLARS -->
    <section class="py-16 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('home.core.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('home.core.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('home.core.subtitle') }}
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <!-- {{ $t('home.core.wms.title') }} -->
          <div
            class="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                {{ $t('home.core.wms.title') }}
              </h3>
              <p class="text-sm text-zinc-500 leading-relaxed">
                {{ $t('home.core.wms.desc') }}
              </p>
              <ul class="space-y-2 text-sm text-zinc-600 pt-2">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.wms.f1') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.wms.f2') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.wms.f3') }}</span>
                </li>
              </ul>
            </div>
            <div class="pt-6 mt-6 border-t border-zinc-200/60">
              <router-link :to="$localeRoute('wms')"
                class="text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                <span>{{ $t('home.core.wms.link') }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- {{ $t('home.core.tms.title') }} -->
          <div
            class="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                {{ $t('home.core.tms.title') }}
              </h3>
              <p class="text-sm text-zinc-500 leading-relaxed">
                {{ $t('home.core.tms.desc') }}
              </p>
              <ul class="space-y-2 text-sm text-zinc-600 pt-2">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.tms.f1') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.tms.f2') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.tms.f3') }}</span>
                </li>
              </ul>
            </div>
            <div class="pt-6 mt-6 border-t border-zinc-200/60">
              <router-link :to="$localeRoute('tms')"
                class="text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                <span>{{ $t('home.core.tms.link') }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- {{ $t('home.core.omni.title') }} -->
          <div
            class="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                {{ $t('home.core.omni.title') }}
              </h3>
              <p class="text-sm text-zinc-500 leading-relaxed">
                {{ $t('home.core.omni.desc') }}
              </p>
              <ul class="space-y-2 text-sm text-zinc-600 pt-2">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.omni.f1') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.omni.f2') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{{ $t('home.core.omni.f3') }}</span>
                </li>
              </ul>
            </div>
            <div class="pt-6 mt-6 border-t border-zinc-200/60">
              <router-link :to="$localeRoute('pos')"
                class="text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                <span>{{ $t('home.core.omni.link') }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. EXTENSIONS & ECOSYSTEM -->
    <section class="py-16 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5 space-y-4 text-left">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('home.ecosystem.badge')
            }}</span>
            <h2 class="text-3xl font-extrabold text-zinc-900 tracking-tight">
              {{ $t('home.ecosystem.title') }}
            </h2>
            <p class="text-zinc-600 text-sm leading-relaxed">
              {{ $t('home.ecosystem.desc') }}
            </p>
            <div class="space-y-2 pt-2 text-sm text-zinc-700 font-medium">
              <div class="flex items-center gap-2 text-amber-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-zinc-800">{{ $t('home.ecosystem.f1') }}</span>
              </div>
              <div class="flex items-center gap-2 text-amber-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-zinc-800">{{ $t('home.ecosystem.f2') }}</span>
              </div>
            </div>
          </div>

          <!-- Right 3 Orbiting Extension Bubbles -->
          <div class="lg:col-span-7 flex items-center justify-center sm:justify-end gap-6 sm:gap-8">
            <router-link :to="$localeRoute('pos')" class="flex flex-col items-center group">
              <div
                class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-amber-100/60 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 font-bold transition-all shadow-sm">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('home.ecosystem.item1Title') }}</span>
              <span class="text-[11px] text-zinc-500">{{ $t('home.ecosystem.item1Desc') }}</span>
            </router-link>

            <div class="w-12 h-0.5 bg-zinc-200 hidden sm:block"></div>

            <router-link :to="$localeRoute('pos')" class="flex flex-col items-center group">
              <div
                class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-amber-100/60 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 font-bold transition-all shadow-sm">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('home.ecosystem.item2Title') }}</span>
              <span class="text-[11px] text-zinc-500">{{ $t('home.ecosystem.item2Desc') }}</span>
            </router-link>

            <div class="w-12 h-0.5 bg-zinc-200 hidden sm:block"></div>

            <router-link :to="$localeRoute('solutions')" class="flex flex-col items-center group">
              <div
                class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-amber-100/60 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 font-bold transition-all shadow-sm">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('home.ecosystem.item3Title') }}</span>
              <span class="text-[11px] text-zinc-500">{{ $t('home.ecosystem.item3Desc') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. TRUSTED PARTNERS & INTERACTIVE LIVE SIMULATION TERMINAL -->
    <section class="py-20 bg-white border-t border-zinc-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Partner Logos -->
        <p class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6">
          {{ $t('home.live.trusted') }}
        </p>
        <div
          class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all pb-12">
          <span class="font-extrabold text-lg tracking-wider text-zinc-700">VIETTEL<span
              class="text-red-600">POST</span></span>
          <span class="font-black text-lg tracking-wide text-amber-600">tiki<span
              class="text-amber-500 font-bold">NOW</span></span>
          <span class="font-bold text-lg tracking-wider text-zinc-800">GHN EXPRESS</span>
          <span class="font-extrabold text-lg text-red-600 tracking-wider">J&T <span
              class="text-zinc-800">EXPRESS</span></span>
          <span class="font-extrabold text-lg text-amber-600 tracking-wide">SHOPEE<span
              class="text-zinc-700">EXPRESS</span></span>
        </div>

        <!-- Interactive Module Tabs -->
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          <button v-for="tab in liveTabs" :key="tab.id" @click="activeTab = tab.id"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border"
            :class="activeTab === tab.id ? 'bg-amber-400 text-zinc-900 font-bold border-amber-600 shadow-md' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'">
            <span>{{ tab.icon }}</span>
            <span>{{ tab.label }}</span>
          </button>
        </div>

        <!-- Tab Content Box (Live Simulation Card) -->
        <div
          class="mt-8 max-w-5xl mx-auto bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-10 shadow-xl text-left transition-all">
          <!-- TAB 1: WMS -->
          <div v-if="activeTab === 'wms'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                {{ $t('home.live.wmsTab.badge') }}
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                {{ $t('home.live.wmsTab.title') }}
              </h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                {{ $t('home.live.wmsTab.desc') }}
              </p>

              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">{{ $t('home.live.wmsTab.stat1Label') }}</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">{{ $t('home.live.wmsTab.stat1Val') }}</div>
                  <div class="text-[11px] text-zinc-400">{{ $t('home.live.wmsTab.stat1Sub') }}</div>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">{{ $t('home.live.wmsTab.stat2Label') }}</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">{{ $t('home.live.wmsTab.stat2Val') }}</div>
                  <div class="text-[11px] text-zinc-400">{{ $t('home.live.wmsTab.stat2Sub') }}</div>
                </div>
              </div>

              <ul class="space-y-1.5 text-xs text-zinc-600 pt-2 font-medium">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>{{ $t('home.live.wmsTab.f1') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>{{ $t('home.live.wmsTab.f2') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>{{ $t('home.live.wmsTab.f3') }}</span>
                </li>
              </ul>

              <div class="pt-2">
                <router-link :to="$localeRoute('wms')"
                  class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5">
                  <span>{{ $t('home.live.wmsTab.link') }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>

            <!-- Right Simulation Box -->
            <div class="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 shadow-inner">
              <div class="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span class="font-bold text-zinc-700 ml-1">{{ $t('mockWms.zone') }}</span>
                </div>
                <span class="text-[10px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded">{{ $t('home.live.wmsTab.active') || 'Đang xuất 42 đơn' }}</span>
              </div>

              <!-- Shelf Slots Grid -->
              <div class="grid grid-cols-3 gap-2.5 my-4">
                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">{{ $t('mockWms.rack1') }}</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">{{ $t('mockWms.milk') }}</strong>
                  <span class="text-[10px] text-amber-600 font-bold">{{ $t('mockWms.remain450') }}</span>
                </div>

                <div class="p-3 bg-amber-50 rounded-xl border border-amber-300 text-center shadow-sm">
                  <span class="text-[10px] text-amber-600 block font-mono">{{ $t('mockWms.rack2') }}</span>
                  <strong class="text-xs text-amber-900 font-bold block mt-0.5">{{ $t('mockWms.bread') }}</strong>
                  <span class="text-[10px] text-amber-700 font-semibold">{{ $t('mockWms.picking28') }}</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">{{ $t('mockWms.rack3') }}</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">{{ $t('mockWms.energy') }}</strong>
                  <span class="text-[10px] text-amber-600 font-bold">{{ $t('mockWms.low12') }}</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">{{ $t('mockWms.rack4') }}</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">{{ $t('mockWms.rice') }}</strong>
                  <span class="text-[10px] text-amber-600 font-bold">{{ $t('mockWms.remain320') }}</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">{{ $t('mockWms.rack5') }}</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">{{ $t('mockWms.oil') }}</strong>
                  <span class="text-[10px] text-amber-600 font-bold">{{ $t('mockWms.remain180') }}</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">{{ $t('mockWms.rack6') }}</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">{{ $t('mockWms.seasoning') }}</strong>
                  <span class="text-[10px] text-amber-600 font-bold">{{ $t('mockWms.remain610') }}</span>
                </div>
              </div>

              <div
                class="p-2.5 rounded-lg bg-amber-100/60 text-amber-800 text-xs flex items-center justify-between font-medium">
                <span class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                  {{ $t('mockWms.route') }}
                </span>
                <span class="font-mono text-[11px] text-zinc-600">{{ $t('mockWms.bin') }}</span>
              </div>
            </div>
          </div>

          <!-- TAB 2: TMS -->
          <div v-else-if="activeTab === 'tms'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                {{ $t('home.live.tmsTab.badge') }}
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                {{ $t('home.live.tmsTab.title') }}
              </h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                {{ $t('home.live.tmsTab.desc') }}
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">{{ $t('home.live.tmsTab.stat1Label') }}</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">{{ $t('home.live.tmsTab.stat1Val') }}</div>
                  <div class="text-[11px] text-zinc-400">{{ $t('home.live.tmsTab.stat1Sub') }}</div>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">{{ $t('home.live.tmsTab.stat2Label') }}</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">{{ $t('home.live.tmsTab.stat2Val') }}</div>
                  <div class="text-[11px] text-zinc-400">{{ $t('home.live.tmsTab.stat2Sub') }}</div>
                </div>
              </div>
              <div class="pt-2">
                <router-link :to="$localeRoute('tms')"
                  class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5">
                  <span>{{ $t('home.live.tmsTab.link') }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>

            <div class="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 shadow-inner">
              <div class="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs">
                <span class="font-bold text-zinc-800">{{ $t('mockTms.hub') }}</span>
                <span class="text-amber-600 font-bold bg-amber-100 px-2 py-0.5 rounded">{{ $t('mockTms.gpsActive') }}</span>
              </div>
              <div class="space-y-3 my-4">
                <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                  <div>
                    <strong class="text-zinc-800">{{ $t('mockTms.truck') }}</strong>
                    <div class="text-zinc-500 text-[11px]">{{ $t('mockTms.driver') }}</div>
                  </div>
                  <div class="text-right">
                    <span class="text-amber-600 font-bold">{{ $t('mockTms.delivering') }}</span>
                    <div class="text-[10px] text-zinc-400">{{ $t('mockTms.load') }}</div>
                  </div>
                </div>
                <div
                  class="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
                  <div>
                    <strong class="text-amber-900">{{ $t('mockTms.epod') }}</strong>
                    <div class="text-amber-700 text-[11px]">{{ $t('mockTms.signedBy') }}</div>
                  </div>
                  <span class="text-xs font-bold text-amber-600 bg-white px-2 py-1 rounded shadow-sm">{{ $t('mockTms.signed') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 3: OMNICHANNEL -->
          <div v-else-if="activeTab === 'omni'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                {{ $t('home.live.omniTab.badge') }}
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                {{ $t('home.live.omniTab.title') }}
              </h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                {{ $t('home.live.omniTab.desc') }}
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">{{ $t('home.live.omniTab.stat1Label') }}</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">&lt; 0.12s</div>
                  <div class="text-[11px] text-zinc-400">{{ $t('home.live.omniTab.stat1Sub') }}</div>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">{{ $t('home.live.omniTab.stat2Label') }}</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">{{ $t('home.live.omniTab.stat2Val') }}</div>
                  <div class="text-[11px] text-zinc-400">{{ $t('home.live.omniTab.stat2Sub') }}</div>
                </div>
              </div>
              <div class="pt-2">
                <router-link :to="$localeRoute('pos')"
                  class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5">
                  <span>{{ $t('home.live.omniTab.link') }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>

            <div class="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 shadow-inner">
              <div class="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs">
                <span class="font-bold text-zinc-800">{{ $t('mockOmni.sync') }}</span>
                <span class="text-amber-600 font-bold bg-amber-100 px-2 py-0.5 rounded">{{ $t('mockOmni.mega') }}</span>
              </div>
              <div class="space-y-3 my-4">
                <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2.5">
                    <span
                      class="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 font-black flex items-center justify-center">S</span>
                    <div>
                      <strong class="text-zinc-800">{{ $t('mockOmni.sp') }}</strong>
                      <div class="text-zinc-400 text-[11px]">{{ $t('mockOmni.spOrder') }}</div>
                    </div>
                  </div>
                  <span class="text-amber-600 font-bold text-[11px]">{{ $t('mockOmni.spStat') }}</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2.5">
                    <span
                      class="w-7 h-7 rounded-lg bg-zinc-900 text-white font-black flex items-center justify-center">TT</span>
                    <div>
                      <strong class="text-zinc-800">{{ $t('mockOmni.tt') }}</strong>
                      <div class="text-zinc-400 text-[11px]">{{ $t('mockOmni.ttOrder') }}</div>
                    </div>
                  </div>
                  <span class="text-amber-600 font-bold text-[11px]">{{ $t('mockOmni.ttStat') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 4: POS & ACCOUNTING -->
          <div v-else-if="activeTab === 'pos'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                {{ $t('home.live.posTab.badge') }}
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                {{ $t('home.live.posTab.title') }}
              </h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                {{ $t('home.live.posTab.desc') }}
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">{{ $t('home.live.posTab.stat1Label') }}</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">{{ $t('home.live.posTab.stat1Val') }}</div>
                  <div class="text-[11px] text-zinc-400">{{ $t('home.live.posTab.stat1Sub') }}</div>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">{{ $t('home.live.posTab.stat2Label') }}</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">{{ $t('home.live.posTab.stat2Val') }}</div>
                  <div class="text-[11px] text-zinc-400">{{ $t('home.live.posTab.stat2Sub') }}</div>
                </div>
              </div>
              <div class="pt-2">
                <router-link :to="$localeRoute('pos')"
                  class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5">
                  <span>{{ $t('home.live.posTab.link') }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>

            <div class="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 shadow-inner">
              <div class="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs">
                <span class="font-bold text-zinc-800">{{ $t('mockPos.store') }}</span>
                <span class="text-amber-600 font-bold bg-amber-100 px-2 py-0.5 rounded">{{ $t('mockPos.offline') }}</span>
              </div>
              <div class="p-4 bg-white rounded-xl border border-zinc-200 my-4 text-xs space-y-2">
                <div class="flex justify-between font-bold text-zinc-800">
                  <span>{{ $t('mockPos.order') }}</span>
                  <span class="text-amber-600">895.000 đ</span>
                </div>
                <div class="text-zinc-500 text-[11px]">{{ $t('mockPos.vip') }}</div>
                <div class="p-2.5 bg-amber-50 text-amber-800 rounded-lg text-[11px] flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  {{ $t('mockPos.qr') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CALL TO ACTION BANNER -->
    <section
      class="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-500 text-white relative overflow-hidden">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {{ $t('home.cta.title') }}
        </h2>
        <p class="text-amber-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          {{ $t('home.cta.desc') }}
        </p>

        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button @click="$emit('open-modal', { type: 'demo', moduleName: 'all' })"
            class="px-8 py-4 rounded-xl bg-white hover:bg-zinc-50 text-amber-700 font-extrabold text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95">
            {{ $t('home.cta.btn') }}
          </button>
          <a href="tel:0822235858"
            class="px-7 py-4 rounded-xl bg-amber-400/60 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base border border-white/30 backdrop-blur-sm transition-all">
            {{ $t('home.cta.hotline') }} 097 8673867
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroInteractiveCanvas from '@/components/HeroInteractiveCanvas.vue'

defineEmits(['open-modal'])

const { t } = useI18n()
const activeTab = ref('wms')

const liveTabs = computed(() => [
  { id: 'wms', label: t('home.live.tabs.wms'), icon: '📦' },
  { id: 'tms', label: t('home.live.tabs.tms'), icon: '🚚' },
  { id: 'omni', label: t('home.live.tabs.omni'), icon: '🛍️' },
  { id: 'pos', label: t('home.live.tabs.pos'), icon: '💳' }
])
</script>
