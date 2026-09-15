<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
    <TheHeader @open-modal="handleOpenModal" />

    <main class="flex-grow">
      <router-view @open-modal="handleOpenModal" />
    </main>

    <TheFooter />

    <ContactModal
      :is-open="isModalOpen"
      :initial-type="modalType"
      :initial-module="modalModule"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ContactModal from '@/components/ContactModal.vue'

const isModalOpen = ref(false)
const modalType = ref('demo')
const modalModule = ref('Hệ sinh thái toàn diện 8 module')

function handleOpenModal({ type = 'demo', moduleName = 'Hệ sinh thái toàn diện 8 module' } = {}) {
  modalType.value = type
  modalModule.value = moduleName
  isModalOpen.value = true
}
</script>
