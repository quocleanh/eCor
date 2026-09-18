<template>
  <div class="space-y-4">
    <details
      v-for="(item, idx) in faqs"
      :key="idx"
      class="bg-white border border-zinc-200/80 rounded-2xl p-5 group shadow-sm transition-all"
      :open="idx === 0"
    >
      <summary class="flex items-center justify-between font-bold text-zinc-900 cursor-pointer list-none text-base">
        <span>{{ item.q }}</span>
        <span class="faq-icon text-amber-600 transition-transform font-bold">&darr;</span>
      </summary>
      <div class="text-zinc-600 text-sm mt-3 pt-3 border-t border-zinc-100 leading-relaxed">
        {{ item.a }}
      </div>
    </details>
  </div>
</template>

<script setup>
defineProps({
  faqs: {
    type: Array,
    required: true
  }
})
</script>
