<template>
  <header class="sticky top-0 z-50 glass border-b border-slate-200/80 shadow-sm transition-all duration-200">
    <!-- Top Announcement Bar -->
    <div class="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium">
      <div class="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span class="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs uppercase tracking-wider font-semibold">Mới</span>
        <span>Hệ sinh thái eCor 8 Module chính thức ra mắt — Trải nghiệm miễn phí 14 ngày!</span>
        <button @click="openModal('demo')" class="underline hover:text-blue-100 font-bold ml-1 cursor-pointer">
          Khám phá ngay &rarr;
        </button>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
          <img src="/ecor-logo.png" alt="Logo eCor" class="h-12 w-auto object-contain" width="140" height="48" />
        </router-link>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-1 font-medium text-slate-700 text-sm">
          
          <!-- Products Mega Menu Dropdown -->
          <div class="relative group py-2">
            <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors font-semibold">
              <span>Hệ sinh thái 8 Module</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <!-- Mega Menu Container -->
            <div class="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-[780px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-2 gap-3.5">
              
              <router-link
                v-for="mod in modulesList"
                :key="mod.slug"
                :to="`/${mod.slug}`"
                class="flex items-start gap-3.5 p-3 rounded-xl hover:bg-blue-50/70 transition-colors group/item"
              >
                <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors text-lg">
                  {{ mod.icon }}
                </div>
                <div>
                  <div class="font-bold text-slate-900 group-hover/item:text-blue-600 text-sm flex items-center gap-1.5">
                    <span>{{ mod.shortName }}</span>
                    <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-semibold uppercase">{{ mod.code }}</span>
                  </div>
                  <p class="text-xs text-slate-500 line-clamp-2 mt-0.5">{{ mod.tagline }}</p>
                </div>
              </router-link>

            </div>
          </div>

          <!-- Solutions Dropdown -->
          <div class="relative group py-2">
            <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors font-semibold">
              <span>Giải Pháp Ngành</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div class="nav-dropdown absolute left-0 top-full w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 space-y-2">
              <router-link
                v-for="sol in solutionsList"
                :key="sol.slug"
                :to="`/giai-phap/${sol.slug}`"
                class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                <span class="text-lg">{{ sol.icon }}</span>
                <span>{{ sol.shortName }}</span>
              </router-link>
            </div>
          </div>

          <router-link to="/bang-gia" class="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors font-medium">
            Bảng Giá
          </router-link>
          
          <router-link to="/ve-chung-toi" class="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors font-medium">
            Về eCor
          </router-link>
          
          <router-link to="/lien-he" class="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors font-medium">
            Liên Hệ
          </router-link>
        </nav>

        <!-- Right Action Buttons -->
        <div class="hidden sm:flex items-center space-x-3">
          <a href="tel:0978673867" class="flex items-center gap-1.5 text-slate-700 font-semibold hover:text-blue-600 text-sm px-3 py-2">
            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>0978 67 38 67</span>
          </a>

          <button
            @click="openModal('demo')"
            class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:from-blue-700 hover:to-cyan-700 transition-all cursor-pointer"
          >
            Đăng Ký Demo Miễn Phí
          </button>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Mở menu điều hướng"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex flex-col justify-end lg:hidden"
      @click.self="mobileMenuOpen = false"
    >
      <div class="bg-white w-full rounded-t-3xl max-h-[85vh] overflow-y-auto p-6 space-y-4">
        <div class="flex items-center justify-between border-b pb-4">
          <img src="/ecor-logo.png" alt="Logo eCor" class="h-8 w-auto" />
          <button @click="mobileMenuOpen = false" class="p-2 text-slate-500 hover:text-slate-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="space-y-1">
          <div class="font-bold text-xs uppercase tracking-wider text-slate-400 py-2">8 Module Nền Tảng</div>
          <div class="grid grid-cols-2 gap-2 text-sm font-medium">
            <router-link
              v-for="mod in modulesList"
              :key="mod.slug"
              :to="`/${mod.slug}`"
              @click="mobileMenuOpen = false"
              class="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 flex items-center gap-2"
            >
              <span>{{ mod.icon }}</span>
              <span>{{ mod.shortName }}</span>
            </router-link>
          </div>
        </div>

        <div class="space-y-1 border-t pt-3">
          <div class="font-bold text-xs uppercase tracking-wider text-slate-400 py-1">Giải Pháp Theo Ngành</div>
          <div class="grid grid-cols-2 gap-2 text-sm font-medium">
            <router-link
              v-for="sol in solutionsList"
              :key="sol.slug"
              :to="`/giai-phap/${sol.slug}`"
              @click="mobileMenuOpen = false"
              class="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 text-xs"
            >
              {{ sol.icon }} {{ sol.shortName }}
            </router-link>
          </div>
        </div>

        <div class="pt-2 border-t space-y-2 text-sm font-medium">
          <router-link to="/bang-gia" @click="mobileMenuOpen = false" class="block py-2 text-slate-700">Bảng giá chi tiết</router-link>
          <router-link to="/ve-chung-toi" @click="mobileMenuOpen = false" class="block py-2 text-slate-700">Giới thiệu eCor (E-E-A-T)</router-link>
          <router-link to="/lien-he" @click="mobileMenuOpen = false" class="block py-2 text-slate-700">Liên hệ & Hỗ trợ</router-link>
          <a href="tel:0978673867" class="block py-2 text-blue-600 font-bold">Hotline: 0978 67 38 67</a>
        </div>

        <div class="pt-2">
          <button
            @click="mobileMenuOpen = false; openModal('demo');"
            class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3.5 rounded-xl font-bold text-center shadow-lg"
          >
            Đăng Ký Demo Miễn Phí
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { modulesList } from '@/data/modulesData'
import { solutionsList } from '@/data/solutionsData'

const mobileMenuOpen = ref(false)

const emit = defineEmits(['open-modal'])

function openModal(type, moduleName) {
  emit('open-modal', { type, moduleName })
}
</script>
