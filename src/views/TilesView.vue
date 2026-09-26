<template>
  <div class="bg-white text-slate-900 overflow-hidden">
     
    <!-- HERO -->
    <section class="relative w-full py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[380px] bg-amber-300/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div class="absolute top-1/3 -right-24 w-96 h-96 bg-amber-200/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div class="max-w-4xl flex flex-col gap-5">
          <div class="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800">
            <span class="material-symbols-outlined text-[18px] text-amber-600">neurology</span>
            <span class="font-mono text-xs uppercase tracking-widest font-bold">Kỷ Nguyên AI &amp; LiDAR Mới • Ngành Gạch Ốp Lát &amp; VLXD</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight uppercase leading-[1.12]">
            Kỷ Nguyên AI Cho Ngành Gạch:
            <span class="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent">Nhận Diện Vân Trong Vài Giây</span>,
            Phối Cảnh 3D &amp; Quét AR LiDAR Thời Gian Thực
          </h1>

          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Đột phá doanh số cho nhà máy sản xuất, chuỗi showroom và đại lý phân phối với bộ giải pháp toàn diện:
            <strong class="text-slate-900">AI Vision quét vân</strong> —
            <strong class="text-slate-900">Generative 3D Staging tức thì</strong> —
            <strong class="text-slate-900">AR LiDAR Mobile App đo sàn tường 1:1</strong> —
            <strong class="text-slate-900">AI Sales Closer</strong> kết nối WMS/TMS ecor.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <button @click="openDemo('all')"
              class="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-px transition-all">
              <span class="material-symbols-outlined text-[20px]">document_scanner</span>
              Trải Nghiệm Quét Vân Ngay
            </button>
            <a href="#ar-lidar-app"
              class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 border border-slate-300 font-bold text-sm hover:text-amber-700 hover:border-amber-400 hover:bg-amber-50/50 shadow-sm transition-all">
              <span class="material-symbols-outlined text-amber-600 text-[20px]">view_in_ar</span>
              Xem Trải Nghiệm AR LiDAR
            </a>
            <a href="#live-demo-section"
              class="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-600 hover:text-slate-900 font-mono text-xs font-semibold hover:bg-slate-100 transition-all">
              <span class="material-symbols-outlined text-amber-600 text-[20px]">play_circle</span>
              Xem Demo Trực Quan
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 max-w-3xl">
            <div v-for="m in heroMetrics" :key="m.label" class="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
              <div class="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <span class="material-symbols-outlined text-[22px]">{{ m.icon }}</span>
              </div>
              <div>
                <div class="font-extrabold text-xl" :class="m.accent ? 'text-amber-600' : 'text-slate-900'">{{ m.value }}</div>
                <div class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{{ m.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pipeline card -->
        <div class="w-full rounded-2xl bg-white border border-slate-200/90 p-5 lg:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-red-400"></span>
              <span class="w-3 h-3 rounded-full bg-amber-400"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span class="font-mono text-xs text-slate-500 ml-2">pipeline://ecor-tile-vision-onnx-v4.8</span>
            </div>
            <span class="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 font-mono text-xs font-bold text-amber-800">DEMO • DỮ LIỆU MINH HỌA</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-5 items-stretch">
            <div class="lg:col-span-3 flex flex-col gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs uppercase tracking-wider text-amber-800 font-bold">1. Ảnh Mẫu Khách Gửi</span>
                <span class="material-symbols-outlined text-slate-400 text-[18px]">photo_camera</span>
              </div>
              <div class="relative w-full h-44 rounded-lg overflow-hidden border border-slate-200">
                <img class="w-full h-full object-cover" src="/images/tiles/tile-photo.jpg" alt="Ảnh viên gạch marble Calacatta gold khách gửi" loading="lazy" />
                <div class="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-900/80 text-amber-400 font-mono text-[10px]">Zalo_IMG_9942.jpg</div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">Khách gửi ảnh qua Zalo hoặc nhân viên chụp viên gạch thực tế tại công trình bằng camera smartphone.</p>
            </div>

            <div class="lg:col-span-4 flex flex-col justify-between p-4 rounded-xl bg-amber-50/50 border border-amber-300">
              <div>
                <div class="flex items-center justify-between pb-3 border-b border-amber-200/70">
                  <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-amber-700 text-[20px]">filter_center_focus</span>
                    <span class="font-mono text-xs text-amber-900 uppercase tracking-wider font-bold">2. AI Vision Scan &amp; WMS</span>
                  </div>
                  <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold">KHỚP &gt; 95%</span>
                </div>
                <div class="flex flex-col gap-2 font-mono text-xs pt-3">
                  <div v-for="row in scanRows" :key="row.k" class="flex justify-between gap-2 py-1.5 px-2 rounded bg-white border border-slate-200">
                    <span class="text-slate-500">{{ row.k }}</span>
                    <span class="font-semibold text-right" :class="row.cls">{{ row.v }}</span>
                  </div>
                </div>
              </div>
              <div class="pt-3">
                <div class="flex items-center justify-between text-[11px] text-slate-500 mb-1 font-mono">
                  <span>Vector Embedding Indexing</span>
                  <span class="text-amber-700 font-bold">0.18s</span>
                </div>
                <div class="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden"><div class="h-full bg-amber-400 rounded-full w-full"></div></div>
              </div>
            </div>

            <div class="lg:col-span-5 flex flex-col gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs uppercase tracking-wider text-amber-800 font-bold">3. Phối Cảnh 3D Nhanh (Vài Giây)</span>
                <span class="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono text-[10px] font-semibold">4K Photorealistic</span>
              </div>
              <div class="relative w-full h-44 rounded-lg overflow-hidden border border-slate-200 group">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/tiles/room-3d.jpg" alt="Phối cảnh 3D phòng khách lát gạch Calacatta" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                  <div class="flex items-center justify-between w-full">
                    <div>
                      <div class="font-semibold text-sm text-white">Phòng Khách Modern Minimal</div>
                      <div class="font-mono text-[10px] text-slate-200">Lát thẳng mạch • Ron kem 1.5mm</div>
                    </div>
                    <span class="p-1.5 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center">
                      <span class="material-symbols-outlined text-[16px]">view_in_ar</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between pt-1">
                <span class="text-xs text-slate-600">Đã render xong sàn &amp; vách ti vi.</span>
                <a href="#live-demo-section" class="font-mono text-xs text-amber-700 font-bold hover:underline flex items-center gap-1">
                  Xuất file VR 360° <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AR LIDAR APP -->
    <section id="ar-lidar-app" class="w-full py-20 bg-gradient-to-b from-amber-50/50 via-white to-slate-50 border-y border-amber-200/60 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div class="max-w-3xl flex flex-col gap-3">
            <div class="font-mono text-xs text-amber-800 uppercase tracking-widest font-bold flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              Công Nghệ Độc Quyền • LiDAR 3D Meshing &amp; ARCore
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">ecor Tiles AR Mobile App — Quét Sàn &amp; Tường Thời Gian Thực</h2>
            <p class="text-sm sm:text-base text-slate-600">
              Dành riêng cho Kiến trúc sư, Showroom Sales và Thợ thi công mang điện thoại/iPad đến trực tiếp công trình: quét diện tích tức thì, ốp gạch thực tế ảo tỉ lệ 1:1, tự tính hao hụt và chốt đơn ngay tại hiện trường.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-xs font-bold flex items-center gap-1.5">
              <span class="material-symbols-outlined text-slate-700 text-[18px]">phone_iphone</span> iOS LiDAR
            </span>
            <span class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-xs font-bold flex items-center gap-1.5">
              <span class="material-symbols-outlined text-emerald-600 text-[18px]">android</span> Android ARCore
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-6 flex flex-col gap-5">
            <div v-for="f in arFeatures" :key="f.title" class="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
              <div class="flex items-start gap-4">
                <div class="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                  <span class="material-symbols-outlined text-[24px]">{{ f.icon }}</span>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="font-bold text-base text-slate-900">{{ f.title }}</h3>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{{ f.desc }}</p>
                  <div v-if="f.checks" class="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-amber-800 font-semibold">
                    <span v-for="c in f.checks" :key="c" class="flex items-center gap-1">
                      <span class="material-symbols-outlined text-[15px] text-amber-600">check_circle</span> {{ c }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Phone simulator -->
          <div class="lg:col-span-6 flex justify-center">
            <div class="relative w-full max-w-[380px] rounded-[36px] bg-slate-950 p-3 shadow-[0_25px_60px_rgba(15,23,42,0.35)] border-4 border-slate-800">
              <div class="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                <span class="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              </div>
              <div class="relative rounded-[28px] overflow-hidden aspect-[9/18.5] bg-slate-900 flex flex-col justify-between">
                <img class="absolute inset-0 w-full h-full object-cover" src="/images/tiles/ar-room.jpg" alt="Quét phòng bằng LiDAR AR" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60 pointer-events-none"></div>

                <div class="relative z-20 pt-8 px-4 flex items-center justify-between">
                  <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 border border-amber-400/40 text-amber-400 font-mono text-[10px] font-bold">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>LiDAR AR LIVE: 60 FPS</span>
                  </div>
                  <span class="px-2 py-1 rounded-md bg-slate-900/80 text-white font-mono text-[10px] border border-white/20">Sàn: <strong>48.6 m²</strong></span>
                </div>

                <div class="relative z-10 flex flex-col items-center justify-center">
                  <div class="w-32 h-32 border-2 border-dashed border-amber-300/80 rounded-2xl flex items-center justify-center relative animate-pulse">
                    <span class="material-symbols-outlined text-amber-300 text-[32px]">filter_center_focus</span>
                    <div class="absolute top-1 left-2 font-mono text-[9px] text-amber-200 font-bold">Lưới 3D Mesh sàn</div>
                    <div class="absolute bottom-1 right-2 font-mono text-[9px] text-emerald-300 font-bold">Cao độ 0.00mm</div>
                  </div>
                  <div class="mt-2 px-3 py-1 rounded-full bg-slate-900/90 text-white font-mono text-[10px] border border-amber-400/30 text-center">
                    Phát hiện: Mặt sàn bê tông thô (4.2m x 11.6m)
                  </div>
                </div>

                <div class="relative z-20 pb-4 px-3 flex flex-col gap-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-[10px] text-white uppercase tracking-wider font-bold">Chọn Mẫu Ốp AR:</span>
                    <span class="font-mono text-[9px] text-amber-400 font-bold">Đổi kiểu: Xương cá</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <button v-for="(s, i) in swatches" :key="s.name" type="button" @click="activeSwatch = i"
                      class="p-1.5 rounded-xl text-left transition-all bg-slate-900/90"
                      :class="activeSwatch === i ? 'border-2 border-amber-400' : 'border border-white/20 opacity-80 hover:opacity-100'">
                      <div class="w-full h-10 rounded-md overflow-hidden mb-1"><img class="w-full h-full object-cover" :src="s.img" :alt="s.name" loading="lazy" /></div>
                      <div class="text-[9px] font-mono text-white font-bold truncate">{{ s.name }}</div>
                      <div class="text-[8px] font-mono" :class="activeSwatch === i ? 'text-amber-400' : 'text-slate-400'">{{ s.size }}<span v-if="activeSwatch === i"> • Đang ốp</span></div>
                    </button>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-950/90 border border-amber-400/40 flex items-center justify-between">
                    <div class="text-[10px] font-mono">
                      <div class="text-slate-400">Cần: <strong>{{ swatches[activeSwatch].boxes }} Thùng</strong> (+7% hao hụt)</div>
                      <div class="text-amber-400 font-bold">{{ swatches[activeSwatch].total }}</div>
                    </div>
                    <button type="button" @click="openDemo('wms')" class="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-mono text-[10px] font-extrabold hover:bg-amber-300 transition-colors flex items-center gap-1">
                      <span class="material-symbols-outlined text-[13px]">send</span> Đặt Hàng Kho
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 SOLUTIONS -->
    <section id="core-features" class="w-full py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div class="max-w-2xl flex flex-col gap-2">
            <div class="font-mono text-xs text-amber-800 uppercase tracking-widest font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span>
              Công Nghệ Đột Phá • Module Trọng Tâm
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Bộ Giải Pháp AI &amp; AR Chuyên Biệt Ngành Gạch &amp; VLXD</h2>
            <p class="text-sm sm:text-base text-slate-600">Được phát triển cho đặc thù vân gạch men, đá tự nhiên và không gian công trình tại Việt Nam, và sẽ tiếp tục hoàn thiện cùng các showroom thử nghiệm.</p>
          </div>
          <div class="flex items-center gap-2 font-mono text-xs text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Tối Ưu Cho iPhone, iPad Pro, Kiosk Showroom &amp; Web Mobile
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="s in solutions" :key="s.no"
            class="group relative p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md hover:border-amber-400 hover:-translate-y-1 transition-all flex flex-col justify-between"
            :class="s.isNew ? 'border-amber-300' : 'border-slate-200/90'">
            <span v-if="s.isNew" class="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-mono text-[10px] font-extrabold uppercase">Mới Ra Mắt</span>
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <span class="material-symbols-outlined text-[26px]">{{ s.icon }}</span>
                </div>
                <span class="font-mono text-xs text-amber-800 font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100/70 border border-amber-200">Giải Pháp {{ s.no }}</span>
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{{ s.title }}</h3>
                <p class="text-xs text-slate-500 mt-1 font-mono">{{ s.tag }}</p>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{{ s.desc }}</p>
              <div class="p-3 rounded-xl border flex flex-col gap-2 font-mono text-[11px]" :class="s.isNew ? 'bg-amber-50/50 border-amber-200/80' : 'bg-slate-50 border-slate-200/80'">
                <div v-for="p in s.points" :key="p" class="flex items-start gap-2 text-slate-700">
                  <span class="material-symbols-outlined text-amber-600 text-[15px] mt-px">check_circle</span>
                  <span>{{ p }}</span>
                </div>
              </div>
            </div>
            <div class="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-mono text-slate-500">
              <span>{{ s.footLabel }} <strong class="text-amber-700 font-bold">{{ s.footValue }}</strong></span>
              <span class="material-symbols-outlined text-slate-400 text-[18px]">{{ s.footIcon }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LIVE DEMO -->
    <section id="live-demo-section" class="w-full py-20 bg-white scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div class="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <span class="font-mono text-xs text-amber-800 font-bold uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full self-center">Trải Nghiệm Live Demo Trực Quan</span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Mô Phỏng Trực Quan Bộ Giải Pháp AI &amp; AR</h2>
          <p class="text-sm sm:text-base text-slate-600">Tương tác thử với các tính năng dự kiến giúp showroom và nhà thầu rút ngắn chu kỳ chốt đơn. Dữ liệu trong phần này là minh họa.</p>
        </div>

        <div class="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-5 flex flex-col gap-4">
              <div class="text-xl font-extrabold text-slate-900">Tải Ảnh &amp; Tìm Kiếm Tương Đồng Tức Thì</div>
              <p class="text-sm text-slate-600 leading-relaxed">Hệ thống quét từng rãnh vân, chỉ số quang học và quang phổ ấm/lạnh để định danh chính xác mã gạch trong kho WMS.</p>
              <button type="button" @click="openDemo('wms')"
                class="p-6 rounded-xl bg-white border-2 border-dashed border-amber-400 hover:border-amber-500 flex flex-col items-center justify-center text-center transition-all group">
                <div class="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-2 group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-[24px]">cloud_upload</span>
                </div>
                <span class="font-semibold text-sm text-slate-900">Đăng ký demo để tải ảnh mẫu gạch của bạn</span>
                <span class="font-mono text-[11px] text-slate-500 mt-1">Hỗ trợ JPG, PNG, HEIC từ điện thoại</span>
              </button>
            </div>

            <div class="lg:col-span-7 p-5 sm:p-6 rounded-xl bg-white border border-slate-200 flex flex-col gap-4 shadow-sm">
              <div class="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="w-14 h-14 rounded-lg overflow-hidden border border-amber-300 shrink-0"><img class="w-full h-full object-cover" src="/images/tiles/match-marble.jpg" alt="Mẫu marble Bianco" loading="lazy" /></div>
                  <div class="min-w-0">
                    <div class="font-bold text-base text-slate-900 truncate">VIGLACERA Marble Bianco V8802</div>
                    <div class="font-mono text-xs text-amber-700 font-semibold">SKU: VIG-V8802-80X80</div>
                  </div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-2xl font-extrabold text-amber-600">98.7%</div>
                  <div class="font-mono text-[10px] text-slate-500 uppercase">Độ tương đồng vân</div>
                </div>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                <div v-for="p in matchParams" :key="p.k" class="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div class="text-slate-500 text-[10px]">{{ p.k }}</div>
                  <div class="font-bold mt-1" :class="p.cls">{{ p.v }}</div>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-amber-700 text-[18px]">warehouse</span>
                  <span class="text-slate-700">Kho Bình Tân • Kệ C2 <strong class="text-amber-800">(Lô 12/2024 - Shade #A02)</strong></span>
                </div>
                <button type="button" @click="openDemo('wms')" class="px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-mono font-bold hover:bg-amber-300 transition-colors">Khóa Giữ Hàng Lô</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUE CHAIN -->
    <section id="value-chain" class="w-full py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div class="max-w-2xl flex flex-col gap-2">
          <span class="font-mono text-xs text-amber-800 font-bold uppercase tracking-widest">Hệ Sinh Thái Toàn Diện</span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Giải Pháp Cho Toàn Bộ Chuỗi Giá Trị Gạch Ốp Lát</h2>
          <p class="text-sm sm:text-base text-slate-600">May đo cho từng phân khúc: từ nhà máy sản xuất quy mô lớn, tổng kho phân phối độc quyền đến chuỗi showroom bán lẻ và các tổng thầu thi công.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="a in audiences" :key="a.title" class="p-6 rounded-2xl bg-white border hover:border-amber-400 transition-all flex flex-col gap-4 shadow-sm hover:shadow-md" :class="a.featured ? 'border-amber-300' : 'border-slate-200/90'">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="a.featured ? 'bg-amber-400 text-slate-950' : 'bg-amber-50 border border-amber-200 text-amber-700'">
              <span class="material-symbols-outlined text-[26px]">{{ a.icon }}</span>
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-slate-900">{{ a.title }}</h3>
              <span class="font-mono text-xs text-amber-800 uppercase font-bold tracking-wider">{{ a.tag }}</span>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">{{ a.desc }}</p>
            <ul class="flex flex-col gap-2 text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
              <li v-for="b in a.bullets" :key="b" class="flex items-start gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>{{ b }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- INTEGRATIONS -->
    <section id="integrations" class="w-full py-20 bg-white border-t border-slate-200 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 flex flex-col gap-5">
            <span class="font-mono text-xs text-amber-800 font-bold uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full self-start">Unified Logistics &amp; ERP Architecture</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Tích Hợp Liền Mạch Hệ Sinh Thái ecor</h2>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">ecor Tiles không hoạt động rời rạc như các phần mềm thiết kế đơn lẻ. Hệ thống kết nối sâu với toàn bộ cỗ máy quản trị kho bãi, vận chuyển xe cẩu nặng và kế toán của ecor Platform.</p>
            <div class="flex flex-col gap-3 pt-2">
              <div v-for="i in integrations" :key="i.title" class="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="material-symbols-outlined text-amber-700 text-[24px] mt-0.5">{{ i.icon }}</span>
                <div>
                  <div class="font-bold text-sm text-slate-900">{{ i.title }}</div>
                  <div class="text-xs text-slate-600 mt-1 leading-relaxed">{{ i.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
            <div class="flex items-center justify-between gap-2 pb-4 border-b border-slate-800">
              <div class="font-mono text-xs text-slate-400 truncate">architecture-mesh://ecor-enterprise-bus.svg</div>
              <span class="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold whitespace-nowrap">API READY</span>
            </div>
            <div class="w-full bg-slate-950 rounded-xl p-6 flex flex-col gap-6 mt-4 border border-slate-800/80">
              <div class="flex items-center justify-center">
                <div class="px-6 py-3 rounded-xl bg-slate-900 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,184,0,0.25)] flex items-center gap-3">
                  <div class="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center"><span class="material-symbols-outlined text-[20px]">token</span></div>
                  <div>
                    <div class="font-bold text-sm text-white">ecor Central Data Bus</div>
                    <div class="font-mono text-[10px] text-amber-400">Real-time Sync • Postgres • AI &amp; LiDAR Mesh</div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div v-for="(n, idx) in busNodes" :key="n.title" class="p-3.5 rounded-lg bg-slate-900 border flex flex-col items-center text-center" :class="idx === 0 ? 'border-amber-400/40' : 'border-slate-800'">
                  <span class="material-symbols-outlined text-amber-400 text-[24px] mb-1">{{ n.icon }}</span>
                  <span class="font-bold text-xs text-white">{{ n.title }}</span>
                  <span class="font-mono text-[10px] text-slate-400 mt-1">{{ n.sub }}</span>
                </div>
              </div>
              <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                <span>Kết nối theo yêu cầu: <strong class="text-white">MISA / Bravo / Odoo</strong></span>
                <span class="text-amber-400 font-bold">Webhook thời gian thực</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPARISON -->
    <section id="comparison" class="w-full py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div class="text-center max-w-3xl mx-auto flex flex-col gap-2">
          <span class="font-mono text-xs text-amber-800 font-bold uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full self-center">Benchmark &amp; ROI</span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Showroom Truyền Thống vs Ứng Dụng ecor Tiles AI &amp; AR</h2>
          <p class="text-sm sm:text-base text-slate-600">Minh chứng rõ ràng về tốc độ, năng suất nhân sự và hiệu quả doanh thu sau khi số hóa toàn diện.</p>
        </div>

        <div class="w-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div class="hidden md:grid grid-cols-12 p-5 bg-slate-100/80 border-b border-slate-200 font-bold text-sm">
            <div class="col-span-4 text-slate-700 uppercase tracking-wider">Chỉ Số Vận Hành</div>
            <div class="col-span-4 text-slate-500 uppercase tracking-wider">Showroom Truyền Thống</div>
            <div class="col-span-4 text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[18px] text-amber-600">auto_awesome</span> Ứng Dụng ecor Tiles AI &amp; AR
            </div>
          </div>
          <div v-for="(r, idx) in comparison" :key="r.k"
            class="grid grid-cols-1 md:grid-cols-12 p-4 md:p-5 gap-2 items-center hover:bg-slate-50 transition-colors"
            :class="[idx < comparison.length - 1 ? 'border-b border-slate-100' : '', idx === comparison.length - 1 ? 'bg-amber-50/40' : idx % 2 ? 'bg-slate-50/50' : '']">
            <div class="md:col-span-4 font-bold text-sm text-slate-900">{{ r.k }}</div>
            <div class="md:col-span-4 text-xs sm:text-sm text-slate-500">{{ r.old }}</div>
            <div class="md:col-span-4 font-mono font-bold text-xs sm:text-sm text-slate-950 flex items-start gap-2">
              <span class="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-extrabold shrink-0">{{ idx === comparison.length - 1 ? '★' : '✓' }}</span>
              {{ r.now }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LEAD FORM -->
    <section id="lead-form" class="w-full py-20 bg-white relative overflow-hidden scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="rounded-3xl bg-slate-900 text-white p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
            <div class="lg:col-span-6 flex flex-col gap-5">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-400 self-start font-mono text-xs uppercase tracking-wider font-semibold">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                Đăng Ký Khảo Sát &amp; Demo On-site Miễn Phí
              </div>
              <h2 class="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Nâng Tầm Showroom Gạch Của Bạn Với <span class="text-amber-400">AI &amp; LiDAR AR</span> Ngay Hôm Nay
              </h2>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed">Đội ngũ ecor sẽ trực tiếp demo số hóa mẫu gạch thực tế tại showroom hoặc công trình của bạn, cài đặt ứng dụng AR LiDAR trên iPad và kết nối WMS trong vài ngày.</p>
              <div class="flex flex-col gap-3 pt-1 text-xs sm:text-sm font-mono text-slate-300">
                <div v-for="p in pitchPoints" :key="p.text" class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-amber-400 text-[20px]">{{ p.icon }}</span>
                  <span>{{ p.text }}</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 rounded-2xl bg-white text-slate-900 border border-slate-200 p-6 sm:p-8 shadow-2xl">
              <div v-if="submitted" class="py-10 text-center flex flex-col items-center gap-3">
                <div class="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <span class="material-symbols-outlined text-[30px]">check_circle</span>
                </div>
                <h3 class="text-xl font-extrabold">Cảm ơn bạn!</h3>
                <p class="text-sm text-slate-600 max-w-xs">Chuyên viên ecor sẽ liên hệ tư vấn trong vòng 30 phút trong giờ làm việc.</p>
                <button type="button" @click="submitted = false" class="mt-2 px-5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold">Gửi yêu cầu khác</button>
              </div>

              <form v-else class="flex flex-col gap-4" @submit.prevent="submitLead">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label class="flex flex-col gap-1.5">
                    <span class="font-mono text-xs uppercase font-bold text-slate-700">Tên người phụ trách *</span>
                    <input v-model.trim="form.name" required type="text" placeholder="Nguyễn Văn A" class="lead-input" />
                  </label>
                  <label class="flex flex-col gap-1.5">
                    <span class="font-mono text-xs uppercase font-bold text-slate-700">Số điện thoại / Zalo *</span>
                    <input v-model.trim="form.phone" required type="tel" placeholder="0912 345 678" class="lead-input" />
                  </label>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label class="flex flex-col gap-1.5">
                    <span class="font-mono text-xs uppercase font-bold text-slate-700">Doanh nghiệp / Showroom *</span>
                    <input v-model.trim="form.company" required type="text" placeholder="Tổng kho gạch Nam Anh" class="lead-input" />
                  </label>
                  <label class="flex flex-col gap-1.5">
                    <span class="font-mono text-xs uppercase font-bold text-slate-700">Tỉnh thành hoạt động</span>
                    <select v-model="form.province" class="lead-input">
                      <option v-for="p in provinces" :key="p" :value="p">{{ p }}</option>
                    </select>
                  </label>
                </div>

                <label class="flex flex-col gap-1.5">
                  <span class="font-mono text-xs uppercase font-bold text-slate-700">Email (nhận thông tin demo)</span>
                  <input v-model.trim="form.email" type="email" placeholder="ban@congty.vn" class="lead-input" />
                </label>

                <div class="flex flex-col gap-1.5">
                  <span class="font-mono text-xs uppercase font-bold text-slate-700">Quy mô Showroom / Điểm bán</span>
                  <div class="grid grid-cols-3 gap-2">
                    <label v-for="s in scales" :key="s.value" class="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border text-xs cursor-pointer hover:border-amber-400"
                      :class="form.scale === s.value ? 'border-amber-400 bg-amber-50' : 'border-slate-200'">
                      <input v-model="form.scale" type="radio" name="scale" :value="s.value" class="accent-amber-500" />
                      <span class="text-slate-800 font-medium">{{ s.label }}</span>
                    </label>
                  </div>
                </div>

                <label class="flex flex-col gap-1.5">
                  <span class="font-mono text-xs uppercase font-bold text-slate-700">Tính năng quan tâm nhất *</span>
                  <select v-model="form.feature" class="lead-input">
                    <option v-for="f in featureOptions" :key="f" :value="f">{{ f }}</option>
                  </select>
                </label>

                <button type="submit" :disabled="isSubmitting"
                  class="w-full mt-2 py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-[20px]">send</span>
                  {{ isSubmitting ? 'Đang gửi...' : 'Đăng Ký Nhận Tư Vấn & Demo Thực Tế 1-1' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['open-modal'])

function openDemo(moduleName = 'all') {
  emit('open-modal', { type: 'demo', moduleName })
}

const heroMetrics = [
  { icon: 'storefront', value: 'Beta', label: 'Đang nhận showroom thử nghiệm' },
  { icon: 'trending_up', value: 'Tăng', label: 'Tỷ Lệ Chốt Tại Quầy (mục tiêu)', accent: true },
  { icon: 'speed', value: '< 2s & ~10s', label: 'Quét Vân & Render 3D (mục tiêu)' }
]

const scanRows = [
  { k: 'Vân đá (Pattern):', v: 'Calacatta Gold Luxury', cls: 'text-slate-900' },
  { k: 'Quy cách định danh:', v: '800 x 800 mm (Men vi tinh)', cls: 'text-slate-900' },
  { k: 'Mã SKU kho ERP:', v: 'VIG-CAL-8080-V2', cls: 'text-amber-700 font-bold' },
  { k: 'Vị trí & Tồn khả dụng:', v: 'Kho Bình Tân • 1.450 m² (Lô B3)', cls: 'text-emerald-700 font-bold' },
  { k: 'Đơn giá niêm yết:', v: '365.000 đ/m²', cls: 'text-amber-800 font-bold' }
]

const arFeatures = [
  {
    icon: 'view_in_ar',
    title: 'Quét Lưới Không Gian 3D Bằng Cảm Biến LiDAR',
    desc: 'Cảm biến LiDAR trên iPad Pro / iPhone quét bề mặt sàn và các mặt tường chỉ trong vài giây, tự động đo kích thước m², bóc tách và loại trừ cửa sổ, cửa đi, cột góc bo chuẩn xác đến từng milimét.',
    checks: ['Sai số thấp', 'Tự nhận diện mặt đứng/mặt sàn']
  },
  {
    icon: 'texture',
    title: 'Ốp Gạch Thời Gian Thực (Real-time AR Tile Projection)',
    desc: 'Khách hàng chỉ cần hướng camera vào nền bê tông thô là thấy ngay không gian hoàn thiện với tỉ lệ 1:1, mô phỏng chuẩn độ bóng men, phản xạ ánh sáng cửa sổ và bóng đổ của đồ nội thất.',
    checks: ['Đèn đổ bóng 3D chân thực', 'Hiển thị men Matt & Bóng vi tinh']
  },
  {
    icon: 'tune',
    title: 'Đổi Kiểu Lát Sàn & Tùy Biến Đường Ron Tức Thì',
    desc: 'Chuyển đổi tức thì giữa các kiểu lát: thẳng mạch, sole 1/3, xương cá Herringbone. Điều chỉnh khe ron (1.0mm, 1.5mm, 2.0mm) và trực quan hóa màu bột chà ron thực tế.'
  },
  {
    icon: 'calculate',
    title: 'Tự Động Bóc Tách Khối Lượng Vật Tư & Đặt Hàng WMS',
    desc: 'Tính tức thời số viên gạch, số m² cần mua, số thùng đã cộng bù hao hụt cắt góc 5-10%, dự toán chi phí và đẩy đơn nháp về ecor OMS/WMS ngay tại công trình.'
  }
]

const swatches = [
  { name: 'Calacatta Gold', size: '80x80', img: '/images/tiles/swatch-calacatta.jpg', boxes: 38, total: '17.480.000 đ' },
  { name: 'Terrazzo Xám', size: '60x60 cm', img: '/images/tiles/swatch-terrazzo.jpg', boxes: 45, total: '14.220.000 đ' },
  { name: 'Gỗ Sồi Strip', size: '15x80 cm', img: '/images/tiles/swatch-wood.jpg', boxes: 52, total: '12.960.000 đ' }
]
const activeSwatch = ref(0)

const solutions = [
  {
    no: '01', icon: 'image_search',
    title: 'Visual Search: AI Quét & Nhận Diện Vân Gạch',
    tag: 'Quét ảnh đối soát hàng vạn SKU tức thì',
    desc: 'Khách chỉ cần gửi ảnh qua Zalo hoặc chụp tại công trình. AI bóc tách chính xác loại vân (Marble, Terrazzo, Vân gỗ, Xi măng), bề mặt men và kích thước.',
    points: ['Đối soát kho SKU trong vài giây', 'Khóa chính xác Tone/Shade & Lô Batch', 'Gợi ý mẫu thay thế tương đồng khi hết'],
    footLabel: 'Độ chính xác mục tiêu:', footValue: '> 95%', footIcon: 'troubleshoot'
  },
  {
    no: '02', icon: 'living',
    title: 'Generative 3D Room Staging Nhanh (Vài Giây)',
    tag: 'Render photoreal 4K không cần dựng 3D',
    desc: 'Biến ảnh phòng khách, phòng tắm, phòng bếp thô thành phối cảnh hoàn thiện chỉ 1 cú chạm. Khách tận mắt thấy mẫu gạch trên sàn nhà mình trước khi cọc.',
    points: ['Cân chỉnh phối cảnh & ánh sáng tự nhiên', 'Đổi kiểu lát xương cá, so le 1/3 tức thì', 'Mô phỏng màu keo chà ron chuẩn 100%'],
    footLabel: 'Tốc độ render mục tiêu:', footValue: '5–10 Giây', footIcon: 'timer'
  },
  {
    no: '03', icon: 'view_in_ar', isNew: true,
    title: 'ecor Tiles AR LiDAR Mobile App',
    tag: 'Quét sàn tường & ốp AR 1:1 tại hiện trường',
    desc: 'Ứng dụng di động cho đội ngũ hiện trường: quét LiDAR đo diện tích, loại trừ cửa cột, ốp thử gạch trực tiếp trên sàn bê tông và xuất đơn cọc.',
    points: ['LiDAR 3D Meshing đo diện tích nhanh', 'Kiểm tra bóng đổ ánh sáng thực tế', 'Đẩy đơn hàng WMS ngay tại công trình'],
    footLabel: 'Nền tảng:', footValue: 'iOS / iPadOS / Android', footIcon: 'smartphone'
  },
  {
    no: '04', icon: 'support_agent',
    title: 'AI Sales Closer & Báo Giá Tự Động 24/7',
    tag: 'Bóc tách khối lượng, xuất PDF, đồng bộ OMS',
    desc: 'Trợ lý ảo tích hợp Zalo OA, Messenger và Website. Hiểu thuật ngữ VLXD tiếng Việt, tự tính m² + hao hụt cắt góc và tạo đơn cọc gửi khách ngay trong đêm.',
    points: ['Tự quy đổi m² ra số hộp kèm 5-10% hao hụt', 'Áp dụng chính xác chiết khấu cấp đại lý', 'Tạo đơn nháp vào POS/WMS không cần nhập tay'],
    footLabel: 'Kênh hỗ trợ:', footValue: 'Zalo OA, FB, Web', footIcon: 'forum'
  }
]

const matchParams = [
  { k: 'KÍCH THƯỚC', v: '80 x 80 cm', cls: 'text-slate-900' },
  { k: 'BỀ MẶT MEN', v: 'Bóng Vi Tinh', cls: 'text-slate-900' },
  { k: 'TỒN KHẢ DỤNG', v: '1.450 m²', cls: 'text-emerald-700' },
  { k: 'ĐƠN GIÁ LẺ', v: '360.000 đ/m²', cls: 'text-amber-700' }
]

const audiences = [
  {
    icon: 'domain', title: 'Nhà Máy & Tổng Đại Lý Phân Phối', tag: 'Quản trị kho hàng vạn SKU',
    desc: 'Đồng bộ tồn kho theo từng Lô nung (Batch) và độ lệch màu (Tone/Shade). Chấm dứt giao nhầm lô lệch tông cho các dự án khách sạn, khu đô thị lớn. Phân quyền chính sách giá sỉ đa cấp tự động.',
    bullets: ['Kiểm soát tồn kho theo mét vuông và số lượng vỏ kiện', 'Cảnh báo sớm hàng tồn lưu kho chậm luân chuyển']
  },
  {
    icon: 'store', title: 'Chuỗi Showroom & Cửa Hàng VLXD', tag: 'Tư vấn đỉnh cao không cần nhớ mã', featured: true,
    desc: 'Nhân viên mới nhận việc có thể tư vấn chuyên nghiệp như chuyên gia. Dùng iPad hoặc Kiosk cảm ứng để quét ảnh mẫu gạch khách đưa, xem ngay tồn kho thực tế và xuất ảnh 3D tại chỗ.',
    bullets: ['Tăng tốc độ tư vấn và chốt đơn mỗi ca', 'Tích hợp màn hình cảm ứng tương tác VR 360° tại quầy']
  },
  {
    icon: 'architecture', title: 'Kiến Trúc Sư & Tổng Thầu Xây Dựng', tag: 'AR LiDAR hiện trường & Texture 4K',
    desc: 'Dùng Mobile App LiDAR đo nhanh công trình, tải map texture gạch PBR 4K (Diffuse, Normal, Roughness) nạp thẳng vào Lumion, 3ds Max, Blender. Tự động bóc tách vật tư chuẩn xác.',
    bullets: ['Map texture PBR chính xác màu thực tế 100% khi ra công trình', 'Bảo lưu chính sách chiết khấu nhà thầu đặc quyền']
  }
]

const integrations = [
  { icon: 'pallet', title: 'ecor WMS • Quản Trị Tone/Shade & Giảm Bể Vỡ', desc: 'Tự động phân nhóm kiện gạch theo độ vát cạnh, lô nung lò và khoang chứa để hạn chế rung lắc va đập trong kho bãi.' },
  { icon: 'local_shipping', title: 'ecor TMS • Tối Ưu Tải Trọng Gạch Nặng & Xe Cẩu', desc: 'Gạch ốp lát có khối lượng rất nặng. AI tự tính tổng số tấn để điều phối chuẩn xác xe cẩu tự hành, ghép chuyến đa điểm tránh phạt quá tải.' },
  { icon: 'point_of_sale', title: 'ecor POS & OMS • Bán Lẻ Đa Kênh Tức Thì', desc: 'Đơn tạo từ AI Chatbot, Mobile AR App hoặc iPad quầy bán tự động ghi nhận doanh số cho nhân viên, trừ kho tức thời và đồng bộ công nợ.' }
]

const busNodes = [
  { icon: 'memory', title: 'ecor Tiles AI & AR', sub: 'Vision • LiDAR • 3D NeRF' },
  { icon: 'inventory_2', title: 'Kho WMS', sub: 'Lô Batch • Tone Màu • Tồn Tức Thời' },
  { icon: 'rv_hookup', title: 'Vận Tải TMS', sub: 'Cẩu Hạ • Cân Tải Tấn • Định Tuyến' }
]

const comparison = [
  { k: 'Thời gian tìm kiếm mẫu gạch', old: 'Thường mất nhiều phút để lục tìm kệ mẫu hoặc lật catalogue dày', now: 'Vài giây (chụp ảnh và AI quét tự động)' },
  { k: 'Thời gian lên phối cảnh 3D', old: 'Thường mất vài ngày chờ thiết kế dựng hình, khách dễ mất hứng mua', now: 'Vài giây (hiển thị ngay trên màn hình trước mặt khách)' },
  { k: 'Khảo sát & ướm gạch tại công trình', old: 'Kéo thước dây thủ công, chở mẫu gạch nặng đến thử, dễ nhầm m²', now: 'AR LiDAR Mobile: quét 3D phòng & ốp ảo tỉ lệ 1:1 tức thì' },
  { k: 'Nhân sự trực tư vấn khách hàng', old: 'Giới hạn giờ hành chính (8h/ngày). Bỏ lỡ khách nhắn tin đêm & cuối tuần.', now: 'Tự động 24/7 (AI trả lời & báo giá trong vài giây)' },
  { k: 'Sự cố giao lệch Tone/Shade màu', old: 'Thường gặp khi nhân viên lấy nhầm lô nung khác tone màu', now: 'Giảm mạnh (WMS khóa cứng mã theo Batch)' },
  { k: 'Tỷ lệ chốt đơn (Conversion Rate)', old: 'Phụ thuộc kinh nghiệm nhân viên tư vấn', now: 'Mục tiêu tăng nhờ trải nghiệm trực quan AR/3D' }
]

const pitchPoints = [
  { icon: 'verified_user', text: 'Bảo mật tuyệt đối 100% dữ liệu mẫu mã và chính sách giá đại lý' },
  { icon: 'headset_mic', text: 'Hỗ trợ triển khai trực tiếp hoặc từ xa tại các tỉnh thành' },
  { icon: 'verified', text: 'Dùng thử 14 ngày các tính năng của bản thử nghiệm AI & LiDAR AR' }
]

const provinces = ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Bình Dương / Đồng Nai', 'Tỉnh thành khác']
const scales = [
  { value: '1 - 2 điểm', label: '1 - 2 Điểm' },
  { value: '3 - 5 điểm', label: '3 - 5 Điểm' },
  { value: 'Chuỗi 6+', label: 'Chuỗi 6+' }
]
const featureOptions = [
  'Trọn bộ Giải Pháp (Quét Mẫu + 3D Render + AR LiDAR Mobile App + Chatbot)',
  'ecor Tiles AR Mobile App (Quét LiDAR & Ốp Sàn Tường 1:1)',
  'AI Quét Mẫu & Nhận diện vân gạch kho WMS',
  'AI Phối Cảnh Không Gian 3D Siêu Tốc (3 Giây)',
  'Chatbot AI Báo Giá & Chốt Đơn 24/7',
  'Tích hợp hệ thống Vận tải xe cẩu nặng ecor TMS'
]

const form = reactive({
  name: '',
  phone: '',
  company: '',
  email: '',
  province: provinces[0],
  scale: scales[0].value,
  feature: featureOptions[0]
})
const isSubmitting = ref(false)
const submitted = ref(false)

async function submitLead() {
  isSubmitting.value = true
  const notifyUrl = import.meta.env.VITE_CONTACT_NOTIFY_URL
  if (notifyUrl) {
    try {
      await fetch(notifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          company: form.company,
          notes: `Ngành gạch • Tỉnh: ${form.province} • Quan tâm: ${form.feature}`,
          modules: ['ecor Tiles AI & AR'],
          scale: form.scale
        })
      })
    } catch (err) {
      console.error('tiles lead notify failed', err)
    }
  }
  isSubmitting.value = false
  submitted.value = true
}
</script>

<style scoped>
.lead-input {
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #0f172a;
  font-size: 0.875rem;
  width: 100%;
}
.lead-input:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 184, 0, 0.25);
}
</style>
