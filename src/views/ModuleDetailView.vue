<template>
  <div v-if="currentModule" class="bg-white min-h-screen">
    
    <!-- 1. Breadcrumbs tối giản & Header riêng của Module -->
    <div class="border-b border-slate-200 bg-slate-50/70 py-4">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <router-link to="/" class="hover:text-blue-700">Trang chủ</router-link>
          <span>/</span>
          <span v-if="isCoreModule" class="text-blue-700 font-semibold">3 Trụ Cột Vận Hành Lõi</span>
          <span v-else class="text-slate-600">Hệ Sinh Thái Mở Rộng</span>
          <span>/</span>
          <span class="text-slate-900 font-bold">{{ currentModule.title }}</span>
        </nav>
      </div>
    </div>

    <!-- 2. Hero Section Của Module -->
    <section class="py-14 md:py-20 border-b border-slate-200 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4"
               :class="isCoreModule ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'">
            {{ isCoreModule ? 'Module Lõi Trọng Tâm' : 'Module Mở Rộng' }} — {{ currentModule.code }}
          </div>

          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {{ currentModule.tagline }}
          </h1>

          <p class="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            {{ currentModule.heroDesc }}
          </p>

          <div class="flex flex-wrap items-center gap-3">
            <button @click="openModal" class="px-6 py-3 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors">
              Đăng ký tư vấn demo {{ currentModule.code }}
            </button>
            <router-link to="/bang-gia" class="px-5 py-3 text-sm font-semibold text-slate-700 hover:text-blue-700 bg-white border border-slate-300 rounded-lg transition-colors">
              Xem báo giá chi tiết
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- NẾU LÀ MODULE LÕI (POS, WMS, Kế toán) -> TEMPLATE ĐẦY ĐỦ CHUYÊN SÂU -->
    <div v-if="isCoreModule">
      <!-- 3. BÀI TOÁN THỰC TẾ & NỖI ĐAU CỦA CỬA HÀNG -->
      <section class="py-14 bg-slate-50 border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-10">
            <div class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Thực Trạng Vận Hành</div>
            <h2 class="text-2xl font-bold text-slate-900">Các Bài Toán Nút Thắt eCor {{ currentModule.code }} Giải Quyết</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div v-for="(pain, idx) in currentModule.pains" :key="idx" class="p-5 rounded-xl bg-white border border-slate-200">
              <div class="text-2xl mb-3">{{ pain.icon }}</div>
              <h3 class="text-sm font-bold text-slate-900 mb-2">{{ pain.title }}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">{{ pain.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. TÍNH NĂNG CHI TIẾT CỦA MODULE LÕI -->
      <section class="py-16 bg-white border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-12">
            <div class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Nghiệp Vụ Thực Chiến</div>
            <h2 class="text-2xl font-bold text-slate-900">Tính Năng Cốt Lõi Được Xây Dựng Cho Người Vận Hành</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(feat, idx) in currentModule.features" :key="idx" class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-blue-300 transition-colors">
              <h3 class="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                {{ feat.title }}
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">{{ feat.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. VÒNG KHÉP KÍN DỮ LIỆU VỚI 2 MODULE LÕI CÒN LẠI -->
      <section class="py-16 bg-blue-50/60 border-b border-blue-200/60">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-8">
            <div class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Vòng Khép Kín Dữ Liệu</div>
            <h2 class="text-2xl font-bold text-slate-900">Cách {{ currentModule.code }} Đồng Bộ Liền Mạch</h2>
            <p class="text-xs text-slate-600 mt-2">
              Không cần xuất file trung gian. Một thao tác trên {{ currentModule.code }} lập tức kích hoạt phản hồi tức thì trên các phân hệ còn lại.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div v-for="(integ, idx) in currentModule.integrations" :key="idx" class="p-5 rounded-xl bg-white border border-blue-200">
              <div class="text-xs font-bold text-blue-700 mb-1">&rarr; {{ integ.label }}</div>
              <h3 class="text-sm font-bold text-slate-900 mb-2">{{ integ.desc.split(':')[0] || integ.label }}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">{{ integ.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- NẾU LÀ MODULE MỞ RỘNG (ECOM, TMS, HRM, Mobile App, CRM) -> TEMPLATE RÚT GỌN GỌN GÀNG -->
    <div v-else>
      <!-- 3. TÍNH NĂNG CHÍNH RÚT GỌN -->
      <section class="py-14 bg-slate-50 border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-8">
            <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Tính Năng Chính</div>
            <h2 class="text-2xl font-bold text-slate-900">Năng Lực Mở Rộng Của Phân Hệ {{ currentModule.code }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div v-for="(feat, idx) in currentModule.features.slice(0, 4)" :key="idx" class="p-5 rounded-xl bg-white border border-slate-200">
              <h3 class="text-sm font-bold text-slate-900 mb-2">{{ feat.title }}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">{{ feat.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. KHỐI TÍCH HỢP VỚI 3 MODULE LÕI -->
      <section class="py-12 bg-white border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="p-6 rounded-xl bg-slate-50 border border-slate-200 max-w-3xl">
            <h3 class="text-sm font-bold text-blue-700 mb-2">Tích hợp tự động vào 3 trụ cột lõi (POS - WMS - Kế toán)</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Mọi dữ liệu từ phân hệ {{ currentModule.code }} được đẩy thẳng về kho trung tâm WMS, quầy thu ngân POS và sổ sách kế toán tài chính. Doanh nghiệp không cần cấu hình API phức tạp hay quản lý hai hệ thống riêng biệt.
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- 6. FAQ CHUYÊN BIỆT & CTA CUỐI TRANG -->
    <section class="py-16 bg-white border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl font-bold text-slate-900 mb-6 text-center">Câu Hỏi Thường Gặp Về eCor {{ currentModule.code }}</h2>
        <FaqAccordion :faqs="currentModule.faqs" class="mb-12" />

        <div class="p-8 rounded-2xl bg-slate-900 text-white text-center">
          <h3 class="text-xl font-bold mb-2">Sẵn Sàng Triển Khai {{ currentModule.code }} Cho Cửa Hàng Của Bạn?</h3>
          <p class="text-xs text-slate-400 max-w-lg mx-auto mb-6">
            Đội ngũ chuyên gia eCor sẵn sàng khảo sát bài toán thực tế và thiết lập dữ liệu mẫu ngay trong ngày.
          </p>
          <button @click="openModal" class="px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Đăng ký tư vấn trực tiếp
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

const route = useRoute()

const currentModule = computed(() => {
  // Chuẩn hóa path: loại bỏ slash đầu và tiền tố mo-rong/ nếu có
  const cleanPath = route.path.replace(/^\//, '').replace(/^mo-rong\//, '')
  const slug = route.params.slug || cleanPath
  
  // Mapping đặc thù cho kế toán/account
  if (slug === 'ke-toan' || slug === 'account') {
    return modulesData['ke-toan'] || modulesData['account'] || null
  }
  
  return modulesData[slug] || null
})

const isCoreModule = computed(() => {
  if (!currentModule.value) return false
  const code = (currentModule.value.code || '').toUpperCase()
  return code === 'POS' || code === 'WMS' || code === 'ACCOUNT' || currentModule.value.slug === 'ke-toan' || currentModule.value.slug === 'pos' || currentModule.value.slug === 'wms'
})

function openModal() {
  window.dispatchEvent(new CustomEvent('open-demo-modal'))
}
</script>
