<template>
  <Transition name="slide-up">
    <div v-if="isVisible" class="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none">
      <div class="max-w-7xl mx-auto pointer-events-auto">
        <div class="bg-zinc-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div class="flex-1 flex gap-4 items-start">
            <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <div>
              <h3 class="text-white font-semibold text-base mb-1">
                {{ $t('cookie.title') || 'Cài đặt Quyền riêng tư & Cookie' }}
              </h3>
              <p class="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                {{ $t('cookie.desc') || 'Chúng tôi sử dụng cookie để cải thiện trải nghiệm người dùng trên website. Bằng việc tiếp tục sử dụng website, bạn đồng ý với' }} 
                <router-link to="/chinh-sach-bao-mat" class="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
                  {{ $t('cookie.policy') || 'Chính sách bảo mật' }}
                </router-link>
                {{ $t('cookie.and') || 'và' }}
                <router-link to="/dieu-khoan-su-dung" class="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
                  {{ $t('cookie.terms') || 'Điều khoản sử dụng' }}
                </router-link> 
                {{ $t('cookie.suffix') || 'của chúng tôi.' }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button @click="decline" class="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
              {{ $t('cookie.decline') || 'Từ chối' }}
            </button>
            <button @click="accept" class="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-900 font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
              {{ $t('cookie.accept') || 'Đồng ý' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const CONSENT_KEY = 'ecor_cookie_consent'

onMounted(() => {
  setTimeout(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      isVisible.value = true
    }
  }, 1000)
})

const accept = () => {
  localStorage.setItem(CONSENT_KEY, 'accepted')
  isVisible.value = false
}

const decline = () => {
  localStorage.setItem(CONSENT_KEY, 'declined')
  isVisible.value = false
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
