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

    <div class="mobile-menu-container">
      <input type="checkbox" id="checkbox">
      <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
      </label>

      <!-- Menú móvil -->
      <nav class="mobile-nav">
        <ul class="mobile-nav__list">
          <li class="mobile-nav__item">
            <NuxtLink to="/servicios" class="mobile-nav__link" exact-active-class="active">Servicios</NuxtLink>
          </li>
          <li class="mobile-nav__item">
            <NuxtLink to="/galeria" class="mobile-nav__link" exact-active-class="active">Galeria</NuxtLink>
          </li>
          <li class="mobile-nav__item">
            <NuxtLink to="/contacto" class="mobile-nav__link" exact-active-class="active">Contacto</NuxtLink>
          </li>
          <li class="mobile-nav__item">
            <NuxtLink to="/opiniones" class="mobile-nav__link" exact-active-class="active">Opiniones</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
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
  position: sticky;
  top: 0;
  z-index: 99;
}

.header__logo {
  width: clamp(8.125rem, 11vw, 10.9375rem);
}

.header__nav {
  width: 29.1875rem;
}

.header__nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav-link {
  font-size: 1.5rem;
  position: relative;
}

.header__nav-link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1.5px;
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

/* Contenedor del menú móvil */
.mobile-menu-container {
  position: relative;
  display: none;
}

#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
  z-index: 100;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1,
#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle {
  transition-duration: .5s;
  transform: rotate(180deg);
}

/* Estilos del menú móvil */
.mobile-nav {
  position: fixed;
  top: 10.625rem;
  left: 0;
  width: 100%;
  background: #E1B2E6;
  transform: translateY(-200%);
  transition: transform 0.3s ease-in-out;
  padding: 2rem 2rem 2rem;
}

#checkbox:checked~.mobile-nav {
  transform: translateY(0);
}

.mobile-nav__list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.mobile-nav__link {
  font-size: 24px;
  position: relative;
}

.mobile-nav__link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1.5px;
  background: #000;
  border-radius: 5px;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.mobile-nav__link:hover::before,
.mobile-nav__link.active::before {
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

  .mobile-menu-container {
    display: block;
  }

  .toggle {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0 1.5rem;
  }
}

@media (max-width: 320px) {
  .header {
    padding: 0 0.5rem;
  }
}
</style>