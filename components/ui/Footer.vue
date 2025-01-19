<template>
  <footer class="footer">
    <div class="footer__content">
      <NuxtLink to="/" class="footer__logo-link">
        <img src="/assets/ByAriana-transparente.png" alt="Logo ByAriana" class="footer__logo">
      </NuxtLink>
      <div class="footer__legal">
          <h4 class="footer__legal-title">Avisos Legales</h4>
          <span class="footer__legal-item">Políticas de privacidad</span>
          <span class="footer__legal-item">Términos de uso</span>
          <span class="footer__legal-item">© ByAriana | Todos los derechos reservados</span>
      </div>
      <div class="footer__social">
        <a href="https://wa.me/5491138950514" target="_blank" class="footer__social-link">
          <img src="/assets/redes/whatsapp.svg" alt="Logo de Whatsapp" class="footer__social-icon">
        </a>
        <a href="https://www.instagram.com/byariana.ok/" target="_blank" class="footer__social-link">
          <img src="/assets/redes/instagram.svg" alt="Logo de Instagram" class="footer__social-icon">
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style>
.footer {
  background: #E1B2E6;
  width: 100%;
  height: 10.625rem;
}

.footer__content {
  max-width: 56.8125rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
}

.footer__legal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.footer__social {
  display: flex;
  flex-direction: column;
}

.footer__social-icon {
  width: 4rem;
  height: 4rem;
}
</style>