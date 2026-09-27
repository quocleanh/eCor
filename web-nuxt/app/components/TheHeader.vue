<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200 transition-all duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLinkLocale :to="{ name: 'index' }" class="flex items-center gap-3 group focus:outline-none">
          <img src="/ecor-logo.png" alt="eCor Platform"
            class="h-8 w-auto object-contain transition-transform group-hover:scale-105" />
        </NuxtLinkLocale>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-7 text-sm font-medium text-zinc-700">
          <!-- Dropdown Sản phẩm -->
          <div class="relative group py-5">
            <button class="flex items-center gap-1.5 transition-colors focus:outline-none"
              :class="isProductActive ? 'text-amber-600 font-semibold' : 'text-zinc-700 hover:text-amber-600'">
              <span>{{ $t('header.products') }}</span>
              <svg
                class="w-4 h-4 text-zinc-400 group-hover:text-amber-600 transition-transform duration-200 group-hover:rotate-180"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              class="absolute top-full -left-4 w-80 bg-white border border-zinc-200/90 rounded-2xl shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <div class="text-[11px] font-bold tracking-wider uppercase text-zinc-400 px-3 py-1.5">
                {{ $t('header.coreModules') }}
              </div>
              <NuxtLinkLocale :to="{ name: 'wms' }"
                class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group/item">
                <div
                  class="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0 mt-0.5 group-hover/item:bg-amber-400 group-hover/item:text-zinc-900 font-bold transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <div
                    class="text-sm font-semibold text-zinc-900 group-hover/item:text-amber-700 flex items-center gap-1.5">
                    ecor WMS
                    <span class="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">{{
                      $t('header.wmsBadge') || 'Kho 4.0' }}</span>
                  </div>
                  <div class="text-xs text-zinc-500 mt-0.5">{{ $t('header.wmsDesc') }}</div>
                </div>
              </NuxtLinkLocale>

              <NuxtLinkLocale :to="{ name: 'tms' }"
                class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group/item">
                <div
                  class="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0 mt-0.5 group-hover/item:bg-amber-400 group-hover/item:text-zinc-900 font-bold transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <div
                    class="text-sm font-semibold text-zinc-900 group-hover/item:text-amber-700 flex items-center gap-1.5">
                    ecor TMS
                    <span class="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">{{
                      $t('header.tmsBadge') || 'AI Route' }}</span>
                  </div>
                  <div class="text-xs text-zinc-500 mt-0.5">{{ $t('header.tmsDesc') }}</div>
                </div>
              </NuxtLinkLocale>

              <NuxtLinkLocale :to="{ name: 'pos' }"
                class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group/item">
                <div
                  class="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0 mt-0.5 group-hover/item:bg-amber-400 group-hover/item:text-zinc-900 font-bold transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div
                    class="text-sm font-semibold text-zinc-900 group-hover/item:text-amber-700 flex items-center gap-1.5">
                    ecor POS
                    <span class="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">{{
                      $t('header.posBadge') || 'Offline-First' }}</span>
                  </div>
                  <div class="text-xs text-zinc-500 mt-0.5">{{ $t('header.posDesc') }}</div>
                </div>
              </NuxtLinkLocale>

              <NuxtLinkLocale :to="{ name: 'ke-toan' }"
                class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group/item">
                <div
                  class="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0 mt-0.5 group-hover/item:bg-amber-400 group-hover/item:text-zinc-900 font-bold transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 7h6m-6 4h6m-7 8h8a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2zm-2-4h.01M7 12h.01" />
                  </svg>
                </div>
                <div>
                  <div
                    class="text-sm font-semibold text-zinc-900 group-hover/item:text-amber-700 flex items-center gap-1.5">
                    ecor Account
                    <span class="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">{{
                      $t('header.accountBadge') || 'TT78 HĐĐT' }}</span>
                  </div>
                  <div class="text-xs text-zinc-500 mt-0.5">{{ $t('header.accountDesc') }}</div>
                </div>
              </NuxtLinkLocale>

              <div class="mt-2 pt-2 border-t border-zinc-100 px-3 py-1">
                <NuxtLinkLocale :to="{ name: 'giai-phap' }"
                  class="text-xs text-amber-600 hover:text-amber-700 font-semibold flex items-center justify-between">
                  <span>{{ $t('header.seeFlowchart') }}</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLinkLocale>
              </div>
            </div>
          </div>

          <!-- Giải pháp -->
          <NuxtLinkLocale :to="{ name: 'giai-phap' }" class="transition-colors hover:text-amber-600"
            :class="route.path.includes('/giai-phap') || route.path.includes('/solutions') ? 'text-amber-600 font-semibold' : 'text-zinc-700'">
            {{ $t('header.solutions') }}
          </NuxtLinkLocale>

          <!-- Bảng giá -->
          <NuxtLinkLocale :to="{ name: 'bang-gia' }" class="transition-colors hover:text-amber-600"
            :class="isActive(['/bang-gia', '/pricing']) ? 'text-amber-600 font-semibold' : 'text-zinc-700'">
            {{ $t('header.pricing') }}
          </NuxtLinkLocale>

          <!-- Khách hàng -->
          <NuxtLinkLocale :to="{ name: 'khach-hang' }" class="transition-colors hover:text-amber-600"
            :class="isActive(['/khach-hang', '/customers']) ? 'text-amber-600 font-semibold' : 'text-zinc-700'">
            {{ $t('header.customers') }}
          </NuxtLinkLocale>

          <!-- Tài nguyên -->
          <NuxtLinkLocale :to="{ name: 'tai-nguyen' }" class="transition-colors hover:text-amber-600"
            :class="isActive(['/tai-nguyen', '/resources']) ? 'text-amber-600 font-semibold' : 'text-zinc-700'">
            {{ $t('header.resources') }}
          </NuxtLinkLocale>

          <!-- Liên hệ -->
          <NuxtLinkLocale :to="{ name: 'lien-he' }" class="transition-colors hover:text-amber-600"
            :class="isActive(['/lien-he', '/contact']) ? 'text-amber-600 font-semibold' : 'text-zinc-700'">
            {{ $t('header.contact') }}
          </NuxtLinkLocale>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-3.5">
          <!-- CTA Button -->
          <a :href="DASHBOARD_URL" target="_blank" rel="noopener"
            class="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold text-zinc-900 bg-amber-400 hover:bg-amber-500 shadow-sm hover:shadow transition-all transform active:scale-95 focus:outline-none">
            <span class="hidden sm:inline">{{ $t('header.register') }}</span>
            <span class="sm:hidden">{{ $t('header.registerMobile') }}</span>
          </a>
          <!-- Language Dropdown -->
          <div class="relative hidden sm:block" @mouseleave="isLangMenuOpen = false">
            <button @mouseenter="isLangMenuOpen = true" @click="isLangMenuOpen = !isLangMenuOpen"
              class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors border border-zinc-200/80 shadow-sm text-xs font-semibold text-zinc-700">
              <template v-if="locale === 'vi'">
                <img src="https://flagcdn.com/w40/vn.png" alt="VN"
                  class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm border border-zinc-200/50">
                <span>VN</span>
              </template>
              <template v-else-if="locale === 'zh'">
                <img src="https://flagcdn.com/w40/cn.png" alt="CN"
                  class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm border border-zinc-200/50">
                <span>简</span>
              </template>
              <template v-else-if="locale === 'zh-tw'">
                <img src="https://flagcdn.com/w40/tw.png" alt="TW"
                  class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm border border-zinc-200/50">
                <span>繁</span>
              </template>
              <template v-else>
                <img src="https://flagcdn.com/w40/us.png" alt="EN"
                  class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm border border-zinc-200/50">
                <span>EN</span>
              </template>
              <svg class="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="isLangMenuOpen" class="absolute right-0 top-full pt-1 z-50">
              <div
                class="w-36 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-zinc-100 overflow-hidden transform origin-top-right transition-all">
                <button @click="changeLocale('vi')"
                  class="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold hover:bg-zinc-50 transition-colors"
                  :class="locale === 'vi' ? 'text-amber-600 bg-amber-50/50' : 'text-zinc-700'">
                  <img src="https://flagcdn.com/w40/vn.png" alt="VN"
                    class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm border border-zinc-200/50">
                  Tiếng Việt
                </button>
                <button @click="changeLocale('en')"
                  class="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold hover:bg-zinc-50 transition-colors"
                  :class="locale === 'en' ? 'text-amber-600 bg-amber-50/50' : 'text-zinc-700'">
                  <img src="https://flagcdn.com/w40/us.png" alt="EN"
                    class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm border border-zinc-200/50">
                  English
                </button>
                <button @click="changeLocale('zh')"
                  class="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold hover:bg-zinc-50 transition-colors"
                  :class="locale === 'zh' ? 'text-amber-600 bg-amber-50/50' : 'text-zinc-700'">
                  <img src="https://flagcdn.com/w40/cn.png" alt="CN"
                    class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm border border-zinc-200/50">
                  简体中文
                </button>
                <button @click="changeLocale('zh-tw')"
                  class="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold hover:bg-zinc-50 transition-colors"
                  :class="locale === 'zh-tw' ? 'text-amber-600 bg-amber-50/50' : 'text-zinc-700'">
                  <img src="https://flagcdn.com/w40/tw.png" alt="TW"
                    class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm border border-zinc-200/50">
                  繁體中文
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 focus:outline-none"
            aria-label="Toggle Menu">
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
    <div v-if="isMobileMenuOpen"
      class="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">

      <!-- Mobile Language Switcher -->
      <div class="flex justify-center mb-4">
        <div class="flex items-center gap-2 bg-zinc-50 border border-zinc-200/80 rounded-lg p-1.5 shadow-sm">
          <button @click="changeLocale('vi')"
            :class="locale === 'vi' ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100'"
            class="flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md transition-all">
            <img src="https://flagcdn.com/w40/vn.png" alt="VN"
              class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm">
            VN
          </button>
          <button @click="changeLocale('en')"
            :class="locale === 'en' ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100'"
            class="flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md transition-all">
            <img src="https://flagcdn.com/w40/us.png" alt="EN"
              class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm">
            EN
          </button>
          <button @click="changeLocale('zh')"
            :class="locale === 'zh' ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100'"
            class="flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md transition-all">
            <img src="https://flagcdn.com/w40/cn.png" alt="CN"
              class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm">
            简
          </button>
          <button @click="changeLocale('zh-tw')"
            :class="locale === 'zh-tw' ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100'"
            class="flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md transition-all">
            <img src="https://flagcdn.com/w40/tw.png" alt="TW"
              class="w-[18px] h-[13px] rounded-[2px] object-cover shadow-sm">
            繁
          </button>
        </div>
      </div>

      <div class="space-y-1 font-medium text-zinc-800">
        <div class="px-3 py-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
          {{ $t('header.products') }}
        </div>
        <div class="grid grid-cols-2 gap-2 px-2 pb-2">
          <NuxtLinkLocale :to="{ name: 'wms' }" @click="isMobileMenuOpen = false"
            class="p-2.5 rounded-lg bg-amber-50 text-center text-xs font-semibold text-amber-800">
            ecor WMS
          </NuxtLinkLocale>
          <NuxtLinkLocale :to="{ name: 'tms' }" @click="isMobileMenuOpen = false"
            class="p-2.5 rounded-lg bg-amber-50 text-center text-xs font-semibold text-amber-800">
            ecor TMS
          </NuxtLinkLocale>
          <NuxtLinkLocale :to="{ name: 'pos' }" @click="isMobileMenuOpen = false"
            class="p-2.5 rounded-lg bg-amber-50 text-center text-xs font-semibold text-amber-800">
            ecor POS
          </NuxtLinkLocale>
          <NuxtLinkLocale :to="{ name: 'ke-toan' }" @click="isMobileMenuOpen = false"
            class="p-2.5 rounded-lg bg-amber-50 text-center text-xs font-semibold text-amber-800">
            ecor Account
          </NuxtLinkLocale>
          <NuxtLinkLocale :to="{ name: 'giai-phap-nganh-gach' }" @click="isMobileMenuOpen = false"
            class="col-span-2 p-2.5 rounded-lg bg-zinc-100 text-center text-xs font-semibold text-zinc-700">
            {{ $t('header.extensions') }}: ecor Tiles AI &amp; AR
          </NuxtLinkLocale>
        </div>

        <NuxtLinkLocale :to="{ name: 'giai-phap' }" @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-zinc-100 text-sm font-medium"
          :class="isActive(['/giai-phap', '/solutions']) ? 'text-amber-600 bg-amber-50' : ''">
          {{ $t('header.mobileMenu.solutionsIndustry') }}
        </NuxtLinkLocale>

        <NuxtLinkLocale :to="{ name: 'bang-gia' }" @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-zinc-100 text-sm font-medium"
          :class="isActive(['/bang-gia', '/pricing']) ? 'text-amber-600 bg-amber-50' : ''">
          {{ $t('header.mobileMenu.pricingService') }}
        </NuxtLinkLocale>

        <NuxtLinkLocale :to="{ name: 'khach-hang' }" @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-zinc-100 text-sm font-medium"
          :class="isActive(['/khach-hang', '/customers']) ? 'text-amber-600 bg-amber-50' : ''">
          {{ $t('header.mobileMenu.customersTypical') }}
        </NuxtLinkLocale>

        <NuxtLinkLocale :to="{ name: 'tai-nguyen' }" @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-zinc-100 text-sm font-medium"
          :class="isActive(['/tai-nguyen', '/resources']) ? 'text-amber-600 bg-amber-50' : ''">
          {{ $t('header.mobileMenu.resourcesApi') }}
        </NuxtLinkLocale>

        <NuxtLinkLocale :to="{ name: 'lien-he' }" @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg hover:bg-zinc-100 text-sm font-medium"
          :class="isActive(['/lien-he', '/contact']) ? 'text-amber-600 bg-amber-50' : ''">
          {{ $t('header.mobileMenu.contactSurvey') }}
        </NuxtLinkLocale>
      </div>

      <div class="pt-2 border-t border-zinc-100">
        <a :href="DASHBOARD_URL" target="_blank" rel="noopener" @click="isMobileMenuOpen = false"
          class="block w-full py-3 rounded-xl bg-amber-400 text-zinc-900 font-bold text-center text-sm shadow-md">
          {{ $t('header.register') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { DASHBOARD_URL } from '@/config/links'

const route = useRoute()
const { locale, setLocale } = useI18n()
const isMobileMenuOpen = ref(false)
const isLangMenuOpen = ref(false)

function changeLocale(lang) {
  setLocale(lang)
  isLangMenuOpen.value = false
}

function isActive(paths) {
  return paths.some(p => route.path.includes(p))
}

const isProductActive = computed(() => {
  return ['wms', 'tms', 'pos', 'ke-toan', 'accounting'].some(seg => route.path.includes(seg))
})
</script>
