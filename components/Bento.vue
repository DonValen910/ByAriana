<template>
  <section class="services">
    <h1 class="services__title">Servicios</h1>
    <div class="services__bento">
      <div class="services__bento-item services__bento-item--lifting">
        <img src="/assets/lifting_1.png" alt="Foto de lifting">
      </div>
      <div class="services__bento-item services__bento-item--manicuria">
        <img src="/assets/manos_2.png" alt="Foto de manicuria">
      </div>
      <div class="services__bento-item services__bento-item--pedicuria">
        <img src="/assets/pies_1.png" alt="Foto de pedicuria">
      </div>
      <div class="services__bento-item services__bento-item--facial">
        <img src="/assets/facial_1.png" alt="Foto de facial">
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style>
.services {
  margin-top: 3.5rem;
}

.services__title {
  font-size: 3.25rem;
  text-align: center;
  font-family: 'Libre Baskerville', serif;
}

.services__bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  place-items: center;
  gap: 1rem;
  margin-top: 2.0625rem;
}

.services__bento-item {
  border-radius: 1rem;
}

.services__bento-item--lifting {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.services__bento-item--manicuria {}

.services__bento-item--pedicuria {}

.services__bento-item--facial {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}
</style>