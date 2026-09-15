<template>
  <footer class="bg-slate-900 text-slate-400 py-14 border-t border-slate-800 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
        
        <!-- Brand Info -->
        <div class="space-y-4">
          <router-link to="/" class="inline-block">
            <img src="/ecor-logo.png" alt="Logo eCor" class="h-9 w-auto brightness-0 invert" width="120" height="36" />
          </router-link>
          <p class="text-xs text-slate-400 leading-relaxed">
            eCor là nền tảng SaaS vận hành bán lẻ hợp nhất: kết nối trọn vẹn Bán hàng (POS) – Kho (WMS) – Kế toán trên một nguồn dữ liệu thời gian thực, mở rộng liền mạch khi doanh nghiệp phát triển.
          </p>
          <div class="text-xs text-slate-400 space-y-1 pt-1">
            <p><strong>Hotline:</strong> <a href="tel:0978673867" class="text-blue-400 hover:underline tabular-nums">0978 67 38 67</a></p>
            <p><strong>Email:</strong> contact@ecor.vn</p>
            <p><strong>Website:</strong> https://ecor.vn</p>
          </div>
        </div>

        <!-- 3 Module Lõi -->
        <div>
          <h3 class="text-white font-bold text-xs mb-3 uppercase tracking-wider text-blue-400">3 Trụ Cột Lõi</h3>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/pos" class="hover:text-white transition-colors">POS — Bán hàng quầy & ca kíp</router-link></li>
            <li><router-link to="/wms" class="hover:text-white transition-colors">WMS — Quản lý kho & PDA</router-link></li>
            <li><router-link to="/ke-toan" class="hover:text-white transition-colors">Kế toán — HĐĐT & Sổ sách thuế</router-link></li>
          </ul>
        </div>

        <!-- 5 Module Mở Rộng -->
        <div>
          <h3 class="text-white font-bold text-xs mb-3 uppercase tracking-wider text-slate-300">Hệ Sinh Thái Mở Rộng</h3>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/mo-rong/ecom" class="hover:text-white transition-colors">ECOM — TMĐT & Đa sàn</router-link></li>
            <li><router-link to="/mo-rong/tms" class="hover:text-white transition-colors">TMS — Vận chuyển & COD</router-link></li>
            <li><router-link to="/mo-rong/hrm" class="hover:text-white transition-colors">HRM — Nhân sự & Hoa hồng</router-link></li>
            <li><router-link to="/mo-rong/mobile-app" class="hover:text-white transition-colors">Mobile App — App quản trị & KH</router-link></li>
            <li><router-link to="/mo-rong/crm" class="hover:text-white transition-colors">CRM — Loyalty & Khách hàng 360</router-link></li>
          </ul>
        </div>

        <!-- Thông Tin & SEO Links -->
        <div>
          <h3 class="text-white font-bold text-xs mb-3 uppercase tracking-wider text-slate-300">Thông Tin Khác</h3>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/bang-gia" class="hover:text-white transition-colors">Bảng giá gói</router-link></li>
            <li><router-link to="/ve-chung-toi" class="hover:text-white transition-colors">Về chúng tôi (E-E-A-T)</router-link></li>
            <li><router-link to="/lien-he" class="hover:text-white transition-colors">Liên hệ tư vấn</router-link></li>
            <li><a href="/llms.txt" target="_blank" class="hover:text-white transition-colors">Tài liệu AI Search (llms.txt)</a></li>
            <li><a href="/sitemap.xml" target="_blank" class="hover:text-white transition-colors">Sơ đồ trang (sitemap.xml)</a></li>
          </ul>
        </div>

      </div>

      <!-- Copyright -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>&copy; 2026 eCor SaaS Platform. Tất cả các quyền được bảo lưu.</p>
        <p>Phần mềm quản trị Bán hàng – Kho – Kế toán chuẩn mực cho doanh nghiệp Việt Nam.</p>
      </div>

    </div>
  </footer>
</template>
