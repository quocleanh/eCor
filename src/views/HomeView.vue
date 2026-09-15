<template>
  <div>
    <!-- HERO SECTION -->
    <section class="relative py-16 md:py-24 overflow-hidden border-b border-slate-200/60">
      <HeroCanvas />
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-slate-50 -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 bg-blue-100/90 text-blue-700 border border-blue-200/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm">
              <span class="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              Nền tảng SaaS Đa Dịch Vụ Cho Bán Lẻ & Chuỗi Doanh Nghiệp
            </div>

            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Một nền tảng, một dữ liệu, <span class="gradient-text">toàn bộ vận hành</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              eCor hợp nhất <strong>8 phân hệ cốt lõi</strong>: POS, TMĐT, Kho vận WMS, Giao nhận TMS, Nhân sự HRM, Kế toán HĐĐT, Mobile App và CRM vào một hệ điều hành thống nhất thời gian thực.
            </p>

            <!-- Key Feature Badges -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div class="bg-white/80 border border-slate-200/80 rounded-xl p-3 shadow-sm hover-lift">
                <div class="text-blue-600 font-extrabold text-lg">8 Module</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">Tích hợp sẵn có</div>
              </div>
              <div class="bg-white/80 border border-slate-200/80 rounded-xl p-3 shadow-sm hover-lift">
                <div class="text-cyan-600 font-extrabold text-lg">Real-time</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">Đồng bộ tồn đa kênh</div>
              </div>
              <div class="bg-white/80 border border-slate-200/80 rounded-xl p-3 shadow-sm hover-lift">
                <div class="text-indigo-600 font-extrabold text-lg">PDA & RFID</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">Kiểm kho tức thời</div>
              </div>
              <div class="bg-white/80 border border-slate-200/80 rounded-xl p-3 shadow-sm hover-lift">
                <div class="text-emerald-600 font-extrabold text-lg">99.98%</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">Độ ổn định Cloud</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                @click="$emit('open-modal', { type: 'demo' })"
                class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Trải Nghiệm Toàn Diện 14 Ngày</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <a
                href="#he-sinh-thai"
                class="glass border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-300 px-7 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <span>Xem Sơ Đồ Hệ Sinh Thái</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
            </div>

            <!-- Trust Badge -->
            <div class="flex items-center gap-4 text-xs text-slate-500 pt-2">
              <div class="flex items-center gap-1 text-amber-500 font-bold">
                ★★★★★
              </div>
              <span>Được tin dùng bởi hơn <strong>10,000+</strong> điểm bán & kho hàng trên toàn quốc</span>
            </div>

          </div>

          <!-- Right Column: Interactive Multi-Module Dashboard -->
          <div class="lg:col-span-5">
            <div class="relative bg-white/95 rounded-2xl shadow-2xl border border-slate-200/90 p-5 sm:p-6 hover-lift backdrop-blur-md">
              
              <!-- Dashboard Header -->
              <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md">
                    eC
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-sm">eCor Operations Hub</h3>
                    <div class="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>8 Phân hệ đang kết nối Real-time</span>
                    </div>
                  </div>
                </div>
                <span class="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-1 rounded-md">Live Stream</span>
              </div>

              <!-- Module Metrics Matrix -->
              <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="bg-blue-50/70 border border-blue-100 rounded-xl p-3">
                  <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span class="font-bold text-blue-700">POS & Quầy</span>
                    <span class="text-emerald-600 font-bold">+18.4%</span>
                  </div>
                  <div class="text-lg font-extrabold text-slate-900">1,482 đơn</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">Doanh thu: 348.5 tr</div>
                </div>

                <div class="bg-cyan-50/70 border border-cyan-100 rounded-xl p-3">
                  <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span class="font-bold text-cyan-700">ECOM & Sàn</span>
                    <span class="text-emerald-600 font-bold">+34.2%</span>
                  </div>
                  <div class="text-lg font-extrabold text-slate-900">2,890 đơn</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">Shopee, TikTok, Web</div>
                </div>

                <div class="bg-indigo-50/70 border border-indigo-100 rounded-xl p-3">
                  <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span class="font-bold text-indigo-700">WMS Kho Vận</span>
                    <span class="text-blue-600 font-bold">RFID Sync</span>
                  </div>
                  <div class="text-lg font-extrabold text-slate-900">99.8%</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">Độ chính xác kiểm tồn</div>
                </div>

                <div class="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3">
                  <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span class="font-bold text-emerald-700">TMS Giao Vận</span>
                    <span class="text-emerald-600 font-bold">Auto COD</span>
                  </div>
                  <div class="text-lg font-extrabold text-slate-900">97.6%</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">Tỷ lệ giao thành công</div>
                </div>
              </div>

              <!-- Realtime Operations Ticker -->
              <div class="bg-slate-900 text-white rounded-xl p-3.5 space-y-2 text-xs">
                <div class="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
                  <span class="font-bold uppercase tracking-wider text-[10px] text-slate-300">Nhật ký lõi tự động</span>
                  <span class="text-emerald-400 font-mono">0.12s latency</span>
                </div>
                <div class="space-y-1.5 font-mono text-[11px]">
                  <div class="flex items-center justify-between text-slate-300">
                    <span class="text-blue-400">[POS #CH01]</span>
                    <span>Xuất HĐĐT #HD-8932 (Account sync)</span>
                  </div>
                  <div class="flex items-center justify-between text-slate-300">
                    <span class="text-cyan-400">[TIKTOK]</span>
                    <span>Đơn mới #TK-4820 &rarr; WMS Pick-list</span>
                  </div>
                  <div class="flex items-center justify-between text-slate-300">
                    <span class="text-teal-400">[CRM]</span>
                    <span>Tích 120 điểm & gửi ZNS cho Khách VIP</span>
                  </div>
                </div>
              </div>

              <div class="mt-3 text-center">
                <span class="text-[11px] text-slate-500">Mọi dữ liệu hạch toán tức thời, không độ trễ, không xung đột kênh.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION: THE 8 MODULES -->
    <section id="he-sinh-thai" class="py-20 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Kiến Trúc Đột Phá
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Một Nền Tảng — Một Nguồn Dữ Liệu Duy Nhất
          </h2>
          <p class="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Thay vì chắp vá 5-7 ứng dụng độc lập dẫn tới sai lệch dữ liệu và chồng chéo chi phí, eCor vận hành toàn bộ doanh nghiệp của bạn quanh một <strong>Lõi Dữ Liệu Thời Gian Thực (Single Source of Truth)</strong>.
          </p>
        </div>

        <!-- 8 Modules Grid -->
        <div class="grid md:grid-cols-4 gap-6">
          <article
            v-for="mod in modulesList"
            :key="mod.slug"
            class="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 hover-lift relative group flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform text-2xl">
                {{ mod.icon }}
              </div>
              <div class="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{{ mod.badge }}</div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">{{ mod.title }}</h3>
              <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                {{ mod.heroDesc }}
              </p>
            </div>
            <div>
              <router-link
                :to="`/${mod.slug}`"
                class="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:underline"
              >
                Chi tiết phân hệ {{ mod.code }} &rarr;
              </router-link>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- SECTION: BEFORE vs AFTER COMPARISON -->
    <section class="py-20 bg-slate-50 border-y border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sự Khác Biệt Khi Ứng Dụng eCor SaaS
          </h2>
          <p class="text-slate-600 mt-3 text-base sm:text-lg">
            Bảng so sánh năng lực vận hành giữa mô hình cũ dùng phần mềm rời rạc và nền tảng eCor 8 module All-in-One.
          </p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-2xl shadow-sm border border-slate-200/90 text-left text-sm">
            <thead class="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-4 sm:p-5 w-1/4">Tiêu Chí Đánh Giá</th>
                <th class="p-4 sm:p-5 w-3/8 text-rose-700 bg-rose-50/50">Dùng Nhiều Ứng Dụng Rời Rạc</th>
                <th class="p-4 sm:p-5 w-3/8 text-blue-700 bg-blue-50/50">Nền Tảng eCor (8 Module Hợp Nhất)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200/80 text-slate-700">
              <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 sm:p-5 font-semibold text-slate-900">1. Quản lý Tồn Kho Đa Kênh</td>
                <td class="p-4 sm:p-5 text-rose-900 bg-rose-50/20">Cập nhật thủ công bằng Excel, chậm trễ 2-6 giờ, thường xuyên bị phạt hủy đơn sàn.</td>
                <td class="p-4 sm:p-5 text-blue-950 font-medium bg-blue-50/20">Tồn kho đồng bộ real-time giữa Cửa hàng, Kho và Sàn (Shopee/TikTok) trong 0.5s.</td>
              </tr>
              <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 sm:p-5 font-semibold text-slate-900">2. Kiểm Kê Kho Hàng</td>
                <td class="p-4 sm:p-5 text-rose-900 bg-rose-50/20">Đóng cửa hàng mất 1-2 ngày, đếm tay ghi sổ, sai lệch tồn kho lên đến 8-12%.</td>
                <td class="p-4 sm:p-5 text-blue-950 font-medium bg-blue-50/20">Quét mã bằng PDA/RFID, kiểm 5.000 SKU trong 30 phút mà không cần dừng bán.</td>
              </tr>
              <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 sm:p-5 font-semibold text-slate-900">3. Vận Chuyển & COD</td>
                <td class="p-4 sm:p-5 text-rose-900 bg-rose-50/20">Tự đăng nhập từng app ship, gõ lại địa chỉ, đối soát COD thủ công rất dễ thất thoát.</td>
                <td class="p-4 sm:p-5 text-blue-950 font-medium bg-blue-50/20">Đẩy đơn 1-click, in 500 bill tự động, đối soát COD từng đơn chính xác 100%.</td>
              </tr>
              <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 sm:p-5 font-semibold text-slate-900">4. Chấm Công & Tính Lương</td>
                <td class="p-4 sm:p-5 text-rose-900 bg-rose-50/20">Kế toán mất 3-5 ngày mỗi đầu tháng cộng bill tay để tính hoa hồng bán hàng.</td>
                <td class="p-4 sm:p-5 text-blue-950 font-medium bg-blue-50/20">HRM lấy trực tiếp doanh số từ POS, tự động chốt hoa hồng minh bạch từng nhân viên.</td>
              </tr>
              <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 sm:p-5 font-semibold text-slate-900">5. Báo Cáo Tài Chính Lãi Lỗ</td>
                <td class="p-4 sm:p-5 text-rose-900 bg-rose-50/20">Dữ liệu phân mảnh, cuối tháng mới biết lãi lỗ ước tính, dễ nhầm chi phí sàn.</td>
                <td class="p-4 sm:p-5 text-blue-950 font-medium bg-blue-50/20">Báo cáo P&L tự động theo thời gian thực trên di động mọi lúc mọi nơi.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- SECTION: SOLUTIONS BY INDUSTRY -->
    <section id="giai-phap" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Ngành Hàng Chuyên Biệt
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thiết Kế Tối Ưu Cho Mọi Mô Hình Kinh Doanh
          </h2>
          <p class="text-slate-600 mt-3 text-base sm:text-lg">
            Khám phá các trang giải pháp chi tiết được may đo riêng theo đặc thù từng ngành tại Việt Nam.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link
            v-for="sol in solutionsList"
            :key="sol.slug"
            :to="`/giai-phap/${sol.slug}`"
            class="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover-lift group block"
          >
            <div class="text-3xl mb-3">{{ sol.icon }}</div>
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-2">{{ sol.title }}</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              {{ sol.summary }}
            </p>
            <span class="text-xs font-bold text-blue-600 group-hover:underline">
              Xem giải pháp chi tiết &rarr;
            </span>
          </router-link>
        </div>

      </div>
    </section>

    <!-- SECTION: FAQ -->
    <section class="py-20 bg-slate-50 border-t border-slate-200/80">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp Về Nền Tảng eCor
          </h2>
          <p class="text-slate-600 mt-3 text-base">
            Những thông tin giải đáp chuẩn xác nhất về kiến trúc và triển khai giải pháp eCor.
          </p>
        </div>

        <FaqAccordion :faqs="homeFaqs" />
      </div>
    </section>

    <!-- SECTION: CTA BANNER -->
    <section class="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white text-center">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Sẵn Sàng Nâng Tầm Vận Hành Bán Lẻ Cùng eCor?
        </h2>
        <p class="text-blue-100 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Đội ngũ chuyên gia eCor sẵn sàng khảo sát thực tế và thiết lập bản demo 1:1 phù hợp chính xác với mô hình kinh doanh của bạn.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            @click="$emit('open-modal', { type: 'demo' })"
            class="bg-white text-blue-700 hover:bg-slate-100 px-9 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all cursor-pointer"
          >
            Đăng Ký Demo Trải Nghiệm Ngay
          </button>
          <a
            href="tel:0978673867"
            class="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            Hotline: 0978 67 38 67
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroCanvas from '@/components/HeroCanvas.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'
import { modulesList } from '@/data/modulesData'
import { solutionsList } from '@/data/solutionsData'

defineEmits(['open-modal'])

const homeFaqs = [
  {
    q: 'eCor là gì và định vị ra sao trên thị trường phần mềm quản trị?',
    a: 'eCor là nền tảng SaaS vận hành đa dịch vụ (Omnichannel Business Platform) tích hợp sẵn 8 phân hệ nghiệp vụ: POS, ECOM, WMS, TMS, HRM, Account, Mobile App và CRM hoạt động trên một lõi dữ liệu dùng chung (Single Source of Truth).'
  },
  {
    q: 'Doanh nghiệp có thể mua lẻ từng module (ví dụ chỉ POS hoặc chỉ WMS) không?',
    a: 'Hoàn toàn được. eCor cung cấp chính sách giá linh hoạt: Doanh nghiệp có thể bắt đầu với 1-2 module cốt lõi như POS hoặc WMS rồi mở rộng dần sang các phân hệ khác chỉ với một click kích hoạt mà không làm gián đoạn bán hàng.'
  },
  {
    q: 'eCor có hoạt động khi bị mất kết nối Internet không?',
    a: 'Có. Phân hệ POS của eCor được trang bị kiến trúc Offline-First độc quyền. Khi rớt mạng Internet, thu ngân vẫn quét mã, in bill bình thường. Dữ liệu sẽ tự động đồng bộ hóa lên máy chủ đám mây ngay khi có kết nối trở lại.'
  },
  {
    q: 'Hệ thống WMS của eCor có tương thích với các dòng máy quét PDA và RFID nào?',
    a: 'WMS eCor tương thích với hầu hết các thiết bị quét mã vạch 1D/2D chuyên dụng chạy hệ điều hành Android (như Zebra, Honeywell, Chainway, Urovo) và các đầu đọc thẻ RFID cố định hoặc cầm tay.'
  }
]
</script>
