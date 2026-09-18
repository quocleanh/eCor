<template>
  <div v-if="currentSolution" class="bg-zinc-50 min-h-screen py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- HERO -->
      <div class="max-w-4xl mx-auto text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          {{ currentSolution.badge }}
        </div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
          {{ currentSolution.title }}
        </h1>
        <p class="text-xl font-medium text-amber-600">
          {{ currentSolution.tagline }}
        </p>
        <p class="text-zinc-600 text-base sm:text-lg leading-relaxed pt-2">
          {{ currentSolution.summary }}
        </p>
      </div>

      <!-- CHALLENGES -->
      <div class="mb-20">
        <h2 class="text-2xl font-bold text-zinc-900 mb-8 text-center">Những Rào Cản Lớn Khi Vận Hành Trong Ngành</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(chal, idx) in currentSolution.challenges"
            :key="idx"
            class="bg-white p-6 rounded-3xl border border-zinc-200/90 shadow-sm space-y-3 hover-lift"
          >
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              0{{ idx + 1 }}
            </div>
            <h3 class="font-bold text-zinc-900 text-lg">{{ chal.title }}</h3>
            <p class="text-zinc-600 text-sm leading-relaxed">{{ chal.desc }}</p>
          </div>
        </div>
      </div>

      <!-- RECOMMENDED MODULES ARCHITECTURE -->
      <div class="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/90 shadow-lg mb-20">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-zinc-900">Kiến Trúc Phân Hệ eCor May Đo Cho Ngành</h2>
          <p class="text-zinc-600 text-sm mt-2">Sự kết hợp hoàn hảo giữa các module giải quyết trọn vẹn chuỗi giá trị.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(mod, idx) in currentSolution.modulesRecommended"
            :key="idx"
            class="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 hover-lift"
          >
            <div class="text-xs font-bold text-amber-600 uppercase tracking-wider">Phân hệ {{ mod.code }}</div>
            <h3 class="font-bold text-zinc-900 text-base">{{ mod.name }}</h3>
            <p class="text-xs text-zinc-600 leading-relaxed">{{ mod.desc }}</p>
          </div>
        </div>
      </div>

      <!-- CASE STUDY -->
      <div class="bg-gradient-to-br from-amber-900 via-zinc-900 to-amber-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-16">
        <div class="max-w-3xl mx-auto text-center space-y-4">
          <span class="bg-amber-500/30 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Case Study Thực Tế</span>
          <h3 class="text-2xl sm:text-3xl font-bold">{{ currentSolution.caseStudy.brand }}</h3>
          <p class="text-amber-100 text-base leading-relaxed italic">
            "{{ currentSolution.caseStudy.result }}"
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center space-y-4">
        <button
          @click="$emit('open-modal', { type: 'consult', moduleName: currentSolution.title })"
          class="bg-gradient-to-r from-amber-600 to-amber-600 text-white font-bold px-9 py-4 rounded-xl text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer"
        >
          Nhận Tư Vấn Triển Khai Cho {{ currentSolution.shortName }}
        </button>
      </div>

    </div>
  </div>

  <div v-else class="text-center py-32">
    <h2 class="text-2xl font-bold text-zinc-700">Không tìm thấy giải pháp này</h2>
    <router-link to="/" class="mt-4 inline-block text-amber-600 font-bold">Quay lại Trang Chủ</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { solutionsData } from '@/data/solutionsData'

defineEmits(['open-modal'])

const route = useRoute()

const currentSolution = computed(() => {
  const slug = route.params.slug
  return solutionsData[slug] || null
})
</script>
