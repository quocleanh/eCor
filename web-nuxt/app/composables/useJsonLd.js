let counter = 0

// Gắn 1 khối JSON-LD vào <head>. Gọi nhiều lần trong cùng 1 trang để thêm
// nhiều schema khác nhau (BreadcrumbList, SoftwareApplication, FAQPage...).
export function useJsonLd(data) {
  const key = `json-ld-${counter++}`
  useHead({
    script: [
      {
        key,
        type: 'application/ld+json',
        innerHTML: JSON.stringify(data),
      },
    ],
  })
}
