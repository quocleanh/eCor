// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',

  ssr: true,

  // Ảnh trong public/ được tham chiếu bằng đường dẫn tuyệt đối ("/ecor-logo.png"...)
  // giống hệt bản Vite/Vue cũ. Tắt transformAssetUrls để Vite không cố resolve các
  // đường dẫn này như một import module (gây lỗi "Rollup failed to resolve import").
  vite: {
    vue: {
      template: {
        transformAssetUrls: false,
      },
    },
  },

  runtimeConfig: {
    // Chuỗi kết nối Neon cho kênh kiến thức (/kien-thuc). Đặt biến môi trường DATABASE_URL
    // (hoặc NUXT_DATABASE_URL) trong Cloudflare → Settings → Build. Chỉ dùng lúc build, không lộ ra trình duyệt.
    databaseUrl: process.env.DATABASE_URL || '',
    public: {
      contactNotifyUrl: process.env.NUXT_PUBLIC_CONTACT_NOTIFY_URL || 'https://ecor-contact-notify.anhquoc-apt.workers.dev',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/i18n',
  ],

  css: [
    '~/assets/css/main.css',
  ],

  site: {
    url: 'https://ecor.vn',
  },

  i18n: {
    baseUrl: 'https://ecor.vn',
    defaultLocale: 'vi',
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    langDir: 'locales',
    locales: [
      { code: 'vi', iso: 'vi-VN', language: 'vi-VN', file: 'vi.json', name: 'Tiếng Việt' },
      { code: 'en', iso: 'en-US', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh', iso: 'zh-CN', language: 'zh-CN', file: 'zh.json', name: '简体中文' },
      { code: 'zh-tw', iso: 'zh-TW', language: 'zh-TW', file: 'zh-tw.json', name: '繁體中文' },
    ],
    // Tắt auto-redirect theo ngôn ngữ trình duyệt: trên site tĩnh (SSG), redirect
    // này chạy client-side sau hydrate và có thể đổi nội dung ($t) sang locale
    // phát hiện được trong khi UI chọn ngôn ngữ (TheHeader) vẫn hiển thị 'vi' do
    // đọc route hiện tại trước khi client kịp điều hướng sang /en, /zh...
    // -> gây lệch trạng thái "nội dung tiếng Anh nhưng bộ chọn ngôn ngữ báo VN".
    // Mặc định luôn hiển thị tiếng Việt, người dùng tự chọn ngôn ngữ qua UI.
    detectBrowserLanguage: false,
    // Slug riêng theo từng locale, khớp 1:1 với src/router/routes.js của bản SPA cũ.
    // Tên key = tên file trong app/pages (không kèm .vue), là slug của locale mặc định (vi).
    pages: {
      // Kênh kiến thức chỉ có tiếng Việt
      'kien-thuc/index': { en: false, zh: false, 'zh-tw': false },
      'kien-thuc/[slug]': { en: false, zh: false, 'zh-tw': false },
      'ke-toan': {
        en: '/accounting',
        zh: '/accounting',
        'zh-tw': '/accounting',
      },
      'giai-phap': {
        en: '/solutions',
        zh: '/solutions',
        'zh-tw': '/solutions',
      },
      'giai-phap-nganh-gach': {
        en: '/tiles',
        zh: '/tiles',
        'zh-tw': '/tiles',
      },
      'bang-gia': {
        en: '/pricing',
        zh: '/pricing',
        'zh-tw': '/pricing',
      },
      'khach-hang': {
        en: '/customers',
        zh: '/customers',
        'zh-tw': '/customers',
      },
      'tai-nguyen': {
        en: '/resources',
        zh: '/resources',
        'zh-tw': '/resources',
      },
      'lien-he': {
        en: '/contact',
        zh: '/contact',
        'zh-tw': '/contact',
      },
      'dang-nhap': {
        en: '/login',
        zh: '/login',
        'zh-tw': '/login',
      },
      'dang-ky': {
        en: '/register',
        zh: '/register',
        'zh-tw': '/register',
      },
      'chinh-sach-bao-mat': {
        en: '/privacy-policy',
        zh: '/privacy-policy',
        'zh-tw': '/privacy-policy',
      },
      'dieu-khoan-su-dung': {
        en: '/terms-of-use',
        zh: '/terms-of-use',
        'zh-tw': '/terms-of-use',
      },
      'cam-ket-sla': {
        en: '/sla-commitment',
        zh: '/sla-commitment',
        'zh-tw': '/sla-commitment',
      },
    },
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-R12ZDPKS0D', async: true },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-R12ZDPKS0D');`,
        },
      ],
    },
  },

  nitro: {
    // Site tĩnh: ép preset static. Trên Cloudflare build, Nitro tự nhận preset "cloudflare-module"
    // và sinh wrangler.json trỏ tới Worker index.mjs (không có với nuxt generate) → `wrangler deploy` lỗi.
    // Với static, wrangler.toml (assets = .output/public) được dùng như cũ.
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false,
      // /kien-thuc: trang danh sách dẫn link tới từng bài → crawler tự prerender hết các bài
      routes: ['/', '/kien-thuc'],
      // Xuất "wms.html" thay vì "wms/index.html" để URL không có dấu "/" cuối
      // khớp đúng với canonical/OG (không trailing slash) và tránh việc
      // Cloudflare tự 307-redirect "/wms" -> "/wms/" (lệch với canonical).
      autoSubfolderIndex: false,
    },
  },

  // /dang-nhap, /dang-ky chỉ redirect ra dashboard.ecor.vn, không có nội dung
  // SEO thật -> loại khỏi sitemap và đánh noindex, nhưng vẫn giữ trang thật
  // (không 404) để không vỡ trải nghiệm người dùng bấm "Đăng nhập/Đăng ký".
  routeRules: {
    '/dang-nhap': { robots: false, sitemap: false },
    '/dang-ky': { robots: false, sitemap: false },
    '/en/login': { robots: false, sitemap: false },
    '/en/register': { robots: false, sitemap: false },
    '/zh/login': { robots: false, sitemap: false },
    '/zh/register': { robots: false, sitemap: false },
    '/zh-tw/login': { robots: false, sitemap: false },
    '/zh-tw/register': { robots: false, sitemap: false },
  },

  robots: {
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
      },
      { userAgent: ['GPTBot'], allow: ['/'] },
      { userAgent: ['ClaudeBot'], allow: ['/'] },
      { userAgent: ['PerplexityBot'], allow: ['/'] },
      { userAgent: ['Google-Extended'], allow: ['/'] },
      { userAgent: ['Bytespider'], allow: ['/'] },
    ],
    // Site đa ngôn ngữ nên @nuxtjs/sitemap tự tách thành sitemap index +
    // 1 file con theo từng locale (/sitemap.xml chỉ redirect sang file này).
    sitemap: ['https://ecor.vn/sitemap_index.xml'],
  },

  sitemap: {
    // Thêm URL các bài kiến thức (đọc từ Neon lúc build)
    sources: ['/api/sitemap-kien-thuc'],
    exclude: ['/dang-nhap', '/dang-ky', '/en/login', '/en/register', '/zh/login', '/zh/register', '/zh-tw/login', '/zh-tw/register'],
  },
})
