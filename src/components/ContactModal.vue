<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all"
    @click.self="close"
  >
    <div
      class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 transform transition-all scale-100 opacity-100"
    >
      <div class="flex items-center justify-between mb-5">
        <div>
          <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Khám Phá Sức Mạnh eCor</span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">{{ titleText }}</h3>
        </div>
        <button @click="close" class="text-slate-400 hover:text-slate-700 p-2 rounded-lg" aria-label="Đóng modal">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div v-if="submitted" class="text-center py-8">
        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 class="text-xl font-bold text-slate-900 mb-2">Đăng Ký Thành Công!</h4>
        <p class="text-sm text-slate-600 mb-6">
          Chuyên viên giải pháp eCor sẽ liên hệ trực tiếp trong vòng <strong>10 phút</strong> để tư vấn và kích hoạt bản quyền demo miễn phí cho bạn.
        </p>
        <button
          @click="close"
          class="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm hover:bg-sky-700 transition-colors"
        >
          Đóng cửa sổ
        </button>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-4 text-left">
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Họ và tên *</label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Ví dụ: Nguyễn Văn A"
            class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-all"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Số điện thoại *</label>
            <input
              v-model="form.phone"
              type="tel"
              required
              placeholder="09xx xxx xxx"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email công việc</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="email@congty.com"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-all"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tên doanh nghiệp</label>
            <input
              v-model="form.company"
              type="text"
              placeholder="Tên shop hoặc công ty"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Giải pháp quan tâm</label>
            <select
              v-model="form.module"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-all bg-white"
            >
              <option value="Hệ thống ecor WMS - Quản lý kho thông minh">ecor WMS (Quản lý kho)</option>
              <option value="Hệ thống ecor TMS - Điều phối vận tải">ecor TMS (Vận tải & Đội xe)</option>
              <option value="ecor POS - Quản lý bán lẻ đa điểm">ecor POS (Bán hàng đa chuỗi)</option>
              <option value="Omnichannel Hub & Đồng bộ sàn">Omnichannel (Đa kênh E-com)</option>
              <option value="Trọn gói giải pháp Hợp nhất chuỗi cung ứng">Trọn gói Chuỗi Cung Ứng</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Quy mô hoặc yêu cầu cụ thể</label>
          <textarea
            v-model="form.message"
            rows="2"
            placeholder="Ví dụ: Đang có 3 cửa hàng, 1 kho tổng 2000m² và 10 xe tải vận chuyển..."
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-all resize-none"
          ></textarea>
        </div>

        <div class="pt-2 flex gap-3">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="flex-1 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu & Kích Hoạt Bản Demo Ngay' }}</span>
          </button>
        </div>

        <div class="text-[11px] text-slate-400 text-center flex items-center justify-center gap-4 pt-1">
          <span class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Bảo mật chuẩn ISO 27001
          </span>
          <span class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            14 ngày dùng thử miễn phí
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  initialType: {
    type: String,
    default: 'demo'
  },
  initialModule: {
    type: String,
    default: 'Hệ sinh thái toàn diện'
  }
})

const emit = defineEmits(['close'])

const isSubmitting = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  company: '',
  module: props.initialModule,
  message: ''
})

watch(() => props.initialModule, (newVal) => {
  if (newVal) form.module = newVal
})

watch(() => props.isOpen, (val) => {
  if (val) submitted.value = false
})

const titleText = computed(() => {
  return props.initialType === 'pricing' ? 'Nhận Báo Giá Chi Tiết' : 'Đăng Ký Tư Vấn & Trải Nghiệm Demo'
})

function close() {
  emit('close')
}

async function handleSubmit() {
  isSubmitting.value = true
  // Mock API call
  await new Promise(resolve => setTimeout(resolve, 800))
  isSubmitting.value = false
  submitted.value = true
}
</script>
