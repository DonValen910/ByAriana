<template>
  <main class="contacto">
    <div class="contacto__info">
      <ul class="contacto__info-list">
        <li class="contacto__info-item">
          <img src="/assets/Map.svg" alt="Icono de mapa" class="contacto__info-icon">
          <a href="" target="_blank" class="contacto__info-link">Samuel Miguel Spiro 995, B1846 Adrogué, Provincia de
            Buenos Aires</a>
        </li>
        <li class="contacto__info-item">
          <img src="/assets/redes/whatsapp.svg" alt="Icono de whatsapp" class="contacto__info-icon">
          <a href="https://wa.me/5491138950514" target="_blank" class="contacto__info-link">+54 9 11 3895-0514</a>
        </li>
        <li class="contacto__info-item">
          <img src="/assets/redes/instagram.svg" alt="Icono de Instagram" class="contacto__info-icon">
          <a href="https://www.instagram.com/byariana.ok/" target="_blank" class="contacto__info-link">@byariana.ok</a>
        </li>
      </ul>
    </div>
    <div class="contacto__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.2583394161875!2d-58.395266124888266!3d-34.799441867860125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd34fafb0a99d%3A0x93660a3aba2ac555!2sAriana!5e0!3m2!1ses!2sar!4v1741650649048!5m2!1ses!2sar"
        width="400" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Contacto',
})
</script>

<style>
.contacto {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  width: auto;
  margin: 5rem 1rem;
}

.contacto__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contacto__info-list {
  display: grid;
  gap: 2rem;
}

.contacto__info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contacto__info-icon {
  width: 4rem;
  height: 4rem;
}

.contacto__info-link {
  font-size: 1.2rem;
  width: clamp(200px, 30vw, 401px);
  font-family: 'Libre Baskerville', serif;
}

.contacto__info-link:hover {
  text-decoration: underline;
}

.contacto__map iframe {
  width: auto;
}
</style>