<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION & BILLING TOGGLE -->
    <section class="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Tag -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span>● Bảng Giá Minh Bạch • Không Chi Phí Ẩn • Cam Kết SLA 99.98%</span>
        </div>

        <!-- Title -->
        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          Đầu Tư Thông Minh, Tối Ưu Chi Phí Cho Mọi Quy Mô Vận Hành
        </h1>

        <!-- Subtitle -->
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Lựa chọn gói giải pháp linh hoạt từ mô hình khởi nghiệp, chuỗi bán lẻ tăng trưởng nhanh đến tập đoàn logistics lớn. Tiết kiệm ngay 20% khi thanh toán theo năm.
        </p>

        <!-- Billing Cycle Switcher -->
        <div class="mt-8 inline-flex items-center p-1.5 rounded-full bg-zinc-100 border border-zinc-200 shadow-inner">
          <button
            @click="isAnnual = false"
            class="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all"
            :class="!isAnnual ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-800'"
          >
            Thanh toán theo tháng
          </button>
          <button
            @click="isAnnual = true"
            class="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5"
            :class="isAnnual ? 'bg-amber-400 text-zinc-900 font-bold shadow-sm' : 'text-zinc-500 hover:text-zinc-800'"
          >
            <span>Thanh toán theo năm</span>
            <span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-extrabold">TIẾT KIỆM 20% + MIỄN PHÍ SETUP</span>
          </button>
        </div>

        <!-- Trust Features -->
        <div class="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
          <span class="flex items-center gap-1">✓ Dùng thử 14 ngày không rủi ro</span>
          <span class="flex items-center gap-1">✓ Bảo mật chuẩn ISO 27001</span>
          <span class="flex items-center gap-1">✓ Hỗ trợ kỹ thuật chuyên gia 24/7</span>
        </div>
      </div>
    </section>

    <!-- 2. THREE PRICING TIERS -->
    <section class="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <!-- TIER 1: STARTER -->
        <div class="rounded-3xl bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-zinc-400">Khởi Điểm</span>
              <span class="text-xl">🏪</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">ecor Starter</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              Dành cho cửa hàng bán lẻ, kho đơn lẻ, shop TMĐT đang chuẩn hóa số hóa nhập-xuất-tồn.
            </p>

            <div class="py-3 border-y border-zinc-100">
              <div class="flex items-baseline gap-1">
                <span class="text-3xl sm:text-4xl font-black text-zinc-900">
                  {{ isAnnual ? '950,000' : '1,190,000' }}
                </span>
                <span class="text-xs text-zinc-500 font-medium">đ / tháng</span>
              </div>
              <div class="text-[11px] text-zinc-400 mt-1">
                {{ isAnnual ? '11,400,000 đ thanh toán cả năm (tiết kiệm 2.8 triệu)' : '14,280,000 đ thanh toán hàng năm' }}
              </div>
            </div>

            <div class="space-y-2.5 pt-2">
              <span class="text-[11px] font-bold uppercase text-zinc-700 block">Bao gồm trong gói:</span>
              <ul class="space-y-2 text-xs text-zinc-600">
                <li class="flex items-center gap-2">✓ <strong>01 Kho vật lý</strong> + <strong>01 Điểm bán POS</strong></li>
                <li class="flex items-center gap-2">✓ Tối đa 03 tài khoản nhân viên quản trị</li>
                <li class="flex items-center gap-2">✓ Quản lý nhập - xuất - chuyển kho tức thời</li>
                <li class="flex items-center gap-2">✓ In mã vạch Barcode chuẩn Code128 / QR Code</li>
                <li class="flex items-center gap-2">✓ Ứng dụng di động PDA / Mobile quét mã Barcode</li>
                <li class="flex items-center gap-2 text-zinc-400 line-through">Điều phối xe TMS tự động hóa</li>
                <li class="flex items-center gap-2">✓ Hỗ trợ ticket & Hotline giờ hành chính</li>
              </ul>
            </div>
          </div>

          <div class="pt-8 mt-6">
            <button
              @click="$emit('open-modal', { type: 'pricing', moduleName: 'ecor Starter' })"
              class="w-full py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-sm transition-all"
            >
              Bắt đầu dùng thử 14 ngày
            </button>
          </div>
        </div>

        <!-- TIER 2: PROFESSIONAL (FEATURED) -->
        <div class="rounded-3xl bg-white border-2 border-amber-600 p-8 shadow-xl relative flex flex-col justify-between text-left transform lg:-translate-y-2">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-zinc-900 font-bold text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow">
            ⭐ Được Chọn Nhiều Nhất
          </div>

          <div class="space-y-4">
            <div class="flex items-center justify-between pt-1">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Tăng Trưởng</span>
              <span class="text-xl">🚀</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">ecor Professional</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              Chuỗi bán lẻ đa điểm, kho E-commerce quy mô trung bình, doanh nghiệp sản xuất và phân phối FMCG.
            </p>

            <div class="py-3 border-y border-zinc-100">
              <div class="flex items-baseline gap-1">
                <span class="text-3xl sm:text-4xl font-black text-amber-700">
                  {{ isAnnual ? '2,550,000' : '3,190,000' }}
                </span>
                <span class="text-xs text-zinc-500 font-medium">đ / tháng</span>
              </div>
              <div class="text-[11px] text-amber-700 font-medium mt-1">
                {{ isAnnual ? '30,600,000 đ thanh toán cả năm (tiết kiệm 7.6 triệu)' : '38,280,000 đ thanh toán hàng năm (tiết kiệm 9.6 triệu)' }}
              </div>
            </div>

            <div class="space-y-2.5 pt-2">
              <span class="text-[11px] font-bold uppercase text-zinc-700 block">Bao gồm toàn bộ Starter và bổ sung:</span>
              <ul class="space-y-2 text-xs text-zinc-600">
                <li class="flex items-center gap-2">✓ <strong>Lên đến 05 Kho vật lý</strong> & Chi nhánh bán hàng</li>
                <li class="flex items-center gap-2">✓ <strong>15 tài khoản</strong> phân quyền đa nhiệm chi tiết</li>
                <li class="flex items-center gap-2">✓ <strong>Quản lý sơ đồ ô kệ định vị 3D</strong> Slotting & Bin</li>
                <li class="flex items-center gap-2">✓ <strong>Chiến thuật gom đơn sóng hàng</strong> Wave & Batch Picking</li>
                <li class="flex items-center gap-2">✓ Kiểm soát lô/hạn theo chuẩn FIFO & FEFO tuyệt đối</li>
                <li class="flex items-center gap-2">✓ Module điều phối vận tải <strong>ecor TMS</strong> (50 chuyến/tháng)</li>
                <li class="flex items-center gap-2">✓ Đồng bộ 2 chiều sàn: <strong>Shopee, TikTok Shop, Lazada</strong></li>
                <li class="flex items-center gap-2">✓ Hỗ trợ kỹ thuật <strong>24/7 qua Hotline & Kênh riêng Zalo</strong></li>
              </ul>
            </div>
          </div>

          <div class="pt-8 mt-6">
            <button
              @click="$emit('open-modal', { type: 'pricing', moduleName: 'ecor Professional' })"
              class="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Đăng ký gói Tăng Trưởng →
            </button>
          </div>
        </div>

        <!-- TIER 3: ENTERPRISE -->
        <div class="rounded-3xl bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-zinc-400">Doanh Nghiệp</span>
              <span class="text-xl">🏢</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">ecor Enterprise</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              Tập đoàn chuỗi phân phối lớn, tổng kho logistics 3PL/4PL, chuỗi bán lẻ quy mô trên 20 chi nhánh.
            </p>

            <div class="py-3 border-y border-zinc-100">
              <div class="text-3xl sm:text-4xl font-black text-zinc-900">Tùy Biến</div>
              <div class="text-[11px] text-zinc-400 mt-1">Báo giá theo lượng đơn và đặc thù quy trình</div>
            </div>

            <div class="space-y-2.5 pt-2">
              <span class="text-[11px] font-bold uppercase text-zinc-700 block">Đặc quyền cấp độ tập đoàn:</span>
              <ul class="space-y-2 text-xs text-zinc-600">
                <li class="flex items-center gap-2">✓ <strong>Không giới hạn số lượng kho</strong> & tài khoản vận hành</li>
                <li class="flex items-center gap-2">✓ Kiến trúc Multi-tenant chuyên biệt cho 3PL phục vụ nhiều chủ hàng</li>
                <li class="flex items-center gap-2">✓ Thuật toán AI tối ưu cung đường TMS đa điểm giao tự động</li>
                <li class="flex items-center gap-2">✓ Open API & Webhook tích hợp ERP: <strong>SAP, Oracle, MISA, Bravo</strong></li>
                <li class="flex items-center gap-2">✓ Tùy chọn hạ tầng <strong>Private Cloud</strong> hoặc On-premise</li>
                <li class="flex items-center gap-2">✓ Cam kết <strong>SLA 99.98% uptime</strong> kèm bồi thường tài chính</li>
                <li class="flex items-center gap-2">✓ Kỹ sư giải pháp chuyên trách 1-1 đồng hành triển khai onsite</li>
              </ul>
            </div>
          </div>

          <div class="pt-8 mt-6">
            <button
              @click="$emit('open-modal', { type: 'pricing', moduleName: 'ecor Enterprise' })"
              class="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm transition-all"
            >
              Tư vấn giải pháp Enterprise
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. INTERACTIVE COST CALCULATOR (MODULE BỔ SUNG) -->
    <section class="py-16 bg-white border-y border-zinc-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-200">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Mở Rộng Không Giới Hạn</span>
            <h3 class="text-2xl font-extrabold text-zinc-900 mt-1">Module Bổ Sung & Tính Toán Chi Phí Linh Hoạt</h3>
            <p class="text-xs text-zinc-500 mt-0.5">Chỉ chi trả cho đúng năng lực doanh nghiệp cần dùng. Bật/tắt các module bất kỳ lúc nào ngay trên hệ thống.</p>
          </div>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-right">
            <span class="text-[10px] uppercase font-bold text-amber-700 block">Phí module dự kiến thêm:</span>
            <span class="text-xl font-black text-amber-700">+ {{ calculatedExtraCost.toLocaleString('vi-VN') }} đ / tháng</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <label 
            class="p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left"
            :class="addons.wms ? 'border-amber-500 bg-amber-50/50 shadow-sm' : 'border-zinc-200 bg-white hover:bg-zinc-50'"
          >
            <div class="flex justify-between items-start">
              <span class="text-lg">📦</span>
              <input type="checkbox" v-model="addons.wms" class="w-4 h-4 text-amber-600 rounded" />
            </div>
            <div class="mt-3">
              <strong class="text-sm font-bold text-zinc-900 block">ecor WMS Nâng cao</strong>
              <p class="text-[11px] text-zinc-500 mt-0.5 leading-tight">Kiểm soát vị trí tầng ô kệ 3D, cross-docking và quản lý kho serial/IMEI phức tạp.</p>
            </div>
            <div class="pt-3 border-t border-zinc-100 mt-3 font-bold text-xs text-amber-700">+900,000 đ <span class="font-normal text-zinc-400">/ tháng</span></div>
          </label>

          <label 
            class="p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left"
            :class="addons.tms ? 'border-amber-500 bg-amber-50/50 shadow-sm' : 'border-zinc-200 bg-white hover:bg-zinc-50'"
          >
            <div class="flex justify-between items-start">
              <span class="text-lg">🚚</span>
              <input type="checkbox" v-model="addons.tms" class="w-4 h-4 text-amber-600 rounded" />
            </div>
            <div class="mt-3">
              <strong class="text-sm font-bold text-zinc-900 block">ecor TMS Điều phối xe</strong>
              <p class="text-[11px] text-zinc-500 mt-0.5 leading-tight">Tự động gom chuyến, định vị GPS tài xế thời gian thực và quản lý chi phí xăng dầu, POD.</p>
            </div>
            <div class="pt-3 border-t border-zinc-100 mt-3 font-bold text-xs text-amber-700">+1,200,000 đ <span class="font-normal text-zinc-400">/ tháng</span></div>
          </label>

          <label 
            class="p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left"
            :class="addons.pos ? 'border-amber-500 bg-amber-50/50 shadow-sm' : 'border-zinc-200 bg-white hover:bg-zinc-50'"
          >
            <div class="flex justify-between items-start">
              <span class="text-lg">🏪</span>
              <input type="checkbox" v-model="addons.pos" class="w-4 h-4 text-amber-600 rounded" />
            </div>
            <div class="mt-3">
              <strong class="text-sm font-bold text-zinc-900 block">ecor POS Điểm bán</strong>
              <p class="text-[11px] text-zinc-500 mt-0.5 leading-tight">Phần mềm tính tiền tại quầy, tích điểm CRM khách hàng, in hóa đơn nhanh ngay cả khi mất mạng.</p>
            </div>
            <div class="pt-3 border-t border-zinc-100 mt-3 font-bold text-xs text-amber-700">+450,000 đ <span class="font-normal text-zinc-400">/ điểm / tháng</span></div>
          </label>

          <label 
            class="p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left"
            :class="addons.erp ? 'border-amber-500 bg-amber-50/50 shadow-sm' : 'border-zinc-200 bg-white hover:bg-zinc-50'"
          >
            <div class="flex justify-between items-start">
              <span class="text-lg">⚙️</span>
              <input type="checkbox" v-model="addons.erp" class="w-4 h-4 text-amber-600 rounded" />
            </div>
            <div class="mt-3">
              <strong class="text-sm font-bold text-zinc-900 block">Cổng kết nối ERP & Kế toán</strong>
              <p class="text-[11px] text-zinc-500 mt-0.5 leading-tight">Tự động đồng bộ chứng từ thu chi, hóa đơn điện tử với MISA, SAP, Fast, Bravo qua Open API.</p>
            </div>
            <div class="pt-3 border-t border-zinc-100 mt-3 font-bold text-xs text-amber-700">+1,500,000 đ <span class="font-normal text-zinc-400">/ tháng</span></div>
          </label>
        </div>
      </div>
    </section>

    <!-- 4. FAQ ACCORDION -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Giải Đáp Thắc Mắc</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          Câu Hỏi Thường Gặp Về Bảng Giá
        </h2>
        <p class="mt-3 text-sm text-zinc-500">Những điều bạn cần biết trước khi khởi tạo dịch vụ tại ecor.vn</p>

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

    <!-- 5. BANNER CTA -->
    <section class="py-16 bg-gradient-to-r from-amber-700 to-amber-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 class="text-2xl sm:text-3xl font-extrabold">Chưa Chắc Chắn Gói Nào Phù Hợp Cho Mô Hình Doanh Nghiệp?</h3>
          <p class="text-amber-100 text-sm mt-1">Hãy liên hệ với đội ngũ kỹ sư vận hành ecor.vn để được khảo sát kho bãi thực địa, tư vấn kiến trúc giải pháp và lập bảng toán chi phí ROI chi tiết hoàn toàn miễn phí.</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <a href="tel:0822235858" class="px-5 py-3 rounded-xl bg-white text-amber-800 font-extrabold text-xs shadow hover:bg-zinc-100 transition-all">Hotline:  097 8673867</a>
          <button 
            @click="$emit('open-modal', { type: 'pricing', moduleName: 'Tư Vấn Gói Giá Phù Hợp' })"
            class="px-5 py-3 rounded-xl bg-amber-900/60 hover:bg-amber-500 text-zinc-900 font-bold font-bold text-xs border border-white/30 transition-all"
          >
            Đăng ký khảo sát kho →
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

defineEmits(['open-modal'])

const isAnnual = ref(true)

const addons = reactive({
  wms: false,
  tms: false,
  pos: false,
  erp: false
})

const calculatedExtraCost = computed(() => {
  let sum = 0
  if (addons.wms) sum += 900000
  if (addons.tms) sum += 1200000
  if (addons.pos) sum += 450000
  if (addons.erp) sum += 1500000
  return sum
})

const faqs = [
  {
    q: 'Tôi có thể đổi gói dịch vụ khi quy mô công ty tăng trưởng không?',
    a: 'Hoàn toàn được. Hệ thống eCor hỗ trợ nâng cấp hoặc bổ sung thêm kho, xe tải hoặc tài khoản người dùng bất kỳ lúc nào. Khoản chênh lệch sẽ được tự động tính toán bù trừ theo số ngày sử dụng thực tế còn lại trong chu kỳ.'
  },
  {
    q: 'Chi phí triển khai Onsite và đào tạo nhân viên được tính như thế nào?',
    a: 'Đối với gói Professional thanh toán năm và gói Enterprise, eCor miễn phí gói onboarding chuẩn trị giá 15.000.000 đ gồm đào tạo trực tuyến và hướng dẫn thiết lập hệ thống. Trường hợp khảo sát và cắm chốt trực tiếp tại hiện trường nhiều ngày, chi phí sẽ được thỏa thuận minh bạch theo địa bàn.'
  },
  {
    q: 'ecor có tương thích với các máy quét Barcode / PDA cầm tay có sẵn không?',
    a: 'Có. Ứng dụng ecor WMS và POS hỗ trợ toàn bộ các thiết bị chạy Android (Zebra, Honeywell, Datalogic, Sunmi, Urovo...) cũng như máy quét mã vạch không dây Bluetooth hoặc có dây USB kết nối trực tiếp với máy tính.'
  },
  {
    q: 'Dữ liệu kho vận và khách hàng của chúng tôi được bảo mật như thế nào?',
    a: 'Dữ liệu của quý doanh nghiệp được mã hóa AES-256 ở trạng thái lưu trữ và TLS 1.3 trong truyền tải, lưu trữ trên hạ tầng đám mây đạt tiêu chuẩn ISO/IEC 27001 với cơ chế sao lưu tự động hàng ngày và cam kết không chia sẻ cho bên thứ ba.'
  }
]
</script>
