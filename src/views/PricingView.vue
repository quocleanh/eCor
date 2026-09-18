<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION & BILLING TOGGLE -->
    <section class="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      <HeroCanvas :opacity="0.65" :particleCount="52" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Tag -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span>{{ $t('pricing.hero.badge') }}</span>
        </div>

        <!-- Title -->
        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          {{ $t('pricing.hero.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('pricing.hero.desc') }}
        </p>

        <!-- Billing Cycle Switcher -->
        <div class="mt-8 inline-flex items-center p-1.5 rounded-full bg-zinc-100 border border-zinc-200 shadow-inner">
          <button
            @click="isAnnual = false"
            class="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all"
            :class="!isAnnual ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-800'"
          >
            {{ $t('pricing.hero.monthly') }}
          </button>
          <button
            @click="isAnnual = true"
            class="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5"
            :class="isAnnual ? 'bg-amber-400 text-zinc-900 font-bold shadow-sm' : 'text-zinc-500 hover:text-zinc-800'"
          >
            <span>{{ $t('pricing.hero.annual') }}</span>
            <span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-extrabold">{{ $t('pricing.hero.annualTag') }}</span>
          </button>
        </div>

        <!-- Trust Features -->
        <div class="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
          <span class="flex items-center gap-1">✓ {{ $t('pricing.hero.trust1') }}</span>
          <span class="flex items-center gap-1">✓ {{ $t('pricing.hero.trust2') }}</span>
          <span class="flex items-center gap-1">✓ {{ $t('pricing.hero.trust3') }}</span>
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
              <span class="text-xs font-bold uppercase tracking-wider text-zinc-400">{{ $t('pricing.tiers.t1.tag') }}</span>
              <span class="text-xl">🏪</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">{{ $t('pricing.tiers.t1.name') }}</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              {{ $t('pricing.tiers.t1.desc') }}
            </p>

            <div class="py-3 border-y border-zinc-100">
              <div class="flex items-baseline gap-1">
                <span class="text-3xl sm:text-4xl font-black text-zinc-900">
                  {{ isAnnual ? '950,000' : '1,190,000' }}
                </span>
                <span class="text-xs text-zinc-500 font-medium">{{ $t('pricing.tiers.t1.monthUnit') }}</span>
              </div>
              <div class="text-[11px] text-zinc-400 mt-1">
                {{ isAnnual ? $t('pricing.tiers.t1.annualNote') : $t('pricing.tiers.t1.monthlyNote') }}
              </div>
            </div>

            <div class="space-y-2.5 pt-2">
              <span class="text-[11px] font-bold uppercase text-zinc-700 block">{{ $t('pricing.tiers.t1.include') }}</span>
              <ul class="space-y-2 text-xs text-zinc-600">
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t1.f1')"></span></li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t1.f2') }}</li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t1.f3') }}</li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t1.f4') }}</li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t1.f5') }}</li>
                <li class="flex items-center gap-2 text-zinc-400 line-through">{{ $t('pricing.tiers.t1.f6') }}</li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t1.f7') }}</li>
              </ul>
            </div>
          </div>

          <div class="pt-8 mt-6">
            <button
              @click="$emit('open-modal', { type: 'pricing', moduleName: 'ecor Starter' })"
              class="w-full py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-sm transition-all"
            >
              {{ $t('pricing.tiers.t1.btn') }}
            </button>
          </div>
        </div>

        <!-- TIER 2: PROFESSIONAL (FEATURED) -->
        <div class="rounded-3xl bg-white border-2 border-amber-600 p-8 shadow-xl relative flex flex-col justify-between text-left transform lg:-translate-y-2">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-zinc-900 font-bold text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow">
            {{ $t('pricing.tiers.t2.featured') }}
          </div>

          <div class="space-y-4">
            <div class="flex items-center justify-between pt-1">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('pricing.tiers.t2.tag') }}</span>
              <span class="text-xl">🚀</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">{{ $t('pricing.tiers.t2.name') }}</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              {{ $t('pricing.tiers.t2.desc') }}
            </p>

            <div class="py-3 border-y border-zinc-100">
              <div class="flex items-baseline gap-1">
                <span class="text-3xl sm:text-4xl font-black text-amber-700">
                  {{ isAnnual ? '2,550,000' : '3,190,000' }}
                </span>
                <span class="text-xs text-zinc-500 font-medium">{{ $t('pricing.tiers.t1.monthUnit') }}</span>
              </div>
              <div class="text-[11px] text-amber-700 font-medium mt-1">
                {{ isAnnual ? $t('pricing.tiers.t2.annualNote') : $t('pricing.tiers.t2.monthlyNote') }}
              </div>
            </div>

            <div class="space-y-2.5 pt-2">
              <span class="text-[11px] font-bold uppercase text-zinc-700 block">{{ $t('pricing.tiers.t2.include') }}</span>
              <ul class="space-y-2 text-xs text-zinc-600">
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t2.f1')"></span></li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t2.f2')"></span></li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t2.f3')"></span></li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t2.f4')"></span></li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t2.f5') }}</li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t2.f6')"></span></li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t2.f7')"></span></li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t2.f8')"></span></li>
              </ul>
            </div>
          </div>

          <div class="pt-8 mt-6">
            <button
              @click="$emit('open-modal', { type: 'pricing', moduleName: 'ecor Professional' })"
              class="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
            >
              {{ $t('pricing.tiers.t2.btn') }}
            </button>
          </div>
        </div>

        <!-- TIER 3: ENTERPRISE -->
        <div class="rounded-3xl bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-zinc-400">{{ $t('pricing.tiers.t3.tag') }}</span>
              <span class="text-xl">🏢</span>
            </div>
            <h3 class="text-2xl font-extrabold text-zinc-900">{{ $t('pricing.tiers.t3.name') }}</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              {{ $t('pricing.tiers.t3.desc') }}
            </p>

            <div class="py-3 border-y border-zinc-100">
              <div class="text-3xl sm:text-4xl font-black text-zinc-900">{{ $t('pricing.tiers.t3.price') }}</div>
              <div class="text-[11px] text-zinc-400 mt-1">{{ $t('pricing.tiers.t3.priceNote') }}</div>
            </div>

            <div class="space-y-2.5 pt-2">
              <span class="text-[11px] font-bold uppercase text-zinc-700 block">{{ $t('pricing.tiers.t3.include') }}</span>
              <ul class="space-y-2 text-xs text-zinc-600">
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t3.f1')"></span></li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t3.f2') }}</li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t3.f3') }}</li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t3.f4')"></span></li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t3.f5')"></span></li>
                <li class="flex items-center gap-2">✓ <span v-html="$t('pricing.tiers.t3.f6')"></span></li>
                <li class="flex items-center gap-2">✓ {{ $t('pricing.tiers.t3.f7') }}</li>
              </ul>
            </div>
          </div>

          <div class="pt-8 mt-6">
            <button
              @click="$emit('open-modal', { type: 'pricing', moduleName: 'ecor Enterprise' })"
              class="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm transition-all"
            >
              {{ $t('pricing.tiers.t3.btn') }}
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
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('pricing.addons.badge') }}</span>
            <h3 class="text-2xl font-extrabold text-zinc-900 mt-1">{{ $t('pricing.addons.title') }}</h3>
            <p class="text-xs text-zinc-500 mt-0.5">{{ $t('pricing.addons.desc') }}</p>
          </div>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-right">
            <span class="text-[10px] uppercase font-bold text-amber-700 block">{{ $t('pricing.addons.costLabel') }}</span>
            <span class="text-xl font-black text-amber-700">+ {{ calculatedExtraCost.toLocaleString('vi-VN') }} {{ $t('pricing.addons.monthUnit') }}</span>
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
              <strong class="text-sm font-bold text-zinc-900 block">{{ $t('pricing.addons.a1Title') }}</strong>
              <p class="text-[11px] text-zinc-500 mt-0.5 leading-tight">{{ $t('pricing.addons.a1Desc') }}</p>
            </div>
            <div class="pt-3 border-t border-zinc-100 mt-3 font-bold text-xs text-amber-700">{{ $t('pricing.addons.a1Price') }} <span class="font-normal text-zinc-400">/ tháng</span></div>
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
              <strong class="text-sm font-bold text-zinc-900 block">{{ $t('pricing.addons.a2Title') }}</strong>
              <p class="text-[11px] text-zinc-500 mt-0.5 leading-tight">{{ $t('pricing.addons.a2Desc') }}</p>
            </div>
            <div class="pt-3 border-t border-zinc-100 mt-3 font-bold text-xs text-amber-700">{{ $t('pricing.addons.a2Price') }} <span class="font-normal text-zinc-400">/ tháng</span></div>
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
              <strong class="text-sm font-bold text-zinc-900 block">{{ $t('pricing.addons.a3Title') }}</strong>
              <p class="text-[11px] text-zinc-500 mt-0.5 leading-tight">{{ $t('pricing.addons.a3Desc') }}</p>
            </div>
            <div class="pt-3 border-t border-zinc-100 mt-3 font-bold text-xs text-amber-700">{{ $t('pricing.addons.a3Price') }} <span class="font-normal text-zinc-400">{{ $t('pricing.addons.a3Unit') }}</span></div>
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
              <strong class="text-sm font-bold text-zinc-900 block">{{ $t('pricing.addons.a4Title') }}</strong>
              <p class="text-[11px] text-zinc-500 mt-0.5 leading-tight">{{ $t('pricing.addons.a4Desc') }}</p>
            </div>
            <div class="pt-3 border-t border-zinc-100 mt-3 font-bold text-xs text-amber-700">{{ $t('pricing.addons.a4Price') }} <span class="font-normal text-zinc-400">/ tháng</span></div>
          </label>
        </div>
      </div>
    </section>

    <!-- 4. FAQ ACCORDION -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('pricing.faq.badge') }}</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('pricing.faq.title') }}
        </h2>
        <p class="mt-3 text-sm text-zinc-500">{{ $t('pricing.faq.desc') }}</p>

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
          <h3 class="text-2xl sm:text-3xl font-extrabold">{{ $t('pricing.cta.title') }}</h3>
          <p class="text-amber-100 text-sm mt-1">{{ $t('pricing.cta.desc') }}</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <a href="tel:0822235858" class="px-5 py-3 rounded-xl bg-white text-amber-800 font-extrabold text-xs shadow hover:bg-zinc-100 transition-all">Hotline:  097 8673867</a>
          <button 
            @click="$emit('open-modal', { type: 'pricing', moduleName: 'Tư Vấn Gói Giá Phù Hợp' })"
            class="px-5 py-3 rounded-xl bg-amber-900/60 hover:bg-amber-500 text-zinc-900 font-bold font-bold text-xs border border-white/30 transition-all"
          >
            {{ $t('pricing.cta.btn') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroCanvas from '@/components/HeroCanvas.vue'
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineEmits(['open-modal'])

const { t } = useI18n()
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

const faqs = computed(() => [
  { q: t('pricing.faq.q1'), a: t('pricing.faq.a1') },
  { q: t('pricing.faq.q2'), a: t('pricing.faq.a2') },
  { q: t('pricing.faq.q3'), a: t('pricing.faq.a3') },
  { q: t('pricing.faq.q4'), a: t('pricing.faq.a4') }
])
</script>
