<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group focus:outline-none">
          <img src="/ecor-logo.png" alt="eCor Platform" class="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-700">
          <!-- Dropdown Sản phẩm -->
          <div class="relative group py-5">
            <button 
              class="flex items-center gap-1.5 transition-colors focus:outline-none"
              :class="isProductActive ? 'text-sky-600 font-semibold' : 'text-slate-700 hover:text-sky-600'"
            >
              <span>Sản phẩm</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div class="absolute top-full -left-4 w-80 bg-white border border-slate-200/90 rounded-2xl shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <div class="text-[11px] font-bold tracking-wider uppercase text-slate-400 px-3 py-1.5">
                Các Module Trọng Tâm
              </div>
              <router-link 
                to="/wms" 
                class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50/70 transition-colors group/item"
              >
                <div class="w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold shrink-0 mt-0.5 group-hover/item:bg-sky-600 group-hover/item:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-slate-900 group-hover/item:text-sky-700 flex items-center gap-1.5">
                    ecor WMS
                    <span class="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-medium">Kho 4.0</span>
                  </div>
                  <div class="text-xs text-slate-500 mt-0.5">Quản trị kho 3D, Wave Picking, hạn date</div>
                </div>
              </router-link>

              <router-link 
                to="/tms" 
                class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cyan-50/70 transition-colors group/item"
              >
                <div class="w-9 h-9 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0 mt-0.5 group-hover/item:bg-cyan-600 group-hover/item:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-slate-900 group-hover/item:text-cyan-700 flex items-center gap-1.5">
                    ecor TMS
                    <span class="text-[10px] bg-cyan-100 text-cyan-700 px-1.5 py-0.5 rounded font-medium">AI Route</span>
                  </div>
                  <div class="text-xs text-slate-500 mt-0.5">Điều phối vận tải, giám sát GPS, e-POD</div>
                </div>
              </router-link>

              <router-link 
                to="/pos" 
                class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-rose-50/70 transition-colors group/item"
              >
                <div class="w-9 h-9 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0 mt-0.5 group-hover/item:bg-rose-600 group-hover/item:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-slate-900 group-hover/item:text-rose-700 flex items-center gap-1.5">
                    ecor POS
                    <span class="text-[10px] bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded font-medium">Offline-First</span>
                  </div>
                  <div class="text-xs text-slate-500 mt-0.5">Bán hàng 3s, VietQR động, kết nối WMS</div>
                </div>
              </router-link>

              <div class="mt-2 pt-2 border-t border-slate-100 px-3 py-1">
                <router-link to="/giai-phap" class="text-xs text-sky-600 hover:text-sky-700 font-semibold flex items-center justify-between">
                  <span>Xem sơ đồ dòng chảy khép kín</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Giải pháp -->
          <router-link 
            to="/giai-phap" 
            class="transition-colors hover:text-sky-600"
            :class="$route.path.startsWith('/giai-phap') ? 'text-sky-600 font-semibold' : 'text-slate-700'"
          >
            Giải pháp
          </router-link>

          <!-- Bảng giá -->
          <router-link 
            to="/bang-gia" 
            class="transition-colors hover:text-sky-600"
            :class="$route.path === '/bang-gia' ? 'text-sky-600 font-semibold' : 'text-slate-700'"
          >
            Bảng giá
          </router-link>

          <!-- Khách hàng -->
          <router-link 
            to="/khach-hang" 
            class="transition-colors hover:text-sky-600"
            :class="$route.path === '/khach-hang' ? 'text-sky-600 font-semibold' : 'text-slate-700'"
          >
            Khách hàng
          </router-link>

          <!-- Tài nguyên -->
          <router-link 
            to="/tai-nguyen" 
            class="transition-colors hover:text-sky-600"
            :class="$route.path === '/tai-nguyen' ? 'text-sky-600 font-semibold' : 'text-slate-700'"
          >
            Tài nguyên
          </router-link>

          <!-- Liên hệ -->
          <router-link 
            to="/lien-he" 
            class="transition-colors hover:text-sky-600"
            :class="$route.path === '/lien-he' ? 'text-sky-600 font-semibold' : 'text-slate-700'"
          >
            Liên hệ
          </router-link>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-3.5">
          <!-- Đăng nhập link -->
          <router-link 
            to="/dang-nhap" 
            class="hidden sm:inline-flex text-sm font-semibold text-slate-700 hover:text-sky-600 px-3 py-2 transition-colors"
          >
            Đăng nhập
          </router-link>

          <!-- CTA Button -->
          <button 
            @click="$emit('open-modal', { type: 'demo', moduleName: 'Tổng thể ecor Platform' })"
            class="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-sm hover:shadow transition-all transform active:scale-95 focus:outline-none"
          >
            Đăng ký tư vấn / Thử miễn phí
          </button>

          <!-- User Icon / Portal -->
          <router-link 
            to="/dang-nhap" 
            class="hidden md:flex w-9 h-9 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-sky-700 items-center justify-center transition-colors border border-slate-200"
            title="Cổng doanh nghiệp eCor"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </router-link>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <div 
      v-if="isMobileMenuOpen"
      class="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn"
    >
      <div class="space-y-1 font-medium text-slate-800">
        <div class="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
          Sản phẩm
        </div>
        <div class="grid grid-cols-3 gap-2 px-2 pb-2">
          <router-link 
            to="/wms" 
            @click="isMobileMenuOpen = false"
            class="p-2.5 rounded-lg bg-sky-50 text-center text-xs font-semibold text-sky-800"
          >
            ecor WMS
          </router-link>
          <router-link 
            to="/tms" 
            @click="isMobileMenuOpen = false"
            class="p-2.5 rounded-lg bg-cyan-50 text-center text-xs font-semibold text-cyan-800"
          >
            ecor TMS
          </router-link>
          <router-link 
            to="/pos" 
            @click="isMobileMenuOpen = false"
            class="p-2.5 rounded-lg bg-rose-50 text-center text-xs font-semibold text-rose-800"
          >
            ecor POS
          </router-link>
        </div>

        <router-link 
          to="/giai-phap" 
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-slate-100 text-sm font-medium"
          :class="$route.path.startsWith('/giai-phap') ? 'text-sky-600 bg-sky-50' : ''"
        >
          Giải pháp theo ngành
        </router-link>

        <router-link 
          to="/bang-gia" 
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-slate-100 text-sm font-medium"
          :class="$route.path === '/bang-gia' ? 'text-sky-600 bg-sky-50' : ''"
        >
          Bảng giá dịch vụ
        </router-link>

        <router-link 
          to="/khach-hang" 
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-slate-100 text-sm font-medium"
          :class="$route.path === '/khach-hang' ? 'text-sky-600 bg-sky-50' : ''"
        >
          Khách hàng tiêu biểu
        </router-link>

        <router-link 
          to="/tai-nguyen" 
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-slate-100 text-sm font-medium"
          :class="$route.path === '/tai-nguyen' ? 'text-sky-600 bg-sky-50' : ''"
        >
          Tài nguyên & API
        </router-link>

        <router-link 
          to="/lien-he" 
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-slate-100 text-sm font-medium"
          :class="$route.path === '/lien-he' ? 'text-sky-600 bg-sky-50' : ''"
        >
          Liên hệ & Khảo sát
        </router-link>

        <router-link 
          to="/dang-nhap" 
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-slate-100 text-sm font-semibold text-sky-700"
        >
          Đăng nhập tài khoản
        </router-link>
      </div>

      <div class="pt-2 border-t border-slate-100">
        <button 
          @click="isMobileMenuOpen = false; $emit('open-modal', { type: 'demo', moduleName: 'Tổng thể ecor Platform' })"
          class="w-full py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow-md"
        >
          Đăng ký tư vấn / Thử miễn phí
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

defineEmits(['open-modal'])

const route = useRoute()
const isMobileMenuOpen = ref(false)

const isProductActive = computed(() => {
  return ['/wms', '/tms', '/pos'].some(path => route.path.startsWith(path))
})
</script>
