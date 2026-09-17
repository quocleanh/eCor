<template>
  <div class="min-h-[calc(100vh-80px)] bg-[#f1f5f9] flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl w-full mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 text-left">
      <!-- Left Form Pane -->
      <div class="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
        <div>
          <!-- Mode Tabs -->
          <div class="flex items-center justify-between">
            <div class="inline-flex rounded-full bg-slate-100 p-1 border border-slate-200 text-xs font-bold">
              <button
                type="button"
                @click="mode = 'login'"
                class="px-4 py-1.5 rounded-full transition-all"
                :class="mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'"
              >
                ➔] Đăng nhập
              </button>
              <button
                type="button"
                @click="mode = 'register'"
                class="px-4 py-1.5 rounded-full transition-all flex items-center gap-1"
                :class="mode === 'register' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'"
              >
                <span>Đăng ký doanh nghiệp</span>
                <span class="text-[9px] bg-cyan-200 text-cyan-900 px-1.5 py-0.2 rounded font-extrabold">14 ngày thử</span>
              </button>
            </div>
             
          </div>

          <!-- Titles -->
          <div class="mt-6">
            <span class="text-xs font-semibold text-sky-600 flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              Hệ thống Điều hành Chuỗi Cung ứng ecor.vn
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {{ mode === 'login' ? 'Chào mừng trở lại' : 'Đăng Ký Tài Khoản Doanh Nghiệp' }}
            </h2>
            <p class="text-xs text-slate-500 mt-1">
              {{ mode === 'login' ? 'Vui lòng đăng nhập để truy cập cổng tổng kho & trung tâm điều vận đa điểm.' : 'Kích hoạt không gian làm việc đám mây và kết nối kho bãi trong 15 phút.' }}
            </p>
          </div>

          <!-- SSO Buttons -->
          <div class="grid grid-cols-2 gap-3 mt-6">
            <button
              type="button"
              class="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
            >
              <span class="font-bold text-red-500">G</span>
              <span>Google Workspace</span>
            </button>
            <button
              type="button"
              class="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
            >
              <span>🔑</span>
              <span>Enterprise SSO (SAML)</span>
            </button>
          </div>

          <div class="relative my-6 text-center">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200"></div></div>
            <span class="relative bg-white px-3 text-[11px] text-slate-400 uppercase font-medium">
              hoặc {{ mode === 'login' ? 'đăng nhập bằng' : 'đăng ký bằng' }} tài khoản ecor
            </span>
          </div>

          <!-- Form Fields -->
          <form @submit.prevent="handleAuth" class="space-y-4 text-xs">
            <div v-if="mode === 'register'">
              <label class="block font-bold text-slate-700 mb-1">Tên doanh nghiệp / Chuỗi cửa hàng *</label>
              <input v-model="company" required placeholder="Công ty TNHH Logistics Vận Hành" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Email công việc hoặc Số điện thoại *</label>
              <input v-model="identifier" required placeholder="ten@doanhnghiep.com hoặc 0912xxx" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" />
            </div>

            <div>
              <div class="flex justify-between items-center mb-1">
                <label class="font-bold text-slate-700">Mật khẩu bảo mật *</label>
                <a v-if="mode === 'login'" href="#" class="text-[11px] text-sky-600 hover:underline">Quên mật khẩu?</a>
              </div>
              <div class="relative">
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password" 
                  required 
                  placeholder="••••••••••••" 
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none pr-10" 
                />
                <button 
                  type="button" 
                  @click="showPassword = !showPassword" 
                  class="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {{ showPassword ? '🙈' : '👁️' }}
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between pt-1">
              <label class="flex items-center gap-2 cursor-pointer text-slate-600">
                <input type="checkbox" v-model="rememberMe" class="rounded text-sky-600" />
                <span>Ghi nhớ đăng nhập trên thiết bị này 30 ngày</span>
              </label>
            </div>

            <button
              type="submit"
              class="w-full py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{{ mode === 'login' ? 'Đăng Nhập Vào Hệ Thống' : 'Khởi Tạo Bản Dùng Thử 14 Ngày' }}</span>
              <span>→</span>
            </button>
          </form>

          <div class="mt-4 text-center text-xs text-slate-500">
            <span>{{ mode === 'login' ? 'Chưa có tài khoản quản trị doanh nghiệp?' : 'Đã có tài khoản ecor?' }}</span>
            <button 
              type="button"
              @click="mode = mode === 'login' ? 'register' : 'login'" 
              class="font-bold text-sky-600 hover:underline ml-1"
            >
              {{ mode === 'login' ? 'Đăng ký dùng thử ngay' : 'Đăng nhập tại đây' }}
            </button>
          </div>
        </div>

        <!-- Security Badges -->
        <div class="pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>🔒 Mã hóa SSL 256-bit đầu cuối</span>
          <span>🛡️ Chứng nhận Tiêu chuẩn ISO/IEC 27001:2022</span>
        </div>
      </div>

      <!-- Right Visual & Social Proof Pane -->
      <div class="lg:col-span-6 bg-gradient-to-br from-[#0284c7] to-[#0369a1] p-8 sm:p-12 text-white flex flex-col justify-between space-y-8">
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-sky-100">
            <span>⚙️ ecor Unified Logistics Ecosystem</span>
          </div>

          <h3 class="text-3xl sm:text-4xl font-black leading-tight tracking-tight">
            Hợp nhất Kho bãi, Vận tải & Đa kênh trên Một nền tảng số
          </h3>

          <p class="text-sky-100 text-xs sm:text-sm leading-relaxed font-light">
            Hạ tầng đám mây tốc độ cao giúp các chuỗi bán lẻ và tập đoàn logistics kiểm soát luồng hàng minh bạch từng giây.
          </p>

          <div class="flex flex-wrap gap-2 text-xs font-medium">
            <span class="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">ecor WMS 4.0</span>
            <span class="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">ecor TMS AI Route</span>
            <span class="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">ecor Omnichannel POS</span>
          </div>

          <!-- 3 Stats Box -->
          <div class="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
            <div>
              <div class="text-xl sm:text-2xl font-black">450+</div>
              <div class="text-[10px] text-sky-100 uppercase">Doanh nghiệp vận hành</div>
            </div>
            <div>
              <div class="text-xl sm:text-2xl font-black">1.2M+</div>
              <div class="text-[10px] text-sky-100 uppercase">Kiện hàng/tháng</div>
            </div>
            <div>
              <div class="text-xl sm:text-2xl font-black">99.98%</div>
              <div class="text-[10px] text-sky-100 uppercase">Độ chính xác vị trí</div>
            </div>
          </div>

          <!-- Featured Testimonial Card -->
          <div class="p-4 rounded-2xl bg-white text-slate-800 shadow-lg space-y-2 text-xs">
            <div class="flex justify-between items-center">
              <span class="text-amber-400">★★★★★</span>
              <span class="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">Case Study: Y-Style Retail</span>
            </div>
            <p class="text-slate-600 italic">
              "Chuyển đổi sang ecor giúp đội ngũ 45 cửa hàng và 2 tổng kho kết nối tức thì, giảm 60% thời gian xử lý đơn và loại bỏ hoàn toàn tình trạng lệch kho."
            </p>
            <div class="pt-1 flex items-center justify-between text-[11px] text-slate-500">
              <span class="font-bold text-slate-900">Trần Nhật Nam — Giám đốc Vận hành (COO)</span>
              <span class="text-emerald-600">✓ Đã xác thực</span>
            </div>
          </div>
        </div>

        <!-- Footnote guarantees -->
        <div class="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between text-[11px] text-sky-100">
          <span>🛡️ SLA 99.98% Uptime</span>
          <span>🎧 Hỗ trợ kỹ thuật 24/7/365</span>
          <span>⚡ Sao lưu tự động</span>
        </div>
      </div>
    </div>

    <!-- Quick Footer Help Links -->
    <div class="mt-8 text-center text-xs text-slate-500 space-x-4">
      <router-link to="/tai-nguyen" class="hover:text-slate-800">Trung tâm hỗ trợ vận hành</router-link>
      <span>•</span>
      <router-link to="/tai-nguyen" class="hover:text-slate-800">Tài liệu API & Kết nối ERP</router-link>
      <span>•</span>
      <a href="tel:0822235858" class="hover:text-slate-800">Tư vấn trực tiếp:  097 8673867</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mode = ref('login')
const identifier = ref('')
const password = ref('')
const company = ref('')
const rememberMe = ref(true)
const showPassword = ref(false)

onMounted(() => {
  if (route.path === '/dang-ky') {
    mode.value = 'register'
  }
})

function handleAuth() {
  alert(mode.value === 'login' ? 'Đang xác thực đăng nhập tài khoản...' : 'Đang khởi tạo tài khoản dùng thử 14 ngày...')
}
</script>
