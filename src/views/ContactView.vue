<template>
  <div class="bg-slate-50 min-h-screen py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Column: NAP Info -->
        <div class="lg:col-span-5 space-y-8">
          <div>
            <div class="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Kết Nối Cùng Chuyên Gia
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Chúng Tôi Sẵn Sàng <span class="gradient-text">Đồng Hành Cùng Bạn</span>
            </h1>
            <p class="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Dù bạn là một cửa hàng bán lẻ đơn lẻ hay một chuỗi phân phối đa điểm, đội ngũ chuyên gia của eCor luôn sẵn sàng khảo sát hiện trạng và đề xuất lộ trình số hóa tối ưu nhất.
            </p>
          </div>

          <div class="space-y-4">
            <div class="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-900 text-sm">Hotline Hỗ Trợ 24/7</h3>
                <a href="tel:0978673867" class="text-base font-extrabold text-blue-600 hover:underline">0978 67 38 67</a>
                <p class="text-xs text-slate-500 mt-0.5">Tư vấn giải pháp & Hỗ trợ kỹ thuật trực tiếp</p>
              </div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-900 text-sm">Email Phản Hồi</h3>
                <span class="text-sm font-semibold text-slate-800">contact@ecor.vn</span>
                <p class="text-xs text-slate-500 mt-0.5">Phản hồi trong vòng 15 phút làm việc</p>
              </div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-900 text-sm">Địa Bàn Triển Khai</h3>
                <span class="text-sm font-semibold text-slate-800">Toàn quốc (Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ...)</span>
                <p class="text-xs text-slate-500 mt-0.5">Hỗ trợ kỹ thuật viên lắp đặt thiết bị tại chỗ</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
            <h2 class="text-2xl font-bold text-slate-900 mb-2">Đăng Ký Khảo Sát & Nhận Bản Demo 1:1</h2>
            <p class="text-slate-500 text-xs sm:text-sm mb-6">Điền thông tin bên dưới, chuyên viên eCor sẽ liên hệ chuẩn bị kịch bản demo riêng theo đúng ngành hàng của bạn.</p>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1.5">Họ và tên *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1.5">Số điện thoại *</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1.5">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="email@doanhnghiep.vn"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1.5">Tên doanh nghiệp / Cửa hàng</label>
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Chuỗi thời trang XYZ"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1.5">Phân hệ quan tâm nhất</label>
                <select
                  v-model="form.module"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none bg-white"
                >
                  <option value="Hệ sinh thái toàn diện 8 module">Trọn bộ 8 Module All-in-One</option>
                  <option value="POS Bán hàng tại quầy">POS — Điểm bán hàng</option>
                  <option value="ECOM Web & Sàn TMĐT">ECOM — Web & Sàn TMĐT</option>
                  <option value="WMS Kho vận PDA RFID">WMS — Quản lý kho hàng PDA/RFID</option>
                  <option value="TMS Giao vận & COD">TMS — Quản lý vận chuyển</option>
                  <option value="HRM Nhân sự & Tính lương">HRM — Quản lý nhân sự</option>
                  <option value="Account Kế toán & HĐĐT">Account — Kế toán & Hóa đơn điện tử</option>
                  <option value="Mobile App chuyên biệt">Mobile App — Bộ ba app di động</option>
                  <option value="CRM Chăm sóc khách hàng">CRM — Chăm sóc khách hàng Loyalty</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1.5">Mô tả bài toán hiện tại của bạn</label>
                <textarea
                  v-model="form.message"
                  rows="3"
                  placeholder="Ví dụ: Đang có 3 cửa hàng và 1 kho hàng, muốn đồng bộ tồn kho với Shopee và TikTok Shop..."
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm outline-none resize-none"
                ></textarea>
              </div>

              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Tư Vấn & Demo Miễn Phí' }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const form = ref({
  name: '',
  phone: '',
  email: '',
  company: '',
  module: 'Hệ sinh thái toàn diện 8 module',
  message: ''
})

async function handleSubmit() {
  isSubmitting.value = true
  try {
    const formData = new FormData()
    formData.append('access_key', '39a2af8f-3d80-448e-98a5-482c38bfae27')
    formData.append('subject', 'Khách hàng đăng ký từ trang Liên Hệ eCor')
    formData.append('from_name', 'Website eCor.vn (Vue)')
    formData.append('lead_type', 'Liên hệ tư vấn')
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
      alert('Gửi thông tin thành công! Chuyên viên eCor sẽ liên hệ hỗ trợ bạn trong vòng 15 phút.')
      form.value = { name: '', phone: '', email: '', company: '', module: 'Hệ sinh thái toàn diện 8 module', message: '' }
    } else {
      throw new Error(data.message || 'Lỗi gửi form')
    }
  } catch (error) {
    alert('Chưa gửi được dữ liệu. Vui lòng liên hệ trực tiếp hotline 0978 67 38 67 để được hỗ trợ nhanh nhất.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
