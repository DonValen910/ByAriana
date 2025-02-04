<template>
  <section class="services">
    <h1 class="services__title">Servicios</h1>
    <div class="services__container">
      <div class="services__grid">
        <div class="services__item services__item--lifting">
          <!-- Lifting -->
        </div>
        <div class="services__item services__item--mano">
          <!-- Manos -->
        </div>
        <div class="services__item services__item--pie">
          <!-- Pies -->
        </div>
        <div class="services__item services__item--facial">
          <!-- Facial -->
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.services {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

.services__title {
  font-size: clamp(2.5rem, 7vw, 3.25rem);
  text-align: center;
  font-family: 'Libre Baskerville', serif;
}

.services__container {
  display: flex;
  height: 690px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.services__grid {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;
}

.services__item {
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
}

.services__item:hover {
  transform: scale(1.04);
  box-shadow: 0 0 14px #342f32;
}	

.services__item--lifting {
  grid-column: span 1;
  grid-row: span 4;
  background-image: url("/resultado/Lifting/lifting_1.webp");
  background-size: cover;
  background-position: center;
}

.services__item--mano {
  grid-column: span 1;
  grid-row: span 2;
  background-image: url("/resultado/Manos/mano_1.webp");
  background-size: cover;
  background-position: center;
}

.services__item--pie {
  grid-column: span 1;
  grid-row: span 2;
  background-image: url("/resultado/Pies/pie_1.jpeg");
  background-size: cover;
  background-position: center;
}

.services__item--facial {
  grid-column: span 2;
  grid-row: span 2;
  background-image: url("/resultado/Facial/facial_1.png");
  background-size: cover;
  background-position: center;
}
</style>
