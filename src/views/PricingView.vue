<template>
  <div class="bg-slate-50 min-h-screen py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          Chính Sách Giá Linh Hoạt
        </div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Đầu Tư Thông Minh — <span class="gradient-text">Tối Ưu Từng Đồng Chi Phí</span>
        </h1>
        <p class="text-slate-600 mt-4 text-base sm:text-lg">
          Lựa chọn gói giải pháp toàn diện theo quy mô kinh doanh hoặc chỉ đăng ký đúng những module bạn cần sử dụng.
        </p>
      </div>

      <!-- PHẦN 1: GÓI QUY MÔ -->
      <h2 class="text-xl font-bold text-slate-900 mb-6 text-center uppercase tracking-wider text-xs text-blue-600">
        1. Gói Trọn Gói Theo Quy Mô Doanh Nghiệp
      </h2>

      <div class="grid lg:grid-cols-3 gap-8 mb-20">
        <div
          v-for="plan in pricingPlans"
          :key="plan.id"
          class="bg-white rounded-3xl p-8 border shadow-sm hover-lift flex flex-col justify-between relative"
          :class="plan.isPopular ? 'border-2 border-blue-600 shadow-xl' : 'border-slate-200/90'"
        >
          <div
            v-if="plan.isPopular"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md"
          >
            Được Tin Dùng Nhiều Nhất
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-bold text-slate-900">{{ plan.name }}</h3>
            <p class="text-xs text-slate-500">{{ plan.target }}</p>
            <div class="py-3 border-y border-slate-100">
              <span class="text-3xl font-extrabold" :class="plan.isPopular ? 'text-blue-600' : 'text-slate-900'">
                {{ plan.price }}
              </span>
              <span class="text-xs text-slate-500">{{ plan.period }}</span>
            </div>
            <ul class="text-xs text-slate-600 space-y-2.5">
              <li v-for="(feat, idx) in plan.features" :key="idx" class="flex items-center gap-2">
                <span class="text-blue-600 font-bold">✓</span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-8">
            <button
              @click="$emit('open-modal', { type: 'pricing', moduleName: plan.name })"
              class="w-full py-3.5 rounded-xl font-bold text-sm transition-all"
              :class="plan.isPopular
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg hover:from-blue-700 hover:to-cyan-700'
                : 'border-2 border-slate-800 text-slate-800 hover:bg-slate-50'"
            >
              {{ plan.btnText }}
            </button>
          </div>
        </div>
      </div>

      <!-- PHẦN 2: BẢNG MUA LẺ MODULE -->
      <div class="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-16">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">2. Đăng Ký Từng Phân Hệ Riêng Lẻ</h2>
          <p class="text-slate-600 text-sm mt-2">Chỉ trả phí cho những tính năng bạn thực sự cần.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div
            v-for="mod in standaloneModules"
            :key="mod.code"
            class="p-4 rounded-2xl bg-slate-50 border space-y-2 hover-lift"
          >
            <div class="font-bold text-blue-700">{{ mod.name }}</div>
            <div class="text-lg font-extrabold text-slate-900">{{ mod.price }} <span class="text-xs font-normal text-slate-500">/tháng</span></div>
            <p class="text-xs text-slate-500">{{ mod.desc }}</p>
          </div>
        </div>

        <div class="mt-8 text-center">
          <button
            @click="$emit('open-modal', { type: 'pricing', moduleName: 'Tư vấn module lẻ' })"
            class="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Tư Vấn Ghép Gói Theo Nhu Cầu
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { pricingPlans, standaloneModules } from '@/data/pricingData'

defineEmits(['open-modal'])
</script>
