<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span>🤝 Đồng Hành Cùng Doanh Nghiệp Bạn</span>
        </div>

        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          Kết Nối Với Chuyên Gia Giải Pháp <span class="text-amber-600">ecor.vn</span>
        </h1>

        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Dù bạn đang vận hành một kho hàng đơn lẻ hay chuỗi cung ứng đa kênh phức tạp, đội ngũ chuyên gia của chúng tôi sẽ cùng bạn phân tích và thiết kế mô hình vận hành tối ưu nhất.
        </p>

        <!-- 4 Badges -->
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
          <div class="p-3.5 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            <span class="text-xs text-zinc-400 block font-medium">&lt; 10 Phút</span>
            <strong class="text-xs sm:text-sm font-bold text-zinc-800">Phản hồi trung bình</strong>
          </div>
          <div class="p-3.5 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            <span class="text-xs text-zinc-400 block font-medium">3 – 7 Ngày</span>
            <strong class="text-xs sm:text-sm font-bold text-zinc-800">Thời gian Go-Live</strong>
          </div>
          <div class="p-3.5 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            <span class="text-xs text-zinc-400 block font-medium">14 Ngày</span>
            <strong class="text-xs sm:text-sm font-bold text-zinc-800">Dùng thử trải nghiệm</strong>
          </div>
          <div class="p-3.5 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            <span class="text-xs text-zinc-400 block font-medium">99.9%</span>
            <strong class="text-xs sm:text-sm font-bold text-zinc-800">Cam kết SLA uptime</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. MAIN TWO-COLUMN CONTACT & SURVEY AREA -->
    <section class="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Column: Direct Channels & Specialists -->
        <div class="lg:col-span-5 space-y-6 text-left">
          <!-- Channels Box -->
          <div class="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex justify-between items-center pb-3 border-b border-zinc-100">
              <h3 class="font-extrabold text-zinc-900 text-sm">Kênh Liên Hệ Nhanh</h3>
              <span class="text-[10px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                Trực tuyến
              </span>
            </div>

            <a href="tel:0822235858" class="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 hover:bg-amber-50 transition-colors group">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">📞</div>
                <div>
                  <div class="text-[11px] text-zinc-400">Hotline tư vấn giải pháp 24/7</div>
                  <strong class="text-sm font-bold text-zinc-900 group-hover:text-amber-700"> 097 8673867</strong>
                </div>
              </div>
              <span class="text-zinc-400 group-hover:text-amber-700">→</span>
            </a>

            <a href="mailto:contact@ecor.vn" class="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 hover:bg-amber-50 transition-colors group">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">✉️</div>
                <div>
                  <div class="text-[11px] text-zinc-400">Hòm thư chuyên gia kỹ thuật</div>
                  <strong class="text-sm font-bold text-zinc-900 group-hover:text-amber-700">contact@ecor.vn</strong>
                </div>
              </div>
              <span class="text-zinc-400 group-hover:text-amber-700">→</span>
            </a>
          </div>

          <!-- Office Locations -->
          <div class="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm space-y-3 text-xs">
            <h4 class="font-extrabold text-zinc-900 text-xs uppercase tracking-wider text-zinc-400">Hệ Thống Văn Phòng Đại Diện</h4>
            
            <div class="p-3 bg-zinc-50 rounded-2xl">
              <strong class="text-zinc-800 block text-xs">🏢 Văn phòng TP. Hồ Chí Minh</strong>
              <p class="text-zinc-500 mt-1">891 Nguyễn Kiệm, Hạnh Thông, TP HCM</p>
            </div>
          </div>

          <!-- 1-1 Booking Banner -->
          <div class="p-5 rounded-3xl bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <strong class="text-xs font-bold text-amber-900">Đặt lịch trao đổi 1–1 riêng</strong>
                <span class="text-[10px] bg-amber-400 text-zinc-900 font-bold font-bold px-2 py-0.5 rounded">30 phút Demo</span>
              </div>
              <p class="text-[11px] text-amber-700 mt-1">Trao đổi trực tiếp qua Google Meet với Kỹ sư Trưởng kiến trúc kho vận.</p>
            </div>
            <button 
              @click="$emit('open-modal', { type: 'demo', moduleName: 'Đặt lịch 1-1 Google Meet' })"
              class="px-3.5 py-2 bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-bold text-xs rounded-xl shadow-sm shrink-0"
            >
              Chọn lịch →
            </button>
          </div>

          <!-- Team of Experts -->
          <div class="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm space-y-3">
            <div class="flex justify-between items-center pb-2 border-b border-zinc-100">
              <h4 class="font-extrabold text-zinc-900 text-xs">Đội Ngũ Chuyên Gia Trực Tiếp Tư Vấn</h4>
              <span class="text-[10px] text-zinc-400">Hà Nội & Sài Gòn</span>
            </div>

            <div class="space-y-3 pt-1">
              <div class="flex items-center gap-3">
                <img src="/images/assets/expert-nam.png" alt="Trần Đức Nam" class="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                <div>
                  <strong class="text-xs text-zinc-800 block">Trần Đức Nam</strong>
                  <span class="text-[10px] bg-amber-50 text-amber-700 font-semibold px-1.5 py-0.5 rounded">Trưởng phòng Giải Pháp WMS</span>
                  <p class="text-[10px] text-zinc-400 mt-0.5">8+ năm triển khai hệ thống chuỗi bán lẻ & 3PL</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <img src="/images/assets/expert-lan.png" alt="Lê Hoàng Lan" class="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                <div>
                  <strong class="text-xs text-zinc-800 block">Lê Hoàng Lan</strong>
                  <span class="text-[10px] bg-amber-50 text-amber-700 font-semibold px-1.5 py-0.5 rounded">Chuyên viên Cấp Cao TMS</span>
                  <p class="text-[10px] text-zinc-400 mt-0.5">Tối ưu lộ trình và định tuyến vận tải đa kênh</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <img src="/images/assets/expert-huy.png" alt="Nguyễn Quốc Huy" class="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                <div>
                  <strong class="text-xs text-zinc-800 block">Nguyễn Quốc Huy</strong>
                  <span class="text-[10px] bg-amber-50 text-amber-700 font-semibold px-1.5 py-0.5 rounded">Kỹ Sư Trưởng ERP & API</span>
                  <p class="text-[10px] text-zinc-400 mt-0.5">Chuyên gia đồng bộ SAP, Oracle, MISA, KiotViet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Multi-step Survey Form -->
        <div class="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
          <div class="pb-4 border-b border-zinc-100">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">Khảo Sát Nhu Cầu Vận Hành</span>
            <h3 class="text-xl sm:text-2xl font-extrabold text-zinc-900 mt-0.5">Đăng Ký Tư Vấn & Nhận Kế Hoạch Triển Khai</h3>
            <p class="text-xs text-zinc-500 mt-1">Điền thông tin để ecor.vn cấu hình mô hình bản quyền và kịch bản demo sát với ngành hàng của bạn nhất.</p>
          </div>

          <div v-if="submitted" class="py-12 text-center space-y-4">
            <div class="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h4 class="text-xl font-bold text-zinc-900">Gửi Yêu Cầu Thành Công!</h4>
            <p class="text-sm text-zinc-600 max-w-md mx-auto">
              Chuyên gia giải pháp eCor sẽ liên hệ lại trực tiếp qua số điện thoại của bạn trong vòng <strong>10 phút</strong>.
            </p>
            <button @click="submitted = false" class="px-6 py-2.5 bg-amber-400 text-zinc-900 font-bold rounded-xl text-xs font-bold">Gửi yêu cầu khác</button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-4 mt-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">Họ và tên người liên hệ *</label>
                <input v-model="form.name" required placeholder="Ví dụ: Nguyễn Văn An" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">Số điện thoại di động *</label>
                <input v-model="form.phone" required placeholder="09xxxxxxxxx" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">Email doanh nghiệp *</label>
                <input v-model="form.email" required placeholder="an.nguyen@congty.com" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">Tên doanh nghiệp / Chuỗi cửa hàng</label>
                <input v-model="form.company" placeholder="Tên công ty hoặc thương hiệu" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs" />
              </div>
            </div>

            <!-- Giải pháp quan tâm đa chọn -->
            <div>
              <div class="flex justify-between items-center mb-1.5">
                <label class="block text-xs font-bold text-zinc-700 uppercase">Giải pháp bạn đang quan tâm nhất? (Có thể chọn nhiều mục)</label>
                <span class="text-[10px] text-amber-600 font-bold">Được cá nhân hóa</span>
              </div>

              <div class="grid grid-cols-2 gap-2 text-xs">
                <label 
                  class="p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all"
                  :class="selectedModules.includes('wms') ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' : 'border-zinc-200 bg-zinc-50/50'"
                >
                  <input type="checkbox" value="wms" v-model="selectedModules" class="rounded text-amber-600" />
                  <div>
                    <span>Quản trị kho WMS</span>
                    <span class="text-[10px] text-zinc-400 font-normal block">Kiểm kê, phân tầng, barcode</span>
                  </div>
                </label>

                <label 
                  class="p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all"
                  :class="selectedModules.includes('tms') ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' : 'border-zinc-200 bg-zinc-50/50'"
                >
                  <input type="checkbox" value="tms" v-model="selectedModules" class="rounded text-amber-600" />
                  <div>
                    <span>Điều phối vận tải TMS</span>
                    <span class="text-[10px] text-zinc-400 font-normal block">Định tuyến xe, tài xế, COD</span>
                  </div>
                </label>

                <label 
                  class="p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all"
                  :class="selectedModules.includes('omni') ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' : 'border-zinc-200 bg-zinc-50/50'"
                >
                  <input type="checkbox" value="omni" v-model="selectedModules" class="rounded text-amber-600" />
                  <div>
                    <span>Omnichannel Hub</span>
                    <span class="text-[10px] text-zinc-400 font-normal block">Shopee, Lazada, TikTok Shop</span>
                  </div>
                </label>

                <label 
                  class="p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all"
                  :class="selectedModules.includes('erp') ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' : 'border-zinc-200 bg-zinc-50/50'"
                >
                  <input type="checkbox" value="erp" v-model="selectedModules" class="rounded text-amber-600" />
                  <div>
                    <span>Tích hợp ERP / Kế toán</span>
                    <span class="text-[10px] text-zinc-400 font-normal block">SAP, Fast, Bravo, MISA</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Quy mô kho / xe -->
            <div>
              <label class="block text-xs font-bold text-zinc-700 uppercase mb-1.5">Quy mô kho hoặc đội xe hiện tại của bạn</label>
              <div class="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  @click="scale = 'sme'"
                  class="p-3 rounded-xl border text-center transition-all"
                  :class="scale === 'sme' ? 'bg-amber-400 text-zinc-900 font-bold font-bold border-amber-600 shadow' : 'bg-zinc-50 border-zinc-200 text-zinc-700'"
                >
                  <span class="block font-bold">Khởi đầu / SME</span>
                  <span class="text-[10px] opacity-80 block mt-0.5">&lt; 500m² hoặc 1–5 xe</span>
                </button>

                <button
                  type="button"
                  @click="scale = 'growth'"
                  class="p-3 rounded-xl border text-center transition-all"
                  :class="scale === 'growth' ? 'bg-amber-400 text-zinc-900 font-bold font-bold border-amber-600 shadow' : 'bg-zinc-50 border-zinc-200 text-zinc-700'"
                >
                  <span class="block font-bold">Đang tăng trưởng</span>
                  <span class="text-[10px] opacity-80 block mt-0.5">500 – 2,000m² / 15 xe</span>
                </button>

                <button
                  type="button"
                  @click="scale = 'enterprise'"
                  class="p-3 rounded-xl border text-center transition-all"
                  :class="scale === 'enterprise' ? 'bg-amber-400 text-zinc-900 font-bold font-bold border-amber-600 shadow' : 'bg-zinc-50 border-zinc-200 text-zinc-700'"
                >
                  <span class="block font-bold">Doanh nghiệp lớn</span>
                  <span class="text-[10px] opacity-80 block mt-0.5">&gt; 2,000m² / Nhiều kho</span>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">Ghi chú yêu cầu đặc biệt (tùy chọn)</label>
              <textarea v-model="form.notes" rows="2" placeholder="Ví dụ: Cần đồng bộ với máy quét mã vạch Honeywell cầm tay, kết nối hóa đơn điện tử..." class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs resize-none"></textarea>
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2">
              <span>🚀</span>
              <span>Gửi Yêu Cầu & Nhận Kế Hoạch Demo Miễn Phí</span>
            </button>

            <div class="flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-zinc-100">
              <span>🔒 Bảo mật dữ liệu 100%</span>
              <span>⚡ Dùng thử 14 ngày không cần thẻ</span>
              <span>🏢 Hỗ trợ Onsite trực tiếp</span>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- 3. MÁY TÍNH DỰ TOÁN QUY MÔ NHANH -->
    <section class="py-16 bg-white border-y border-zinc-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">📊 Máy tính dự toán quy mô nhanh</span>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">Ước Lượng Giải Pháp Theo Sản Lượng Đơn Hàng</h3>
        <p class="text-xs text-zinc-500 mt-1">Chọn mức tải vận hành trung bình mỗi ngày của hệ thống bạn để nhận biết cấu hình ecor phù hợp cùng thời gian đưa vào thực tế.</p>

        <!-- Tier volume buttons -->
        <div class="mt-6 inline-flex rounded-full bg-zinc-100 p-1 border border-zinc-200">
          <button
            v-for="vol in ['100 – 500 đơn/ngày', '500 – 2,500 đơn/ngày', '> 5,000 đơn/ngày']"
            :key="vol"
            @click="selectedVol = vol"
            class="px-5 py-2 rounded-full text-xs font-bold transition-all"
            :class="selectedVol === vol ? 'bg-amber-400 text-zinc-900 font-bold shadow' : 'text-zinc-600 hover:text-zinc-900'"
          >
            {{ vol }}
          </button>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div class="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <span class="text-[10px] text-zinc-400 font-bold uppercase block">GÓI BẢN QUYỀN ĐỀ XUẤT</span>
            <strong class="text-base text-amber-700 font-extrabold block mt-1">
              {{ selectedVol === '100 – 500 đơn/ngày' ? 'ecor Standard WMS' : (selectedVol === '500 – 2,500 đơn/ngày' ? 'ecor Professional Suite' : 'ecor Enterprise Cloud') }}
            </strong>
            <p class="text-xs text-zinc-500 mt-2 leading-relaxed">
              {{ selectedVol === '100 – 500 đơn/ngày' ? 'Phù hợp kho đơn lẻ, xuất nhập tồn thời gian thực qua app di động và máy quét mã vạch thông dụng.' : (selectedVol === '500 – 2,500 đơn/ngày' ? 'Bao gồm Wave picking tối ưu, điều phối xe TMS và đồng bộ đa sàn tự động.' : 'Hạ tầng Dedicated Private Cloud, xử lý hàng triệu đơn không nghẽn.') }}
            </p>
            <div class="pt-4 mt-4 border-t border-zinc-200 text-xs text-zinc-600">
              Người dùng khuyến nghị: <strong>{{ selectedVol === '100 – 500 đơn/ngày' ? '3 – 8 Quản kho' : (selectedVol === '500 – 2,500 đơn/ngày' ? '15 – 30 Nhân sự' : 'Không giới hạn') }}</strong>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <span class="text-[10px] text-zinc-400 font-bold uppercase block">THỜI GIAN SẴN SÀNG GO-LIVE</span>
            <strong class="text-base text-zinc-900 font-extrabold block mt-1">
              {{ selectedVol === '100 – 500 đơn/ngày' ? '3 – 5 Ngày làm việc' : (selectedVol === '500 – 2,500 đơn/ngày' ? '7 – 10 Ngày làm việc' : '2 – 3 Tuần Onsite') }}
            </strong>
            <p class="text-xs text-zinc-500 mt-2 leading-relaxed">Bao gồm nhập liệu danh mục SKU, layout mã vị trí kệ và hướng dẫn nhân viên kho thao tác trực tiếp.</p>
            <div class="pt-4 mt-4 border-t border-zinc-200 text-xs text-zinc-600">
              Hình thức: <strong>Online & Onsite 1 ngày</strong>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-amber-50/60 border border-amber-200">
            <span class="text-[10px] text-amber-700 font-bold uppercase block">HIỆU QUẢ KỲ VỌNG ĐO LƯỜNG</span>
            <strong class="text-base text-amber-700 font-extrabold block mt-1">Giảm 75% Sai Sót Nhặt Hàng</strong>
            <p class="text-xs text-zinc-600 mt-2 leading-relaxed">Tối ưu hóa hành trình nhặt (Pick & Pack), tự động in phiếu gửi đơn vận chuyển không cần nhập tay.</p>
            <div class="pt-4 mt-4 border-t border-amber-200 text-xs text-amber-900 font-bold">
              Độ trễ xử lý đơn: &lt; 3 Phút / Đơn
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. FAQ VỀ QUY TRÌNH TRIỂN KHAI -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Giải Đáp Thắc Mắc</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          Câu Hỏi Thường Gặp Về Quy Trình Triển Khai
        </h2>
        <p class="mt-3 text-sm text-zinc-500">Mọi thông tin cần thiết giúp bạn an tâm chuyển dịch công nghệ số hóa kho vận cùng ecor.vn.</p>

        <div class="mt-10 space-y-3 text-left">
          <details 
            v-for="(faq, idx) in faqs" 
            :key="idx"
            class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm group"
          >
            <summary class="flex justify-between items-center cursor-pointer font-bold text-sm text-zinc-900 select-none">
              <span>{{ faq.q }}</span>
              <span class="faq-icon text-zinc-400 transition-transform duration-200 font-mono text-lg">▾</span>
            </summary>
            <p class="mt-3 text-xs text-zinc-600 leading-relaxed pt-2 border-t border-zinc-100">
              {{ faq.a }}
            </p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

defineEmits(['open-modal'])

const submitted = ref(false)
const selectedVol = ref('100 – 500 đơn/ngày')
const selectedModules = ref(['wms'])
const scale = ref('growth')

const form = reactive({
  name: '',
  phone: '',
  email: '',
  company: '',
  notes: ''
})

function handleSubmit() {
  submitted.value = true
}

const faqs = [
  {
    q: 'ecor.vn mất bao lâu để triển khai vào hệ thống kho sẵn có của chúng tôi?',
    a: 'Đối với kho tiêu chuẩn dưới 5.000m², thời gian hoàn thiện cấu hình layout ô kệ, kết nối máy quét và đưa vào vận hành thực tế trung bình từ 3 – 5 ngày làm việc. Quá trình này không làm gián đoạn việc xuất nhập hàng ngày.'
  },
  {
    q: 'Chúng tôi có cần mua thêm thiết bị máy móc chuyên dụng đặc thù không?',
    a: 'Không bắt buộc. Bạn có thể tận dụng ngay điện thoại Android sẵn có của nhân viên kho để quét mã vạch qua camera. Khi muốn tối ưu tốc độ tối đa, ecor sẽ tư vấn các dòng máy quét PDA chuyên dụng phù hợp nhất với ngân sách.'
  },
  {
    q: 'ecor có hỗ trợ tích hợp với phần mềm ERP / Kế toán hiện tại của doanh nghiệp không?',
    a: 'Có. ecor cung cấp cổng Open API và hệ thống Webhook chuẩn RESTful cho phép đồng bộ tự động 2 chiều với SAP, Oracle NetSuite, Microsoft Dynamics, MISA AMIS, Fast, Bravo và các phần mềm nội bộ.'
  },
  {
    q: 'Chính sách hỗ trợ kỹ thuật và bảo hành vận hành ra sao?',
    a: 'Chúng tôi duy trì cam kết hỗ trợ kỹ thuật 24/7/365 qua kênh riêng Zalo/Hotline cho các sự cố khẩn cấp. Mỗi khách hàng đều có kỹ sư giải pháp đồng hành trực tiếp trong suốt quá trình vận hành.'
  }
]
</script>
