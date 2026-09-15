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
          <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Khám Phá Sức Mạnh eCor</span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">{{ titleText }}</h3>
        </div>
        <button @click="close" class="text-slate-400 hover:text-slate-700 p-2 rounded-lg" aria-label="Đóng modal">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4 text-left">
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Họ và tên *</label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Ví dụ: Nguyễn Văn A"
            class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none transition-all"
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
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="email@congty.com"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none transition-all"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tên cửa hàng/Doanh nghiệp</label>
            <input
              v-model="form.company"
              type="text"
              placeholder="Tên shop hoặc công ty"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phân hệ quan tâm</label>
            <select
              v-model="form.module"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none transition-all bg-white"
            >
              <option value="Hệ sinh thái toàn diện 8 module">Trọn bộ 8 Module</option>
              <option value="POS - Điểm bán lẻ">POS — Bán hàng tại quầy</option>
              <option value="ECOM - Web & Sàn">ECOM — Web & Sàn TMĐT</option>
              <option value="WMS - Kho vận PDA/RFID">WMS — Quản lý kho & PDA</option>
              <option value="TMS - Giao hàng & COD">TMS — Quản lý vận chuyển</option>
              <option value="HRM - Quản lý nhân sự">HRM — Nhân sự & Tính lương</option>
              <option value="Account - Kế toán & HĐĐT">Account — Kế toán & HĐĐT</option>
              <option value="Mobile App chuyên biệt">Mobile App — App di động</option>
              <option value="CRM - Khách hàng & Loyalty">CRM — Chăm sóc khách hàng</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Mô tả nhu cầu cụ thể</label>
          <textarea
            v-model="form.message"
            rows="2"
            placeholder="Ví dụ: Đang có 3 cửa hàng và 1 kho hàng trung tâm..."
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none transition-all resize-none"
          ></textarea>
        </div>

        <div class="pt-2 flex gap-3">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Demo Ngay' }}</span>
          </button>
          <button
            type="button"
            @click="close"
            class="px-5 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  initialType: { type: String, default: 'demo' },
  initialModule: { type: String, default: 'Hệ sinh thái toàn diện 8 module' }
})

const emit = defineEmits(['close', 'submitted'])

const isSubmitting = ref(false)
const form = ref({
  name: '',
  phone: '',
  email: '',
  company: '',
  module: 'Hệ sinh thái toàn diện 8 module',
  message: ''
})

watch(() => props.initialModule, (val) => {
  if (val) form.value.module = val
})

const titleText = computed(() => {
  if (props.initialType === 'consult') return 'Nhận Tư Vấn Chuyên Sâu 1:1'
  if (props.initialType === 'pricing') return 'Nhận Báo Giá Theo Quy Mô'
  if (props.initialModule && props.initialModule !== 'Hệ sinh thái toàn diện 8 module') {
    return `Đăng Ký Demo ${props.initialModule}`
  }
  return 'Đăng Ký Demo Nền Tảng eCor'
})

function close() {
  emit('close')
}

async function handleSubmit() {
  isSubmitting.value = true
  try {
    const formData = new FormData()
    formData.append('access_key', '39a2af8f-3d80-448e-98a5-482c38bfae27')
    formData.append('subject', `Khách hàng đăng ký ${titleText.value}`)
    formData.append('from_name', 'Website eCor.vn (Vue)')
    formData.append('lead_type', titleText.value)
    formData.append('page_url', window.location.href)
    formData.append('name', form.value.name)
    formData.append('phone', form.value.phone)
    formData.append('email', form.value.email)
    formData.append('company', form.value.company)
    formData.append('selected_module', form.value.module)
    formData.append('message', form.value.message)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    const data = await response.json().catch(() => ({}))

    if (response.ok && data.success) {
      alert('Đăng ký thành công! Chuyên viên eCor sẽ liên hệ hỗ trợ bạn trong vòng 15 phút.')
      form.value = { name: '', phone: '', email: '', company: '', module: 'Hệ sinh thái toàn diện 8 module', message: '' }
      emit('submitted')
      close()
    } else {
      throw new Error(data.message || 'Lỗi gửi form')
    }
  } catch (error) {
    alert('Chưa gửi được dữ liệu. Vui lòng liên hệ trực tiếp hotline 0978 67 38 67 để được hỗ trợ nhanh nhất.')
  } finally {
    isSubmitting.value = false
  }
}

function handleKeydown(e) {
  if (e.key === 'Escape' && props.isOpen) close()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>
