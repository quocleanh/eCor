<template>
  <div>
    <!-- 1. Hero Section: Tối giản, tập trung định vị giá trị lõi -->
    <section class="bg-white border-b border-slate-200 py-16 md:py-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Tagline chuẩn mực, câu chủ động -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
          Nền tảng SaaS Vận hành Bán Lẻ Hợp Nhất
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Nền Tảng Vận Hành <br class="hidden sm:inline" />
          <span class="text-blue-700">Bán Hàng – Kho – Kế Toán</span> Cho Doanh Nghiệp Bán Lẻ
        </h1>

        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          eCor giải quyết trọn vẹn bài toán vận hành trên một nền tảng duy nhất: một giao dịch bán hàng tại <strong>POS</strong> tự động trừ tồn kho <strong>WMS</strong> và tự động ghi sổ <strong>Kế toán</strong>, loại bỏ hoàn toàn tình trạng lệch số liệu và nhập liệu thủ công.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button @click="openModal" class="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors">
            Đăng ký tư vấn demo thực tế
          </button>
          <router-link to="/bang-gia" class="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-700 hover:text-blue-700 bg-white border border-slate-300 hover:border-blue-300 rounded-lg transition-colors">
            Xem bảng giá minh bạch
          </router-link>
        </div>

        <!-- Cam kết nhanh gọn -->
        <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-500">
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            Dữ liệu đồng bộ tức thì
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            Tuân thủ chuẩn hoá đơn điện tử TT78
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            Triển khai trong 48 giờ
          </div>
        </div>
      </div>
    </section>

    <!-- 2. TRỌNG TÂM: Khối 3 Trụ Cột Lõi & Bảng Điều Khiển Dòng Chảy Dữ Liệu Khép Kín -->
    <section class="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">Trọng Tâm Vận Hành</div>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            3 Trụ Cột Lõi: Vòng Khép Kín Dữ Liệu Tự Động
          </h2>
          <p class="text-slate-600">
            Không cần 3 phần mềm rời rạc, không cần xuất Excel đối chiếu cuối tháng. Dữ liệu chạy xuyên suốt thời gian thực giữa 3 bộ phận quan trọng nhất.
          </p>
        </div>

        <!-- Bảng điều khiển Dòng chảy Vận hành (Interactive Console) -->
        <div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-12">
          <!-- Thanh trạng thái mô phỏng -->
          <div class="bg-slate-100/80 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-2 font-semibold text-slate-800">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Luồng Dữ Liệu Khép Kín Real-time
            </div>
            <div class="text-slate-500 flex items-center gap-4">
              <span>Độ trễ đồng bộ: <strong class="text-emerald-700 tabular-nums font-mono">&lt; 0.2s</strong></span>
              <span>Khớp số liệu: <strong class="text-emerald-700 tabular-nums font-mono">100%</strong></span>
            </div>
          </div>

          <!-- 3 Panel Trụ Cột Lõi Bố Cục Ngang Có Mũi Tên Kết Nối -->
          <div class="p-6 md:p-8">
            <div class="grid grid-cols-1 lg:grid-cols-11 items-center gap-4">
              <!-- Panel 1: POS Bán Hàng -->
              <div class="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-blue-700 uppercase tracking-wider">Trụ cột 1</span>
                  <span class="px-2 py-0.5 text-[11px] font-bold rounded bg-blue-100 text-blue-800">POS</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Bán Hàng Tại Quầy</h3>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                  Quét mã barcode 0.2s, thanh toán QR động, hoạt động offline khi rớt mạng, chốt ca tự động.
                </p>
                <ul class="text-xs text-slate-700 space-y-2 mb-4">
                  <li class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    Bán hàng không ngắt quãng
                  </li>
                  <li class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    Khớp tiền két cuối ngày
                  </li>
                </ul>
                <router-link to="/pos" class="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1">
                  Khám phá chi tiết POS &rarr;
                </router-link>
              </div>

              <!-- Mũi tên kết nối 1 -> 2 -->
              <div class="lg:col-span-1 flex flex-col items-center justify-center text-center py-2 lg:py-0 text-blue-600">
                <div class="text-[10px] font-semibold text-slate-500 uppercase mb-1 hidden lg:block">Trừ tồn</div>
                <svg class="w-6 h-6 rotate-90 lg:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <!-- Panel 2: WMS Quản Trị Kho -->
              <div class="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-blue-700 uppercase tracking-wider">Trụ cột 2</span>
                  <span class="px-2 py-0.5 text-[11px] font-bold rounded bg-blue-100 text-blue-800">WMS</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Quản Lý Kho & Kiểm Kê</h3>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                  Quản lý SKU biến thể, vị trí ô kệ, kiểm kho bằng PDA/RFID, chuyển kho nội bộ tức thời.
                </p>
                <ul class="text-xs text-slate-700 space-y-2 mb-4">
                  <li class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    Ngăn chặn bán vượt tồn
                  </li>
                  <li class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    Cảnh báo hàng cận date/chậm
                  </li>
                </ul>
                <router-link to="/wms" class="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1">
                  Khám phá chi tiết WMS &rarr;
                </router-link>
              </div>

              <!-- Mũi tên kết nối 2 -> 3 -->
              <div class="lg:col-span-1 flex flex-col items-center justify-center text-center py-2 lg:py-0 text-blue-600">
                <div class="text-[10px] font-semibold text-slate-500 uppercase mb-1 hidden lg:block">Định giá vốn</div>
                <svg class="w-6 h-6 rotate-90 lg:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <!-- Panel 3: Kế Toán & Tài Chính -->
              <div class="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-blue-700 uppercase tracking-wider">Trụ cột 3</span>
                  <span class="px-2 py-0.5 text-[11px] font-bold rounded bg-blue-100 text-blue-800">Account</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Kế Toán & Hoá Đơn</h3>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                  Tự động ghi nhận doanh thu từ POS, giá vốn từ WMS. Phát hành HĐĐT tuân thủ TT78, báo cáo thuế.
                </p>
                <ul class="text-xs text-slate-700 space-y-2 mb-4">
                  <li class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    Đối soát 3 chiều tự động
                  </li>
                  <li class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    Không cần gõ tay lại hoá đơn
                  </li>
                </ul>
                <router-link to="/ke-toan" class="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1">
                  Khám phá Kế toán &rarr;
                </router-link>
              </div>
            </div>

            <!-- Tương Tác Nghiệp Vụ: Xem Luồng Chạy Thực Tế -->
            <div class="mt-8 pt-6 border-t border-slate-200 bg-slate-50/50 rounded-xl p-4 sm:p-6">
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div class="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Mô phỏng chu trình dữ liệu thực tế:
                </div>
                <!-- 3 Kịch bản tương tác -->
                <div class="flex flex-wrap gap-2">
                  <button 
                    @click="activeScenario = 'sale'"
                    :class="activeScenario === 'sale' ? 'bg-blue-700 text-white' : 'bg-white text-slate-700 border border-slate-200'"
                    class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors"
                  >
                    1 Đơn bán tại quầy
                  </button>
                  <button 
                    @click="activeScenario = 'inventory'"
                    :class="activeScenario === 'inventory' ? 'bg-blue-700 text-white' : 'bg-white text-slate-700 border border-slate-200'"
                    class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Kiểm kho phát hiện lệch
                  </button>
                  <button 
                    @click="activeScenario = 'procurement'"
                    :class="activeScenario === 'procurement' ? 'bg-blue-700 text-white' : 'bg-white text-slate-700 border border-slate-200'"
                    class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Nhập kho từ Nhà cung cấp
                  </button>
                </div>
              </div>

              <!-- Hiển thị dữ liệu thay đổi ở cả 3 module -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div class="p-3.5 bg-white border border-slate-200 rounded-lg">
                  <div class="font-bold text-blue-700 mb-1">Tại quầy POS:</div>
                  <p class="text-slate-600 leading-relaxed">{{ scenarios[activeScenario].pos }}</p>
                </div>
                <div class="p-3.5 bg-white border border-slate-200 rounded-lg">
                  <div class="font-bold text-blue-700 mb-1">Tại kho WMS:</div>
                  <p class="text-slate-600 leading-relaxed">{{ scenarios[activeScenario].wms }}</p>
                </div>
                <div class="p-3.5 bg-white border border-slate-200 rounded-lg">
                  <div class="font-bold text-blue-700 mb-1">Tại Kế toán:</div>
                  <p class="text-slate-600 leading-relaxed">{{ scenarios[activeScenario].account }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Vì Sao Chọn eCor: 4 Lý Do Thực Tế -->
    <section class="py-16 md:py-20 bg-white border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Vì Sao Doanh Nghiệp Chọn eCor?</h2>
          <p class="text-slate-600 text-sm">Không tô vẽ tính năng phức tạp, eCor tập trung giải quyết đúng các nút thắt nhức nhối nhất trong quản trị bán lẻ.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">1</div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Một nguồn dữ liệu duy nhất (Single Source of Truth)</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Dữ liệu tồn kho, doanh thu và công nợ lưu trữ tập trung. Không có độ trễ giữa bộ phận bán hàng, kho vận và phòng tài chính kế toán.
            </p>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">2</div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Triệt tiêu hoàn toàn khâu nhập tay dữ liệu</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Mỗi hóa đơn phát sinh tự động tạo định khoản kế toán, trừ tồn kho và cập nhật báo cáo lãi lỗ tức thì, giúp tiết kiệm hàng trăm giờ đối chiếu mỗi tháng.
            </p>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">3</div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Đo đạc chính xác chi phí & giá vốn thực tế</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Áp dụng linh hoạt các phương pháp tính giá vốn đích danh, FIFO hoặc bình quân gia quyền. Báo cáo lãi gộp từng mặt hàng chuẩn xác theo thời gian thực.
            </p>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">4</div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Hỗ trợ kỹ thuật thực chiến 24/7 tại Việt Nam</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Đội ngũ kỹ sư triển khai trực tiếp hỗ trợ chuẩn hóa danh mục SKU, đào tạo nhân viên thu ngân và kết nối hóa đơn điện tử tận nơi trong 48 giờ.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. HỆ SINH THÁI MỞ RỘNG (5 Module: Trình bày gọn gàng, không cạnh tranh không gian 3 lõi) -->
    <section class="py-16 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mở Rộng Liền Mạch</div>
          <h2 class="text-2xl font-bold text-slate-900 mb-3">Mở Rộng Hệ Sinh Thái Khi Doanh Nghiệp Cần</h2>
          <p class="text-xs text-slate-600">
            Bắt đầu vững chắc từ 3 trụ cột lõi, và kích hoạt thêm các module chuyên biệt chỉ với một cú nhấp chuột.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          <!-- ECOM -->
          <router-link to="/mo-rong/ecom" class="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all group">
            <div class="text-xs font-bold text-blue-700 mb-1">ECOM</div>
            <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 mb-2">TMĐT Đa Sàn</h3>
            <p class="text-xs text-slate-500 line-clamp-3 mb-3">
              Website bán hàng và kết nối Shopee, TikTok Shop, Lazada. Tự động đồng bộ tồn kho với POS và WMS.
            </p>
            <span class="text-xs font-semibold text-blue-600 group-hover:underline">Chi tiết &rarr;</span>
          </router-link>

          <!-- TMS -->
          <router-link to="/mo-rong/tms" class="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all group">
            <div class="text-xs font-bold text-blue-700 mb-1">TMS</div>
            <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 mb-2">Quản Lý Giao Vận</h3>
            <p class="text-xs text-slate-500 line-clamp-3 mb-3">
              Đẩy đơn tự động tới GHN, GHTK, Viettel Post. Đối soát tiền thu hộ COD tự động khớp vào Kế toán.
            </p>
            <span class="text-xs font-semibold text-blue-600 group-hover:underline">Chi tiết &rarr;</span>
          </router-link>

          <!-- HRM -->
          <router-link to="/mo-rong/hrm" class="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all group">
            <div class="text-xs font-bold text-blue-700 mb-1">HRM</div>
            <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 mb-2">Nhân Sự & Ca Kíp</h3>
            <p class="text-xs text-slate-500 line-clamp-3 mb-3">
              Chấm công theo ca tại cửa hàng, tự động tính hoa hồng bán hàng từ dữ liệu thực tế tại quầy POS.
            </p>
            <span class="text-xs font-semibold text-blue-600 group-hover:underline">Chi tiết &rarr;</span>
          </router-link>

          <!-- Mobile App -->
          <router-link to="/mo-rong/mobile-app" class="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all group">
            <div class="text-xs font-bold text-blue-700 mb-1">Mobile App</div>
            <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 mb-2">App Di Động</h3>
            <p class="text-xs text-slate-500 line-clamp-3 mb-3">
              App quản trị doanh thu real-time cho chủ shop, app kiểm kho PDA và app tích điểm chăm sóc khách.
            </p>
            <span class="text-xs font-semibold text-blue-600 group-hover:underline">Chi tiết &rarr;</span>
          </router-link>

          <!-- CRM -->
          <router-link to="/mo-rong/crm" class="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all group">
            <div class="text-xs font-bold text-blue-700 mb-1">CRM</div>
            <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 mb-2">Quan Hệ Khách Hàng</h3>
            <p class="text-xs text-slate-500 line-clamp-3 mb-3">
              Hồ sơ khách hàng 360 độ, tích điểm đa kênh, phân hạng VIP và chăm sóc tự động qua Zalo OA/SMS.
            </p>
            <span class="text-xs font-semibold text-blue-600 group-hover:underline">Chi tiết &rarr;</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 5. Bảng Giá Tóm Tắt (3 Gói Rõ Nghĩa) -->
    <section class="py-16 md:py-20 bg-white border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Gói Chi Phí Minh Bạch Cho Mọi Quy Mô</h2>
          <p class="text-slate-600 text-sm">Không phụ phí ẩn, không giới hạn tính năng lõi. Nâng cấp linh hoạt khi mở rộng chi nhánh.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Gói Cơ Bản -->
          <div class="p-6 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
            <div>
              <h3 class="text-base font-bold text-slate-900 mb-1">Khởi Tạo</h3>
              <p class="text-xs text-slate-500 mb-4">Cửa hàng bán lẻ độc lập mới vận hành</p>
              <div class="text-2xl font-extrabold text-slate-900 tabular-nums mb-4">199.000đ <span class="text-xs font-normal text-slate-500">/tháng</span></div>
              <ul class="text-xs text-slate-600 space-y-2 mb-6">
                <li>&bull; 1 Điểm bán POS (offline-first)</li>
                <li>&bull; Quản lý kho cơ bản WMS</li>
                <li>&bull; Sổ quỹ & thu chi Kế toán</li>
                <li>&bull; Xuất báo cáo Excel</li>
              </ul>
            </div>
            <button @click="openModal" class="w-full py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-700 transition-colors">
              Đăng ký dùng thử
            </button>
          </div>

          <!-- Gói Tiêu Chuẩn (Nổi bật) -->
          <div class="p-6 rounded-xl border-2 border-blue-600 bg-white relative shadow-sm flex flex-col justify-between">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-bold bg-blue-600 text-white">Khuyên Dùng</span>
            <div>
              <h3 class="text-base font-bold text-slate-900 mb-1">Chuyên Nghiệp</h3>
              <p class="text-xs text-slate-500 mb-4">Chuỗi 2-5 cửa hàng & bán đa kênh</p>
              <div class="text-2xl font-extrabold text-blue-700 tabular-nums mb-4">499.000đ <span class="text-xs font-normal text-slate-500">/tháng</span></div>
              <ul class="text-xs text-slate-600 space-y-2 mb-6">
                <li>&bull; Trọn bộ 3 trụ cột: <strong>POS + WMS + Kế toán</strong></li>
                <li>&bull; Kết nối Hoá đơn điện tử hợp chuẩn TT78</li>
                <li>&bull; Kiểm kho bằng PDA mã vạch</li>
                <li>&bull; Đối soát 3 chiều tự động</li>
                <li>&bull; Tặng kèm kết nối 1 sàn TMĐT</li>
              </ul>
            </div>
            <button @click="openModal" class="w-full py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-sm">
              Đăng ký tư vấn ngay
            </button>
          </div>

          <!-- Gói Chuỗi Doanh Nghiệp -->
          <div class="p-6 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
            <div>
              <h3 class="text-base font-bold text-slate-900 mb-1">Chuỗi & Tổng Kho</h3>
              <p class="text-xs text-slate-500 mb-4">Hệ thống từ 5 chi nhánh hoặc tổng kho phân phối</p>
              <div class="text-2xl font-extrabold text-slate-900 tabular-nums mb-4">990.000đ <span class="text-xs font-normal text-slate-500">/tháng</span></div>
              <ul class="text-xs text-slate-600 space-y-2 mb-6">
                <li>&bull; Không giới hạn chi nhánh & người dùng</li>
                <li>&bull; Mở khóa toàn bộ 8 phân hệ (TMS, HRM, CRM...)</li>
                <li>&bull; Báo cáo tài chính hợp nhất chuỗi</li>
                <li>&bull; Kỹ sư hỗ trợ riêng 24/7 & SLA 99.9%</li>
              </ul>
            </div>
            <button @click="openModal" class="w-full py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-700 transition-colors">
              Liên hệ báo giá chuỗi
            </button>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link to="/bang-gia" class="text-xs font-bold text-blue-700 hover:underline">
            Xem bảng so sánh tính năng chi tiết tất cả các gói &rarr;
          </router-link>
        </div>
      </div>
    </section>

    <!-- 6. FAQ Accordion (Chuẩn Schema FAQPage) -->
    <section class="py-16 bg-slate-50 border-b border-slate-200">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Câu Hỏi Thường Gặp</h2>
          <p class="text-xs text-slate-600">Giải đáp các thắc mắc cốt lõi về cơ chế vận hành của eCor.</p>
        </div>

        <div class="space-y-3">
          <div v-for="(faq, idx) in faqs" :key="idx" class="border border-slate-200 rounded-lg bg-white overflow-hidden">
            <button @click="faq.open = !faq.open" class="w-full px-5 py-3.5 text-left text-sm font-semibold text-slate-800 flex items-center justify-between hover:text-blue-700 transition-colors">
              <span>{{ faq.q }}</span>
              <span class="text-slate-400 font-bold ml-2">{{ faq.open ? '−' : '+' }}</span>
            </button>
            <div v-if="faq.open" class="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Banner Form CTA Cuối Trang -->
    <section class="py-16 bg-slate-900 text-white text-center">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold mb-4">Sẵn Sàng Chuẩn Hóa Vận Hành Bán Lẻ Ngay Hôm Nay?</h2>
        <p class="text-slate-400 text-sm mb-8 leading-relaxed">
          Hãy để chuyên gia eCor trực tiếp khảo sát bài toán thực tế của cửa hàng/chuỗi của bạn và demo giải pháp trong 15 phút.
        </p>

        <form @submit.prevent="handleQuickRegister" class="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input 
            v-model="quickPhone" 
            type="tel" 
            required 
            placeholder="Nhập số điện thoại của bạn..." 
            class="px-4 py-3 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 flex-1"
          />
          <button type="submit" :disabled="submitting" class="px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap">
            {{ submitting ? 'Đang gửi...' : 'Nhận tư vấn ngay' }}
          </button>
        </form>
        <p class="text-[11px] text-slate-500 mt-3">Hoặc gọi trực tiếp hotline: <a href="tel:0978673867" class="text-blue-400 font-bold hover:underline">0978 67 38 67</a></p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const activeScenario = ref('sale')

const scenarios = {
  sale: {
    pos: 'Thu ngân quét barcode mã áo sơ mi (550.000đ). Khách quét VietQR động. Đơn hàng hoàn tất và in hoá đơn tức thì.',
    wms: 'Hệ thống tự động trừ 1 áo sơ mi tại kho quầy. Tồn kho khả dụng cập nhật ngay lập tức sang các kênh bán khác.',
    account: 'Tự động hạch toán Doanh thu bán lẻ (TK 511) và Giá vốn hàng bán (TK 632). Xuất file hoá đơn điện tử mã CQT.'
  },
  inventory: {
    pos: 'Nhân viên thu ngân không thể chọn bán sản phẩm đang nằm trong danh sách kiểm kê hoặc có trạng thái lệch kho.',
    wms: 'Thủ kho dùng máy quét PDA kiểm kê tại kệ A, phát hiện thiếu 1 sản phẩm so với sổ sách, tạo phiếu kiểm kê lệch.',
    account: 'Tự động hạch toán chênh lệch vào Tài sản thiếu chờ xử lý (TK 1381) và thông báo tới kế toán trưởng phê duyệt.'
  },
  procurement: {
    pos: 'Ngay sau khi kho bấm hoàn tất nhập, danh mục hàng hóa tại quầy thu ngân tự động hiển thị số lượng sẵn sàng bán.',
    wms: 'Thủ kho quét mã nhận 200 sản phẩm từ Nhà cung cấp, phân bổ vào vị trí ô kệ chi tiết và in tem nhãn barcode.',
    account: 'Tự động tăng giá trị tồn kho (TK 156) và ghi nhận công nợ phải trả Nhà cung cấp (TK 331) theo đúng hạn thanh toán.'
  }
}

const faqs = reactive([
  {
    q: 'Dữ liệu bán hàng ở POS có tự động đồng bộ sang kho WMS và Kế toán không?',
    a: 'Có. Toàn bộ hệ thống eCor sử dụng chung một cơ sở dữ liệu thời gian thực. Bất kỳ đơn hàng nào bán ra tại quầy sẽ lập tức trừ tồn kho tương ứng ở WMS và tự động tạo bút toán doanh thu, giá vốn ở phân hệ Kế toán mà không cần con người can thiệp hay nhập lại.',
    open: true
  },
  {
    q: 'Khi mất mạng Internet, quầy POS có tiếp tục bán hàng được không?',
    a: 'Được 100%. Phân hệ POS của eCor được trang bị kiến trúc Offline-First chuyên dụng. Thu ngân vẫn quét mã, mở đơn và in bill cho khách bình thường. Toàn bộ dữ liệu bán trong lúc mất mạng sẽ tự động đồng bộ an toàn lên mây ngay khi có kết nối trở lại.',
    open: false
  },
  {
    q: 'eCor có hỗ trợ xuất Hóa đơn điện tử theo quy định Thuế (Thông tư 78) không?',
    a: 'Có. Phân hệ Kế toán của eCor tích hợp trực tiếp với các nhà cung cấp giải pháp HĐĐT hợp chuẩn tại Việt Nam. Bạn có thể phát hành hoá đơn điện tử có mã của cơ quan thuế trực tiếp từ giao diện đơn bán.',
    open: false
  },
  {
    q: 'Tôi có thể bắt đầu với 3 module lõi trước rồi sau này mới mở rộng không?',
    a: 'Chính xác! Đó là cách tiếp cận thông minh nhất được hơn 80% khách hàng của eCor lựa chọn. Bạn hoàn toàn có thể triển khai trước bộ 3 POS - WMS - Kế toán để vận hành ổn định, sau đó kích hoạt thêm ECOM, TMS hay CRM bất cứ khi nào mở rộng quy mô.',
    open: false
  }
])

const quickPhone = ref('')
const submitting = ref(false)

function openModal() {
  window.dispatchEvent(new CustomEvent('open-demo-modal'))
}

async function handleQuickRegister() {
  if (!quickPhone.value) return
  submitting.value = true
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '39a2af8f-3d80-448e-98a5-482c38bfae27',
        subject: 'Yêu cầu tư vấn nhanh từ eCor Trang Chủ',
        phone: quickPhone.value
      })
    })
    const data = await res.json()
    if (data.success) {
      alert('Cảm ơn bạn! Đội ngũ eCor đã nhận số điện thoại ' + quickPhone.value + ' và sẽ liên hệ trong 15 phút.')
      quickPhone.value = ''
    } else {
      alert('Vui lòng liên hệ hotline: 0978 67 38 67 để được hỗ trợ tức thì!')
    }
  } catch (err) {
    alert('Vui lòng liên hệ hotline: 0978 67 38 67 để được hỗ trợ tức thì!')
  } finally {
    submitting.value = false
  }
}
</script>
