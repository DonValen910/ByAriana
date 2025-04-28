<template>
  <div class="whatsapp-button">
    <a class="whatsapp-button__link" href="https://wa.me/5491138950514" target="_blank">
      <img class="whatsapp-button__icon" src="../assets/redes/whatsapp.svg" alt="Imagen de whatsapp" />
    </a>
    <span class="whatsapp-button__text">Contactanos!</span>
  </div>
</template>

<style scoped>
.whatsapp-button {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: .8rem;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  transition: 0.3s;
}

.whatsapp-button__link {
  display: block;
  height: 4.125rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: #25D366;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.whatsapp-button__icon {
  width: 100%;
  height: 100%;
}

.whatsapp-button__link:active {
  scale: 1.1;
}

.whatsapp-button__text {
  background: #f8f8f8;
  padding: 0.5rem 1rem;
  border-radius: .5rem;
  border: 1.5px solid #080808;
  position: relative;
  transition: 0.3s;
}

.whatsapp-button__text::after {
  content: '';
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 10px solid #f8f8f8;
  filter: drop-shadow(1.5px 0 0 #080808);
}
</style>