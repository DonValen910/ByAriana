<template>
  <main class="main">
    <h1 class="main__title">Descubre Nuestros Tratamientos</h1>

    <section class="main__section main__section--manicuria">
      <h2 class="main__section-title">Manicuría</h2>
      <div class="main__section-content">
        <Card url="/resultado/Manos/mano_7.webp" alt="Imagen de manicuría común" title="Común" />
        <Card url="/resultado/Manos/mano_8.webp" alt="Imagen de manicuría semipermanente" title="Semipermanente" />
        <Card url="/resultado/Manos/mano_6.webp" alt="Imagen de manicuría capping" title="Capping" />
        <Card url="/resultado/Manos/mano_9.webp" alt="Imagen de manicuría services" title="Services" />
        <Card url="/resultado/Manos/mano_10.webp" alt="Imagen de manicuría esculpidas" title="Esculpidas" />
      </div>
    </section>
    
    <section class="main__section main__section--pedicuria">
      <h2 class="main__section-title">Pedicuría</h2>
    </section>

    <section class="main__section main__section--lifting">
      <h2 class="main__section-title">Lifting</h2>
    </section>

    <section class="main__section main__section--facial">
      <h2 class="main__section-title">Facial</h2>
    </section>

    <section class="main__section main__section--microblading">
      <h2 class="main__section-title">Microblading</h2>
    </section>

    <section class="main__section main__section--masajes">
      <h2 class="main__section-title">Masajes</h2>
    </section>
  </main>
</template>

<script lang="ts" setup>
import Card from '~/components/ServicesCard.vue';

useHead({
  title: 'Servicios',
})
</script>

<style>
.main__title {
  text-align: center;
  font-size: 3rem;
  margin: 2.3rem 1rem;
}

.main__section-title {
  font-size: 2.2rem;
  font-weight: 500;
  margin: 1rem;
}

.main__section-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
}
</style>