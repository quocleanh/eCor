<template>
  <footer class="bg-white border-t border-zinc-200 text-zinc-600 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        <!-- Brand & Contact -->
        <div class="lg:col-span-2 space-y-4">
          <NuxtLinkLocale :to="{ name: 'index' }" class="inline-block">
            <img src="/ecor-logo.png" alt="eCor Platform" class="h-9 w-auto object-contain" />
          </NuxtLinkLocale>
          <p class="text-zinc-500 text-sm leading-relaxed max-w-sm">
            {{ $t('footer.desc') }}
          </p>
          <div class="space-y-2 pt-2 text-sm text-zinc-700">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>{{ $t('footer.hotline') }}: <strong class="text-zinc-900 font-semibold"> 097 8673867</strong>
                {{ $t('footer.hotlineHours') }}</span>
            </div>
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Email: <a href="mailto:contact@ecor.vn"
                  class="text-amber-600 hover:underline">contact@ecor.vn</a></span>
            </div>
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span>Website: <strong class="text-zinc-800">https://ecor.vn</strong></span>
            </div>
          </div>
        </div>

        <!-- Col 2: Sản phẩm -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-4">
            {{ $t('footer.products') }}
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li>
              <NuxtLinkLocale :to="{ name: 'wms' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodWms') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'tms' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodTms') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'pos' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodPos') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'ke-toan' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodAccount') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'wms' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodMulti') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'giai-phap' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodEcom') }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- Col 3: Giải pháp -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-4">
            {{ $t('footer.solutions') }}
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li>
              <NuxtLinkLocale :to="{ name: 'giai-phap' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solRetail') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'giai-phap' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.sol3pl') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'giai-phap' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solEcom') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'giai-phap' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solCold') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'giai-phap' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solMfg') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'giai-phap-nganh-gach' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solTiles') }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- Col 4: Tài nguyên & Hỗ trợ -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-4">
            {{ $t('footer.resources') }}
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li>
              <a :href="DOCS_URL" target="_blank" rel="noopener" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resApi') }}
              </a>
            </li>
            <li>
              <a :href="DOCS_URL" target="_blank" rel="noopener" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resGuide') }}
              </a>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'bang-gia' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resPricing') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'khach-hang' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resCustomers') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{ name: 'lien-he' }" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resContact') }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div class="flex items-center gap-2">
          <span>{{ $t('footer.copyright') }}</span>
        </div>

        <div class="flex items-center gap-6">
          <NuxtLinkLocale :to="{ name: 'chinh-sach-bao-mat' }" class="hover:text-zinc-600">{{ $t('footer.legalPrivacy')
          }}</NuxtLinkLocale>
          <NuxtLinkLocale :to="{ name: 'dieu-khoan-su-dung' }" class="hover:text-zinc-600">{{ $t('footer.legalTerms') }}</NuxtLinkLocale>
          <NuxtLinkLocale :to="{ name: 'cam-ket-sla' }"
            class="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 transition-colors">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {{ $t('footer.sla') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { DOCS_URL } from '@/config/links'
</script>
