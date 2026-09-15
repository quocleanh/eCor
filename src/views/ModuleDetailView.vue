<template>
  <div v-if="currentModule" class="bg-slate-50 min-h-screen">
    
    <!-- BLOCK 1: HERO RIÊNG CỦA MODULE -->
    <section class="relative py-16 md:py-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {{ currentModule.badge }} — {{ currentModule.code }}
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {{ currentModule.tagline }}
            </h1>
            <p class="text-lg text-slate-600 leading-relaxed">
              {{ currentModule.heroDesc }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                @click="$emit('open-modal', { type: 'module', moduleName: currentModule.title })"
                class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                Trải Nghiệm {{ currentModule.code }} Miễn Phí 14 Ngày
              </button>
              <a
                href="#tinh-nang"
                class="glass border border-slate-300 text-slate-700 hover:text-blue-600 px-7 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                Xem Tính Năng Chi Tiết &darr;
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 space-y-4 hover-lift">
              <div class="flex items-center justify-between border-b pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">{{ currentModule.icon }}</span>
                  <span class="font-bold text-slate-900 text-sm">{{ currentModule.title }}</span>
                </div>
                <span class="text-xs bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">Sẵn Sàng Triển Khai</span>
              </div>
              <div class="space-y-2 text-xs">
                <div
                  v-for="(feat, idx) in currentModule.features.slice(0, 3)"
                  :key="idx"
                  class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5"
                >
                  <span class="text-blue-600 font-bold">✓</span>
                  <div>
                    <strong class="text-slate-900 block">{{ feat.title }}</strong>
                    <p class="text-slate-500 text-[11px] mt-0.5 line-clamp-1">{{ feat.desc }}</p>
                  </div>
                </div>
              </div>
              <div class="p-3 bg-blue-50 rounded-xl text-blue-900 text-xs font-bold text-center">
                Đồng bộ dữ liệu thời gian thực với toàn bộ 7 phân hệ còn lại của eCor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCK 2: NỖI ĐAU KHÁCH HÀNG GẶP PHẢI -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Những Khó Khăn Thường Gặp Khi Thiếu {{ currentModule.code }} Chuyên Sâu
          </h2>
          <p class="text-slate-600 mt-2 text-sm sm:text-base">Các bài toán thực tế mà các nhà bán lẻ và quản lý đang phải đối mặt mỗi ngày.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(pain, idx) in currentModule.pains"
            :key="idx"
            class="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-3"
          >
            <div class="text-2xl">{{ pain.icon }}</div>
            <h3 class="font-bold text-rose-900 text-base">{{ pain.title }}</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ pain.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCK 3: TÍNH NĂNG CỐT LÕI (6 FEATURES) -->
    <section id="tinh-nang" class="py-16 bg-slate-50 border-y border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Năng Lực Vượt Trội Của Phân Hệ eCor {{ currentModule.code }}
          </h2>
          <p class="text-slate-600 mt-2 text-sm sm:text-base">Thiết kế tối ưu cho tốc độ và hiệu suất vận hành chuẩn xác.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(feat, idx) in currentModule.features"
            :key="idx"
            class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover-lift"
          >
            <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              {{ feat.num }}
            </div>
            <h3 class="font-bold text-slate-900 text-base">{{ feat.title }}</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ feat.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCK 4: LỢI ÍCH & SỐ LIỆU ĐO LƯỜNG ĐƯỢC -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-blue-900 to-indigo-900 text-white shadow-2xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold">Hiệu Quả Đo Lường Thực Tế</h2>
            <p class="text-blue-200 text-sm mt-2">Dữ liệu tổng hợp từ các doanh nghiệp đã triển khai phân hệ {{ currentModule.code }}.</p>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div
              v-for="(met, idx) in currentModule.metrics"
              :key="idx"
              class="p-4 rounded-xl bg-white/10 backdrop-blur-sm"
            >
              <div class="text-3xl sm:text-4xl font-extrabold text-cyan-400">{{ met.value }}</div>
              <div class="text-xs sm:text-sm text-blue-100 mt-1">{{ met.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCK 5: TÍCH HỢP HỆ SINH THÁI (INTERNAL LINKING) -->
    <section class="py-16 bg-slate-50 border-t border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Kết Nối Tự Động Trong Hệ Sinh Thái eCor
          </h2>
          <p class="text-slate-600 mt-2 text-sm">{{ currentModule.code }} tương tác 2 chiều mượt mà với các phân hệ khác.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <router-link
            v-for="(integ, idx) in currentModule.integrations"
            :key="idx"
            :to="`/${integ.target}`"
            class="p-6 rounded-2xl bg-white border border-slate-200/90 hover-lift group block"
          >
            <div class="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">&rarr; {{ integ.label }}</div>
            <h3 class="font-bold text-slate-900 group-hover:text-blue-600 mb-2">{{ integ.desc.split(':')[0] || integ.label }}</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              {{ integ.desc }}
            </p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- BLOCK 6: FAQ MODULE & BANNER CTA -->
    <section class="py-16 bg-white border-t border-slate-200/80">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-8">
          Giải Đáp Thắc Mắc Về eCor {{ currentModule.code }}
        </h2>
        
        <FaqAccordion :faqs="currentModule.faqs" class="mb-12" />

        <!-- Banner CTA -->
        <div class="p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center space-y-4 shadow-xl">
          <h3 class="text-2xl font-bold">Nâng Tầm Vận Hành Doanh Nghiệp Cùng eCor {{ currentModule.code }}</h3>
          <p class="text-blue-100 text-sm max-w-xl mx-auto">Chuyên viên eCor sẽ tư vấn thiết lập bản thử nghiệm phù hợp chính xác với mô hình của bạn.</p>
          <button
            @click="$emit('open-modal', { type: 'module', moduleName: currentModule.title })"
            class="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-slate-100 transition-all cursor-pointer"
          >
            Đăng Ký Demo {{ currentModule.code }} Ngay
          </button>
        </div>
      </div>
    </section>

  </div>
  
  <div v-else class="text-center py-32">
    <h2 class="text-2xl font-bold text-slate-700">Không tìm thấy phân hệ này</h2>
    <router-link to="/" class="mt-4 inline-block text-blue-600 font-bold">Quay lại Trang Chủ</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { modulesData } from '@/data/modulesData'
import FaqAccordion from '@/components/FaqAccordion.vue'

defineEmits(['open-modal'])

const route = useRoute()

const currentModule = computed(() => {
  const slug = route.params.slug || route.path.replace(/^\//, '')
  return modulesData[slug] || null
})
</script>
