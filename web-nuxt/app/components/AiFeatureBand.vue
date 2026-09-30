<template>
  <section class="py-16 bg-[#fafcff]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl bg-zinc-900 p-8 sm:p-10 lg:p-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div class="lg:col-span-4 space-y-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {{ $t(`${ns}.ai.badge`) }}
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {{ $t(`${ns}.ai.title`) }}
            </h2>
            <p class="text-sm text-zinc-400 leading-relaxed">
              {{ $t(`${ns}.ai.desc`) }}
            </p>
          </div>
          <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div v-for="n in 3" :key="n" class="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div class="w-9 h-9 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center mb-3">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-sm font-bold text-white leading-snug">{{ $t(`${ns}.ai.f${n}Title`) }}</h3>
              <p class="mt-1.5 text-xs text-zinc-400 leading-relaxed">{{ $t(`${ns}.ai.f${n}Desc`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  ns: { type: String, required: true },
})
</script>
