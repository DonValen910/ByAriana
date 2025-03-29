<template>
  <footer v-show="!isLegalPage" class="footer">
    <div class="footer__content">
      <div class="footer__legal">
        <h3 class="footer__legal-title">Avisos Legales</h3>
        <NuxtLink to="/politicaDePrivacidad" class="footer__legal-item">Políticas de privacidad</NuxtLink>
        <NuxtLink to="/terminosDeUso" class="footer__legal-item">Términos de uso</NuxtLink>
        <span class="footer__legal-derechos">© ByAriana | Todos los derechos reservados</span>
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
import { useRoute } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';

const route = useRoute();
const isLegalPage = ref(false);

// Usar una función computed para evaluar la ruta actual
const checkIfLegalPage = computed(() => {
  return route.path === '/terminosDeUso' || route.path === '/politicaDePrivacidad';
});

// Actualizar isLegalPage cuando cambia la ruta
watch(() => route.path, (newPath) => {
  isLegalPage.value = newPath === '/terminosDeUso' || newPath === '/politicaDePrivacidad';
}, { immediate: true });

// Asegurar que se evalúe correctamente al cargar el componente
onMounted(() => {
  isLegalPage.value = checkIfLegalPage.value;
});
</script>

<style scoped>
.footer {
  background: #E1B2E6;
  width: 100%;
}

.footer__content {
  max-width: 56.8125rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer__legal {
  display: grid;
  justify-items: center;
  gap: 0.9375rem;
}

.footer__legal-title {
  font-weight: bold;
  font-size: clamp(18px, 4.5vw, 1.75rem);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer__legal-item {
  font-size: clamp(14px, 4.5vw, 1.5rem);
}

.footer__legal-item:hover {
  text-decoration: underline;
}

.footer__legal-derechos {
  font-size: clamp(12px, 4.5vw, 1.25rem);
}

.footer__social {
  display: flex;
  gap: 1.5rem;
}

.footer__social-icon {
  width: clamp(3rem, 2vw, 4rem);
  height: clamp(3rem, 2vw, 4rem);
  transition: .3s;
}

.footer__social-icon:hover {
  transform: scale(1.1);
}
</style>