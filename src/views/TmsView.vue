<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-amber-100/70 via-amber-50/40 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <!-- Animated Canvas Background -->
      <HeroCanvas :opacity="0.65" :particleCount="52" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <!-- Tag -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>{{ $t('tms.hero.badge') }}</span>
        </div>

        <!-- Title -->
        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-5xl mx-auto">
          {{ $t('tms.hero.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {{ $t('tms.hero.desc') }}
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor TMS - Điều phối vận tải' })"
            class="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            {{ $t('tms.hero.consult') }}
          </button>
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'Demo Tuyến Đường TMS' })"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm hover:shadow transition-all flex items-center gap-2"
          >
            <div class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span>{{ $t('tms.hero.demo') }}</span>
          </button>
        </div>

        <!-- Badges -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('tms.hero.badge1') }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('tms.hero.badge2') }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ $t('tms.hero.badge3') }}
          </span>
        </div>

        <!-- SIMULATION TERMINAL DASHBOARD -->
        <div class="mt-12 max-w-5xl mx-auto bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <!-- Left Live GPS Dispatch Area -->
            <div class="lg:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
                    <strong class="text-zinc-800">{{ $t('mockTms.hubTitle') }}</strong>
                  </div>
                  <span class="text-[10px] text-amber-700 bg-amber-100 font-bold px-2 py-0.5 rounded">{{ $t('mockTms.realtimeSync') }}</span>
                </div>

                <!-- Active Truck Alert -->
                <div class="mt-4 p-3 bg-white rounded-xl border border-zinc-200 text-xs space-y-2">
                  <div class="flex justify-between items-center font-bold text-zinc-800">
                    <span>{{ $t('mockTms.truckTitle') }}</span>
                    <span class="text-amber-600 font-mono">{{ $t('mockTms.speed') }}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 text-[11px] text-zinc-600 pt-1">
                    <div class="p-2 rounded bg-amber-50 text-amber-800 font-medium">
                      {{ $t('mockTms.route1') }}<br>
                      <strong>{{ $t('mockTms.route1Sub') }}</strong>
                    </div>
                    <div class="p-2 rounded bg-amber-50 text-amber-800 font-medium">
                      {{ $t('mockTms.route2') }}<br>
                      <strong>{{ $t('mockTms.route2Sub') }}</strong>
                    </div>
                  </div>
                </div>

                <!-- Waypoint Steps -->
                <div class="mt-4 space-y-1.5 text-xs text-zinc-600">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>{{ $t('mockTms.way1') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>{{ $t('mockTms.way2') }}</span>
                  </div>
                  <div class="flex items-center gap-2 font-bold text-amber-700">
                    <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>{{ $t('mockTms.way3') }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-zinc-400">
                    <span class="w-2 h-2 rounded-full bg-zinc-300"></span>
                    <span>{{ $t('mockTms.way4') }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Weight & e-POD Area -->
            <div class="lg:col-span-5 space-y-4">
              <!-- Load Capacity Box -->
              <div class="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 text-xs">
                <span class="text-[10px] text-zinc-400 uppercase font-bold block">{{ $t('mockTms.allocTitle') }}</span>
                <div class="mt-2 space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-zinc-600">{{ $t('mockTms.allocAct') }}</span>
                    <strong class="text-zinc-900 font-mono">{{ $t('mockTms.allocActVal') }}</strong>
                  </div>
                  <div class="w-full bg-zinc-200 rounded-full h-2">
                    <div class="bg-amber-600 h-2 rounded-full" style="width: 96%"></div>
                  </div>

                  <div class="flex justify-between items-center pt-2">
                    <span class="text-zinc-600">{{ $t('mockTms.allocVol') }}</span>
                    <strong class="text-zinc-900 font-mono">{{ $t('mockTms.allocVolVal') }}</strong>
                  </div>
                  <div class="w-full bg-zinc-200 rounded-full h-2">
                    <div class="bg-amber-600 h-2 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
                <p class="text-[11px] text-zinc-500 mt-3 pt-2 border-t border-zinc-200">
                  {{ $t('mockTms.allocStat') }}
                </p>
              </div>

              <!-- e-POD Digital Stamp Box -->
              <div class="bg-white border border-amber-200 rounded-2xl p-5 text-xs shadow-sm">
                <div class="flex items-center justify-between pb-2 border-b border-zinc-100">
                  <strong class="text-zinc-800">{{ $t('mockTms.epodTitle') }}</strong>
                  <span class="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded text-[10px]">{{ $t('mockTms.epodBadge') }}</span>
                </div>
                <div class="mt-3 space-y-1.5 text-[11px] text-zinc-600">
                  <div>{{ $t('mockTms.epodSign') }}</div>
                  <div>{{ $t('mockTms.epodGps') }}</div>
                  <div class="pt-2 flex justify-between font-bold text-zinc-900">
                    <span>{{ $t('mockTms.epodCod') }}</span>
                    <span class="text-amber-700">18.450.000 đ</span>
                  </div>
                </div>
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
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">94.5%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('tms.metrics.m1.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('tms.metrics.m1.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">-22%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('tms.metrics.m2.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('tms.metrics.m2.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">98.2%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('tms.metrics.m3.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('tms.metrics.m3.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">100%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('tms.metrics.m4.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('tms.metrics.m4.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FOUR CORE PILLARS OF ECOR TMS -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('tms.pillars.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('tms.pillars.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('tms.pillars.desc') }}
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span class="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{{ $t('tms.pillars.p1.tag') }}</span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mt-5">{{ $t('tms.pillars.p1.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('tms.pillars.p1.desc') }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p1.f1') }}</span>
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p1.f2') }}</span>
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p1.f3') }}</span>
            </div>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <span class="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{{ $t('tms.pillars.p2.tag') }}</span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mt-5">{{ $t('tms.pillars.p2.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('tms.pillars.p2.desc') }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p2.f1') }}</span>
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p2.f2') }}</span>
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p2.f3') }}</span>
            </div>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                📱
              </div>
              <span class="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{{ $t('tms.pillars.p3.tag') }}</span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mt-5">{{ $t('tms.pillars.p3.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('tms.pillars.p3.desc') }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p3.f1') }}</span>
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p3.f2') }}</span>
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p3.f3') }}</span>
            </div>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                💰
              </div>
              <span class="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{{ $t('tms.pillars.p4.tag') }}</span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mt-5">{{ $t('tms.pillars.p4.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              {{ $t('tms.pillars.p4.desc') }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p4.f1') }}</span>
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p4.f2') }}</span>
              <span class="px-2.5 py-1 bg-zinc-100 rounded-lg">{{ $t('tms.pillars.p4.f3') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. WMS SANG TMS PIPELINE -->
    <section class="py-20 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-6 space-y-4 text-left">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('tms.pipeline.badge') }}</span>
            <h2 class="text-3xl font-extrabold text-zinc-900 tracking-tight">
              {{ $t('tms.pipeline.title') }}
            </h2>
            <p class="text-zinc-600 text-sm leading-relaxed">
              {{ $t('tms.pipeline.desc') }}
            </p>
            <div class="space-y-3 pt-2 text-sm text-zinc-700 font-medium">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                <div>
                  <strong class="text-zinc-900 block">{{ $t('tms.pipeline.f1.title') }}</strong>
                  <span class="text-xs text-zinc-500">{{ $t('tms.pipeline.f1.desc') }}</span>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                <div>
                  <strong class="text-zinc-900 block">{{ $t('tms.pipeline.f2.title') }}</strong>
                  <span class="text-xs text-zinc-500">{{ $t('tms.pipeline.f2.desc') }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-3xl p-6 text-xs space-y-3">
            <div class="flex justify-between items-center pb-2 border-b border-zinc-200">
              <strong class="text-zinc-800">Luồng Vận Hành Liền Mạch (Live Pipeline)</strong>
              <span class="text-amber-700 font-bold">No API Latency</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center justify-between">
              <div>
                <strong>Bước 1: Dock Kho Ecor WMS</strong>
                <div class="text-zinc-500 text-[11px]">Kiểm quét mã vạch Barcode / QR thùng hàng</div>
              </div>
              <span class="text-amber-600 font-bold">Done</span>
            </div>
            <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
              <div>
                <strong class="text-amber-900">Bước 2: Thuật toán ecor TMS</strong>
                <div class="text-amber-700 text-[11px]">Gom 42 đơn lẻ thành 1 chuyến tối ưu tuyến</div>
              </div>
              <span class="text-amber-700 font-bold">0.8s Match</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center justify-between">
              <div>
                <strong>Bước 3: Driver App Nhận Lệnh</strong>
                <div class="text-zinc-500 text-[11px]">Tài xế kích hoạt dẫn đường & trả hàng điểm 1–5</div>
              </div>
              <span class="text-amber-600 font-bold">In Transit</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. FOUR OPERATIONAL MODELS IN VIETNAM -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('tms.models.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('tms.models.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('tms.models.desc') }}
        </p>

        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <!-- Case 1 -->
          <div class="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="h-40 overflow-hidden bg-zinc-100">
                <img src="/images/assets/tms-case-fmcg.png" alt="Doanh Nghiệp FMCG" class="w-full h-full object-cover" />
              </div>
              <div class="p-5">
                <span class="text-[10px] font-bold text-amber-600 uppercase block">{{ $t('tms.models.m1.tag') }}</span>
                <h4 class="font-bold text-zinc-900 text-sm mt-1">{{ $t('tms.models.m1.title') }}</h4>
                <p class="text-xs text-zinc-500 mt-2 leading-relaxed">{{ $t('tms.models.m1.desc') }}</p>
              </div>
            </div>
            <div class="p-5 pt-0">
              <span class="text-xs font-bold text-amber-600 border-t border-zinc-100 pt-3 block">{{ $t('tms.models.m1.commit') }}</span>
            </div>
          </div>

          <!-- Case 2 -->
          <div class="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="h-40 overflow-hidden bg-zinc-100">
                <img src="/images/assets/tms-case-construction.png" alt="Vật liệu & Xây dựng" class="w-full h-full object-cover" />
              </div>
              <div class="p-5">
                <span class="text-[10px] font-bold text-amber-600 uppercase block">{{ $t('tms.models.m2.tag') }}</span>
                <h4 class="font-bold text-zinc-900 text-sm mt-1">{{ $t('tms.models.m2.title') }}</h4>
                <p class="text-xs text-zinc-500 mt-2 leading-relaxed">{{ $t('tms.models.m2.desc') }}</p>
              </div>
            </div>
            <div class="p-5 pt-0">
              <span class="text-xs font-bold text-amber-600 border-t border-zinc-100 pt-3 block">{{ $t('tms.models.m2.commit') }}</span>
            </div>
          </div>

          <!-- Case 3 -->
          <div class="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="h-40 overflow-hidden bg-zinc-100">
                <img src="/images/assets/tms-case-cold.png" alt="{{ $t('tms.models.m3.tag') }}" class="w-full h-full object-cover" />
              </div>
              <div class="p-5">
                <span class="text-[10px] font-bold text-amber-600 uppercase block">Cold Chain Logistics</span>
                <h4 class="font-bold text-zinc-900 text-sm mt-1">{{ $t('tms.models.m3.title') }}</h4>
                <p class="text-xs text-zinc-500 mt-2 leading-relaxed">{{ $t('tms.models.m3.desc') }}</p>
              </div>
            </div>
            <div class="p-5 pt-0">
              <span class="text-xs font-bold text-amber-600 border-t border-zinc-100 pt-3 block">{{ $t('tms.models.m3.commit') }}</span>
            </div>
          </div>

          <!-- Case 4 -->
          <div class="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="h-40 overflow-hidden bg-zinc-100">
                <img src="/images/assets/solutions-3pl.png" alt="{{ $t('tms.models.m4.tag') }}" class="w-full h-full object-cover" />
              </div>
              <div class="p-5">
                <span class="text-[10px] font-bold text-amber-600 uppercase block">3PL & 4PL Logistics</span>
                <h4 class="font-bold text-zinc-900 text-sm mt-1">{{ $t('tms.models.m4.title') }}</h4>
                <p class="text-xs text-zinc-500 mt-2 leading-relaxed">{{ $t('tms.models.m4.desc') }}</p>
              </div>
            </div>
            <div class="p-5 pt-0">
              <span class="text-xs font-bold text-amber-600 border-t border-zinc-100 pt-3 block">{{ $t('tms.models.m4.commit') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FORM ĐĂNG KÝ TƯ VẤN TMS -->
    <section class="py-20 bg-zinc-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400">{{ $t('tms.cta.badge') }}</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {{ $t('tms.cta.title') }}
        </h2>
        <p class="text-zinc-400 text-sm max-w-xl mx-auto">
          {{ $t('tms.cta.desc') }}
        </p>

        <div class="pt-4 flex flex-wrap justify-center gap-4">
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor TMS' })"
            class="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-extrabold text-sm shadow-lg transition-all"
          >
            {{ $t('tms.cta.btn') }}
          </button>
          <a 
            href="tel:0822235858"
            class="px-8 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-zinc-700 transition-all"
          >
            {{ $t('tms.cta.hotline') }}  097 8673867
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
