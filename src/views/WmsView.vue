<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <!-- Animated Canvas Background -->
      <HeroCanvas :opacity="0.65" :particleCount="52" />

      <!-- Glow -->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-amber-100/70 via-amber-50/40 to-transparent blur-3xl pointer-events-none -z-10">
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <!-- Tag -->
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>{{ $t('wms.hero.badge') }}</span>
        </div>

        <!-- Title -->
        <h1
          class="mt-6 text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-5xl mx-auto">
          {{ $t('wms.hero.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Giải pháp WMS đám mây chuyên sâu cho doanh nghiệp bán lẻ đa kênh, chuỗi phân phối FMCG và đơn vị 3PL
          Logistics. Tự động hóa từ Inbound đến Outbound với độ chuẩn xác tồn kho 99.98%.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor WMS - Quản trị kho' })"
            class="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-95">
            {{ $t('wms.hero.demo') }}
          </button>
          <button @click="$emit('open-modal', { type: 'demo', moduleName: 'Video 3D Kho Vận WMS' })"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm hover:shadow transition-all flex items-center gap-2">
            <div class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span>{{ $t('wms.hero.video') }}</span>
          </button>
        </div>

        <!-- Trust Badges -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            {{ $t('wms.hero.trust1') }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            {{ $t('wms.hero.trust2') }}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            {{ $t('wms.hero.trust3') }}
          </span>
        </div>

        <!-- 3D LIVE WMS TERMINAL DASHBOARD SHOWCASE MOCKUP -->
        <div class="mt-12 max-w-5xl mx-auto relative group">
          <!-- Ambient Glow Layer -->
          <div
            class="absolute -inset-1.5 bg-gradient-to-r from-amber-400/25 via-amber-500/20 to-amber-400/25 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
          </div>

          <div
            class="relative bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,112,184,0.12)] border border-zinc-200/90 overflow-hidden transition-all duration-500 hover:shadow-[0_28px_65px_rgba(8,112,184,0.18)]">
            <img src="/images/assets/wms-hero-showcase.png" alt="Mô hình Digital Twin"
              class="w-full h-auto object-contain block rounded-3xl" />

            <!-- Interactive Floating Quick Actions Overlay -->
            <div class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2">
              <button @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor WMS - 3D Digital Twin Mega Hub' })"
                class="px-4 py-2 rounded-xl bg-zinc-900/85 hover:bg-zinc-900 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-all flex items-center gap-2 border border-white/20 hover:scale-105">
                <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>{{ $t('wms.hero.digitalTwin') }}</span>
                <svg class="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. FOUR KEY METRICS -->
    <section class="py-12 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">99.98%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('wms.metrics.m1.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">Khử triệt để thất thoát hàng hóa, sai lệch số liệu thực tế so với sổ
              sách hệ thống kế toán.</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">{{ $t('wms.metrics.m2.val') }}</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('wms.metrics.m2.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">Chiến lược Wave picking gom nhóm đơn hàng thông minh, tối ưu đường đi
              chuyển ngắn nhất trong kho.</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">-45%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('wms.metrics.m3.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">Giao diện PDA chuyên dụng với chỉ dẫn màu trực quan, công nhân kho mới
              có thể làm việc ngay sau 30 phút.</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">{{ $t('wms.metrics.m4.val') }}</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">{{ $t('wms.metrics.m4.title') }}</div>
            <p class="text-xs text-zinc-500 mt-1">Quy trình chuẩn hóa danh mục SKU và chuyển đổi dữ liệu kho bãi tự
              động, không làm gián đoạn bán hàng.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FOUR CORE PILLARS OF ECOR WMS -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('wms.pillars.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('wms.pillars.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          Được thiết kế dựa trên tiêu chuẩn quản trị kho vận toàn cầu, giải phóng sức lao động thủ công và tự động hóa
          quyết định điều phối.
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <!-- Pillar 1 -->
          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <span class="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">PILLAR 01</span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mt-5">{{ $t('wms.pillars.p1.title') }}
            </h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              Số hóa toàn diện sơ đồ kho thực tế lên không gian 3 chiều. Tự động tính toán tải trọng sàn, dung tích ô
              chứa (CBM) và tỷ lệ lấp đầy theo thời gian thực.
            </p>
            <ul class="space-y-2 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ $t('wms.pillars.p1.f1') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ $t('wms.pillars.p1.f2') }}</span>
              </li>
            </ul>
          </div>

          <!-- Pillar 2 -->
          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">PILLAR 02</span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mt-5">{{ $t('wms.pillars.p2.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              Thuật toán trí tuệ nhân tạo gom nhóm hàng trăm đơn lẻ thành từng đợt lấy hàng (Wave), tối ưu hóa lộ trình
              ngắn nhất qua thuật toán TSP (Traveling Salesperson).
            </p>
            <ul class="space-y-2 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ $t('wms.pillars.p2.f1') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ $t('wms.pillars.p2.f2') }}</span>
              </li>
            </ul>
          </div>

          <!-- Pillar 3 -->
          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">PILLAR 03</span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mt-5">{{ $t('wms.pillars.p3.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              Giải quyết bài toán cận date, hết date gây tổn thất hàng triệu USD cho chuỗi cung ứng FMCG, Dược phẩm và
              {{ $t('wmsMisc.fresh') }}
            </p>
            <ul class="space-y-2 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ $t('wms.pillars.p3.f1') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ $t('wms.pillars.p3.f2') }}</span>
              </li>
            </ul>
          </div>

          <!-- Pillar 4 -->
          <div class="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <span class="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">PILLAR 04</span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mt-5">{{ $t('wms.pillars.p4.title') }}</h3>
            <p class="text-sm text-zinc-500 mt-2 leading-relaxed">
              Kiểm kê định kỳ liên tục theo khu vực (Zone) hoặc nhóm SKU ABC mà không cần đóng cửa ngừng hoạt động trung
              tâm phân phối dù chỉ 1 giờ.
            </p>
            <ul class="space-y-2 text-xs text-zinc-600 mt-4 font-medium">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ $t('wms.pillars.p4.f1') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ $t('wms.pillars.p4.f2') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. QUY TRÌNH 5 BƯỚC KHÉP KÍN -->
    <section class="py-20 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('wms.steps.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('wms.steps.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          Kiểm soát chặt chẽ từng nhịp thở của dòng hàng từ cổng vào Inbound cho tới khi bàn giao hoàn tất cho đơn vị
          vận tải Outbound.
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
          <div class="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
            <span class="text-[10px] font-bold text-amber-600 uppercase">STEP 01</span>
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">↓
            </div>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('wms.steps.s1.title') }}</h4>
            <p class="text-xs text-zinc-500 leading-relaxed">Quét mã Barcode/QR đối soát với PO nhà cung cấp. Kiểm tra
              sai lệch thừa/thiếu, ghi nhận Barcode lô sản xuất ngay tại dock cửa kho.</p>
          </div>

          <div class="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
            <span class="text-[10px] font-bold text-amber-600 uppercase">STEP 02</span>
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">↗
            </div>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('wms.steps.s2.title') }}</h4>
            <p class="text-xs text-zinc-500 leading-relaxed">Thuật toán đề xuất chính xác vị trí kệ trống tối ưu dựa
              theo kích thước, khối lượng, điều kiện bảo quản và tần suất xuất nhập.</p>
          </div>

          <div class="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
            <span class="text-[10px] font-bold text-amber-600 uppercase">STEP 03</span>
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">⚙
            </div>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('wms.steps.s3.title') }}</h4>
            <p class="text-xs text-zinc-500 leading-relaxed">Theo dõi biến động tồn theo thời gian thực. Tự động thông
              báo luân chuyển hàng hóa sang khu vực thanh lý hoặc đẩy date trước khi hết hạn.</p>
          </div>

          <div class="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
            <span class="text-[10px] font-bold text-amber-600 uppercase">STEP 04</span>
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🛒
            </div>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('wms.steps.s4.title') }}</h4>
            <p class="text-xs text-zinc-500 leading-relaxed">Phân bổ nhân sự nhặt hàng thông qua PDA theo lộ trình ngắn
              nhất. Bàn đóng gói kiểm tra lại barcode lần cuối trước khi dán vận đơn vận chuyển.</p>
          </div>

          <div class="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
            <span class="text-[10px] font-bold text-amber-600 uppercase">STEP 05</span>
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🚚
            </div>
            <h4 class="font-bold text-zinc-900 text-sm">{{ $t('wms.steps.s5.title') }}</h4>
            <p class="text-xs text-zinc-500 leading-relaxed">Bắn mã quét biên bản bàn giao cho shipper/xe tải. Tự động
              ký số điện tử e-POD và đồng bộ trạng thái đơn hàng sang các kênh bán lẻ tức thì.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. THREE INDUSTRY MODELS WITH ACTUAL FIGMA IMAGES -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('wms.models.badge') }}</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('wms.models.title') }}
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          Dù bạn vận hành kho thương mại điện tử tốc độ cao, chuỗi kho lạnh nhạy cảm hay kho 3PL đa chủ hàng, ecor WMS
          đều có kịch bản xử lý chuyên biệt.
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <!-- Model 1 -->
          <div
            class="rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div class="relative h-48 overflow-hidden bg-zinc-100">
                <img src="/images/assets/model-ecom.png" alt="Kho Bán Lẻ & E-commerce"
                  class="w-full h-full object-cover" />
                <span
                  class="absolute top-3 left-3 bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold px-2 py-0.5 rounded">{{ $t('wmsMisc.ecomTag') }}</span>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold text-zinc-900">{{ $t('wms.models.m1.title') }}</h3>
                <p class="text-xs text-zinc-500 mt-2 leading-relaxed">
                  Được xây dựng cho các chiến dịch Mega Sale lên đến 100.000+ đơn/ngày. Đồng bộ tồn kho tức thì 1 giây
                  sang Shopee, TikTok Shop, Lazada, sàn TMĐT & Chuỗi cửa hàng offline.
                </p>
                <div class="mt-4 space-y-1.5 text-xs text-zinc-600 font-medium">
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m1.f1') }}</div>
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m1.f2') }}</div>
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m1.f3') }}</div>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <span class="text-xs font-bold text-amber-600 block border-t border-zinc-100 pt-4">Xử lý cam kết: &lt; 2
                phút / đơn hàng</span>
            </div>
          </div>

          <!-- Model 2 -->
          <div
            class="rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div class="relative h-48 overflow-hidden bg-zinc-100">
                <img src="/images/assets/model-cold.png" alt="Kho Lạnh & FMCG" class="w-full h-full object-cover" />
                <span
                  class="absolute top-3 left-3 bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold px-2 py-0.5 rounded">FMCG
                  & Kho Lạnh</span>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold text-zinc-900">{{ $t('wms.models.m2.title') }}</h3>
                <p class="text-xs text-zinc-500 mt-2 leading-relaxed">
                  Quản lý nghiêm ngặt dải nhiệt độ, độ ẩm của từng zone chuyên biệt. Quản lý chặt chẽ date xuất khẩu,
                  chuẩn HACCP, truy vết nguồn gốc lô hàng theo chuỗi cung ứng.
                </p>
                <div class="mt-4 space-y-1.5 text-xs text-zinc-600 font-medium">
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m2.f1') }}</div>
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m2.f2') }}</div>
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m2.f3') }}</div>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <span class="text-xs font-bold text-amber-600 block border-t border-zinc-100 pt-4">Chuẩn an toàn thực phẩm
                & Y tế</span>
            </div>
          </div>

          <!-- Model 3 -->
          <div
            class="rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div class="relative h-48 overflow-hidden bg-zinc-100">
                <img src="/images/assets/model-3pl.png" alt="Kho {{ $t('wms.models.m3.tag') }}" class="w-full h-full object-cover" />
                <span
                  class="absolute top-3 left-3 bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold px-2 py-0.5 rounded">3PL
                  Logistics</span>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold text-zinc-900">{{ $t('wms.models.m3.title') }}</h3>
                <p class="text-xs text-zinc-500 mt-2 leading-relaxed">
                  Kiến trúc Multi-tenant cho phép quản lý hàng trăm chủ hàng (Customers/Shippers) trên cùng một giao
                  diện duy nhất. Tách biệt dữ liệu và cấu hình biểu phí lưu kho CBM tự động.
                </p>
                <div class="mt-4 space-y-1.5 text-xs text-zinc-600 font-medium">
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m3.f1') }}</div>
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m3.f2') }}</div>
                  <div class="flex items-center gap-2">✓ {{ $t('wms.models.m3.f3') }}</div>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <span class="text-xs font-bold text-amber-600 block border-t border-zinc-100 pt-4">Tiết kiệm 80% thời gian
                chốt công nợ 3PL</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. BẢNG SO SÁNH TRƯỚC VÀ SAU KHI DÙNG WMS -->
    <section class="py-20 bg-white border-t border-zinc-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('wms.compare.badge') }}</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('wms.compare.title') }}
        </h2>
        <p class="mt-3 text-sm text-zinc-500 max-w-2xl mx-auto">
          Xem sự chuyển dịch ngoạn mục từ vận hành kho thủ công truyền thống sang trung tâm xử lý dữ liệu số hóa thông
          minh.
        </p>

        <div class="mt-10 border border-zinc-200 rounded-3xl overflow-hidden shadow-md text-left text-xs sm:text-sm">
          <div class="grid grid-cols-12 bg-zinc-100 p-4 font-bold text-zinc-700">
            <div class="col-span-4 uppercase tracking-wider text-xs">{{ $t('wms.compare.h1') }}</div>
            <div class="col-span-4 uppercase tracking-wider text-xs text-zinc-500">{{ $t('wms.compare.h2') }}</div>
            <div
              class="col-span-4 uppercase tracking-wider text-xs text-amber-700 font-extrabold flex items-center gap-1">
              <span>{{ $t('wms.compare.h3') }}</span>
            </div>
          </div>

          <div class="divide-y divide-zinc-100">
            <div class="grid grid-cols-12 p-4 items-center">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('wms.compare.r1.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('wms.compare.r1.before') }}
              </div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('wms.compare.r1.after') }}
              </div>
            </div>

            <div class="grid grid-cols-12 p-4 items-center bg-zinc-50/50">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('wms.compare.r2.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('wms.compare.r2.before') }}</div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('wms.compare.r2.after') }}
              </div>
            </div>

            <div class="grid grid-cols-12 p-4 items-center">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('wms.compare.r3.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('wms.compare.r3.before') }}
              </div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('wms.compare.r3.after') }}
              </div>
            </div>

            <div class="grid grid-cols-12 p-4 items-center bg-zinc-50/50">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('wms.compare.r4.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('wms.compare.r4.before') }}
              </div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('wms.compare.r4.after') }}
              </div>
            </div>

            <div class="grid grid-cols-12 p-4 items-center">
              <div class="col-span-4 font-semibold text-zinc-800">{{ $t('wms.compare.r5.title') }}</div>
              <div class="col-span-4 text-zinc-500">{{ $t('wms.compare.r5.before') }}
              </div>
              <div class="col-span-4 font-semibold text-amber-700 flex items-center gap-1.5">
                <span class="text-amber-500 font-bold">✓</span>
                {{ $t('wms.compare.r5.after') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. FORM ĐĂNG KÝ KHẢO SÁT KHO -->
    <section class="py-20 bg-zinc-50 border-t border-zinc-200">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('wms.form.badge') }}</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('wms.form.title') }}
        </h2>
        <p class="mt-3 text-sm text-zinc-500 leading-relaxed">
          Đội ngũ kỹ sư giải pháp ecor sẽ đến khảo sát mặt bằng thực tế, lập mô phỏng ô kệ 3D và tư vấn phương án tinh
          gọn luồng kho hoàn toàn miễn phí.
        </p>

        <form @submit.prevent="handleWmsSubmit"
          class="mt-8 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-4">
          <div v-if="wmsSuccess" class="p-4 bg-amber-50 text-amber-800 rounded-2xl text-center text-sm">
            {{ $t('wms.form.success') }}
          </div>

          <div v-else class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('wms.form.nameLabel') }}</label>
                <input v-model="wmsForm.name" required placeholder="{{ $t('wms.form.namePlaceholder') }}"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('wms.form.phoneLabel') }}</label>
                <input v-model="wmsForm.phone" required :placeholder="'0909 xxx xxx'"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('wms.form.companyLabel') }}</label>
                <input v-model="wmsForm.company" required placeholder="{{ $t('wms.form.companyPlaceholder') }}"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('wms.form.emailLabel') }}</label>
                <input v-model="wmsForm.email" required :placeholder="'hoang.tran@company.com'"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('wms.form.typeLabel') }}</label>
                <select v-model="wmsForm.type"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm bg-white">
                  <option value="Kho Bán Lẻ & Thương Mại Điện Tử (Omnichannel)">{{ $t('wms.form.type1') }}</option>
                  <option value="Kho Phân Phối {{ $t('wms.models.m2.tag') }}">{{ $t('wms.form.type2') }}</option>
                  <option value="Kho 3PL Logistics Đa Chủ Hàng">{{ $t('wms.form.type3') }}</option>
                  <option value="Kho Vật Tư Nhà Máy Sản Xuất">{{ $t('wms.form.type4') }}</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('wms.form.areaLabel') }}</label>
                <select v-model="wmsForm.area"
                  class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm bg-white">
                  <option value="{{ $t('wms.form.area1') }}">{{ $t('wmsMisc.areaMin') }}</option>
                  <option value="{{ $t('wms.form.area2') }}">1,000 – 5,000 m²</option>
                  <option value="{{ $t('wms.form.area3') }}">5,000 – 20,000 m²</option>
                  <option value="{{ $t('wmsMisc.areaMax') }}">{{ $t('wms.form.area4') }}</option>
                </select>
              </div>
            </div>

            <button type="submit"
              class="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-bold text-sm shadow-md transition-all">
              {{ $t('wms.form.submit') }}
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

const wmsSuccess = ref(false)
const wmsForm = reactive({
  name: '',
  phone: '',
  company: '',
  email: '',
  type: 'Kho Bán Lẻ & Thương Mại Điện Tử (Omnichannel)',
  area: '1,000 – 5,000 m²'
})

function handleWmsSubmit() {
  wmsSuccess.value = true
}

const { t } = useI18n()
</script>
