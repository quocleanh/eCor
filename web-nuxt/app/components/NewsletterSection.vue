<template>
  <div class="bg-zinc-900 rounded-3xl shadow-lg p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
    <div class="flex items-center gap-4 max-w-2xl">
      <div class="hidden sm:flex w-14 h-14 rounded-2xl bg-amber-400 flex-shrink-0 items-center justify-center text-zinc-900 shadow">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 w-fit">Bản tin hàng tuần</span>
        <h3 class="text-xl lg:text-2xl font-extrabold text-white">Nhận kinh nghiệm quản lý kho mỗi tuần</h3>
        <p class="text-sm text-zinc-400">Không spam. Chỉ gửi quy trình, mẹo vận hành và bài học thực tế vào mỗi sáng thứ Hai.</p>
      </div>
    </div>
    <div class="w-full md:w-auto flex-1 max-w-md">
      <form class="flex flex-col sm:flex-row gap-2" @submit.prevent="handleSubmit">
        <input
          v-model="email"
          type="email"
          required
          placeholder="Địa chỉ email nhận tin..."
          class="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-zinc-400 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
        <button type="submit" class="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-zinc-900 text-sm font-bold rounded-lg whitespace-nowrap transition-colors">
          Đăng ký
        </button>
      </form>
      <div v-if="sent" class="mt-2 text-center text-amber-400 text-xs">
        Đã đăng ký thành công! Hãy kiểm tra hòm thư của bạn.
      </div>
    </div>
  </div>
</template>

<script setup>
const email = ref('')
const sent = ref(false)
function handleSubmit() {
  sent.value = true
  email.value = ''
  setTimeout(() => { sent.value = false }, 4000)
}
</script>
