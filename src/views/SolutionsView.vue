<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-amber-100/70 via-amber-50/40 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Tag -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>HỆ SINH THÁI GIẢI PHÁP CHUYÊN SÂU THEO NGÀNH NGHỀ</span>
        </div>

        <!-- Title -->
        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-5xl mx-auto">
          Giải Quyết Bài Toán Vận Hành Chuỗi Cung Ứng <span class="text-amber-600">May Đo Cho Doanh Nghiệp Bạn</span>
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Từ bán lẻ đa kênh, kho lạnh FMCG, đơn vị vận tải 3PL đến chuỗi phân phối B2B lớn. ecor kết nối liền mạch từ kho bãi (WMS), vận tải (TMS) đến bán lẻ (POS) trên nền tảng Cloud duy nhất.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#bando-nganh"
            class="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-base shadow-md hover:shadow-lg transition-all"
          >
            Khám Phá Giải Pháp Theo Ngành ↓
          </a>
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'Khảo Sát Giải Pháp Ngành' })"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-base border border-zinc-200 shadow-sm hover:shadow transition-all"
          >
            Đặt Lịch Khảo Sát Doanh Nghiệp (Miễn phí)
          </button>
        </div>
      </div>
    </section>

    <!-- 2. FOUR METRICS -->
    <section class="py-12 bg-white border-y border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">+35%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">Tối ưu chi phí logistics</div>
            <p class="text-xs text-zinc-500 mt-1">Giảm rò rỉ cước phụ phí và định mức hao hụt kho bãi.</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">99.98%</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">Chuẩn xác tồn kho</div>
            <p class="text-xs text-zinc-500 mt-1">Kiểm đếm mã QR/Barcode quét thực tế tại rack vị trí.</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">0 Phút</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">Độ trễ đồng bộ</div>
            <p class="text-xs text-zinc-500 mt-1">Realtime API giữa sàn TMĐT, cửa hàng POS và kho tổng.</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 text-left">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-700">x2.5</div>
            <div class="text-sm font-bold text-zinc-800 mt-2">Tốc độ hoàn tất đơn hàng</div>
            <p class="text-xs text-zinc-500 mt-1">Tối ưu lộ trình nhặt hàng (Pick-path) thông minh.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. DÒNG CHẢY DỮ LIỆU & HÀNG HÓA KHÉP KÍN 5 BƯỚC -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Cấu Trúc Vận Hành Toàn Diện</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          Dòng Chảy Dữ Liệu & Hàng Hóa Khép Kín
        </h2>
        <p class="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
          Kết nối đồng bộ thông tin đa điểm, loại bỏ hoàn toàn các ốc đảo dữ liệu giữa bộ phận kho, phòng vận tải và kênh kinh doanh.
        </p>

        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">01 • Cung ứng ban đầu</span>
            <h4 class="font-bold text-zinc-900 text-sm">Nhà Cung Cấp / Nhà Máy</h4>
            <p class="text-xs text-zinc-500">Tạo lệnh ASN đặt hàng, quản lý PO nhập kho, gắn nhãn mã pallet trước khi xuất xưởng.</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ Tự động tạo mã PO</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">02 • ecor WMS</span>
            <h4 class="font-bold text-zinc-900 text-sm">Kho Thông Minh Trung Tâm</h4>
            <p class="text-xs text-zinc-500">Phân vùng vị trí Put-away tự động, quản lý Lot/Date FEFO, sóng đóng gói Wave Picking siêu tốc.</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ Khóa tồn thời gian thực</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">03 • ecor TMS</span>
            <h4 class="font-bold text-zinc-900 text-sm">Điều Phối & Vận Tải</h4>
            <p class="text-xs text-zinc-500">Thuật toán gom tuyến đa điểm, tối ưu tải trọng m3/tấn, theo dõi định vị GPS và xác thực e-POD.</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ Lộ trình AI</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">04 • ecor POS / Hub</span>
            <h4 class="font-bold text-zinc-900 text-sm">Cửa Hàng & Sàn TMĐT</h4>
            <p class="text-xs text-zinc-500">Trạm hoàn tất đơn Ship-from-store, bán hàng offline liên thông sàn TikTok, Shopee, Lazada tức thì.</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ Đồng bộ đa sàn 100%</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-amber-600">05 • Trải nghiệm vượt trội</span>
            <h4 class="font-bold text-zinc-900 text-sm">Khách Hàng Cuối (End-user)</h4>
            <p class="text-xs text-zinc-500">Nhận hàng chính xác chuẩn giờ, theo dõi hành trình đơn minh bạch, bảo hành đổi trả tiện lợi.</p>
            <div class="pt-2 text-[11px] text-amber-600 font-semibold">✓ Đánh giá hài lòng 99.4%</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. BẢN ĐỒ GIẢI PHÁP THEO TỪNG NGÀNH NGHỀ (4 CHUYÊN ĐỀ) -->
    <section id="bando-nganh" class="py-20 bg-white border-t border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Chuyên Biệt Theo Lĩnh Vực Hoạt Động</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Bản Đồ Giải Pháp Theo Từng Ngành Nghề
          </h2>
          <p class="mt-3 text-base text-zinc-500">
            Không có mô hình một cỡ vừa cho tất cả. Khám phá các kịch bản thực thi được tối ưu cho ngành trọng yếu của doanh nghiệp bạn.
          </p>
        </div>

        <div class="mt-16 space-y-16">
          <!-- Ngành 1: E-Commerce & Bán Lẻ Đa Kênh -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50/60 border border-zinc-200 rounded-3xl p-6 sm:p-8">
            <div class="lg:col-span-6 space-y-4 text-left">
              <span class="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">Mô hình B2C & D2C • Omnichannel Retail</span>
              <h3 class="text-2xl font-extrabold text-zinc-900">E-Commerce & Bán Lẻ Đa Kênh</h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                Giải quyết triệt để cơn ác mộng nghẽn đơn mùa Mega Sale ngày đôi và tình trạng bán vượt tồn kho (overselling) trên các sàn thương mại điện tử.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">⚠️ Thách thức:</strong>
                  <span class="text-zinc-500 mt-1 block">Xử lý hàng nghìn đơn/giờ, nhặt nhầm sản phẩm, lệch tồn giữa TikTok Shop/Shopee với kho thực tế.</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">✓ Giải pháp ecor:</strong>
                  <span class="text-zinc-500 mt-1 block">Liên kết WMS + POS + Open API TMĐT. Tự động gom wave nhặt hàng gom đợt, in mã vận đơn hàng loạt 45s/đơn.</span>
                </div>
              </div>
              <div class="pt-2 flex items-center justify-between text-xs font-bold">
                <span class="text-amber-700">KẾT QUẢ THỰC TẾ: 15,000+ Đơn/Ngày Hoàn Tất</span>
                <span class="text-amber-600">-90% Khiếu nại giao trễ</span>
              </div>
            </div>

            <div class="lg:col-span-6">
              <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img src="/images/assets/solutions-ecom.png" alt="E-Commerce & Bán Lẻ Đa Kênh" class="w-full h-64 sm:h-72 object-cover" />
                <div class="p-3 bg-white flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <span>Đồng bộ sàn: Shopee, TikTok Shop, Lazada</span>
                  <span class="text-amber-600 font-mono font-bold">API Sync: 0.12s</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ngành 2: FMCG, Thực Phẩm & Chuỗi Kho Lạnh -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50/60 border border-zinc-200 rounded-3xl p-6 sm:p-8">
            <div class="lg:col-span-6 lg:order-2 space-y-4 text-left">
              <span class="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">Kho Lạnh & Thực Phẩm • Cold Chain & Fresh</span>
              <h3 class="text-2xl font-extrabold text-zinc-900">FMCG, Thực Phẩm & Chuỗi Kho Lạnh</h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                Chuẩn hóa quản trị theo nhiệt độ phòng/đông/mát, cơ chế FEFO (hàng hết hạn trước xuất trước) tự động bảo vệ giá trị hạn dùng của từng lô hàng.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">⚠️ Thách thức:</strong>
                  <span class="text-zinc-500 mt-1 block">Quản lý hạn sử dụng khắt khe, chênh lệch nhiệt độ gây hư hại hàng đông lạnh.</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">✓ Giải pháp ecor:</strong>
                  <span class="text-zinc-500 mt-1 block">Tự động chọn lô FEFO/FIFO, cảnh báo cận date 30-60 ngày, kết nối cảm biến IoT nhiệt độ 24/7.</span>
                </div>
              </div>
              <div class="pt-2 flex items-center justify-between text-xs font-bold">
                <span class="text-amber-700">KẾT QUẢ THỰC TẾ: Giảm 40% Hao Hụt Do Hết Hạn</span>
                <span class="text-amber-600">100% Truy xuất nguồn gốc</span>
              </div>
            </div>

            <div class="lg:col-span-6 lg:order-1">
              <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img src="/images/assets/solutions-fmcg.png" alt="FMCG & Kho Lạnh" class="w-full h-64 sm:h-72 object-cover" />
                <div class="p-3 bg-white flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <span>Nhiệt độ kho duy trì: -18.5°C</span>
                  <span class="text-amber-600 font-mono font-bold">IoT Sensor OK</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ngành 3: Đơn Vị Vận Tải & Dịch Vụ Logistics 3PL / 4PL -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50/60 border border-zinc-200 rounded-3xl p-6 sm:p-8">
            <div class="lg:col-span-6 space-y-4 text-left">
              <span class="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">Nhà Xe & Nhà Cung Cấp Dịch Vụ • Freight & 3PL Logistics</span>
              <h3 class="text-2xl font-extrabold text-zinc-900">Đơn Vị Vận Tải & Dịch Vụ Logistics 3PL / 4PL</h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                Nền tảng đa chủ hàng (Multi-client) với cổng portal chuyên biệt cho từng đối tác kiểm tra hàng tồn, biểu phí tính tiền lưu kho và vận tải minh bạch.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">⚠️ Thách thức:</strong>
                  <span class="text-zinc-500 mt-1 block">Trộn lẫn tồn kho nhiều chủ hàng, đội xe thầu phụ cồng kềnh khó kiểm soát, rủi ro mất biên bản giấy.</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">✓ Giải pháp ecor:</strong>
                  <span class="text-zinc-500 mt-1 block">Phân quyền Multi-tenant, thuật toán gom đơn tối ưu trọng tải xe 94.5%, ký biên bản điện tử e-POD qua mobile app.</span>
                </div>
              </div>
              <div class="pt-2 flex items-center justify-between text-xs font-bold">
                <span class="text-amber-700">KẾT QUẢ THỰC TẾ: +300% Khách Hàng Phục Vụ</span>
                <span class="text-amber-600">0 Tăng nhân sự điều phối</span>
              </div>
            </div>

            <div class="lg:col-span-6">
              <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img src="/images/assets/solutions-3pl.png" alt="Logistics 3PL / 4PL" class="w-full h-64 sm:h-72 object-cover" />
                <div class="p-3 bg-white flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <span>e-POD đã ký điện tử: 1,420 chuyến</span>
                  <span class="text-amber-600 font-mono font-bold">Tối ưu tải 94.5%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ngành 4: Sản Xuất & Phân Phối B2B Đa Chi Nhánh -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50/60 border border-zinc-200 rounded-3xl p-6 sm:p-8">
            <div class="lg:col-span-6 lg:order-2 space-y-4 text-left">
              <span class="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Tập Đoàn Phân Phối Lớn • B2B Enterprise Distribution</span>
              <h3 class="text-2xl font-extrabold text-zinc-900">Sản Xuất & Phân Phối B2B Đa Chi Nhánh</h3>
              <p class="text-sm text-zinc-600 leading-relaxed">
                Hợp nhất kho nhà máy, kho trung chuyển vùng và các đại lý cấp 1 trên một bức tranh tồn kho duy nhất, kết nối thông suốt với hệ thống ERP lõi.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-600 block">⚠️ Thách thức:</strong>
                  <span class="text-zinc-500 mt-1 block">Luân chuyển hàng giữa các kho vệ tinh rườm rà, đối soát số liệu với kế toán ERP chậm trễ hàng tuần.</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-zinc-200">
                  <strong class="text-amber-700 block">✓ Giải pháp ecor:</strong>
                  <span class="text-zinc-500 mt-1 block">Luân chuyển liên kho 1 chạm bằng barcode, đồng bộ trực tiếp 2 chiều với SAP, Oracle NetSuite, Bravo, MISA AMIS.</span>
                </div>
              </div>
              <div class="pt-2 flex items-center justify-between text-xs font-bold">
                <span class="text-amber-800">KẾT QUẢ THỰC TẾ: Tinh Gọn 60% Thời Gian Chứng Từ</span>
                <span class="text-amber-600">ERP Sync Realtime</span>
              </div>
            </div>

            <div class="lg:col-span-6 lg:order-1">
              <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img src="/images/assets/solutions-b2b.png" alt="Sản Xuất & Phân Phối B2B" class="w-full h-64 sm:h-72 object-cover" />
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
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Khách Hàng Nói Về ecor</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          Doanh Nghiệp Đầu Ngành Tin Cậy Vận Hành
        </h2>
        <p class="mt-3 text-sm text-zinc-500">Hơn 450+ doanh nghiệp phân phối và bán lẻ tại Việt Nam đang vận hành chuỗi cung ứng mỗi ngày trên ecor.</p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div class="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
            <div class="text-amber-400 text-sm">★★★★★</div>
            <p class="text-xs text-zinc-600 italic leading-relaxed">
              "ecor WMS giúp chúng tôi vượt qua đợt Black Friday với kỷ lục 22.000 đơn mà không hề bị nghẽn hay sót đơn trên sàn TikTok Shop. Hệ thống pick hàng wave giúp nhân viên kho đi lại ít hơn 40%."
            </p>
            <div class="pt-2 border-t border-zinc-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">TN</div>
              <div>
                <strong class="text-xs text-zinc-900 block">Trần Nhật Nam</strong>
                <span class="text-[10px] text-zinc-400">Giám đốc Vận hành - Chuỗi Thời trang Routine</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
            <div class="text-amber-400 text-sm">★★★★★</div>
            <p class="text-xs text-zinc-600 italic leading-relaxed">
              "Hạn date sữa và chế phẩm lạnh là vấn đề sống còn. Tính năng tự động định tuyến FEFO của ecor đã cứu chuỗi chúng tôi khỏi việc hủy hàng cận hạn trị giá hàng trăm triệu mỗi quý."
            </p>
            <div class="pt-2 border-t border-zinc-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">ML</div>
              <div>
                <strong class="text-xs text-zinc-900 block">Nguyễn Mai Linh</strong>
                <span class="text-[10px] text-zinc-400">Head of Supply Chain - Dairy Milk Corp</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
            <div class="text-amber-400 text-sm">★★★★★</div>
            <p class="text-xs text-zinc-600 italic leading-relaxed">
              "Khách hàng 3PL của chúng tôi cực kỳ hài lòng vì có thể tự tra cứu tồn kho qua portal riêng. Điều phối xe TMS giúp giảm 18% quãng đường chạy rỗng, nâng hiệu suất toàn đội xe."
            </p>
            <div class="pt-2 border-t border-zinc-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">HQ</div>
              <div>
                <strong class="text-xs text-zinc-900 block">Võ Hoàng Quân</strong>
                <span class="text-[10px] text-zinc-400">Phó Tổng Giám Đốc - VinaTrans 3PL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FORM NHẬN HỒ SƠ THIẾT KẾ -->
    <section class="py-20 bg-amber-900 text-zinc-900 font-bold">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Đăng Ký Khảo Sát & Trải Nghiệm</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Nhận Hồ Sơ Thiết Kế Luồng Vận Hành Riêng Biệt Cho Doanh Nghiệp
        </h2>
        <p class="text-amber-200 text-sm max-w-xl mx-auto">
          Đội ngũ chuyên gia giải pháp logistics của ecor sẽ trực tiếp khảo sát mô hình hiện tại, định lượng điểm nghẽn và phác thảo phương án triển khai phần mềm tối ưu trong 48h.
        </p>

        <div class="pt-4 flex flex-wrap justify-center gap-4">
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'Giải Pháp Ngành' })"
            class="px-8 py-4 rounded-xl bg-white hover:bg-zinc-50 text-amber-950 font-extrabold text-sm shadow-lg transition-all"
          >
            Gửi Yêu Cầu Khảo Sát & Nhận Bản Vẽ Thiết Kế →
          </button>
          <a 
            href="tel:0822235858"
            class="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-semibold text-sm border border-amber-700 transition-all"
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
