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

    <input type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle">
      <div class="bars" id="bar1"></div>
      <div class="bars" id="bar2"></div>
      <div class="bars" id="bar3"></div>
    </label>
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

#bar1,#bar3 {
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

  .toggle {
    display: flex;
  }
}
</style>