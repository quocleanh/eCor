<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18">
        <!-- Logo thương hiệu gốc (không chỉnh sửa) -->
        <router-link to="/" class="flex items-center gap-3">
          <img src="/ecor-logo.png" alt="eCor SaaS Platform" class="h-9 w-auto object-contain" />
        </router-link>

        <!-- Navigation chính: 4 mục rõ ràng, không dàn trải 8 module -->
        <nav class="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-700">
          <!-- Dropdown Sản phẩm (Phân cấp rõ: 3 Lõi lớn, 5 Mở rộng gọn) -->
          <div class="relative group py-4">
            <button class="flex items-center gap-1 text-slate-700 hover:text-blue-700 font-medium transition-colors">
              <span>Sản phẩm</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Mega Dropdown Panel -->
            <div class="absolute top-full left-0 w-[540px] bg-white border border-slate-200 rounded-xl shadow-xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -mt-1">
              <!-- Nhóm 3 Module Lõi (Chiếm vị trí chính, nổi bật) -->
              <div class="mb-4">
                <div class="text-[11px] font-bold tracking-wider uppercase text-blue-700 mb-2.5 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                  3 Trụ Cột Vận Hành Lõi
                </div>
                <div class="grid grid-cols-3 gap-2.5">
                  <router-link to="/pos" class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-blue-50/60 hover:border-blue-300 transition-colors group/item">
                    <div class="font-bold text-slate-900 group-hover/item:text-blue-700 text-sm">POS</div>
                    <div class="text-xs text-slate-500 mt-1 line-clamp-2">Bán hàng quầy, quét mã siêu tốc, chốt ca</div>
                  </router-link>
                  <router-link to="/wms" class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-blue-50/60 hover:border-blue-300 transition-colors group/item">
                    <div class="font-bold text-slate-900 group-hover/item:text-blue-700 text-sm">WMS</div>
                    <div class="text-xs text-slate-500 mt-1 line-clamp-2">Kho vận, kiểm kê PDA/RFID, min-max</div>
                  </router-link>
                  <router-link to="/ke-toan" class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-blue-50/60 hover:border-blue-300 transition-colors group/item">
                    <div class="font-bold text-slate-900 group-hover/item:text-blue-700 text-sm">Kế toán</div>
                    <div class="text-xs text-slate-500 mt-1 line-clamp-2">Sổ sách, HĐĐT, báo cáo tài chính thuế</div>
                  </router-link>
                </div>
              </div>

              <!-- Nhóm 5 Module Mở Rộng (Xếp gọn gàng phía dưới) -->
              <div class="pt-3 border-t border-slate-100">
                <div class="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mb-2">
                  Hệ Sinh Thái Mở Rộng Liền Mạch
                </div>
                <div class="flex flex-wrap gap-2">
                  <router-link to="/mo-rong/ecom" class="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors font-medium">
                    ECOM Đa sàn
                  </router-link>
                  <router-link to="/mo-rong/tms" class="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors font-medium">
                    TMS Vận chuyển
                  </router-link>
                  <router-link to="/mo-rong/hrm" class="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors font-medium">
                    HRM Nhân sự
                  </router-link>
                  <router-link to="/mo-rong/mobile-app" class="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors font-medium">
                    Mobile App
                  </router-link>
                  <router-link to="/mo-rong/crm" class="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors font-medium">
                    CRM Loyalty
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Dropdown Giải Pháp -->
          <div class="relative group py-4">
            <button class="flex items-center gap-1 text-slate-700 hover:text-blue-700 font-medium transition-colors">
              <span>Giải pháp</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -mt-1">
              <router-link to="/giai-phap/thoi-trang" class="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg">
                Thời trang & Phụ kiện
              </router-link>
              <router-link to="/giai-phap/my-pham" class="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg">
                Mỹ phẩm & Chăm sóc sắc đẹp
              </router-link>
              <router-link to="/giai-phap/me-va-be" class="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg">
                Mẹ & Bé (Hạn sử dụng / Lô hàng)
              </router-link>
              <router-link to="/giai-phap/chuoi-ban-le" class="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg">
                Chuỗi bán lẻ & Tổng kho phân phối
              </router-link>
            </div>
          </div>

          <!-- Bảng giá -->
          <router-link to="/bang-gia" class="text-slate-700 hover:text-blue-700 transition-colors">
            Bảng giá
          </router-link>

          <!-- Về chúng tôi -->
          <router-link to="/ve-chung-toi" class="text-slate-700 hover:text-blue-700 transition-colors">
            Về chúng tôi
          </router-link>

          <!-- Liên hệ -->
          <router-link to="/lien-he" class="text-slate-700 hover:text-blue-700 transition-colors">
            Liên hệ
          </router-link>
        </nav>

        <!-- Nút CTA & Hotline bên phải -->
        <div class="hidden sm:flex items-center gap-4">
          <a href="tel:0978673867" class="text-xs font-semibold text-slate-700 hover:text-blue-700 flex items-center gap-1.5 tabular-nums">
            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0978 67 38 67
          </a>
          <button @click="openModal" class="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-sm">
            Đăng ký tư vấn demo
          </button>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4">
      <div class="text-xs font-bold text-blue-700 uppercase tracking-wider">3 Trụ Cột Lõi</div>
      <div class="grid grid-cols-3 gap-2">
        <router-link @click="mobileMenuOpen = false" to="/pos" class="p-2 text-center rounded bg-slate-50 text-xs font-semibold text-slate-800 border border-slate-200">POS</router-link>
        <router-link @click="mobileMenuOpen = false" to="/wms" class="p-2 text-center rounded bg-slate-50 text-xs font-semibold text-slate-800 border border-slate-200">WMS</router-link>
        <router-link @click="mobileMenuOpen = false" to="/ke-toan" class="p-2 text-center rounded bg-slate-50 text-xs font-semibold text-slate-800 border border-slate-200">Kế toán</router-link>
      </div>

      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">Mở Rộng</div>
      <div class="flex flex-wrap gap-1.5">
        <router-link @click="mobileMenuOpen = false" to="/mo-rong/ecom" class="px-2.5 py-1 text-xs rounded bg-slate-100 text-slate-700">ECOM</router-link>
        <router-link @click="mobileMenuOpen = false" to="/mo-rong/tms" class="px-2.5 py-1 text-xs rounded bg-slate-100 text-slate-700">TMS</router-link>
        <router-link @click="mobileMenuOpen = false" to="/mo-rong/hrm" class="px-2.5 py-1 text-xs rounded bg-slate-100 text-slate-700">HRM</router-link>
        <router-link @click="mobileMenuOpen = false" to="/mo-rong/mobile-app" class="px-2.5 py-1 text-xs rounded bg-slate-100 text-slate-700">App</router-link>
        <router-link @click="mobileMenuOpen = false" to="/mo-rong/crm" class="px-2.5 py-1 text-xs rounded bg-slate-100 text-slate-700">CRM</router-link>
      </div>

      <div class="border-t border-slate-200 pt-3 space-y-2 text-sm font-medium">
        <router-link @click="mobileMenuOpen = false" to="/bang-gia" class="block text-slate-700 hover:text-blue-700">Bảng giá</router-link>
        <router-link @click="mobileMenuOpen = false" to="/ve-chung-toi" class="block text-slate-700 hover:text-blue-700">Về chúng tôi</router-link>
        <router-link @click="mobileMenuOpen = false" to="/lien-he" class="block text-slate-700 hover:text-blue-700">Liên hệ</router-link>
      </div>

      <div class="pt-2">
        <button @click="openModal(); mobileMenuOpen = false" class="w-full py-2.5 text-center text-xs font-bold text-white bg-blue-700 rounded-lg">
          Đăng ký tư vấn demo
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const emit = defineEmits(['open-modal'])

function openModal() {
  window.dispatchEvent(new CustomEvent('open-demo-modal'))
}
</script>
