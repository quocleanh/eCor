<template>
  <div class="bg-[#fafcff] text-slate-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-rose-100/60 via-sky-50/40 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Tag -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          <span>ecor POS 4.0 • Trạm Bán Hàng Siêu Tốc</span>
        </div>

        <!-- Title -->
        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.2] max-w-5xl mx-auto">
          Bán Hàng Siêu Tốc 3 Giây, Đồng Bộ Tồn Kho Đa Điểm & Kết Nối Liền Mạch WMS
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Giải pháp POS chuyên sâu cho chuỗi bán lẻ, F&B và điểm bán đa kênh. Tự động trừ tồn kho theo thời gian thực tới kho tổng WMS, hoạt động mượt mà cả khi mất internet.
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor POS - Điểm bán' })"
            class="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            Trải Nghiệm Bản Demo POS →
          </button>
          <button 
            @click="$emit('open-modal', { type: 'pricing', moduleName: 'Tài Liệu ecor POS' })"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base border border-slate-200 shadow-sm hover:shadow transition-all flex items-center gap-2"
          >
            <svg class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>Tải Tài Liệu Giải Pháp POS (PDF)</span>
          </button>
        </div>

        <!-- Badges -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Bán hàng Offline 100%
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Tích hợp máy in & quét mã vạch 1 chạm
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Kết nối kho tổng & vận tải ecor
          </span>
        </div>

        <!-- POS CASHIER SCREEN MOCKUP -->
        <div class="mt-12 max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
          <!-- Screen Header -->
          <div class="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <strong class="text-slate-800 ml-2">Cửa hàng Quận 1 - Quầy Thu Ngân 02</strong>
            </div>
            <div class="flex items-center gap-4 text-[11px] text-slate-500">
              <span class="flex items-center gap-1 text-emerald-600 font-bold">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Đồng bộ Kho tổng ecor WMS: Thời gian thực
              </span>
              <span class="font-mono text-slate-400">Phiên #8934</span>
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
                  value="8935001928312 | Sữa rửa mặt dịu nhẹ Centella 150ml (Đã quét)" 
                  readonly
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-700 outline-none"
                />
                <span class="absolute right-3 top-2 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">F2: Tìm</span>
              </div>

              <!-- Category Pills -->
              <div class="flex flex-wrap gap-2 text-xs font-medium">
                <span class="px-3 py-1 bg-sky-600 text-white rounded-lg font-bold">Tất cả (142)</span>
                <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">Chăm sóc da</span>
                <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">Chống nắng</span>
                <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">Serum & Ampoule</span>
                <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">Combo Ưu Đãi</span>
              </div>

              <!-- Product Grid -->
              <div class="grid grid-cols-3 gap-3 pt-2">
                <div class="p-3 rounded-xl border border-sky-300 bg-sky-50 text-xs space-y-1 relative">
                  <span class="text-[10px] text-sky-700 font-bold">SKU: CT-01</span>
                  <strong class="block text-slate-900 leading-tight">Centella Cleanser</strong>
                  <span class="text-sky-700 font-black block">245.000 đ</span>
                  <span class="text-[10px] text-emerald-600 font-bold block">Kho: 48</span>
                </div>

                <div class="p-3 rounded-xl border border-slate-200 bg-white text-xs space-y-1">
                  <span class="text-[10px] text-slate-400 font-mono">SKU: AN-82</span>
                  <strong class="block text-slate-800 leading-tight">KCN Aqua Sun UV</strong>
                  <span class="text-slate-900 font-bold block">380.000 đ</span>
                  <span class="text-[10px] text-slate-500 block">Kho: 12</span>
                </div>

                <div class="p-3 rounded-xl border border-rose-200 bg-rose-50 text-xs space-y-1">
                  <span class="text-[10px] text-rose-600 font-bold">SKU: SR-19</span>
                  <strong class="block text-slate-800 leading-tight">Serum Niacinamide 10%</strong>
                  <span class="text-rose-600 font-bold block">320.000 đ</span>
                  <span class="text-[10px] text-rose-700 font-bold block">Kho tổng WMS: 210</span>
                </div>

                <div class="p-3 rounded-xl border border-slate-200 bg-white text-xs space-y-1">
                  <span class="text-[10px] text-slate-400 font-mono">SKU: TT-04</span>
                  <strong class="block text-slate-800 leading-tight">Nước tẩy trang Micellar</strong>
                  <span class="text-slate-900 font-bold block">190.000 đ</span>
                  <span class="text-[10px] text-slate-500 block">Kho: 31</span>
                </div>

                <div class="p-3 rounded-xl border border-slate-200 bg-white text-xs space-y-1">
                  <span class="text-[10px] text-slate-400 font-mono">SKU: RS-66</span>
                  <strong class="block text-slate-800 leading-tight">Hộp Mặt Nạ Tràm Trà</strong>
                  <span class="text-slate-900 font-bold block">145.000 đ</span>
                  <span class="text-[10px] text-slate-500 block">Kho: 85</span>
                </div>

                <div class="p-3 rounded-xl border border-amber-200 bg-amber-50 text-xs space-y-1">
                  <span class="text-[10px] text-amber-700 font-bold">SKU: CB-99</span>
                  <strong class="block text-slate-800 leading-tight">Combo Dưỡng Ẩm Mùa Đông</strong>
                  <span class="text-amber-800 font-bold block">699.000 đ</span>
                  <span class="text-[10px] text-amber-600 font-bold block">Hot Deal</span>
                </div>
              </div>

              <!-- Customer Loyalty Bar -->
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <span class="w-7 h-7 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center">VIP</span>
                  <div>
                    <strong class="text-slate-800">Khách: Lê Phương Vy</strong>
                    <span class="text-slate-500 text-[11px] ml-2">0982 *** 889 • Tích lũy: 1.250 điểm (20.000đ)</span>
                  </div>
                </div>
                <span class="text-sky-600 font-bold">Đổi thẻ</span>
              </div>
            </div>

            <!-- Right Current Cart & VietQR Box -->
            <div class="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between text-xs space-y-4">
              <div>
                <div class="flex justify-between items-center pb-2 border-b border-slate-200 font-bold text-slate-800">
                  <span>Đơn hàng #EC-4890</span>
                  <span class="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded">3 sản phẩm</span>
                </div>

                <div class="divide-y divide-slate-100 my-2">
                  <div class="py-2 flex justify-between">
                    <div>
                      <div class="font-semibold text-slate-800">Centella Cleanser 150ml</div>
                      <div class="text-[10px] text-slate-400">245.000 đ x 1</div>
                    </div>
                    <span class="font-bold text-slate-800">245.000 đ</span>
                  </div>

                  <div class="py-2 flex justify-between">
                    <div>
                      <div class="font-semibold text-slate-800">KCN Aqua Sun UV 50g</div>
                      <div class="text-[10px] text-slate-400">380.000 đ x 1</div>
                    </div>
                    <span class="font-bold text-slate-800">380.000 đ</span>
                  </div>

                  <div class="py-2 flex justify-between">
                    <div>
                      <div class="font-semibold text-slate-800">Serum Niacinamide 10%</div>
                      <div class="text-[10px] text-slate-400">320.000 đ x 1</div>
                    </div>
                    <span class="font-bold text-slate-800">320.000 đ</span>
                  </div>
                </div>

                <div class="pt-2 border-t border-slate-200 space-y-1">
                  <div class="flex justify-between text-slate-500">
                    <span>Tổng tiền hàng:</span>
                    <span>945.000 đ</span>
                  </div>
                  <div class="flex justify-between text-emerald-600 font-medium">
                    <span>Voucher thành viên (VIP-10):</span>
                    <span>- 50.000 đ</span>
                  </div>
                  <div class="flex justify-between text-base font-black text-slate-900 pt-1 border-t border-slate-200">
                    <span>Khách phải trả:</span>
                    <span class="text-rose-600">895.000 đ</span>
                  </div>
                </div>
              </div>

              <!-- VietQR Quick Scan Box -->
              <div class="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                <div class="w-16 h-16 bg-slate-900 text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  QR CODE
                </div>
                <div>
                  <div class="font-bold text-slate-900 text-[11px] flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    VietQR Động Khớp Tiền Tự Động
                  </div>
                  <p class="text-[10px] text-slate-500 leading-tight mt-0.5">
                    Quét bằng mọi ứng dụng ngân hàng và Ví MoMo / VNPay
                  </p>
                  <span class="text-[10px] font-mono text-sky-600 font-bold block mt-1">Chờ nhận diện: 895.000 đ...</span>
                </div>
              </div>

              <button class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-1.5">
                <span>✓</span>
                <span>Hoàn tất Thanh toán & In hóa đơn (F9)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. FOUR METRICS -->
    <section class="py-12 bg-white border-y border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-rose-50/40 border border-rose-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-rose-600">3 Giây <span class="text-xs font-normal text-slate-400">/ Hóa đơn</span></div>
            <div class="text-sm font-bold text-slate-800 mt-2">Tốc độ thanh toán siêu tốc</div>
            <p class="text-xs text-slate-500 mt-1">Tối ưu từng micro-second thao tác phím tắt, quét mã vạch và VietQR tự khớp tiền. Giảm tối đa tình trạng nghẽn hàng giờ cao điểm.</p>
          </div>
          <div class="p-6 rounded-2xl bg-sky-50/40 border border-sky-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-sky-600">100% <span class="text-xs font-normal text-slate-400">Real-time</span></div>
            <div class="text-sm font-bold text-slate-800 mt-2">Đồng bộ kho tổng WMS</div>
            <p class="text-xs text-slate-500 mt-1">Tự động trừ kho tổng và kho chi nhánh tức thì ngay khi xuất hóa đơn. Triệt tiêu hoàn toàn rủi ro bán vượt tồn (overselling) hoặc lệch số liệu.</p>
          </div>
          <div class="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-emerald-600">100% <span class="text-xs font-normal text-slate-400">Offline Mode</span></div>
            <div class="text-sm font-bold text-slate-800 mt-2">Hoạt động khi mất mạng</div>
            <p class="text-xs text-slate-500 mt-1">Bán hàng, in bill liên tục kể cả khi đứt cáp quang hoặc sập mạng internet. Tự động đồng bộ ngầm an toàn ngay khi có kết nối trở lại.</p>
          </div>
          <div class="p-6 rounded-2xl bg-indigo-50/40 border border-indigo-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-indigo-600">&lt; 30 Phút <span class="text-xs font-normal text-slate-400">/ Điểm bán</span></div>
            <div class="text-sm font-bold text-slate-800 mt-2">Nhân bản chi nhánh cấp tốc</div>
            <p class="text-xs text-slate-500 mt-1">Thời gian mở cửa hàng mới chỉ bằng một tách cà phê: cài đặt danh mục, phân quyền nhân viên và cấu hình phần cứng chỉ với 1 cú click chuột.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FOUR CORE PILLARS OF ECOR POS -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-rose-600">Cốt Lõi Công Nghệ ecor POS</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          4 Cột Trụ Vận Hành Bán Lẻ Khối Lượng Cao
        </h2>
        <p class="mt-3 text-base text-slate-500 max-w-2xl mx-auto">
          Thiết kế cho môi trường bán lẻ hiện đại đòi hỏi tốc độ xử lý lớn, dữ liệu minh bạch và độ tin cậy tuyệt đối.
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div class="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Thanh Toán Thông Minh</span>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Thanh toán đa phương thức & Tạo mã VietQR động</h3>
            <p class="text-sm text-slate-500 mt-2 leading-relaxed">
              Không cần nhập tay số tiền. Màn hình phụ hoặc bill tự động sinh mã VietQR động chứa chính xác số tiền và mã hóa đơn đơn hàng.
            </p>
            <ul class="space-y-1.5 text-xs text-slate-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ Đối soát tự động qua Open API của 30+ ngân hàng tại Việt Nam</li>
              <li class="flex items-center gap-2">✓ Tích hợp thẻ tín dụng, ví điện tử (MoMo, ZaloPay, ShopeePay) và tiền mặt trên cùng 1 đơn hàng</li>
              <li class="flex items-center gap-2">✓ Loại bỏ hoàn toàn rủi ro chuyển khoản giả mạo (fake bill)</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">Multi-store & Central WMS</span>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Đồng bộ tồn kho đa chi nhánh & Kho tổng ecor WMS</h3>
            <p class="text-sm text-slate-500 mt-2 leading-relaxed">
              Nhân viên tại bất kỳ quầy thu ngân nào cũng có thể tra cứu tồn kho thực tế của toàn chuỗi và kho tổng trung tâm chỉ với 1 phím bấm.
            </p>
            <ul class="space-y-1.5 text-xs text-slate-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ Tạo phiếu yêu cầu xuất hàng điều chuyển giữa các điểm bán ngay trên màn hình POS</li>
              <li class="flex items-center gap-2">✓ Liên thông dữ liệu tự động với ecor WMS để kích hoạt quy trình lấy hàng (picking) tại kho tổng</li>
              <li class="flex items-center gap-2">✓ Kiểm kê định kỳ bằng thiết bị cầm tay PDA/SmartPOS mà không cần đóng cửa quầy</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">CRM 360° Đa Kênh</span>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Chăm sóc khách hàng thân thiết & Thẻ thành viên</h3>
            <p class="text-sm text-slate-500 mt-2 leading-relaxed">
              Nhận diện khách hàng tức thì qua số điện thoại hoặc mã QR thành viên trên Zalo Mini App. Đưa toàn bộ chính sách ưu đãi từ Online xuống Offline mượt mà.
            </p>
            <ul class="space-y-1.5 text-xs text-slate-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ Tích điểm, thăng hạng thẻ (Silver, Gold, Diamond) theo thời gian thực đồng nhất tại mọi chi nhánh</li>
              <li class="flex items-center gap-2">✓ Gửi hóa đơn điện tử và thông báo điểm tích lũy tự động qua Zalo ZNS tiết kiệm 80% chi phí SMS</li>
              <li class="flex items-center gap-2">✓ Cá nhân hóa voucher sinh nhật, gợi ý sản phẩm phù hợp dựa trên lịch sử mua hàng đa kênh</li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">Offline-First Architecture</span>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Vận hành bền bỉ kể cả khi mất mạng internet</h3>
            <p class="text-sm text-slate-500 mt-2 leading-relaxed">
              Được kiến trúc theo chuẩn Offline-First hiện đại. Dữ liệu bán hàng được lưu trữ an toàn trong cơ sở dữ liệu cục bộ tốc độ cao.
            </p>
            <ul class="space-y-1.5 text-xs text-slate-600 mt-4 font-medium">
              <li class="flex items-center gap-2">✓ Bán hàng liên tục không phụ thuộc vào tình trạng đường truyền cáp quang của nhà mạng</li>
              <li class="flex items-center gap-2">✓ Tự động khử trùng lặp và đẩy đồng bộ lên điện toán đám mây theo thuật toán hàng đợi (Message Queue)</li>
              <li class="flex items-center gap-2">✓ An toàn tuyệt đối cho các trung tâm thương mại tầng hầm hoặc kẹt sóng giờ cao điểm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. HỆ SINH THÁI THIẾT BỊ PHẦN CỨNG PLUG & PLAY -->
    <section class="py-20 bg-white border-y border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-rose-600">Tương Thích Tối Đa</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Hệ Sinh Thái Thiết Bị Phần Cứng Tương Thích Plug & Play
        </h2>
        <p class="mt-3 text-base text-slate-500 max-w-2xl mx-auto">
          Cắm là chạy ngay trong 10 giây. Không cần cài đặt driver phức tạp, tương thích với hầu hết thiết bị ngoại vi trên thị trường.
        </p>

        <div class="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold">🖥️</div>
            <h4 class="font-bold text-slate-900 text-xs mt-3">Màn hình đôi Dual-Screen POS</h4>
            <p class="text-[11px] text-slate-500 mt-1">15.6 inch + 10.1 inch phụ hiển thị giỏ hàng & QR thanh toán.</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold">🖨️</div>
            <h4 class="font-bold text-slate-900 text-xs mt-3">Máy in nhiệt K80 siêu tốc</h4>
            <p class="text-[11px] text-slate-500 mt-1">Khổ giấy 80mm có dao cắt tự động, in logo & mã QR VietQR.</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">📷</div>
            <h4 class="font-bold text-slate-900 text-xs mt-3">Máy quét mã vạch 1D/2D đa tia</h4>
            <p class="text-[11px] text-slate-500 mt-1">Quét mã vạch sản phẩm EAN-13, Code 128 và mã QR giảm giá.</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">💵</div>
            <h4 class="font-bold text-slate-900 text-xs mt-3">Ngăn kéo đựng tiền tự động</h4>
            <p class="text-[11px] text-slate-500 mt-1">Kết nối trực tiếp máy in K80, tự động bung ngăn khi in bill thanh toán.</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">📱</div>
            <h4 class="font-bold text-slate-900 text-xs mt-3">Máy POS cầm tay SmartPOS</h4>
            <p class="text-[11px] text-slate-500 mt-1">Tất cả trong một: màn hình cảm ứng, quét mã và in bill trên tay.</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">⚖️</div>
            <h4 class="font-bold text-slate-900 text-xs mt-3">Cân điện tử in mã vạch quầy thu</h4>
            <p class="text-[11px] text-slate-500 mt-1">Dành riêng cho thực phẩm tươi sống, hoa quả và nông sản.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CTA FORM POS -->
    <section class="py-20 bg-slate-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="text-xs font-bold uppercase tracking-wider text-rose-400">Dùng Thử 14 Ngày Miễn Phí Đầy Đủ Tính Năng</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Sẵn Sàng Đột Phá Doanh Số Chuỗi Điểm Bán Cùng ecor POS 4.0?
        </h2>
        <p class="text-slate-400 text-sm max-w-xl mx-auto">
          Trải nghiệm thực tế giải pháp bán hàng siêu tốc 3 giây và kết nối kho tổng thông minh. Đội ngũ chuyên gia eCor sẽ trực tiếp demo và tư vấn phương án triển khai tối ưu cho chuỗi của bạn.
        </p>

        <div class="pt-4 flex flex-wrap justify-center gap-4">
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'ecor POS' })"
            class="px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-lg transition-all"
          >
            Đăng Ký Nhận Bản Quyền Demo Ngay →
          </button>
          <a 
            href="tel:0822235858"
            class="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
          >
            Hotline:  097 8673867
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineEmits(['open-modal'])
</script>
