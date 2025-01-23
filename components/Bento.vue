<template>
  <section class="services">
    <h1 class="services__title">Servicios</h1>
    <div class="services__bento">
      <div class="services__bento-item services__bento-item--lifting">
        <NuxtImg width="279" height="546" src="/lifting_1.png" alt="Foto de lifting" />
      </div>
      <div class="services__bento-item services__bento-item--manicuria">
        <NuxtImg width="340" height="228" src="/manos_2.png" alt="Foto de manicuria" />
      </div>
      <div class="services__bento-item services__bento-item--pedicuria">
        <NuxtImg width="340" height="228" src="/pies_1.png" alt="Foto de pedicuria" />
      </div>
      <div class="services__bento-item services__bento-item--facial">
        <NuxtImg width="745" height="283" src="/facial_1.png" alt="Foto de facial" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style>
.services__title {
  font-size: 3.25rem;
  text-align: center;
  font-family: 'Libre Baskerville', serif;
}

.services__bento {
  display: grid;
  max-height: 550px;
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
  position: relative;
}

.services__bento-item--lifting::before {
  content: "Lifting";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: black;
  background: rgba(225, 178, 230, 0.8);
  display: block;
  width: 100%;
  text-align: center;
  padding: .5rem 0;
}

.services__bento-item--manicuria {
  position: relative;
}

.services__bento-item--manicuria::before {
  content: "Manicuría";
  position: absolute;
  font-size: 2.5rem;
  padding: 0.3125rem 0 0 0.9375rem;
  color: black;
  background-image: linear-gradient(#E1B2E6 0 23%, rgba(225, 178, 230, 0.63) 63%, rgba(225, 178, 230, 0.007) 100%);
  display: block;
  width: calc(100% - 0.9375rem);
  text-align: left;
  border-radius: 1rem;
}

.services__bento-item--pedicuria {
  position: relative;
}

.services__bento-item--pedicuria::before {
  content: "Pedicuría";
  position: absolute;
  bottom: 1%;
  font-size: 2.5rem;
  padding: 0 0 0.3125rem 0.9375rem;
  color: black;
  background-image: linear-gradient(to top ,#E1B2E6 0 23%, rgba(225, 178, 230, 0.63) 63%, rgba(225, 178, 230, 0.007) 100%);
  display: block;
  width: calc(100% - 0.9375rem);
  text-align: left;
  border-radius: 1rem;
}

.services__bento-item--facial {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  position: relative;
}

.services__bento-item--facial::before {
  content: "Facial";
  position: absolute;
  bottom: 1%;
  font-size: 2.5rem;
  padding: 0 0.9375rem 0.3125rem 0;
  color: black;
  background-image: linear-gradient(to top ,#E1B2E6 0 23%, rgba(225, 178, 230, 0.63) 63%, rgba(225, 178, 230, 0.007) 100%);
  display: block;
  width: calc(100% - 0.9375rem);
  text-align: right;
  border-radius: 1rem;
}

</style>