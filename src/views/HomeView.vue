<template>
  <div class="overflow-hidden bg-[#fafcff]">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-10 pb-20 lg:pt-16 lg:pb-28">
      <!-- Ambient Glows -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <!-- Left Hero Content -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-semibold text-amber-700 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>✨ Thế Hệ Mới: Nền tảng Quản trị Chuỗi Cung ứng Hợp nhất</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
              Một nguồn dữ liệu. Toàn bộ vận hành.
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
              Nền tảng SaaS tối ưu cho WMS (Quản lý kho), TMS (Quản lý vận tải) và tích hợp thương mại đa kênh. Tự động hoá chính xác dòng chảy hàng hóa từ nhà cung cấp đến tay khách hàng.
            </p>

            <!-- Action Buttons -->
            <div class="pt-2 flex flex-wrap items-center gap-4">
              <button 
                @click="$emit('open-modal', { type: 'demo', moduleName: 'Tổng quan eCor Hub' })"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                <span>Đăng ký trải nghiệm</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button 
                @click="$emit('open-modal', { type: 'demo', moduleName: 'Video Demo 2 phút' })"
                class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm hover:shadow transition-all"
              >
                <div class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span>Xem demo 2 phút</span>
              </button>
            </div>

            <!-- Social Proof -->
            <div class="pt-4 flex items-center gap-4">
              <div class="flex -space-x-2 overflow-hidden">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold">VL</span>
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold">LOI</span>
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-amber-400 text-zinc-900 font-bold text-[10px] font-bold">HUB</span>
              </div>
              <p class="text-sm text-zinc-500">
                <strong class="font-bold text-zinc-800">250+ doanh nghiệp</strong> tin dùng trên toàn quốc
              </p>
            </div>
          </div>

          <!-- Right Hero Interactive Diagram (Circular Hub) -->
          <div class="lg:col-span-5 relative flex items-center justify-center">
            <HeroInteractiveCanvas />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. CORE FEATURE PILLARS -->
    <section class="py-16 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Khối Giải Pháp Trọng Tâm</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          Giải Pháp Toàn Diện Cho Chuỗi Cung Ứng
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          Kiến trúc module độc lập nhưng liên kết chặt chẽ, hỗ trợ doanh nghiệp mở rộng quy mô tức thì không gián đoạn.
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <!-- WMS Nâng Cao -->
          <div class="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                WMS Nâng Cao
              </h3>
              <p class="text-sm text-zinc-500 leading-relaxed">
                Kiểm soát chính xác từng vị trí kệ hàng (Bin/Shelf), hỗ trợ quét mã vạch Barcode/QR, quản lý số lô, hạn sử dụng, và tự động hóa quy trình Pick & Pack tốc độ cao.
              </p>
              <ul class="space-y-2 text-sm text-zinc-600 pt-2">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Bản đồ kho 3D định vị trực quan</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Gợi ý đường lấy hàng ngắn nhất</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Kiểm kê hàng loạt không đóng cửa kho</span>
                </li>
              </ul>
            </div>
            <div class="pt-6 mt-6 border-t border-zinc-200/60">
              <router-link to="/wms" class="text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                <span>Khám phá WMS</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- TMS Linh Hoạt -->
          <div class="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                TMS Linh Hoạt
              </h3>
              <p class="text-sm text-zinc-500 leading-relaxed">
                Điều phối đội xe tự động dựa trên thuật toán tối ưu tuyến đường thông minh, giám sát hành trình GPS theo thời gian thực và ghi nhận biên bản giao hàng số hóa (e-POD).
              </p>
              <ul class="space-y-2 text-sm text-zinc-600 pt-2">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Thuật toán gom đơn & xếp tải xe</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Ứng dụng riêng cho tài xế giao vận</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Ký nhận điện tử e-POD chống thất lạc</span>
                </li>
              </ul>
            </div>
            <div class="pt-6 mt-6 border-t border-zinc-200/60">
              <router-link to="/tms" class="text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                <span>Khám phá TMS</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Thương Mại Tích Hợp -->
          <div class="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                Thương Mại Tích Hợp
              </h3>
              <p class="text-sm text-zinc-500 leading-relaxed">
                Đồng bộ tự động tồn kho và trạng thái đơn hàng xuyên suốt mọi kênh bán hàng: Shopee, TikTok Shop, Lazada, Website Brand và cửa hàng truyền thống trong 1 bảng điều khiển.
              </p>
              <ul class="space-y-2 text-sm text-zinc-600 pt-2">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Tránh overselling tức thì đa nền tảng</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Xử lý đơn tập trung một chạm</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Đối soát tiền hàng & phí vận chuyển</span>
                </li>
              </ul>
            </div>
            <div class="pt-6 mt-6 border-t border-zinc-200/60">
              <router-link to="/pos" class="text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                <span>Khám phá Đa Kênh</span>
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
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Khả Năng Mở Rộng</span>
            <h2 class="text-3xl font-extrabold text-zinc-900 tracking-tight">
              Extensions & Hệ Sinh Thái Không Giới Hạn
            </h2>
            <p class="text-zinc-600 text-sm leading-relaxed">
              Đồng bộ dữ liệu tức thời, phát triển theo cách của bạn. Tích hợp trơn tru với hệ thống POS bán buôn, kế toán tài chính và mạng lưới marketplace.
            </p>
            <div class="space-y-2 pt-2 text-sm text-zinc-700 font-medium">
              <div class="flex items-center gap-2 text-amber-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-zinc-800">API mở chuẩn OpenAPI / Webhook</span>
              </div>
              <div class="flex items-center gap-2 text-amber-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-zinc-800">Triển khai plug-and-play trong 15 phút</span>
              </div>
            </div>
          </div>

          <!-- Right 3 Orbiting Extension Bubbles -->
          <div class="lg:col-span-7 flex items-center justify-center sm:justify-end gap-6 sm:gap-8">
            <router-link to="/pos" class="flex flex-col items-center group">
              <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-amber-100/60 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 font-bold transition-all shadow-sm">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">POS Thương Mại</span>
              <span class="text-[11px] text-zinc-500">Bán lẻ & Quầy thu ngân</span>
            </router-link>

            <div class="w-12 h-0.5 bg-zinc-200 hidden sm:block"></div>

            <router-link to="/pos" class="flex flex-col items-center group">
              <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-amber-100/60 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 font-bold transition-all shadow-sm">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">Kế Toán Tự Động</span>
              <span class="text-[11px] text-zinc-500">Xuất hóa đơn & Thuế</span>
            </router-link>

            <div class="w-12 h-0.5 bg-zinc-200 hidden sm:block"></div>

            <router-link to="/giai-phap" class="flex flex-col items-center group">
              <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-amber-100/60 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-900 font-bold transition-all shadow-sm">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span class="mt-3 text-xs sm:text-sm font-bold text-zinc-800">Ecom Mở Rộng</span>
              <span class="text-[11px] text-zinc-500">TikTok, Shopee, Tiki</span>
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
          Được tin cậy bởi các đơn vị logistics & chuỗi bán lẻ hàng đầu
        </p>
        <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all pb-12">
          <span class="font-extrabold text-lg tracking-wider text-zinc-700">VIETTEL<span class="text-red-600">POST</span></span>
          <span class="font-black text-lg tracking-wide text-amber-600">tiki<span class="text-amber-500 font-bold">NOW</span></span>
          <span class="font-bold text-lg tracking-wider text-zinc-800">GHN EXPRESS</span>
          <span class="font-extrabold text-lg text-red-600 tracking-wider">J&T <span class="text-zinc-800">EXPRESS</span></span>
          <span class="font-extrabold text-lg text-amber-600 tracking-wide">SHOPEE<span class="text-zinc-700">EXPRESS</span></span>
        </div>

        <!-- Interactive Module Tabs -->
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          <button 
            v-for="tab in liveTabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border"
            :class="activeTab === tab.id ? 'bg-amber-400 text-zinc-900 font-bold border-amber-600 shadow-md' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'"
          >
            <span>{{ tab.icon }}</span>
            <span>{{ tab.label }}</span>
          </button>
        </div>

        <!-- Tab Content Box (Live Simulation Card) -->
        <div class="mt-8 max-w-5xl mx-auto bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-10 shadow-xl text-left transition-all">
          <!-- TAB 1: WMS -->
          <div v-if="activeTab === 'wms'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Smart Warehouse Management
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Kiểm soát chính xác 99.9% vị trí & dòng luân chuyển hàng
              </h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                Quản lý theo thời gian thực sơ đồ kệ đa tầng (Bin/Shelf/Zone), quy hoạch đường đi lấy hàng ngắn nhất (Wave/Batch Picking) và tự động nhận cảnh báo hạn sử dụng FIFO/FEFO.
              </p>
              
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">Tốc độ Pick & Pack</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">x2.5 lần</div>
                  <div class="text-[11px] text-zinc-400">Giảm lãng phí di chuyển</div>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">Độ chính xác tồn kho</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">99.92%</div>
                  <div class="text-[11px] text-zinc-400">Quét mã QR/Barcode</div>
                </div>
              </div>

              <ul class="space-y-1.5 text-xs text-zinc-600 pt-2 font-medium">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  <span>Sơ đồ kho 3D định vị chính xác vị trí tầng kệ theo thời gian thực</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  <span>Tự động phân bổ lô hàng theo nguyên tắc FIFO, FEFO và LIFO</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  <span>Tích hợp trực tiếp máy quét cầm tay PDA & cân điện tử</span>
                </li>
              </ul>

              <div class="pt-2">
                <router-link to="/wms" class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5">
                  <span>Chi tiết ecor WMS</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
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
                  <span class="font-bold text-zinc-700 ml-1">KHO TỔNG MIỀN BẮC (ZONE A-04)</span>
                </div>
                <span class="text-[10px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded">Đang xuất 42 đơn</span>
              </div>

              <!-- Shelf Slots Grid -->
              <div class="grid grid-cols-3 gap-2.5 my-4">
                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">KỆ A1-01</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">Sữa tươi hộp</strong>
                  <span class="text-[10px] text-amber-600 font-bold">Còn 450 thùng</span>
                </div>

                <div class="p-3 bg-amber-50 rounded-xl border border-amber-300 text-center shadow-sm">
                  <span class="text-[10px] text-amber-600 block font-mono">KỆ A1-02 (PICKING)</span>
                  <strong class="text-xs text-amber-900 font-bold block mt-0.5">Bánh mì ngũ cốc</strong>
                  <span class="text-[10px] text-amber-700 font-semibold">Đang lấy 28 hộp</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">KỆ A1-03</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">Nước tăng lực</strong>
                  <span class="text-[10px] text-amber-600 font-bold">Sắp hết (12 thùng)</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">KỆ A2-01</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">Gạo ST25 5kg</strong>
                  <span class="text-[10px] text-amber-600 font-bold">Còn 320 bao</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">KỆ A2-02</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">Dầu ăn hướng dương</strong>
                  <span class="text-[10px] text-amber-600 font-bold">Còn 180 thùng</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 text-center">
                  <span class="text-[10px] text-zinc-400 block font-mono">KỆ A2-03</span>
                  <strong class="text-xs text-zinc-800 font-semibold block mt-0.5">Hạt nêm Maggi</strong>
                  <span class="text-[10px] text-amber-600 font-bold">Còn 610 gói</span>
                </div>
              </div>

              <div class="p-2.5 rounded-lg bg-amber-100/60 text-amber-800 text-xs flex items-center justify-between font-medium">
                <span class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                  Lộ trình Wave #408: Đã hoàn thành 88%
                </span>
                <span class="font-mono text-[11px] text-zinc-600">Khoang X-02</span>
              </div>
            </div>
          </div>

          <!-- TAB 2: TMS -->
          <div v-else-if="activeTab === 'tms'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                AI Fleet & Dispatching
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Tối ưu hóa mọi tuyến đường, lấp đầy 94.5% tải trọng xe
              </h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                Thuật toán định tuyến AI tự động gom đơn theo cụm địa lý, tính toán thể tích CBM, hạn chế tối đa xe chạy rỗng và số hóa chứng từ giao hàng qua e-POD.
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">Giảm chi phí xăng dầu</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">-22%</div>
                  <div class="text-[11px] text-zinc-400">Tránh tắc đường & kẹt xe</div>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">Giao đúng hẹn (OTD)</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">98.2%</div>
                  <div class="text-[11px] text-zinc-400">Giám sát tài xế GPS</div>
                </div>
              </div>
              <div class="pt-2">
                <router-link to="/tms" class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5">
                  <span>Chi tiết ecor TMS</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </router-link>
              </div>
            </div>

            <div class="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 shadow-inner">
              <div class="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs">
                <span class="font-bold text-zinc-800">TRUNG TÂM ĐIỀU PHỐI TUYẾN HCM - MIỀN ĐÔNG</span>
                <span class="text-amber-600 font-bold bg-amber-100 px-2 py-0.5 rounded">GPS Active</span>
              </div>
              <div class="space-y-3 my-4">
                <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                  <div>
                    <strong class="text-zinc-800">Xe 51C-892.41 (Tải 8 tấn)</strong>
                    <div class="text-zinc-500 text-[11px]">Tài xế: Trần Văn Hùng • Tuyến QL1A</div>
                  </div>
                  <div class="text-right">
                    <span class="text-amber-600 font-bold">Đang giao điểm 3/5</span>
                    <div class="text-[10px] text-zinc-400">Tải: 7.68 / 8.00 Tấn (96%)</div>
                  </div>
                </div>
                <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
                  <div>
                    <strong class="text-amber-900">Biên bản e-POD điện tử #8930</strong>
                    <div class="text-amber-700 text-[11px]">Ký nhận khách hàng: MM Mega An Phú</div>
                  </div>
                  <span class="text-xs font-bold text-amber-600 bg-white px-2 py-1 rounded shadow-sm">Đã ký số</span>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 3: OMNICHANNEL -->
          <div v-else-if="activeTab === 'omni'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Omnichannel Commerce Hub
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Đồng bộ tồn kho & đơn hàng đa sàn 0 độ trễ
              </h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                Tự động trừ kho ngay khi có đơn từ Shopee, TikTok Shop, Lazada hay Tiki. Ngăn chặn triệt để tình trạng cháy hàng hoặc phạt vi phạm tỷ lệ hủy đơn trên sàn.
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">Tốc độ đồng bộ tồn</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">&lt; 0.12s</div>
                  <div class="text-[11px] text-zinc-400">Webhook Real-time API</div>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">Tỷ lệ hủy đơn quá hạn</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">0.00%</div>
                  <div class="text-[11px] text-zinc-400">Tự động khóa tồn an toàn</div>
                </div>
              </div>
              <div class="pt-2">
                <router-link to="/pos" class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5">
                  <span>Khám phá Đồng Bộ Đa Kênh</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </router-link>
              </div>
            </div>

            <div class="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 shadow-inner">
              <div class="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs">
                <span class="font-bold text-zinc-800">LUỒNG ĐỒNG BỘ MULTI-STORE REALTIME</span>
                <span class="text-amber-600 font-bold bg-amber-100 px-2 py-0.5 rounded">Mega Sale Ready</span>
              </div>
              <div class="space-y-3 my-4">
                <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2.5">
                    <span class="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 font-black flex items-center justify-center">S</span>
                    <div>
                      <strong class="text-zinc-800">Shopee Mall Flagship</strong>
                      <div class="text-zinc-400 text-[11px]">Đơn #SP89201 • 1.250.000đ</div>
                    </div>
                  </div>
                  <span class="text-amber-600 font-bold text-[11px]">Trừ kho WMS thành công</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2.5">
                    <span class="w-7 h-7 rounded-lg bg-zinc-900 text-white font-black flex items-center justify-center">TT</span>
                    <div>
                      <strong class="text-zinc-800">TikTok Shop Live Studio</strong>
                      <div class="text-zinc-400 text-[11px]">Đơn #TT41028 • 890.000đ</div>
                    </div>
                  </div>
                  <span class="text-amber-600 font-bold text-[11px]">In vận đơn 0.5s</span>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 4: POS & ACCOUNTING -->
          <div v-else-if="activeTab === 'pos'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                POS & Sổ Sách Tự Động
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Thanh toán 3 giây, VietQR động & vận hành offline 100%
              </h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                Máy thu ngân hoạt động trơn tru ngay cả khi rớt mạng internet với kiến trúc Offline-first SQLite. Tự động đồng bộ ngược lên máy chủ khi có mạng và xuất hóa đơn điện tử hợp chuẩn.
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">Tốc độ thanh toán</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">3 Giây</div>
                  <div class="text-[11px] text-zinc-400">VietQR động ngân hàng</div>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div class="text-xs text-zinc-500">Hoạt động khi mất mạng</div>
                  <div class="text-xl font-black text-amber-600 mt-0.5">100%</div>
                  <div class="text-[11px] text-zinc-400">Không gián đoạn quầy thu</div>
                </div>
              </div>
              <div class="pt-2">
                <router-link to="/pos" class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5">
                  <span>Chi tiết ecor POS</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </router-link>
              </div>
            </div>

            <div class="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 shadow-inner">
              <div class="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs">
                <span class="font-bold text-zinc-800">QUẦY THU NGÂN #02 - CHI NHÁNH QUẬN 1</span>
                <span class="text-amber-600 font-bold bg-amber-100 px-2 py-0.5 rounded">Offline-Safe</span>
              </div>
              <div class="p-4 bg-white rounded-xl border border-zinc-200 my-4 text-xs space-y-2">
                <div class="flex justify-between font-bold text-zinc-800">
                  <span>Đơn hàng #EC-4890</span>
                  <span class="text-amber-600">895.000 đ</span>
                </div>
                <div class="text-zinc-500 text-[11px]">Khách hàng VIP: Lê Phương Vy (Chiết khấu 10%)</div>
                <div class="p-2.5 bg-amber-50 text-amber-800 rounded-lg text-[11px] flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  VietQR động xác nhận tiền vào tài khoản tức thì
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CALL TO ACTION BANNER -->
    <section class="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-500 text-white relative overflow-hidden">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Sẵn sàng chuẩn hóa quy trình chuỗi cung ứng của bạn?
        </h2>
        <p class="text-amber-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Trải nghiệm trọn vẹn sức mạnh kết hợp giữa WMS, TMS và E-Commerce. Khởi tạo tài khoản trải nghiệm 14 ngày miễn phí, không cần thẻ tín dụng.
        </p>

        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'Tổng thể ecor Platform' })"
            class="px-8 py-4 rounded-xl bg-white hover:bg-zinc-50 text-amber-700 font-extrabold text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95"
          >
            Bắt đầu dùng thử ngay
          </button>
          <a 
            href="tel:0822235858"
            class="px-7 py-4 rounded-xl bg-amber-400/60 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base border border-white/30 backdrop-blur-sm transition-all"
          >
            Hotline:  097 8673867
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroInteractiveCanvas from '@/components/HeroInteractiveCanvas.vue'

defineEmits(['open-modal'])

const activeTab = ref('wms')

const liveTabs = [
  { id: 'wms', label: 'WMS - Quản Lý Kho Vận', icon: '📦' },
  { id: 'tms', label: 'TMS - Điều Phối Vận Tải', icon: '🚚' },
  { id: 'omni', label: 'Omnichannel - Đa Kênh', icon: '🛍️' },
  { id: 'pos', label: 'POS & Kế Toán Mở Rộng', icon: '💳' }
]
</script>
