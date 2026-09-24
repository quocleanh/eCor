<template>
  <div class="hc-root relative w-full max-w-[720px] lg:max-w-none ml-auto mr-auto lg:mr-0 select-none">
    <div class="relative w-full rounded-3xl bg-white border border-zinc-100 shadow-xl p-5 sm:p-6 flex flex-col gap-4">
      <!-- Header bar -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
        <div class="flex items-center gap-3">
          <div class="w-3 h-3 rounded-full bg-amber-400 animate-ping shrink-0"></div>
          <div>
            <h3 class="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2 flex-wrap">
              {{ $t('home.hero.canvas.title') }}
              <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold tracking-wider">{{ $t('home.hero.canvas.tag') }}</span>
            </h3>
            <p class="text-xs sm:text-sm text-zinc-500 mt-0.5">{{ $t('home.hero.canvas.subtitle') }}</p>
          </div>
        </div>

        <div class="flex items-center gap-2 flex-wrap">
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-[11px] font-semibold text-zinc-700">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            {{ $t('home.hero.canvas.sync') }}
          </div>
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-800 font-mono">
            {{ $t('home.hero.canvas.speed') }}
          </div>
        </div>
      </div>

      <!-- Diagram workspace -->
      <div class="relative w-full aspect-[1000/650]">
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1000 650" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hc-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#F5B800" stop-opacity="0.28" />
              <stop offset="100%" stop-color="#F5B800" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="hc-line-wms" x1="500" y1="325" x2="240" y2="140">
              <stop offset="0%" stop-color="#F5B800" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#F5B800" stop-opacity="0.15" />
            </linearGradient>
            <linearGradient id="hc-line-tms" x1="500" y1="325" x2="760" y2="140">
              <stop offset="0%" stop-color="#18181b" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#18181b" stop-opacity="0.15" />
            </linearGradient>
            <linearGradient id="hc-line-oms" x1="500" y1="325" x2="240" y2="510">
              <stop offset="0%" stop-color="#18181b" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#18181b" stop-opacity="0.15" />
            </linearGradient>
            <linearGradient id="hc-line-pos" x1="500" y1="325" x2="760" y2="510">
              <stop offset="0%" stop-color="#F5B800" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#F5B800" stop-opacity="0.15" />
            </linearGradient>
          </defs>

          <circle cx="500" cy="325" r="320" fill="url(#hc-glow)" />

          <!-- Orbit rings -->
          <g class="hc-anim-rotate-slow" style="transform-origin: 500px 325px;">
            <ellipse cx="500" cy="325" rx="380" ry="240" stroke="#F5B800" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="10 8" />
          </g>
          <g class="hc-anim-rotate-rev" style="transform-origin: 500px 325px;">
            <ellipse cx="500" cy="325" rx="270" ry="170" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="6 6" />
          </g>

          <!-- Curved arteries: core -> each module -->
          <path d="M 500 325 C 440 230, 340 160, 240 140" stroke="url(#hc-line-wms)" stroke-width="3" stroke-linecap="round" />
          <path class="hc-anim-flow" d="M 500 325 C 440 230, 340 160, 240 140" stroke="#F5B800" stroke-width="2.5" stroke-linecap="round" />

          <path d="M 500 325 C 570 230, 660 160, 760 140" stroke="url(#hc-line-tms)" stroke-width="3" stroke-linecap="round" />
          <path class="hc-anim-flow" d="M 500 325 C 570 230, 660 160, 760 140" stroke="#18181b" stroke-width="2.5" stroke-linecap="round" />

          <path d="M 500 325 C 430 420, 340 480, 240 510" stroke="url(#hc-line-oms)" stroke-width="3" stroke-linecap="round" />
          <path class="hc-anim-flow" d="M 500 325 C 430 420, 340 480, 240 510" stroke="#18181b" stroke-width="2.5" stroke-linecap="round" />

          <path d="M 500 325 C 570 420, 660 480, 760 510" stroke="url(#hc-line-pos)" stroke-width="3" stroke-linecap="round" />
          <path class="hc-anim-flow" d="M 500 325 C 570 420, 660 480, 760 510" stroke="#F5B800" stroke-width="2.5" stroke-linecap="round" />
        </svg>

        <!-- Center eCor Core hub -->
        <div class="absolute z-20 flex flex-col items-center" style="left: 50%; top: 50%; transform: translate(-50%, -50%);">
          <div class="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-[#F5B800] p-1.5 shadow-2xl flex items-center justify-center">
            <div class="w-full h-full rounded-full bg-zinc-900 border-2 border-amber-300/40 flex flex-col items-center justify-center text-center p-2">
              <svg viewBox="0 0 48 24" fill="none" class="w-8 h-4 sm:w-10 sm:h-5 mb-0.5">
                <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.8 20 20.2 15 24 12C27.8 9 31.2 4 36 4C40.42 4 44 7.58 44 12C44 16.42 40.42 20 36 20C31.2 20 27.8 15 24 12C20.2 9 16.8 4 12 4Z" stroke="#F5B800" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
                <circle cx="36" cy="12" r="2.5" fill="#FFFFFF" />
              </svg>
              <span class="text-[9px] sm:text-xs font-extrabold tracking-wider text-white font-mono uppercase">eCor Core</span>
              <span class="hidden sm:block text-[9px] text-amber-300/90 font-medium">{{ $t('home.hero.canvas.hubSub') }}</span>
            </div>
          </div>
          <div class="hidden md:flex mt-3 px-2.5 py-1 rounded-full bg-zinc-900 text-amber-400 border border-amber-400/40 text-[11px] font-semibold tracking-wide shadow-md items-center gap-1.5 whitespace-nowrap">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {{ $t('home.hero.canvas.atomic') }}
          </div>
        </div>

        <!-- Module card: WMS (top-left) -->
        <div class="absolute z-10 hc-float-1 w-[42%] sm:w-[41%]" style="left: 24%; top: 21.5%; transform: translate(-50%, -50%);">
          <div class="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-zinc-200 shadow-lg">
            <div class="flex items-start gap-2 sm:gap-3">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M3 10l9-7 9 7v11H3V10z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-1.5 flex-wrap">
                  <h4 class="text-xs sm:text-sm font-bold text-zinc-900">{{ $t('home.hero.canvas.wmsTitle') }}</h4>
                  <span class="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold whitespace-nowrap">{{ $t('home.hero.canvas.wmsBadge') }}</span>
                </div>
                <p class="text-[9px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">{{ $t('home.hero.canvas.wmsDesc') }}</p>
                <div class="hidden sm:flex items-center gap-1.5 mt-2 pt-2 border-t border-zinc-100 text-[10px] text-zinc-600">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  {{ $t('home.hero.canvas.wmsPoint') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Module card: TMS (top-right) -->
        <div class="absolute z-10 hc-float-2 w-[42%] sm:w-[41%]" style="left: 76%; top: 21.5%; transform: translate(-50%, -50%);">
          <div class="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-zinc-200 shadow-lg">
            <div class="flex items-start gap-2 sm:gap-3">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1M5 17a2 2 0 104 0m6 0a2 2 0 104 0" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-1.5 flex-wrap">
                  <h4 class="text-xs sm:text-sm font-bold text-zinc-900">{{ $t('home.hero.canvas.tmsTitle') }}</h4>
                  <span class="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-amber-400 font-bold whitespace-nowrap">{{ $t('home.hero.canvas.tmsBadge') }}</span>
                </div>
                <p class="text-[9px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">{{ $t('home.hero.canvas.tmsDesc') }}</p>
                <div class="hidden sm:flex items-center gap-1.5 mt-2 pt-2 border-t border-zinc-100 text-[10px] text-zinc-600">
                  <span class="w-1.5 h-1.5 rounded-full bg-zinc-800 shrink-0"></span>
                  {{ $t('home.hero.canvas.tmsPoint') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Module card: OMS (bottom-left) -->
        <div class="absolute z-10 hc-float-3 w-[42%] sm:w-[41%]" style="left: 24%; top: 78.5%; transform: translate(-50%, -50%);">
          <div class="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-zinc-200 shadow-lg">
            <div class="flex items-start gap-2 sm:gap-3">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-1.5 flex-wrap">
                  <h4 class="text-xs sm:text-sm font-bold text-zinc-900">{{ $t('home.hero.canvas.omsTitle') }}</h4>
                  <span class="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-amber-400 font-bold whitespace-nowrap">{{ $t('home.hero.canvas.omsBadge') }}</span>
                </div>
                <p class="text-[9px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">{{ $t('home.hero.canvas.omsDesc') }}</p>
                <div class="hidden sm:flex items-center gap-1.5 mt-2 pt-2 border-t border-zinc-100 text-[10px] text-zinc-600">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  {{ $t('home.hero.canvas.omsPoint') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Module card: POS (bottom-right) -->
        <div class="absolute z-10 hc-float-4 w-[42%] sm:w-[41%]" style="left: 76%; top: 78.5%; transform: translate(-50%, -50%);">
          <div class="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-zinc-200 shadow-lg">
            <div class="flex items-start gap-2 sm:gap-3">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-1.5 flex-wrap">
                  <h4 class="text-xs sm:text-sm font-bold text-zinc-900">{{ $t('home.hero.canvas.posTitle') }}</h4>
                  <span class="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold whitespace-nowrap">{{ $t('home.hero.canvas.posBadge') }}</span>
                </div>
                <p class="text-[9px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">{{ $t('home.hero.canvas.posDesc') }}</p>
                <div class="hidden sm:flex items-center gap-1.5 mt-2 pt-2 border-t border-zinc-100 text-[10px] text-zinc-600">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  {{ $t('home.hero.canvas.posPoint') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer bar -->
      <div class="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-4 text-[11px] sm:text-xs text-zinc-500">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            {{ $t('home.hero.canvas.api') }}
          </span>
          <span class="hidden sm:flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>
            {{ $t('home.hero.canvas.setup') }}
          </span>
        </div>

        <button @click="$emit('open-modal', { type: 'demo', moduleName: 'all' })"
          class="px-3.5 py-2 text-[11px] sm:text-xs font-bold text-zinc-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all flex items-center gap-1.5">
          {{ $t('home.hero.canvas.cta') }}
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['open-modal'])
</script>

<style scoped>
@media (min-width: 1024px) {
  .hc-root { zoom: 0.75; }
}

@keyframes hc-rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes hc-rotate-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
@keyframes hc-flow-dash {
  to { stroke-dashoffset: -40; }
}
@keyframes hc-float-card {
  0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
  50% { transform: translate(-50%, -50%) translateY(-6px); }
}

.hc-anim-rotate-slow { animation: hc-rotate-slow 45s linear infinite; }
.hc-anim-rotate-rev { animation: hc-rotate-reverse 35s linear infinite; }
.hc-anim-flow { stroke-dasharray: 8 8; animation: hc-flow-dash 2.5s linear infinite; }
.hc-float-1 { animation: hc-float-card 5s ease-in-out infinite; }
.hc-float-2 { animation: hc-float-card 6s ease-in-out infinite 1s; }
.hc-float-3 { animation: hc-float-card 5.5s ease-in-out infinite 2s; }
.hc-float-4 { animation: hc-float-card 6.2s ease-in-out infinite 1.5s; }
</style>
