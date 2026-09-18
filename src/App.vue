<template>
  <div class="min-h-screen flex flex-col bg-zinc-50 text-zinc-800 font-sans antialiased selection:bg-amber-400 selection:text-zinc-900 font-bold">
    <TheHeader @open-modal="handleOpenModal" />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" @open-modal="handleOpenModal" />
        </transition>
      </router-view>
    </main>

    <TheFooter />

    <CookieConsent />

    <ContactModal
      :is-open="isModalOpen"
      :initial-type="modalType"
      :initial-module="modalModule"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import CookieConsent from './components/CookieConsent.vue'
import ContactModal from '@/components/ContactModal.vue'

const isModalOpen = ref(false)
const modalType = ref('demo')
const modalModule = ref('all')

function handleOpenModal({ type = 'demo', moduleName = 'all' } = {}) {
  modalType.value = type
  modalModule.value = moduleName
  isModalOpen.value = true
}
</script>
