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
          <span>{{ $t('pos.hero.badge') }}</span>
        </div>

        <!-- Title -->
        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-5xl mx-auto">
          {{ $t('pos.hero.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {{ $t('pos.hero.desc') }}
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor POS - Điểm bán' })"
            class="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            {{ $t('pos.hero.demo') }}
          </button>
          <button 
            @click="$emit('open-modal', { type: 'pricing', moduleName: 'Tài Liệu ecor POS' })"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm hover:shadow transition-all flex items-center gap-2"
          >
            <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>{{ $t('pos.hero.doc') }}</span>
          </button>
        </div>

        <!-- Badges -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('pos.hero.badge1') }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('pos.hero.badge2') }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('pos.hero.badge3') }}
          </span>
        </div>

        <!-- POS CASHIER SCREEN MOCKUP -->
        <div class="mt-12 max-w-5xl mx-auto bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
          <!-- Screen Header -->
          <div class="flex flex-wrap items-center justify-between pb-4 border-b border-zinc-100 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <strong class="text-zinc-800 ml-2">{{ $t('mockPos.storeTitle') }}</strong>
            </div>
            <div class="flex items-center gap-4 text-[11px] text-zinc-500">
              <span class="flex items-center gap-1 text-amber-600 font-bold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                {{ $t('mockPos.syncWms') }}
              </span>
              <span class="font-mono text-zinc-400">{{ $t('mockPos.session') }}</span>
            </div>
          </div>

          <!-- Cashier Work Area -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            <!-- Left Products Catalog Area -->
            <div class="lg:col-span-7 space-y-4">
              <!-- Search Bar -->
              <div class="relative">
                <input 
                  type="text" 
                  :value="$t('mockPos.scan')" 
                  readonly
                  class="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-700 outline-none"
                />
                <span class="absolute right-3 top-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">{{ $t('mockPos.searchBtn') }}</span>
              </div>

              <!-- Category Pills -->
              <div class="flex flex-wrap gap-2 text-xs font-medium">
                <span class="px-3 py-1 bg-amber-400 text-zinc-900 font-bold rounded-lg font-bold">{{ $t('mockPos.cat1') }}</span>
                <span class="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-lg">{{ $t('mockPos.cat2') }}</span>
                <span class="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-lg">{{ $t('mockPos.cat3') }}</span>
                <span class="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-lg">{{ $t('mockPos.cat4') }}</span>
                <span class="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-lg">{{ $t('mockPos.cat5') }}</span>
              </div>

              <!-- Product Grid -->
              <div class="grid grid-cols-3 gap-3 pt-2">
                <div class="p-3 rounded-xl border border-amber-300 bg-amber-50 text-xs space-y-1 relative">
                  <span class="text-[10px] text-amber-700 font-bold">SKU: CT-01</span>
                  <strong class="block text-zinc-900 leading-tight">{{ $t('mockPos.p1') }}</strong>
                  <span class="text-amber-700 font-black block">245.000 đ</span>
                  <span class="text-[10px] text-amber-600 font-bold block">{{ $t('mockPos.p1Stock') }}</span>
                </div>

                <div class="p-3 rounded-xl border border-zinc-200 bg-white text-xs space-y-1">
                  <span class="text-[10px] text-zinc-400 font-mono">SKU: AN-82</span>
                  <strong class="block text-zinc-800 leading-tight">{{ $t('mockPos.p2') }}</strong>
                  <span class="text-zinc-900 font-bold block">380.000 đ</span>
                  <span class="text-[10px] text-zinc-500 block">{{ $t('mockPos.p2Stock') }}</span>
                </div>

                <div class="p-3 rounded-xl border border-amber-200 bg-amber-50 text-xs space-y-1">
                  <span class="text-[10px] text-amber-600 font-bold">SKU: SR-19</span>
                  <strong class="block text-zinc-800 leading-tight">{{ $t('mockPos.p3') }}</strong>
                  <span class="text-amber-600 font-bold block">320.000 đ</span>
                  <span class="text-[10px] text-amber-700 font-bold block">{{ $t('mockPos.p3Stock') }}</span>
                </div>

                <div class="p-3 rounded-xl border border-zinc-200 bg-white text-xs space-y-1">
                  <span class="text-[10px] text-zinc-400 font-mono">SKU: TT-04</span>
                  <strong class="block text-zinc-800 leading-tight">{{ $t('mockPos.p4') }}</strong>
                  <span class="text-zinc-900 font-bold block">190.000 đ</span>
                  <span class="text-[10px] text-zinc-500 block">{{ $t('mockPos.p4Stock') }}</span>
                </div>

                <div class="p-3 rounded-xl border border-zinc-200 bg-white text-xs space-y-1">
                  <span class="text-[10px] text-zinc-400 font-mono">SKU: RS-66</span>
                  <strong class="block text-zinc-800 leading-tight">{{ $t('mockPos.p5') }}</strong>
                  <span class="text-zinc-900 font-bold block">145.000 đ</span>
                  <span class="text-[10px] text-zinc-500 block">{{ $t('mockPos.p5Stock') }}</span>
                </div>

                <div class="p-3 rounded-xl border border-amber-200 bg-amber-50 text-xs space-y-1">
                  <span class="text-[10px] text-amber-700 font-bold">SKU: CB-99</span>
                  <strong class="block text-zinc-800 leading-tight">{{ $t('mockPos.p6') }}</strong>
                  <span class="text-amber-800 font-bold block">699.000 đ</span>
                  <span class="text-[10px] text-amber-600 font-bold block">{{ $t('mockPos.p6Stock') }}</span>
                </div>
              </div>

              <!-- Customer Loyalty Bar -->
              <div class="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <span class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">VIP</span>
                  <div>
                    <strong class="text-zinc-800">{{ $t('mockPos.customer') }}</strong>
                    <span class="text-zinc-500 text-[11px] ml-2">{{ $t('mockPos.points') }}</span>
                  </div>
                </div>
                <span class="text-amber-600 font-bold">{{ $t('mockPos.redeem') }}</span>
              </div>
            </div>

            <!-- Right Current Cart & VietQR Box -->
            <div class="lg:col-span-5 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 flex flex-col justify-between text-xs space-y-4">
              <div>
                <div class="flex justify-between items-center pb-2 border-b border-zinc-200 font-bold text-zinc-800">
                  <span>{{ $t('mockPos.order') }}</span>
                  <span class="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded">{{ $t('mockPos.products3') }}</span>
                </div>

                <div class="divide-y divide-zinc-100 my-2">
                  <div class="py-2 flex justify-between">
                    <div>
                      <div class="font-semibold text-zinc-800">{{ $t('mockPos.p1Name') }}</div>
                      <div class="text-[10px] text-zinc-400">245.000 đ x 1</div>
                    </div>
                    <span class="font-bold text-zinc-800">245.000 đ</span>
                  </div>

                  <div class="py-2 flex justify-between">
                    <div>
                      <div class="font-semibold text-zinc-800">{{ $t('mockPos.p2Name') }}</div>
                      <div class="text-[10px] text-zinc-400">380.000 đ x 1</div>
                    </div>
                    <span class="font-bold text-zinc-800">380.000 đ</span>
                  </div>

                  <div class="py-2 flex justify-between">
                    <div>
                      <div class="font-semibold text-zinc-800">Serum Niacinamide 10%</div>
                      <div class="text-[10px] text-zinc-400">320.000 đ x 1</div>
                    </div>
                    <span class="font-bold text-zinc-800">320.000 đ</span>
                  </div>
                </div>

                <div class="pt-2 border-t border-zinc-200 space-y-1">
                  <div class="flex justify-between text-zinc-500">
                    <span>{{ $t('mockPos.total') }}</span>
                    <span>945.000 đ</span>
                  </div>
                  <div class="flex justify-between text-amber-600 font-medium">
                    <span>{{ $t('mockPos.voucher') }}</span>
                    <span>- 50.000 đ</span>
                  </div>
                  <div class="flex justify-between text-base font-black text-zinc-900 pt-1 border-t border-zinc-200">
                    <span>{{ $t('mockPos.payable') }}</span>
                    <span class="text-amber-600">895.000 đ</span>
                  </div>
                </div>
              </div>

              <!-- VietQR Quick Scan Box -->
              <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center gap-3">
                <div class="w-16 h-16 bg-zinc-900 text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  QR CODE
                </div>
                <div>
                  <div class="font-bold text-zinc-900 text-[11px] flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    {{ $t('mockPos.qrTitle') }}
                  </div>
                  <p class="text-[10px] text-zinc-500 leading-tight mt-0.5">
                    {{ $t('mockPos.qrDesc') }}
                  </p>
                  <span class="text-[10px] font-mono text-amber-600 font-bold block mt-1">{{ $t('mockPos.qrWait') }}</span>
                </div>
              </div>

              <button class="w-full py-3 bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-1.5">
                <span>✓</span>
                <span>{{ $t('mockPos.checkout') }}</span>
              </button>
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
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-600">{{ $t('pos.metrics.m1.val') }} <span class="text-xs font-normal text-zinc-400">{{ $t('pos.metrics.m1.sub') }}</span></div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('pos.metrics.m1.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('pos.metrics.m1.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/40 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-600">{{ $t('pos.metrics.m2.val') }} <span class="text-xs font-normal text-zinc-400">{{ $t('pos.metrics.m2.sub') }}</span></div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('pos.metrics.m2.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('pos.metrics.m2.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/40 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-600">{{ $t('pos.metrics.m3.val') }} <span class="text-xs font-normal text-zinc-400">{{ $t('pos.metrics.m3.sub') }}</span></div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('pos.metrics.m3.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('pos.metrics.m3.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/40 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-600">{{ $t('pos.metrics.m4.val') }} <span class="text-xs font-normal text-zinc-400">{{ $t('pos.metrics.m4.sub') }}</span></div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('pos.metrics.m4.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('pos.metrics.m4.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FOUR CORE PILLARS OF ECOR POS -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('pos.pillars.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('pos.pillars.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('pos.pillars.desc') }}
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('pos.pillars.p1.tag') }}</span>
            <h3 class="text-xl font-bold text-zinc-900 mt-4">{{ $t('pos.pillars.p1.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('pos.pillars.p1.desc') }}
            </p>
            <ul class="space-y-1.5 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p1.f1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p1.f2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p1.f3') }}</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('pos.pillars.p2.tag') }}</span>
            <h3 class="text-xl font-bold text-zinc-900 mt-4">{{ $t('pos.pillars.p2.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('pos.pillars.p2.desc') }}
            </p>
            <ul class="space-y-1.5 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p2.f1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p2.f2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p2.f3') }}</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('pos.pillars.p3.tag') }}</span>
            <h3 class="text-xl font-bold text-zinc-900 mt-4">{{ $t('pos.pillars.p3.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('pos.pillars.p3.desc') }}
            </p>
            <ul class="space-y-1.5 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p3.f1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p3.f2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p3.f3') }}</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{{ $t('pos.pillars.p4.tag') }}</span>
            <h3 class="text-xl font-bold text-zinc-900 mt-4">{{ $t('pos.pillars.p4.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('pos.pillars.p4.desc') }}
            </p>
            <ul class="space-y-1.5 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p4.f1') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p4.f2') }}</li>
              <li class="flex items-center gap-2">✓ {{ $t('pos.pillars.p4.f3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. HỆ SINH THÁI THIẾT BỊ PHẦN CỨNG PLUG & PLAY -->
    <section class="py-20 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('pos.hardware.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('pos.hardware.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('pos.hardware.desc') }}
        </p>

        <div class="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🖥️</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('pos.hardware.h1.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('pos.hardware.h1.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🖨️</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('pos.hardware.h2.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('pos.hardware.h2.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">📷</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('pos.hardware.h3.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('pos.hardware.h3.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">💵</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('pos.hardware.h4.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('pos.hardware.h4.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">📱</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('pos.hardware.h5.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('pos.hardware.h5.desc') }}</p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">⚖️</div>
            <h4 class="font-bold text-zinc-900 text-xs mt-3">{{ $t('pos.hardware.h6.title') }}</h4>
            <p class="text-[11px] text-zinc-500 mt-1">{{ $t('pos.hardware.h6.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CTA FORM POS -->
    <section class="py-20 bg-zinc-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400">{{ $t('pos.cta.badge') }}</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {{ $t('pos.cta.title') }}
        </h2>
        <p class="text-zinc-400 text-sm max-w-xl mx-auto">
          {{ $t('pos.cta.desc') }}
        </p>

        <div class="pt-4 flex flex-wrap justify-center gap-4">
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor POS' })"
            class="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-extrabold text-sm shadow-lg transition-all"
          >
            {{ $t('pos.cta.btn') }}
          </button>
          <a 
            href="tel:0822235858"
            class="px-8 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-zinc-700 transition-all"
          >
            {{ $t('pos.cta.hotline') }}  097 8673867
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

import HeroCanvas from '@/components/HeroCanvas.vue'
defineEmits(['open-modal'])

const { t } = useI18n()
</script>
