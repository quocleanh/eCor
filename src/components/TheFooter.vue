<template>
  <footer class="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
        
        <!-- Brand Info -->
        <div class="col-span-2 space-y-4">
          <router-link to="/" class="inline-block">
            <img src="/ecor-logo.png" alt="Logo eCor" class="h-10 w-auto brightness-0 invert" width="120" height="40" />
          </router-link>
          <p class="text-sm text-slate-400 max-w-sm leading-relaxed">
            eCor là nền tảng SaaS vận hành đa dịch vụ All-in-One: kết nối POS, ECOM, WMS, TMS, HRM, Kế toán HĐĐT, Mobile App và CRM trên một nguồn dữ liệu đồng bộ duy nhất.
          </p>
          <div class="text-xs text-slate-400 space-y-1">
            <p><strong>Hotline:</strong> <a href="tel:0978673867" class="text-blue-400 hover:underline">0978 67 38 67</a></p>
            <p><strong>Email:</strong> contact@ecor.vn</p>
            <p><strong>Website:</strong> https://ecor.vn</p>
          </div>
        </div>

        <!-- 8 Modules Column 1 -->
        <div>
          <h3 class="text-white font-bold text-sm mb-3 uppercase tracking-wider">Hệ Thống Phân Hệ</h3>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/pos" class="hover:text-white transition-colors">POS — Bán hàng tại quầy</router-link></li>
            <li><router-link to="/ecom" class="hover:text-white transition-colors">ECOM — Web & Sàn TMĐT</router-link></li>
            <li><router-link to="/wms" class="hover:text-white transition-colors">WMS — Quản lý kho & PDA</router-link></li>
            <li><router-link to="/tms" class="hover:text-white transition-colors">TMS — Quản lý vận chuyển</router-link></li>
          </ul>
        </div>

        <!-- 8 Modules Column 2 -->
        <div>
          <h3 class="text-white font-bold text-sm mb-3 uppercase tracking-wider">Phân Hệ Mở Rộng</h3>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/hrm" class="hover:text-white transition-colors">HRM — Nhân sự & Tính lương</router-link></li>
            <li><router-link to="/ke-toan" class="hover:text-white transition-colors">Account — Kế toán & HĐĐT</router-link></li>
            <li><router-link to="/mobile-app" class="hover:text-white transition-colors">Mobile App — App di động</router-link></li>
            <li><router-link to="/crm" class="hover:text-white transition-colors">CRM — Chăm sóc khách hàng</router-link></li>
          </ul>
        </div>

        <!-- Solutions & Links -->
        <div>
          <h3 class="text-white font-bold text-sm mb-3 uppercase tracking-wider">Thông Tin & Giải Pháp</h3>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/bang-gia" class="hover:text-white transition-colors">Bảng giá chi tiết</router-link></li>
            <li><router-link to="/ve-chung-toi" class="hover:text-white transition-colors">Về chúng tôi (E-E-A-T)</router-link></li>
            <li><router-link to="/lien-he" class="hover:text-white transition-colors">Liên hệ tư vấn</router-link></li>
            <li><a href="/llms.txt" target="_blank" class="hover:text-white transition-colors">AI Documentation (llms.txt)</a></li>
            <li><a href="/sitemap.xml" target="_blank" class="hover:text-white transition-colors">Sitemap</a></li>
          </ul>
        </div>

      </div>

      <!-- Copyright -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>&copy; 2026 eCor Platform. Tất cả các quyền được bảo lưu.</p>
        <p>Một nền tảng, một nguồn dữ liệu, toàn bộ vận hành.</p>
      </div>

    </div>
  </footer>
</template>
