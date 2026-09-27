<template>
  <div class="min-h-screen flex flex-col bg-zinc-50 text-zinc-800 font-sans antialiased selection:bg-amber-400 selection:text-zinc-900 font-bold">
    <TheHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <TheFooter />

    <CookieConsent />

    <ContactModal />
  </div>
</template>

<script setup>
import { useJsonLd } from '@/composables/useJsonLd'

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'eCor',
  url: 'https://ecor.vn',
  logo: 'https://ecor.vn/ecor-logo.png',
  description: 'Nền tảng SaaS quản trị và vận hành hợp nhất cho doanh nghiệp: POS, WMS, TMS, Kế toán và các module mở rộng.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+84-97-8673-867',
    contactType: 'customer service',
    email: 'contact@ecor.vn',
    areaServed: 'VN',
  },
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'eCor',
  url: 'https://ecor.vn',
})
</script>
