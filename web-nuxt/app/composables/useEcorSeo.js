const OG_LOCALE_MAP = {
  vi: 'vi_VN',
  en: 'en_US',
  zh: 'zh_CN',
  'zh-tw': 'zh_TW',
}

const SITE_URL = 'https://ecor.vn'
// Ảnh OG chung (banner "Hệ Sinh Thái Giải Pháp Số Hóa") cho các trang chưa
// có ảnh riêng theo nhóm sản phẩm (home/wms/tms/account/tiles đã có ảnh riêng).
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/og-general.jpg`

// Meta SEO chuẩn cho từng trang: canonical tuyệt đối theo đúng URL của trang đó
// (không bao giờ trỏ về "/"), OG/Twitter đầy đủ.
export function useEcorSeo({ title, description, image, type = 'website' } = {}) {
  const route = useRoute()
  const { locale } = useI18n()

  const canonical = `${SITE_URL}${route.path === '/' ? '' : route.path}`
  const ogImage = image ? `${SITE_URL}${image}` : DEFAULT_OG_IMAGE

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogImage,
    ogType: type,
    ogLocale: () => OG_LOCALE_MAP[locale.value] || 'vi_VN',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })

  return { canonical, ogImage }
}
