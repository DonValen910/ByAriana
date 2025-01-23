<template>
  <body>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </body>
</template>

<script setup lang="ts">
useHead({
  // or as a function
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} - ByAriana`
      : 'ByAriana'
  }
})
</script>
