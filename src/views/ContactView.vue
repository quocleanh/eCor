<template>
  <div class="bg-[#fafcff] text-zinc-800">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      <HeroCanvas :opacity="0.65" :particleCount="52" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 shadow-sm">
          <span>{{ $t('contact.hero.badge') }}</span>
        </div>

        <h1 class="mt-6 text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-zinc-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          {{ $t('contact.hero.title') }} <span class="text-amber-600">{{ $t('contact.hero.titleHighlight') }}</span>
        </h1>

        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('contact.hero.desc') }}
        </p>

        <!-- 4 Badges -->
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
          <div class="p-3.5 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            <span class="text-xs text-zinc-400 block font-medium">{{ $t('contact.hero.b1Val') }}</span>
            <strong class="text-xs sm:text-sm font-bold text-zinc-800">{{ $t('contact.hero.b1Title') }}</strong>
          </div>
          <div class="p-3.5 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            <span class="text-xs text-zinc-400 block font-medium">{{ $t('contact.hero.b2Val') }}</span>
            <strong class="text-xs sm:text-sm font-bold text-zinc-800">{{ $t('contact.hero.b2Title') }}</strong>
          </div>
          <div class="p-3.5 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            <span class="text-xs text-zinc-400 block font-medium">{{ $t('contact.hero.b3Val') }}</span>
            <strong class="text-xs sm:text-sm font-bold text-zinc-800">{{ $t('contact.hero.b3Title') }}</strong>
          </div>
          <div class="p-3.5 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            <span class="text-xs text-zinc-400 block font-medium">{{ $t('contact.hero.b4Val') }}</span>
            <strong class="text-xs sm:text-sm font-bold text-zinc-800">{{ $t('contact.hero.b4Title') }}</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. MAIN TWO-COLUMN CONTACT & SURVEY AREA -->
    <section class="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Column: Direct Channels & Specialists -->
        <div class="lg:col-span-5 space-y-6 text-left">
          <!-- Channels Box -->
          <div class="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex justify-between items-center pb-3 border-b border-zinc-100">
              <h3 class="font-extrabold text-zinc-900 text-sm">{{ $t('contact.channels.title') }}</h3>
              <span class="text-[10px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                {{ $t('contact.channels.status') }}
              </span>
            </div>

            <a href="tel:0822235858" class="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 hover:bg-amber-50 transition-colors group">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">📞</div>
                <div>
                  <div class="text-[11px] text-zinc-400">{{ $t('contact.channels.phoneTitle') }}</div>
                  <strong class="text-sm font-bold text-zinc-900 group-hover:text-amber-700"> 097 8673867</strong>
                </div>
              </div>
              <span class="text-zinc-400 group-hover:text-amber-700">→</span>
            </a>

            <a href="mailto:contact@ecor.vn" class="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 hover:bg-amber-50 transition-colors group">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">✉️</div>
                <div>
                  <div class="text-[11px] text-zinc-400">{{ $t('contact.channels.mailTitle') }}</div>
                  <strong class="text-sm font-bold text-zinc-900 group-hover:text-amber-700">contact@ecor.vn</strong>
                </div>
              </div>
              <span class="text-zinc-400 group-hover:text-amber-700">→</span>
            </a>
          </div>

          <!-- Office Locations -->
          <div class="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm space-y-3 text-xs">
            <h4 class="font-extrabold text-zinc-900 text-xs uppercase tracking-wider text-zinc-400">{{ $t('contact.channels.officeTitle') }}</h4>
            
            <div class="p-3 bg-zinc-50 rounded-2xl">
              <strong class="text-zinc-800 block text-xs">{{ $t('contact.channels.officeName') }}</strong>
              <p class="text-zinc-500 mt-1">{{ $t('contact.channels.officeAddress') }}</p>
            </div>
          </div>

          <!-- 1-1 Booking Banner -->
          <div class="p-5 rounded-3xl bg-gradient-to-r from-amber-50 to-amber-50 border border-amber-200 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <strong class="text-xs font-bold text-amber-900">{{ $t('contact.channels.bookingTitle') }}</strong>
                <span class="text-[10px] bg-amber-400 text-zinc-900 font-bold font-bold px-2 py-0.5 rounded">{{ $t('contact.channels.bookingTag') }}</span>
              </div>
              <p class="text-[11px] text-amber-700 mt-1">{{ $t('contact.channels.bookingDesc') }}</p>
            </div>
            <button 
              @click="$emit('open-modal', { type: 'demo', moduleName: 'Đặt lịch 1-1 Google Meet' })"
              class="px-3.5 py-2 bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-bold text-xs rounded-xl shadow-sm shrink-0"
            >
              {{ $t('contact.channels.bookingBtn') }}
            </button>
          </div>

          <!-- Team of Experts -->
          <div class="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm space-y-3">
            <div class="flex justify-between items-center pb-2 border-b border-zinc-100">
              <h4 class="font-extrabold text-zinc-900 text-xs">{{ $t('contact.experts.title') }}</h4>
              <span class="text-[10px] text-zinc-400">{{ $t('contact.experts.loc') }}</span>
            </div>

            <div class="space-y-3 pt-1">
              <div class="flex items-center gap-3">
                <img src="/images/assets/expert-nam.png" alt="Trần Đức Nam" class="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                <div>
                  <strong class="text-xs text-zinc-800 block">Trần Đức Nam</strong>
                  <span class="text-[10px] bg-amber-50 text-amber-700 font-semibold px-1.5 py-0.5 rounded">{{ $t('contact.experts.e1Role') }}</span>
                  <p class="text-[10px] text-zinc-400 mt-0.5">{{ $t('contact.experts.e1Desc') }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <img src="/images/assets/expert-lan.png" alt="Lê Hoàng Lan" class="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                <div>
                  <strong class="text-xs text-zinc-800 block">Lê Hoàng Lan</strong>
                  <span class="text-[10px] bg-amber-50 text-amber-700 font-semibold px-1.5 py-0.5 rounded">{{ $t('contact.experts.e2Role') }}</span>
                  <p class="text-[10px] text-zinc-400 mt-0.5">{{ $t('contact.experts.e2Desc') }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <img src="/images/assets/expert-huy.png" alt="Nguyễn Quốc Huy" class="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                <div>
                  <strong class="text-xs text-zinc-800 block">Nguyễn Quốc Huy</strong>
                  <span class="text-[10px] bg-amber-50 text-amber-700 font-semibold px-1.5 py-0.5 rounded">{{ $t('contact.experts.e3Role') }}</span>
                  <p class="text-[10px] text-zinc-400 mt-0.5">{{ $t('contact.experts.e3Desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Multi-step Survey Form -->
        <div class="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
          <div class="pb-4 border-b border-zinc-100">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">{{ $t('contact.form.badge') }}</span>
            <h3 class="text-xl sm:text-2xl font-extrabold text-zinc-900 mt-0.5">{{ $t('contact.form.title') }}</h3>
            <p class="text-xs text-zinc-500 mt-1">{{ $t('contact.form.desc') }}</p>
          </div>

          <div v-if="submitted" class="py-12 text-center space-y-4">
            <div class="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h4 class="text-xl font-bold text-zinc-900">{{ $t('contact.form.successTitle') }}</h4>
            <p class="text-sm text-zinc-600 max-w-md mx-auto">
              {{ $t('contact.form.successDesc1') }} <strong>{{ $t('contact.form.successDesc2') }}</strong>.
            </p>
            <button @click="submitted = false" class="px-6 py-2.5 bg-amber-400 text-zinc-900 font-bold rounded-xl text-xs font-bold">{{ $t('contact.form.successBtn') }}</button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-4 mt-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('contact.form.fName') }}</label>
                <input v-model="form.name" required :placeholder="$t('contact.form.fNamePl')" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('contact.form.fPhone') }}</label>
                <input v-model="form.phone" required placeholder="09xxxxxxxxx" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('contact.form.fEmail') }}</label>
                <input v-model="form.email" required placeholder="an.nguyen@congty.com" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('contact.form.fCompany') }}</label>
                <input v-model="form.company" :placeholder="$t('contact.form.fCompanyPl')" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs" />
              </div>
            </div>

            <!-- Giải pháp quan tâm đa chọn -->
            <div>
              <div class="flex justify-between items-center mb-1.5">
                <label class="block text-xs font-bold text-zinc-700 uppercase">{{ $t('contact.form.solLabel') }}</label>
                <span class="text-[10px] text-amber-600 font-bold">{{ $t('contact.form.solTag') }}</span>
              </div>

              <div class="grid grid-cols-2 gap-2 text-xs">
                <label 
                  class="p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all"
                  :class="selectedModules.includes('wms') ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' : 'border-zinc-200 bg-zinc-50/50'"
                >
                  <input type="checkbox" value="wms" v-model="selectedModules" class="rounded text-amber-600" />
                  <div>
                    <span>{{ $t('contact.form.s1Title') }}</span>
                    <span class="text-[10px] text-zinc-400 font-normal block">{{ $t('contact.form.s1Desc') }}</span>
                  </div>
                </label>

                <label 
                  class="p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all"
                  :class="selectedModules.includes('tms') ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' : 'border-zinc-200 bg-zinc-50/50'"
                >
                  <input type="checkbox" value="tms" v-model="selectedModules" class="rounded text-amber-600" />
                  <div>
                    <span>{{ $t('contact.form.s2Title') }}</span>
                    <span class="text-[10px] text-zinc-400 font-normal block">{{ $t('contact.form.s2Desc') }}</span>
                  </div>
                </label>

                <label 
                  class="p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all"
                  :class="selectedModules.includes('omni') ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' : 'border-zinc-200 bg-zinc-50/50'"
                >
                  <input type="checkbox" value="omni" v-model="selectedModules" class="rounded text-amber-600" />
                  <div>
                    <span>{{ $t('contact.form.s3Title') }}</span>
                    <span class="text-[10px] text-zinc-400 font-normal block">{{ $t('contact.form.s3Desc') }}</span>
                  </div>
                </label>

                <label 
                  class="p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all"
                  :class="selectedModules.includes('erp') ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' : 'border-zinc-200 bg-zinc-50/50'"
                >
                  <input type="checkbox" value="erp" v-model="selectedModules" class="rounded text-amber-600" />
                  <div>
                    <span>{{ $t('contact.form.s4Title') }}</span>
                    <span class="text-[10px] text-zinc-400 font-normal block">{{ $t('contact.form.s4Desc') }}</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Quy mô kho / xe -->
            <div>
              <label class="block text-xs font-bold text-zinc-700 uppercase mb-1.5">{{ $t('contact.form.scaleLabel') }}</label>
              <div class="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  @click="scale = 'sme'"
                  class="p-3 rounded-xl border text-center transition-all"
                  :class="scale === 'sme' ? 'bg-amber-400 text-zinc-900 font-bold font-bold border-amber-600 shadow' : 'bg-zinc-50 border-zinc-200 text-zinc-700'"
                >
                  <span class="block font-bold">{{ $t('contact.form.sc1Title') }}</span>
                  <span class="text-[10px] opacity-80 block mt-0.5">{{ $t('contact.form.sc1Desc') }}</span>
                </button>

                <button
                  type="button"
                  @click="scale = 'growth'"
                  class="p-3 rounded-xl border text-center transition-all"
                  :class="scale === 'growth' ? 'bg-amber-400 text-zinc-900 font-bold font-bold border-amber-600 shadow' : 'bg-zinc-50 border-zinc-200 text-zinc-700'"
                >
                  <span class="block font-bold">{{ $t('contact.form.sc2Title') }}</span>
                  <span class="text-[10px] opacity-80 block mt-0.5">{{ $t('contact.form.sc2Desc') }}</span>
                </button>

                <button
                  type="button"
                  @click="scale = 'enterprise'"
                  class="p-3 rounded-xl border text-center transition-all"
                  :class="scale === 'enterprise' ? 'bg-amber-400 text-zinc-900 font-bold font-bold border-amber-600 shadow' : 'bg-zinc-50 border-zinc-200 text-zinc-700'"
                >
                  <span class="block font-bold">{{ $t('contact.form.sc3Title') }}</span>
                  <span class="text-[10px] opacity-80 block mt-0.5">{{ $t('contact.form.sc3Desc') }}</span>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-zinc-700 uppercase mb-1">{{ $t('contact.form.noteLabel') }}</label>
              <textarea v-model="form.notes" rows="2" :placeholder="$t('contact.form.notePl')" class="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none text-xs resize-none"></textarea>
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-400 text-zinc-900 font-bold font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2">
              <span>🚀</span>
              <span>{{ $t('contact.form.submitBtn') }}</span>
            </button>

            <div class="flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-zinc-100">
              <span>{{ $t('contact.form.sec1') }}</span>
              <span>{{ $t('contact.form.sec2') }}</span>
              <span>{{ $t('contact.form.sec3') }}</span>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- 3. MÁY TÍNH DỰ TOÁN QUY MÔ NHANH -->
    <section class="py-16 bg-white border-y border-zinc-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('contact.calc.badge') }}</span>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">{{ $t('contact.calc.title') }}</h3>
        <p class="text-xs text-zinc-500 mt-1">{{ $t('contact.calc.desc') }}</p>

        <!-- Tier volume buttons -->
        <div class="mt-6 inline-flex rounded-full bg-zinc-100 p-1 border border-zinc-200">
          <button
            v-for="vol in [$t('contact.calc.v1'), $t('contact.calc.v2'), $t('contact.calc.v3')]"
            :key="vol"
            @click="selectedVol = vol"
            class="px-5 py-2 rounded-full text-xs font-bold transition-all"
            :class="selectedVol === vol ? 'bg-amber-400 text-zinc-900 font-bold shadow' : 'text-zinc-600 hover:text-zinc-900'"
          >
            {{ vol }}
          </button>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div class="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <span class="text-[10px] text-zinc-400 font-bold uppercase block">{{ $t('contact.calc.pLabel') }}</span>
            <strong class="text-base text-amber-700 font-extrabold block mt-1">
              {{ selectedVol === $t('contact.calc.v1') ? $t('contact.calc.t1') : (selectedVol === $t('contact.calc.v2') ? $t('contact.calc.t2') : $t('contact.calc.t3')) }}
            </strong>
            <p class="text-xs text-zinc-500 mt-2 leading-relaxed">
              {{ selectedVol === $t('contact.calc.v1') ? $t('contact.calc.d1') : (selectedVol === $t('contact.calc.v2') ? $t('contact.calc.d2') : $t('contact.calc.d3')) }}
            </p>
            <div class="pt-4 mt-4 border-t border-zinc-200 text-xs text-zinc-600">
              {{ $t('contact.calc.uLabel') }} <strong>{{ selectedVol === $t('contact.calc.v1') ? $t('contact.calc.u1') : (selectedVol === $t('contact.calc.v2') ? $t('contact.calc.u2') : $t('contact.calc.u3')) }}</strong>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <span class="text-[10px] text-zinc-400 font-bold uppercase block">{{ $t('contact.calc.timeLabel') }}</span>
            <strong class="text-base text-zinc-900 font-extrabold block mt-1">
              {{ selectedVol === $t('contact.calc.v1') ? $t('contact.calc.time1') : (selectedVol === $t('contact.calc.v2') ? $t('contact.calc.time2') : $t('contact.calc.time3')) }}
            </strong>
            <p class="text-xs text-zinc-500 mt-2 leading-relaxed">{{ $t('contact.calc.timeDesc') }}</p>
            <div class="pt-4 mt-4 border-t border-zinc-200 text-xs text-zinc-600">
              {{ $t('contact.calc.formLabel') }} <strong>{{ $t('contact.calc.formVal') }}</strong>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-amber-50/60 border border-amber-200">
            <span class="text-[10px] text-amber-700 font-bold uppercase block">{{ $t('contact.calc.roiLabel') }}</span>
            <strong class="text-base text-amber-700 font-extrabold block mt-1">{{ $t('contact.calc.roiTitle') }}</strong>
            <p class="text-xs text-zinc-600 mt-2 leading-relaxed">{{ $t('contact.calc.roiDesc') }}</p>
            <div class="pt-4 mt-4 border-t border-amber-200 text-xs text-amber-900 font-bold">
              {{ $t('contact.calc.roiRes') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. FAQ VỀ QUY TRÌNH TRIỂN KHAI -->
    <section class="py-20 bg-[#fafcff]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">{{ $t('contact.faq.badge') }}</span>
        <h2 class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight">
          {{ $t('contact.faq.title') }}
        </h2>
        <p class="mt-3 text-sm text-zinc-500">{{ $t('contact.faq.desc') }}</p>

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
  </div>
</template>

<script setup>
import HeroCanvas from '@/components/HeroCanvas.vue'
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineEmits(['open-modal'])

const { t } = useI18n()
const submitted = ref(false)
const selectedVol = ref('')
import { onMounted } from 'vue'
onMounted(() => { selectedVol.value = t('contact.calc.v1') })
const selectedModules = ref(['wms'])
const scale = ref('growth')

const form = reactive({
  name: '',
  phone: '',
  email: '',
  company: '',
  notes: ''
})

async function handleSubmit() {
  const notifyUrl = import.meta.env.VITE_ZALO_NOTIFY_URL
  if (notifyUrl) {
    try {
      await fetch(notifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          company: form.company,
          notes: form.notes,
          modules: selectedModules.value,
          scale: scale.value
        })
      })
    } catch (err) {
      // Không chặn trải nghiệm người dùng nếu gửi thông báo Zalo thất bại
      console.error('zalo notify failed', err)
    }
  }
  submitted.value = true
}

const faqs = computed(() => [
  { q: t('contact.faq.q1'), a: t('contact.faq.a1') },
  { q: t('contact.faq.q2'), a: t('contact.faq.a2') },
  { q: t('contact.faq.q3'), a: t('contact.faq.a3') },
  { q: t('contact.faq.q4'), a: t('contact.faq.a4') }
])
</script>
