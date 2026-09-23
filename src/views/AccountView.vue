<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-amber-100/60 via-amber-50/40 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <!-- Animated Canvas Background -->
      <HeroCanvas :opacity="0.65" :particleCount="52" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <!-- Tag -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>{{ $t('account.hero.badge') }}</span>
        </div>

        <!-- Title -->
        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-5xl mx-auto">
          {{ $t('account.hero.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {{ $t('account.hero.desc') }}
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor Account - Kế toán' })"
            class="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            {{ $t('account.hero.demo') }}
          </button>
          <button
            @click="$emit('open-modal', { type: 'pricing', moduleName: 'Tài Liệu ecor Account' })"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm hover:shadow transition-all flex items-center gap-2"
          >
            <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>{{ $t('account.hero.doc') }}</span>
          </button>
        </div>

        <!-- Trust Badges -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('account.hero.badge1') }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('account.hero.badge2') }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('account.hero.badge3') }}
          </span>
        </div>

        <!-- LIVE ACCOUNTING DASHBOARD MOCKUP -->
        <div class="mt-12 max-w-5xl mx-auto bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
          <!-- Panel Header -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-100 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <strong class="text-zinc-800 ml-2">{{ $t('account.hero.panel.title') }}</strong>
            </div>
            <div class="flex items-center gap-4 text-[11px] text-zinc-500">
              <span class="flex items-center gap-1 text-amber-600 font-bold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                {{ $t('account.hero.panel.live') }}
              </span>
              <span class="font-mono text-zinc-400">{{ $t('account.hero.panel.period') }}</span>
            </div>
          </div>

          <!-- KPI Row -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div class="text-[11px] text-zinc-500 font-medium">{{ $t('account.hero.panel.k1Label') }}</div>
              <div class="text-base sm:text-lg font-black text-zinc-900 mt-1">{{ $t('account.hero.panel.k1Val') }}</div>
              <div class="text-[11px] text-amber-600 font-semibold mt-1">{{ $t('account.hero.panel.k1Sub') }}</div>
            </div>
            <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div class="text-[11px] text-zinc-500 font-medium">{{ $t('account.hero.panel.k2Label') }}</div>
              <div class="text-base sm:text-lg font-black text-amber-600 mt-1">{{ $t('account.hero.panel.k2Val') }}</div>
              <div class="text-[11px] text-amber-600 font-semibold mt-1">{{ $t('account.hero.panel.k2Sub') }}</div>
            </div>
            <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div class="text-[11px] text-zinc-500 font-medium">{{ $t('account.hero.panel.k3Label') }}</div>
              <div class="text-base sm:text-lg font-black text-zinc-900 mt-1">{{ $t('account.hero.panel.k3Val') }}</div>
              <div class="text-[11px] text-amber-600 font-semibold mt-1">{{ $t('account.hero.panel.k3Sub') }}</div>
            </div>
            <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div class="text-[11px] text-zinc-500 font-medium">{{ $t('account.hero.panel.k4Label') }}</div>
              <div class="text-base sm:text-lg font-black text-zinc-900 mt-1">{{ $t('account.hero.panel.k4Val') }}</div>
              <div class="text-[11px] text-amber-600 font-semibold mt-1">{{ $t('account.hero.panel.k4Sub') }}</div>
            </div>
          </div>

          <!-- Live Journal Entries Stream -->
          <div class="mt-6 bg-zinc-50 rounded-2xl p-4 sm:p-5 border border-zinc-200">
            <div class="flex items-center gap-2 text-xs font-bold text-zinc-800 mb-3">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              {{ $t('account.hero.panel.journalTitle') }}
            </div>
            <div class="space-y-2 font-mono text-[11px]">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200 gap-1.5">
                <span class="text-zinc-700">{{ $t('account.hero.panel.j1') }}</span>
                <span class="text-emerald-600 font-bold shrink-0">{{ $t('account.hero.panel.j1Status') }}</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200 gap-1.5">
                <span class="text-zinc-700">{{ $t('account.hero.panel.j2') }}</span>
                <span class="text-emerald-600 font-bold shrink-0">{{ $t('account.hero.panel.j2Status') }}</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200 gap-1.5">
                <span class="text-zinc-700">{{ $t('account.hero.panel.j3') }}</span>
                <span class="text-emerald-600 font-bold shrink-0">{{ $t('account.hero.panel.j3Status') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. FOUR METRICS -->
    <section class="py-12 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-amber-50/40 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-600">{{ $t('account.metrics.m1.val') }}</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('account.metrics.m1.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('account.metrics.m1.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/40 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-600">{{ $t('account.metrics.m2.val') }}</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('account.metrics.m2.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('account.metrics.m2.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/40 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-600">{{ $t('account.metrics.m3.val') }}</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('account.metrics.m3.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('account.metrics.m3.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/40 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-600">{{ $t('account.metrics.m4.val') }}</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('account.metrics.m4.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('account.metrics.m4.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FOUR CORE PILLARS OF ECOR ACCOUNT -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('account.pillars.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('account.pillars.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('account.pillars.desc') }}
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('account.pillars.p1.tag') }}</span>
            <h3 class="text-xl font-bold text-zinc-900 mt-4">{{ $t('account.pillars.p1.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('account.pillars.p1.desc') }}
            </p>
            <ul class="space-y-1.5 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p1.f1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p1.f2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p1.f3') }}</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('account.pillars.p2.tag') }}</span>
            <h3 class="text-xl font-bold text-zinc-900 mt-4">{{ $t('account.pillars.p2.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('account.pillars.p2.desc') }}
            </p>
            <ul class="space-y-1.5 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p2.f1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p2.f2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p2.f3') }}</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('account.pillars.p3.tag') }}</span>
            <h3 class="text-xl font-bold text-zinc-900 mt-4">{{ $t('account.pillars.p3.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('account.pillars.p3.desc') }}
            </p>
            <ul class="space-y-1.5 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p3.f1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p3.f2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p3.f3') }}</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('account.pillars.p4.tag') }}</span>
            <h3 class="text-xl font-bold text-zinc-900 mt-4">{{ $t('account.pillars.p4.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('account.pillars.p4.desc') }}
            </p>
            <ul class="space-y-1.5 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p4.f1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p4.f2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('account.pillars.p4.f3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. 6 PHÂN HỆ KẾ TOÁN -->
    <section class="py-20 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('account.modules.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('account.modules.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('account.modules.desc') }}
        </p>

        <div class="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🏦</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('account.modules.h1.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('account.modules.h1.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🧾</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('account.modules.h2.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('account.modules.h2.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">📦</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('account.modules.h3.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('account.modules.h3.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🚚</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('account.modules.h4.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('account.modules.h4.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🧮</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('account.modules.h5.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('account.modules.h5.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">📑</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('account.modules.h6.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('account.modules.h6.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">📊</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('account.modules.h7.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('account.modules.h7.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">💱</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('account.modules.h8.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('account.modules.h8.desc') }}</p>
          </div>
        </div>

        <!-- Extension Pill -->
        <div class="mt-10 p-5 sm:p-6 rounded-3xl bg-amber-50/60 border border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-amber-400 text-zinc-900 flex items-center justify-center shrink-0">
              <span class="text-lg">➕</span>
            </div>
            <div>
              <div class="text-sm font-bold text-zinc-900">{{ $t('account.modules.moreBadge') }}</div>
              <div class="text-xs text-zinc-500">{{ $t('account.modules.moreDesc') }}</div>
            </div>
          </div>
          <button
            @click="$emit('open-modal', { type: 'pricing', moduleName: 'Tài Liệu ecor Account' })"
            class="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 shrink-0">
            {{ $t('account.modules.moreLink') }}
          </button>
        </div>
      </div>
    </section>

    <!-- 5. BẢNG SO SÁNH -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('account.compare.badge') }}</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('account.compare.title') }}
        </h2>
        <p class="mt-3 text-sm text-zinc-500 max-w-2xl mx-auto">
          {{ $t('account.compare.desc') }}
        </p>

        <div class="mt-10 border border-zinc-200 rounded-3xl overflow-hidden shadow-md text-left text-xs sm:text-sm bg-white">
          <div class="grid grid-cols-12 bg-zinc-100 p-4 font-bold text-zinc-700">
            <div class="col-span-4 uppercase tracking-wider text-xs">{{ $t('account.compare.h1') }}</div>
            <div class="col-span-4 uppercase tracking-wider text-xs text-zinc-500">{{ $t('account.compare.h2') }}</div>
            <div class="col-span-4 uppercase tracking-wider text-xs text-amber-700 font-extrabold">
              {{ $t('account.compare.h3') }}
            </div>
          </div>

          <div class="divide-y divide-zinc-100">
            <div class="grid grid-cols-12 p-4 items-center">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('account.compare.r1.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('account.compare.r1.before') }}</div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('account.compare.r1.after') }}
              </div>
            </div>

            <div class="grid grid-cols-12 p-4 items-center bg-zinc-50/50">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('account.compare.r2.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('account.compare.r2.before') }}</div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('account.compare.r2.after') }}
              </div>
            </div>

            <div class="grid grid-cols-12 p-4 items-center">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('account.compare.r4.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('account.compare.r4.before') }}</div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('account.compare.r4.after') }}
              </div>
            </div>

            <div class="grid grid-cols-12 p-4 items-center bg-zinc-50/50">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('account.compare.r5.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('account.compare.r5.before') }}</div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('account.compare.r5.after') }}
              </div>
            </div>

            <div class="grid grid-cols-12 p-4 items-center">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('account.compare.r3.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('account.compare.r3.before') }}</div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('account.compare.r3.after') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. HỆ SINH THÁI KHÉP KÍN 8 PHÂN HỆ -->
    <section class="py-20 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('account.ecosystem.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('account.ecosystem.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('account.ecosystem.desc') }}
        </p>

        <div class="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-8">
          <!-- ecor Account (current, center of the loop) -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-400 text-zinc-900 flex items-center justify-center font-bold shadow-md ring-4 ring-amber-100">
              <span class="text-3xl">📑</span>
            </div>
            <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-900">{{ $t('account.ecosystem.account.name') }}</span>
            <span class="text-[10px] text-amber-600 font-semibold">{{ $t('account.ecosystem.current') }}</span>
          </div>

          <div class="w-8 h-0.5 bg-zinc-200 hidden sm:block"></div>

          <router-link :to="$localeRoute('pos')" class="flex flex-col items-center group">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 transition-all shadow-sm">
              <span class="text-3xl">🛒</span>
            </div>
            <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('account.ecosystem.pos.name') }}</span>
            <span class="text-[10px] text-zinc-500 text-center max-w-[7.5rem] leading-snug">{{ $t('account.ecosystem.pos.desc') }}</span>
          </router-link>

          <div class="w-8 h-0.5 bg-zinc-200 hidden sm:block"></div>

          <router-link :to="$localeRoute('wms')" class="flex flex-col items-center group">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 transition-all shadow-sm">
              <span class="text-3xl">📦</span>
            </div>
            <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('account.ecosystem.wms.name') }}</span>
            <span class="text-[10px] text-zinc-500 text-center max-w-[7.5rem] leading-snug">{{ $t('account.ecosystem.wms.desc') }}</span>
          </router-link>

          <div class="w-8 h-0.5 bg-zinc-200 hidden sm:block"></div>

          <router-link :to="$localeRoute('tms')" class="flex flex-col items-center group">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 transition-all shadow-sm">
              <span class="text-3xl">🚚</span>
            </div>
            <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('account.ecosystem.tms.name') }}</span>
            <span class="text-[10px] text-zinc-500 text-center max-w-[7.5rem] leading-snug">{{ $t('account.ecosystem.tms.desc') }}</span>
          </router-link>

          <div class="w-8 h-0.5 bg-zinc-200 hidden sm:block"></div>

          <router-link :to="$localeRoute('pos')" class="flex flex-col items-center group">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 transition-all shadow-sm">
              <span class="text-3xl">🌐</span>
            </div>
            <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('account.ecosystem.ecom.name') }}</span>
            <span class="text-[10px] text-zinc-500 text-center max-w-[7.5rem] leading-snug">{{ $t('account.ecosystem.ecom.desc') }}</span>
          </router-link>

          <div class="w-8 h-0.5 bg-zinc-200 hidden sm:block"></div>

          <div class="flex flex-col items-center">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-sm">
              <span class="text-3xl">👥</span>
            </div>
            <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('account.ecosystem.hrm.name') }}</span>
            <span class="text-[10px] text-zinc-500 text-center max-w-[7.5rem] leading-snug">{{ $t('account.ecosystem.hrm.desc') }}</span>
          </div>

          <div class="w-8 h-0.5 bg-zinc-200 hidden sm:block"></div>

          <div class="flex flex-col items-center">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-sm">
              <span class="text-3xl">❤️</span>
            </div>
            <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('account.ecosystem.crm.name') }}</span>
            <span class="text-[10px] text-zinc-500 text-center max-w-[7.5rem] leading-snug">{{ $t('account.ecosystem.crm.desc') }}</span>
          </div>

          <div class="w-8 h-0.5 bg-zinc-200 hidden sm:block"></div>

          <div class="flex flex-col items-center">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-sm">
              <span class="text-3xl">📱</span>
            </div>
            <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">{{ $t('account.ecosystem.mobileApp.name') }}</span>
            <span class="text-[10px] text-zinc-500 text-center max-w-[7.5rem] leading-snug">{{ $t('account.ecosystem.mobileApp.desc') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. HỆ SINH THÁI KẾT NỐI NGÂN HÀNG & THUẾ -->
    <section class="py-16 bg-[#fafcff] border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <span class="text-xs font-bold uppercase tracking-wider text-zinc-500">{{ $t('account.integrations.badge') }}</span>
          <h3 class="text-xl sm:text-2xl font-bold text-zinc-900 mt-2">{{ $t('account.integrations.title') }}</h3>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <div class="px-5 py-3 rounded-2xl bg-white border border-zinc-200 flex items-center gap-2 text-sm font-bold text-zinc-800 shadow-sm">
            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
            Vietcombank Corporate
          </div>
          <div class="px-5 py-3 rounded-2xl bg-white border border-zinc-200 flex items-center gap-2 text-sm font-bold text-zinc-800 shadow-sm">
            <span class="w-3 h-3 rounded-full bg-amber-500"></span>
            MB Bank Open API
          </div>
          <div class="px-5 py-3 rounded-2xl bg-white border border-zinc-200 flex items-center gap-2 text-sm font-bold text-zinc-800 shadow-sm">
            <span class="w-3 h-3 rounded-full bg-red-500"></span>
            Techcombank B2B
          </div>
          <div class="px-5 py-3 rounded-2xl bg-white border border-zinc-200 flex items-center gap-2 text-sm font-bold text-zinc-800 shadow-sm">
            <span class="text-amber-600">🏛️</span>
            Cổng Thuế Điện Tử (gdt.gov.vn)
          </div>
          <div class="px-5 py-3 rounded-2xl bg-white border border-zinc-200 flex items-center gap-2 text-sm font-bold text-zinc-800 shadow-sm">
            <span class="text-amber-600">✔️</span>
            MISA meInvoice / VNPT / Viettel
          </div>
          <div class="px-5 py-3 rounded-2xl bg-white border border-zinc-200 flex items-center gap-2 text-sm font-bold text-zinc-800 shadow-sm">
            <span class="w-3 h-3 rounded-full bg-amber-500"></span>
            ecor WMS • TMS • POS
          </div>
        </div>
      </div>
    </section>

    <!-- 8. THỰC CHỨNG KHÁCH HÀNG -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('account.testimonials.badge') }}</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            {{ $t('account.testimonials.title') }}
          </h2>
          <p class="mt-3 text-base text-zinc-500">
            {{ $t('account.testimonials.desc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 rounded-3xl bg-[#fafcff] border border-zinc-200 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1 text-amber-500 mb-6">
                <span v-for="i in 5" :key="i">★</span>
              </div>
              <p class="text-base sm:text-lg text-zinc-800 italic leading-relaxed mb-6">
                "{{ $t('account.testimonials.t1.quote') }}"
              </p>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-zinc-200">
              <div class="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-base shrink-0">
                TT
              </div>
              <div>
                <div class="text-base font-bold text-zinc-900">{{ $t('account.testimonials.t1.name') }}</div>
                <div class="text-xs text-zinc-500">{{ $t('account.testimonials.t1.role') }}</div>
              </div>
            </div>
          </div>

          <div class="p-8 rounded-3xl bg-[#fafcff] border border-zinc-200 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1 text-amber-500 mb-6">
                <span v-for="i in 5" :key="i">★</span>
              </div>
              <p class="text-base sm:text-lg text-zinc-800 italic leading-relaxed mb-6">
                "{{ $t('account.testimonials.t2.quote') }}"
              </p>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-zinc-200">
              <div class="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-base shrink-0">
                NV
              </div>
              <div>
                <div class="text-base font-bold text-zinc-900">{{ $t('account.testimonials.t2.name') }}</div>
                <div class="text-xs text-zinc-500">{{ $t('account.testimonials.t2.role') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. CTA -->
    <section class="py-20 bg-zinc-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400">{{ $t('account.cta.badge') }}</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {{ $t('account.cta.title') }}
        </h2>
        <p class="text-zinc-400 text-sm max-w-xl mx-auto">
          {{ $t('account.cta.desc') }}
        </p>

        <div class="pt-4 flex flex-wrap justify-center gap-4">
          <button
            @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor Account' })"
            class="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-extrabold text-sm shadow-lg transition-all"
          >
            {{ $t('account.cta.btn') }}
          </button>
          <a
            href="tel:0978673867"
            class="px-8 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-zinc-700 transition-all"
          >
            {{ $t('account.cta.hotline') }} 097 8673867
          </a>
        </div>
      </div>
    </section>

    <!-- 10. FORM ĐĂNG KÝ TƯ VẤN & DEMO -->
    <section class="py-20 bg-zinc-50 border-t border-zinc-200">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('account.form.badge') }}</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('account.form.title') }}
        </h2>
        <p class="mt-3 text-sm text-zinc-500 leading-relaxed">
          {{ $t('account.form.desc') }}
        </p>

        <form @submit.prevent="handleAccountSubmit"
          class="mt-8 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-4">
          <div v-if="accountSuccess" class="p-4 bg-amber-50 text-amber-800 rounded-2xl text-center text-sm">
            {{ $t('account.form.success') }}
          </div>

          <div v-else class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('account.form.nameLabel') }}</label>
                <input v-model="accountForm.name" required :placeholder="$t('account.form.namePlaceholder')"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('account.form.phoneLabel') }}</label>
                <input v-model="accountForm.phone" required :placeholder="'0909 xxx xxx'"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('account.form.companyLabel') }}</label>
                <input v-model="accountForm.company" required :placeholder="$t('account.form.companyPlaceholder')"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('account.form.emailLabel') }}</label>
                <input v-model="accountForm.email" required :placeholder="'ketoan@doanhnghiep.com'"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('account.form.volumeLabel') }}</label>
                <select v-model="accountForm.volume"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm bg-white">
                  <option>{{ $t('account.form.vol1') }}</option>
                  <option>{{ $t('account.form.vol2') }}</option>
                  <option>{{ $t('account.form.vol3') }}</option>
                  <option>{{ $t('account.form.vol4') }}</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('account.form.regimeLabel') }}</label>
                <select v-model="accountForm.regime"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm bg-white">
                  <option>{{ $t('account.form.regime1') }}</option>
                  <option>{{ $t('account.form.regime2') }}</option>
                  <option>{{ $t('account.form.regime3') }}</option>
                </select>
              </div>
            </div>

            <button type="submit" :disabled="accountSubmitting"
              class="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-900 font-bold text-sm shadow-md transition-all">
              {{ $t('account.form.submit') }}
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

import { ref, reactive } from 'vue'
import HeroCanvas from '@/components/HeroCanvas.vue'
defineEmits(['open-modal'])

const accountSuccess = ref(false)
const accountSubmitting = ref(false)
const accountForm = reactive({
  name: '',
  phone: '',
  company: '',
  email: '',
  volume: 'Dưới 1.000 chứng từ/tháng',
  regime: 'Thông tư 200/2014/TT-BTC (Doanh nghiệp vừa & lớn)'
})

async function handleAccountSubmit() {
  if (accountSubmitting.value) return
  accountSubmitting.value = true

  const notifyUrl = import.meta.env.VITE_CONTACT_NOTIFY_URL
  if (notifyUrl) {
    try {
      await fetch(notifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: accountForm.name,
          phone: accountForm.phone,
          email: accountForm.email,
          company: accountForm.company,
          notes: `Chế độ kế toán: ${accountForm.regime}`,
          modules: ['account'],
          scale: accountForm.volume
        })
      })
    } catch (err) {
      console.error('contact notify failed', err)
    }
  }
  accountSuccess.value = true
}

const { t } = useI18n()
</script>
