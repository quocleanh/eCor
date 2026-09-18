<template>
  <footer class="bg-white border-t border-zinc-200 text-zinc-600 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        <!-- Brand & Contact -->
        <div class="lg:col-span-2 space-y-4">
          <router-link :to="$localeRoute('home')" class="inline-block">
            <img src="/ecor-logo.png" alt="eCor Platform" class="h-9 w-auto object-contain" />
          </router-link>
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
                (24/7)</span>
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

        <!-- Col 2: {{ $t('footer.products') }} -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-4">
            {{ $t('footer.products') }}
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li>
              <router-link :to="$localeRoute('wms')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodWms') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('tms')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodTms') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('pos')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodPos') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('wms')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodMulti') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('solutions')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.prodEcom') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Col 3: {{ $t('footer.solutions') }} -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-4">
            {{ $t('footer.solutions') }}
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li>
              <router-link :to="$localeRoute('solutions')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solRetail') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('solutions')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.sol3pl') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('solutions')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solEcom') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('solutions')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solCold') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('solutions')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.solMfg') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Col 4: {{ $t('footer.resources') }} & Hỗ Trợ -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-4">
            {{ $t('footer.resources') }}
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li>
              <router-link :to="$localeRoute('resources')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resApi') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('resources')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resGuide') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('pricing')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resPricing') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('customers')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resCustomers') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$localeRoute('contact')" class="hover:text-amber-600 transition-colors">
                {{ $t('footer.resContact') }}
              </router-link>
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
          <router-link :to="$localeRoute('privacy')" class="hover:text-zinc-600">{{ $t('footer.legalPrivacy')
          }}</router-link>
          <router-link :to="$localeRoute('terms')" class="hover:text-zinc-600">{{ $t('footer.legalTerms') }}</router-link>
          <router-link :to="$localeRoute('sla')"
            class="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 transition-colors">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {{ $t('footer.sla') }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
