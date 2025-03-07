<template>
  <main class="main">
    <Navegation />
    <h1 class="main__title">Descubre Nuestros Tratamientos</h1>

    <section id="manicuria" class="main__section main__section--manicuria">
      <h2 class="main__section-title">Manicuría</h2>
      <div class="main__section-content">
        <Card 
          url="/resultado/Manos/mano_4.webp" 
          alt="Imagen de manicuría común" 
          title="Común" 
          price="$10.000"
          @show-info="showDialog" />
        <Card 
          url="/resultado/Manos/mano_8.webp" 
          alt="Imagen de manicuría semipermanente" 
          title="Semipermanente"
          price="$14.000" 
          @show-info="showDialog" />
        <Card 
          url="/resultado/Manos/mano_6.webp" 
          alt="Imagen de manicuría capping" 
          title="Capping" 
          price="$16.000"
          @show-info="showDialog" />
        <Card 
          url="/resultado/Manos/mano_9.webp" 
          alt="Imagen de manicuría services" 
          title="Services" 
          price="$18.000"
          @show-info="showDialog" />
        <Card 
          url="/resultado/Manos/mano_10.webp" 
          alt="Imagen de manicuría esculpidas" 
          title="Esculpidas" 
          price="$6500"
          @show-info="showDialog" />
      </div>
    </section>

    <section id="pedicuria" class="main__section main__section--pedicuria">
      <h2 class="main__section-title">Pedicuría</h2>
      <div class="main__section-content">
        <Card 
          url="/resultado/Pies/pie_2.webp" 
          atl="Imagen de belleza común" 
          title="Belleza" 
          price="$11.000"
          @show-info="showDialog" />
        <Card 
          url="/resultado/Pies/pie_3.webp" 
          atl="Imagen de belleza semipermanente" 
          title="Belleza semi"
          price="$15.000" 
          @show-info="showDialog" />
        <Card 
          url="/resultado/Pies/pie_5.webp" 
          atl="Imagen de pedicuría común" 
          title="Pedicuría" 
          price="$18.000"
          @show-info="showDialog" />
        <Card 
          url="/resultado/Pies/pie_7.webp" 
          atl="Imagen de pedicuría semipermanente" 
          title="Pedicuría semi"
          price="$20.000" 
          @show-info="showDialog" />
      </div>
    </section>

    <section id="lifting" class="main__section main__section--lifting">
      <h2 class="main__section-title">Lifting</h2>
      <div class="main__section-content">
        <Card
          class="card-lifting"
          url="/resultado/Lifting/lifting_15.webp" 
          atl="Imagen de lifting de pestañas" 
          price="$25.000"
          @show-info="showDialog"
        />
      </div>
    </section>

    <section id="perfilado" class="main__section main__section--perfilado">
      <h2 class="main__section-title">Perfilado</h2>
      <div class="main__section-content">
        <Card 
          url="/resultado/Perfilado/Comun/perfilado_comun_1.webp"
          alt="Imagen de perfilado común"
          title="Común"
          description="Diseño y depilación con cera y/o pinza."
          price="$7.000"
          @show-info="showDialog" 
        />
        <Card
          url="/resultado/Perfilado/Henna/perfilado_henna_2.webp"
          alt="Imagen de perfilado común"
          title="Común"
          description="Diseño y depilación con cera y/o pinza más tintura (duración 15/20 días según el tipo de piel)."
          price="$11.000"
          @show-info="showDialog"
        />
      </div>
    </section>

    <section id="facial" class="main__section main__section--facial">
      <h2 class="main__section-title">Facial</h2>
      <!-- Agregar cards de facial con sus respectivos datos -->
    </section>

    <section id="microblading" class="main__section main__section--microblading">
      <h2 class="main__section-title">Microblading</h2>
      <!-- Agregar cards de microblading con sus respectivos datos -->
    </section>

    <section id="masajes" class="main__section main__section--masajes">
      <h2 class="main__section-title">Masajes</h2>
      <!-- Agregar cards de masajes con sus respectivos datos -->
    </section>
    
    <DialogInfo 
      :isOpen="dialogIsOpen"
      :imageUrl="selectedService.url"
      :title="selectedService.title"
      :description="selectedService.description"
      :price="selectedService.price"
      @close="closeDialog"
    />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Navegation from '~/components/ui/Navegation.vue';
import Card from '~/components/ServicesCard.vue';
import DialogInfo from '~/components/DialogInfo.vue';

useHead({
  title: 'Servicios',
})

const dialogIsOpen = ref(false);
const selectedService = ref({
  url: '',
  title: '',
  description: '',
  price: ''
});

interface Service {
  url: string;
  title: string;
  description: string;
  price: string;
}

const showDialog = (service: Service) => {
  selectedService.value = service;
  dialogIsOpen.value = true;
};

const closeDialog = () => {
  dialogIsOpen.value = false;
};
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

.card-lifting {
  width: clamp(29rem, 5vw, 35rem);
  height: clamp(29rem, 5vw, 35rem);
  margin: 0 1rem;
}
</style>