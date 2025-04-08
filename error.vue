<template>
  <main class="error">
    <div class="error__container">
      <h1 class="error__title">Oops!</h1>
      <img
        class="error__image"
        src="/assets/Questions.svg"
        alt="imagen de error"
      />
      <h2 class="error__subtitle">
        Lo sentimos, no hemos podido encontrar la página que buscas
      </h2>
      <NuxtLink class="error__link" to="/">Vuelve al inicio</NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
const props = defineProps(["error"]);

console.log("El error es: ", props.error.statusCode);
console.log("El error es: ", props.error.message);
</script>

<style scoped>
.error {
  display: grid;
  place-items: center;
  height: 100vh;
  background: #e4e4e4;
}

.error__container {
  background: #F9F9F9;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  margin: 0 1rem;
}

.error__image {
  width: min(100%, 400px);
  max-width: 400px;
}

.error__link {
  display: inline-block;
  padding: .9rem 1.5rem;
  background: rgb(225, 178, 230);
  border-radius: .5rem;
  border: 3px solid transparent;
  font-weight: 700;
  font-family: 'Libre Baskerville', serif;
  transition: .4s;
}

.error__link:hover {
  border: 3px solid #E1B2E6;
  background: transparent;
}
</style>
