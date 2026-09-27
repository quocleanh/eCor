<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { locale, locales } = useI18n()
const head = useLocaleHead()

useHead({
  htmlAttrs: computed(() => head.value.htmlAttrs),
  link: computed(() => head.value.link),
  meta: computed(() => head.value.meta),
})
</script>
