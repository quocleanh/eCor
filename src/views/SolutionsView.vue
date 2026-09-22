<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-amber-100/70 via-amber-50/40 to-transparent blur-3xl pointer-events-none -z-10">
      </div>

      <!-- Animated Canvas Background -->
      <HeroCanvas :opacity="0.65" :particleCount="52" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <!-- Tag -->
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>{{ $t('solutions.hero.badge') }}</span>
        </div>

        <!-- Title -->
        <h1
          class="mt-6 text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-5xl mx-auto">
          {{ $t('solutions.hero.title') }} <span class="text-amber-600">{{ $t('solutions.hero.titleHighlight') }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {{ $t('solutions.hero.desc') }}
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#bando-nganh"
            class="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md hover:shadow-lg transition-all">
            {{ $t('solutions.hero.discover') }}
          </a>
          <button @click="$emit('open-modal', { type: 'demo', moduleName: 'Khảo Sát Giải Pháp Ngành' })"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm hover:shadow transition-all">
            {{ $t('solutions.hero.consult') }}
          </button>
        </div>
      </div>
    </section>

    <!-- QUICK LINKS THEO PHÂN HỆ -->
    <section class="pb-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span class="text-xs font-bold uppercase tracking-wider text-zinc-400 mr-1">{{ $t('solutions.quicklinks.badge') }}</span>
          <router-link :to="$localeRoute('wms')"
            class="px-4 py-2 rounded-full bg-white border border-zinc-200 hover:border-amber-300 hover:bg-amber-50 text-xs font-bold text-zinc-700 hover:text-amber-700 transition-all shadow-sm">
            📦 {{ $t('solutions.quicklinks.wms') }}
          </router-link>
          <router-link :to="$localeRoute('tms')"
            class="px-4 py-2 rounded-full bg-white border border-zinc-200 hover:border-amber-300 hover:bg-amber-50 text-xs font-bold text-zinc-700 hover:text-amber-700 transition-all shadow-sm">
            🚚 {{ $t('solutions.quicklinks.tms') }}
          </router-link>
          <router-link :to="$localeRoute('pos')"
            class="px-4 py-2 rounded-full bg-white border border-zinc-200 hover:border-amber-300 hover:bg-amber-50 text-xs font-bold text-zinc-700 hover:text-amber-700 transition-all shadow-sm">
            🛒 {{ $t('solutions.quicklinks.pos') }}
          </router-link>
          <router-link :to="$localeRoute('account')"
            class="px-4 py-2 rounded-full bg-white border border-zinc-200 hover:border-amber-300 hover:bg-amber-50 text-xs font-bold text-zinc-700 hover:text-amber-700 transition-all shadow-sm">
            📑 {{ $t('solutions.quicklinks.account') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- 2. FOUR METRICS -->
    <section class="py-12 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">+35%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('solutions.metrics.m1.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('solutions.metrics.m1.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">99.98%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('solutions.metrics.m2.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('solutions.metrics.m2.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">0 {{ $t('solutions.metrics.m3.unit') }}
            </div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('solutions.metrics.m3.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('solutions.metrics.m3.desc') }}</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">x2.5</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('solutions.metrics.m4.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('solutions.metrics.m4.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. DÒNG CHẢY DỮ LIỆU & HÀNG HÓA KHÉP KÍN 5 BƯỚC -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('solutions.pipeline.badge')
        }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('solutions.pipeline.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          {{ $t('solutions.pipeline.desc') }}
        </p>

        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">{{ $t('solutions.pipeline.s1.tag') }}</span>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('solutions.pipeline.s1.title') }}</h4>
            <p class="text-xs text-zinc-500">{{ $t('solutions.pipeline.s1.desc') }}</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ {{ $t('solutions.pipeline.s1.commit') }}</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">{{ $t('solutions.pipeline.s2.tag') }}</span>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('solutions.pipeline.s2.title') }}</h4>
            <p class="text-xs text-zinc-500">{{ $t('solutions.pipeline.s2.desc') }}</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ {{ $t('solutions.pipeline.s2.commit') }}</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">{{ $t('solutions.pipeline.s3.tag') }}</span>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('solutions.pipeline.s3.title') }}</h4>
            <p class="text-xs text-zinc-500">{{ $t('solutions.pipeline.s3.desc') }}</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ {{ $t('solutions.pipeline.s3.commit') }}</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">{{ $t('solutions.pipeline.s4.tag') }}</span>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('solutions.pipeline.s4.title') }}</h4>
            <p class="text-xs text-zinc-500">{{ $t('solutions.pipeline.s4.desc') }}</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ {{ $t('solutions.pipeline.s4.commit') }}</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">{{ $t('solutions.pipeline.s5.tag') }}</span>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('solutions.pipeline.s5.title') }}</h4>
            <p class="text-xs text-zinc-500">{{ $t('solutions.pipeline.s5.desc') }}</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ {{ $t('solutions.pipeline.s5.commit') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. BẢN ĐỒ GIẢI PHÁP THEO TỪNG NGÀNH NGHỀ (4 CHUYÊN ĐỀ) -->
    <section id="bando-nganh" class="py-20 bg-white border-t border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('solutions.maps.badge')
          }}</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            {{ $t('solutions.maps.title') }}
          </h2>
          <p class="mt-3 text-base text-zinc-500">
            {{ $t('solutions.maps.desc') }}
          </p>
        </div>

        <div class="mt-16 space-y-16">
          <!-- Ngành 1: {{ $t('solutions.maps.m1.title') }} -->
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50/60 border border-zinc-200 rounded-3xl p-6 sm:p-8">
            <div class="lg:col-span-6 space-y-4 text-left">
              <span class="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">{{
                $t('solutions.maps.m1.tag') }}</span>
              <h3 class="text-2xl font-extrabold text-zinc-900">E-Commerce & Bán Lẻ Đa Kênh</h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                {{ $t('solutions.maps.m1.desc') }}
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">⚠️ Thách thức:</strong>
                  <span class="text-zinc-500 mt-1 block">{{ $t('solutions.maps.m1.challenge') }}</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">✓ Giải pháp ecor:</strong>
                  <span class="text-zinc-500 mt-1 block">{{ $t('solutions.maps.m1.solution') }}</span>
                </div>
              </div>
              <div class="pt-2 flex items-center justify-between text-xs font-bold">
                <span class="text-amber-700">{{ $t('solutions.maps.m1.resultTitle') }}</span>
                <span class="text-amber-600">{{ $t('solutions.maps.m1.resultValue') }}</span>
              </div>
            </div>

            <div class="lg:col-span-6">
              <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img src="/images/assets/solutions-ecom.png" alt="E-Commerce & Bán Lẻ Đa Kênh"
                  class="w-full h-64 sm:h-72 object-cover" />
                <div class="p-3 bg-white flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <span>Đồng bộ sàn: Shopee, TikTok Shop, Lazada</span>
                  <span class="text-amber-600 font-mono font-bold">API Sync: 0.12s</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ngành 2: {{ $t('solutions.maps.m2.title') }} -->
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50/60 border border-zinc-200 rounded-3xl p-6 sm:p-8">
            <div class="lg:col-span-6 lg:order-2 space-y-4 text-left">
              <span class="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">{{
                $t('solutions.maps.m2.tag') }}</span>
              <h3 class="text-2xl font-extrabold text-zinc-900">FMCG, Thực Phẩm & Chuỗi Kho Lạnh</h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                {{ $t('solutions.maps.m2.desc') }}
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">⚠️ Thách thức:</strong>
                  <span class="text-zinc-500 mt-1 block">{{ $t('solutions.maps.m2.challenge') }}</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">✓ Giải pháp ecor:</strong>
                  <span class="text-zinc-500 mt-1 block">{{ $t('solutions.maps.m2.solution') }}</span>
                </div>
              </div>
              <div class="pt-2 flex items-center justify-between text-xs font-bold">
                <span class="text-amber-700">{{ $t('solutions.maps.m2.resultTitle') }}</span>
                <span class="text-amber-600">{{ $t('solutions.maps.m2.resultValue') }}</span>
              </div>
            </div>

            <div class="lg:col-span-6 lg:order-1">
              <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img src="/images/assets/solutions-fmcg.png" alt="FMCG & Kho Lạnh"
                  class="w-full h-64 sm:h-72 object-cover" />
                <div class="p-3 bg-white flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <span>Nhiệt độ kho duy trì: -18.5°C</span>
                  <span class="text-amber-600 font-mono font-bold">IoT Sensor OK</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ngành 3: {{ $t('solutions.maps.m3.title') }} -->
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50/60 border border-zinc-200 rounded-3xl p-6 sm:p-8">
            <div class="lg:col-span-6 space-y-4 text-left">
              <span class="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">{{
                $t('solutions.maps.m3.tag') }}</span>
              <h3 class="text-2xl font-extrabold text-zinc-900">Đơn Vị Vận Tải & Dịch Vụ Logistics 3PL / 4PL</h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                {{ $t('solutions.maps.m3.desc') }}
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">⚠️ Thách thức:</strong>
                  <span class="text-zinc-500 mt-1 block">{{ $t('solutions.maps.m3.challenge') }}</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">✓ Giải pháp ecor:</strong>
                  <span class="text-zinc-500 mt-1 block">{{ $t('solutions.maps.m3.solution') }}</span>
                </div>
              </div>
              <div class="pt-2 flex items-center justify-between text-xs font-bold">
                <span class="text-amber-700">{{ $t('solutions.maps.m3.resultTitle') }}</span>
                <span class="text-amber-600">{{ $t('solutions.maps.m3.resultValue') }}</span>
              </div>
            </div>

            <div class="lg:col-span-6">
              <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img src="/images/assets/solutions-3pl.png" alt="Logistics 3PL / 4PL"
                  class="w-full h-64 sm:h-72 object-cover" />
                <div class="p-3 bg-white flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <span>e-POD đã ký điện tử: 1,420 chuyến</span>
                  <span class="text-amber-600 font-mono font-bold">Tối ưu tải 94.5%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ngành 4: {{ $t('solutions.maps.m4.title') }} -->
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50/60 border border-zinc-200 rounded-3xl p-6 sm:p-8">
            <div class="lg:col-span-6 lg:order-2 space-y-4 text-left">
              <span class="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{{
                $t('solutions.maps.m4.tag') }}</span>
              <h3 class="text-2xl font-extrabold text-zinc-900">Sản Xuất & Phân Phối B2B Đa Chi Nhánh</h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                {{ $t('solutions.maps.m4.desc') }}
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">⚠️ Thách thức:</strong>
                  <span class="text-zinc-500 mt-1 block">{{ $t('solutions.maps.m4.challenge') }}</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-700 block">✓ Giải pháp ecor:</strong>
                  <span class="text-zinc-500 mt-1 block">{{ $t('solutions.maps.m4.solution') }}</span>
                </div>
              </div>
              <div class="pt-2 flex items-center justify-between text-xs font-bold">
                <span class="text-amber-800">{{ $t('solutions.maps.m4.resultTitle') }}</span>
                <span class="text-amber-600">{{ $t('solutions.maps.m4.resultValue') }}</span>
              </div>
            </div>

            <div class="lg:col-span-6 lg:order-1">
              <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img src="/images/assets/solutions-b2b.png" alt="Sản Xuất & Phân Phối B2B"
                  class="w-full h-64 sm:h-72 object-cover" />
                <div class="p-3 bg-white flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <span>Kết nối SAP / Oracle / MISA</span>
                  <span class="text-amber-600 font-mono font-bold">12 Kho Vùng Liên Thông</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. TESTIMONIALS -->
    <section class="py-20 bg-zinc-50 border-t border-zinc-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('solutions.testimonials.badge')
        }}</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('solutions.testimonials.title') }}
        </h2>
        <p class="mt-3 text-sm text-zinc-500">{{ $t('solutions.testimonials.desc') }}</p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div class="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
            <div class="text-amber-400 text-sm">★★★★★</div>
            <p class="text-xs text-zinc-600 italic leading-relaxed">
              {{ $t('solutions.testimonials.t1.quote') }}
            </p>
            <div class="pt-2 border-t border-zinc-100 flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                TN</div>
              <div>
                <strong class="text-xs text-zinc-900 block">{{ $t('solutions.testimonials.t1.name') }}</strong>
                <span class="text-[10px] text-zinc-400">{{ $t('solutions.testimonials.t1.role') }}</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
            <div class="text-amber-400 text-sm">★★★★★</div>
            <p class="text-xs text-zinc-600 italic leading-relaxed">
              {{ $t('solutions.testimonials.t2.quote') }}
            </p>
            <div class="pt-2 border-t border-zinc-100 flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                ML</div>
              <div>
                <strong class="text-xs text-zinc-900 block">{{ $t('solutions.testimonials.t2.name') }}</strong>
                <span class="text-[10px] text-zinc-400">{{ $t('solutions.testimonials.t2.role') }}</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
            <div class="text-amber-400 text-sm">★★★★★</div>
            <p class="text-xs text-zinc-600 italic leading-relaxed">
              {{ $t('solutions.testimonials.t3.quote') }}
            </p>
            <div class="pt-2 border-t border-zinc-100 flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                HQ</div>
              <div>
                <strong class="text-xs text-zinc-900 block">{{ $t('solutions.testimonials.t3.name') }}</strong>
                <span class="text-[10px] text-zinc-400">{{ $t('solutions.testimonials.t3.role') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FORM NHẬN HỒ SƠ THIẾT KẾ -->
    <section class="py-20 bg-amber-900 text-zinc-900 font-bold">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400">{{ $t('solutions.cta.badge') }}</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {{ $t('solutions.cta.title') }}
        </h2>
        <p class="text-amber-200 text-sm max-w-xl mx-auto">
          {{ $t('solutions.cta.desc') }}
        </p>

        <div class="pt-4 flex flex-wrap justify-center gap-4">
          <button @click="$emit('open-modal', { type: 'demo', moduleName: 'Giải Pháp Ngành' })"
            class="px-8 py-4 rounded-xl bg-white hover:bg-zinc-50 text-amber-950 font-extrabold text-sm shadow-lg transition-all">
            {{ $t('solutions.cta.btn') }}
          </button>
          <a href="tel:0822235858"
            class="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-sm border border-amber-700 transition-all">
            {{ $t('solutions.cta.hotline') }} 097 8673867
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
