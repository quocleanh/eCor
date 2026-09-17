<template>
  <div class="bg-[#fafcff] text-slate-800">
    <!-- HERO -->
    <section class="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-sky-100/60 via-blue-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-700 shadow-sm">
          <span>📚 Trung Tâm Tài Nguyên & Nhà Phát Triển</span>
        </div>

        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-slate-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          Tài Liệu Kỹ Thuật, Hướng Dẫn & <span class="text-sky-600">Open API ecor.vn</span>
        </h1>

        <p class="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tất cả tài liệu hướng dẫn vận hành kho bãi, định tuyến xe tải, quy chuẩn kết nối thiết bị phần cứng và tài liệu API RESTful dành cho kỹ sư phát triển.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#api-docs"
            class="px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all"
          >
            Tài Liệu Open API 3.0 ↓
          </a>
          <router-link
            to="/lien-he"
            class="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-all"
          >
            Liên Hệ Chuyên Gia Hỗ Trợ
          </router-link>
        </div>
      </div>
    </section>

    <!-- RESOURCES GRID -->
    <section class="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <!-- 1. API & Webhook -->
        <div id="api-docs" class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xl">
              ⚡
            </div>
            <h3 class="text-xl font-bold text-slate-900">Tài Liệu API & Webhook</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Tích hợp hệ thống nội bộ của bạn với ecor qua RESTful API chuẩn OpenAPI 3.0. Hỗ trợ xác thực Bearer Token, Webhook real-time sự kiện kho và đơn hàng.
            </p>
            <ul class="space-y-2 text-xs text-slate-600 font-medium">
              <li class="flex items-center gap-2">✓ API Quản lý Tồn kho & Ô Kệ (Inventory & Bin)</li>
              <li class="flex items-center gap-2">✓ API Đồng bộ Đơn hàng & Lệnh xuất (Orders & Shipments)</li>
              <li class="flex items-center gap-2">✓ Webhook cảnh báo biến động tồn & trạng thái xe GPS</li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-slate-100">
            <button 
              @click="$emit('open-modal', { type: 'demo', moduleName: 'Tài Liệu API eCor' })"
              class="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
            >
              <span>Xem tài liệu Swagger & Postman</span>
              <span>→</span>
            </button>
          </div>
        </div>

        <!-- 2. Hướng dẫn tích hợp thiết bị -->
        <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xl">
              📱
            </div>
            <h3 class="text-xl font-bold text-slate-900">Cấu Hình Thiết Bị & Phần Cứng</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Hướng dẫn kết nối máy in vận đơn K80, máy quét mã vạch 1D/2D, máy kiểm kho PDA Android chuyên dụng và cân điện tử RS232 chỉ trong vài bước.
            </p>
            <ul class="space-y-2 text-xs text-slate-600 font-medium">
              <li class="flex items-center gap-2">✓ Cài đặt ứng dụng ecor PDA cho Zebra, Sunmi, Urovo</li>
              <li class="flex items-center gap-2">✓ Cấu hình in nhãn Barcode Code128 / GS1 tự động</li>
              <li class="flex items-center gap-2">✓ Khắc phục sự cố kết nối máy in mạng LAN / Wifi</li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-slate-100">
            <router-link to="/lien-he" class="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1">
              <span>Yêu cầu hỗ trợ kỹ thuật Onsite</span>
              <span>→</span>
            </router-link>
          </div>
        </div>

        <!-- 3. Cẩm nang vận hành -->
        <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl">
              📖
            </div>
            <h3 class="text-xl font-bold text-slate-900">Cẩm Nang Quản Trị Logistics</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Bộ tài liệu hướng dẫn chuẩn hóa sơ đồ mặt bằng kho hàng, phân bổ vị trí theo nguyên tắc ABC và xây dựng kịch bản nhặt hàng Wave Picking tối ưu quãng đường.
            </p>
            <ul class="space-y-2 text-xs text-slate-600 font-medium">
              <li class="flex items-center gap-2">✓ Mẫu layout kho chuẩn 500m² – 10.000m²</li>
              <li class="flex items-center gap-2">✓ Quy trình kiểm kê định kỳ không gián đoạn kho</li>
              <li class="flex items-center gap-2">✓ Biểu mẫu tính toán chi phí vận hành xe tải TMS</li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-slate-100">
            <button 
              @click="$emit('open-modal', { type: 'demo', moduleName: 'Cẩm nang Logistics eCor' })"
              class="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              <span>Tải trọn bộ tài liệu (PDF)</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion -->
      <div class="mt-20 max-w-4xl mx-auto text-left">
        <h3 class="text-2xl font-extrabold text-slate-900 text-center mb-8">Câu Hỏi Thường Gặp Về Tích Hợp</h3>
        <div class="space-y-3">
          <div class="p-5 rounded-2xl bg-white border border-slate-200">
            <h4 class="font-bold text-sm text-slate-900">Thời gian tạo tài khoản Sandbox để thử nghiệm API là bao lâu?</h4>
            <p class="mt-2 text-xs text-slate-600 leading-relaxed">Ngay lập tức sau khi đăng ký tài khoản dùng thử tại trang Đăng Ký, bạn sẽ nhận được API Key và quyền truy cập môi trường Sandbox với đầy đủ dữ liệu mẫu để thử nghiệm.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-slate-200">
            <h4 class="font-bold text-sm text-slate-900">ecor có giới hạn số lượt gọi API (Rate Limit) không?</h4>
            <p class="mt-2 text-xs text-slate-600 leading-relaxed">Gói Starter hỗ trợ 2.000 calls/phút, gói Professional hỗ trợ 10.000 calls/phút và gói Enterprise Dedicated Server không giới hạn số lượng gọi API.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineEmits(['open-modal'])
</script>
