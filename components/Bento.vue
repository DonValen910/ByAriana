<template>
  <section class="services">
    <h1 class="services__title">Servicios</h1>
    <div class="services__container">
      <div class="services__grid">
        <div class="services__item services__item--lifting">
          <span>Lifting</span>
        </div>
        <div class="services__item services__item--mano">
          <span>Manicuria</span>
        </div>
        <div class="services__item services__item--pie">
          <span>Pedicuria</span>
        </div>
        <div class="services__item services__item--facial">
          <span>Facial</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  gap: 1rem;
}

.services__item {
  border-radius: 1rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.services__item--lifting span {
  display: block;
  width: 100%;
  text-align: center;
  background: rgb(225 178 230 / 80%);
  font-size: clamp(1.8rem, 8vw, 2.25rem);
  padding: 0.5rem 0;
}

.services__item--mano {
  grid-column: span 1;
  grid-row: span 2;
  background-image: url("/resultado/Manos/mano_1.webp");
  background-size: cover;
  background-position: center;
}

.services__item--mano span {
  display: block;
  width: 100%;
  padding: 0.5rem 0 0.5rem 0.9375rem;
  font-size: clamp(1.1rem, 6vw ,2.25rem);
  background: linear-gradient(180deg, rgba(225,178,230,1) 23%, rgba(225,178,230,0.63) 57%, rgba(225,178,230,0.05) 100%);
  border-radius: 1rem 1rem 0 0;
}

.services__item--pie {
  grid-column: span 1;
  grid-row: span 2;
  background-image: url("/resultado/Pies/pie_1.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.services__item--pie span {
  display: block;
  width: 100%;
  padding: 0.5rem 0 0.5rem 0.9375rem;
  font-size: clamp(1.1rem, 6vw ,2.25rem);
  background: linear-gradient(0deg, rgba(225,178,230,1) 23%, rgba(225,178,230,0.63) 57%, rgba(225,178,230,0.05) 100%);
  border-radius: 0 0 1rem 1rem;
}

.services__item--facial {
  grid-column: span 2;
  grid-row: span 2;
  background-image: url("/resultado/Facial/facial_1.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.services__item--facial span {
  display: block;
  text-align: end;
  width: 100%;
  padding: 0.5rem 0.9375rem 0.5rem 0;
  font-size: clamp(1.1rem, 6vw ,2.25rem);
  background: linear-gradient(0deg, rgba(225,178,230,1) 23%, rgba(225,178,230,0.63) 57%, rgba(225,178,230,0.05) 100%);
  border-radius: 0 0 1rem 1rem;
}

@media screen and (max-width: 605px) {
  .services__grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  .services__item--lifting {
    grid-column: span 2;
    grid-row: span 4;
  }

  .services__item--mano, .services__item--pie {
    grid-column: span 2;
    grid-row: span 2;
  }

  .services__item--facial {
    grid-column: span 4;
    grid-row: span 2;
  }
}

@media screen and (max-width: 330px) {
  .services__grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }

  .services__item--lifting {
    grid-column: span 4;
    grid-row: span 7;
  }

  .services__item--mano, .services__item--pie {
    grid-column: span 2;
    grid-row: span 2;
  }

  :is(.services__item--mano, .services__item--pie) span {
    padding: 0.2rem 0 0.2rem 0.5rem;
  }

  .services__item--facial {
    grid-column: span 4;
    grid-row: span 1;
  }

  .services__item--facial span {
    padding: 0.2rem 0.5rem 0.2rem 0;
  }
}
</style>
