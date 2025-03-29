<template>
  <main>
    <Bento />
    <Beneficios />
  </main>
</template>

<script lang="ts" setup>
import Beneficios from '~/components/Beneficios.vue';
import Bento from '~/components/Bento.vue';
</script>

<style scoped>
main {
  width: clamp(250px, 100%, 1089px);
  margin: 0 auto;
}
</style>