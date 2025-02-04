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
    <img src="/assets/Separador.svg" alt="Separador de secciones">
    <article class="beneficios__item inverted">
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
.beneficios {
  display: grid;
  place-items: center;
  margin: 1rem;
  gap: 1rem;
}

.beneficios__title {
  font-size: clamp(2.5rem, 7vw, 3.25rem);
  text-align: center;
  font-family: 'Libre Baskerville', serif;
}

.beneficios__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: .5rem;
}

.inverted {
  flex-direction: row-reverse;
}

.beneficios__item-content {
  max-width: clamp(7.8125rem, 50%, 33.9375rem);
}

.beneficios__item-title {
  font-size: clamp(1.375rem, 3vw, 1.75rem);
  font-weight: 800;
  padding-bottom: clamp(0.3125rem, 2vw, 0.9375rem);
}

.beneficios__item-description {
  font-size: clamp(1.1rem, 1.9vw, 1.5rem);
}
</style>