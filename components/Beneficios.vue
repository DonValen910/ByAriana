<template>
  <section class="beneficios">
    <h1 class="beneficios__title">Beneficios</h1>
    <article class="beneficios__item">
      <img class="beneficios__item-image" src="../assets/Manicurist.svg" alt="Ilustración de una manicurista">
      <div class="beneficios__item-content">
        <h2 class="beneficios__item-title">Atención al cliente:</h2>
        <p class="beneficios__item-description">Garantizamos a nuestras clientas y clientes un servicio excelente y personalizado.</p>
      </div>
    </article>
    <!-- Separador -->
    <article class="beneficios__item">
      <img class="beneficios__item-image" src="../assets/Eyes.svg" alt="Ilustración de unos ojos de pedicuria">
      <div class="beneficios__item-content">
        <h2 class="beneficios__item-title">Cuidado en los detalles:</h2>
        <p class="beneficios__item-description">Nos enfocamos en los pequeños detalles para garantizar que nuestras clientas y clientes queden satisfechos con los resultados obtenidos.</p>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>

</script>

<style>
.beneficios__title {
  font-size: 3.25rem;
  text-align: center;
  font-family: 'Libre Baskerville', serif;
}

.beneficios__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>