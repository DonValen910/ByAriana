<template>
  <div class="whatsapp-button">
    <a class="whatsapp-button__link" href="https://wa.me/5491138950514" target="_blank">
      <img class="whatsapp-button__icon" src="../assets/redes/whatsapp.svg" alt="Imagen de whatsapp" />
    </a>
  </div>
</template>

<style>
.whatsapp-button {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  border-radius: 50%;
  background: #25D366;
  padding: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: scale 0.3s;
}

.whatsapp-button__link {
  display: block;
  width: 3.125rem;
  height: 3.125rem;
}

.whatsapp-button__icon {
  width: 100%;
  height: 100%;
}

.whatsapp-button:hover {
  scale: 1.1;
}
</style>