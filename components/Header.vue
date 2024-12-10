<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo-link">
      <img src="/assets/ByAriana-transparente.png" alt="Logo ByAriana" class="header__logo">
    </NuxtLink>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <NuxtLink to="/servicios" class="header__nav-link" exact-active-class="active">Servicios</NuxtLink>
        </li>
        <li class="header__nav-item">
          <NuxtLink to="/galeria" class="header__nav-link" exact-active-class="active">Galeria</NuxtLink>
        </li>
        <li class="header__nav-item">
          <NuxtLink to="/contacto" class="header__nav-link" exact-active-class="active">Contacto</NuxtLink>
        </li>
        <li class="header__nav-item">
          <NuxtLink to="/opiniones" class="header__nav-link" exact-active-class="active">Opiniones</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #E1B2E6;
  width: 100%;
  height: 10.625rem;
  padding: 0 6rem;
}

.header__logo {
  width: clamp(140px, 11vw, 175px);
}

.header__nav {
  width: 467px;
}

.header__nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav-link {
  font-size: 24px;
  position: relative;
}

.header__nav-link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #000;
  border-radius: 5px;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.header__nav-link:hover::before,
.header__nav-link.active::before {
  transform: scaleX(1);
}

@media (max-width: 1480px) {
  .header {
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0 4rem;
  }

  .header__nav {
    display: none;
  }
}
</style>