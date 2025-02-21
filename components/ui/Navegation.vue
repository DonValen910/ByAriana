<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"><a href="#manicuria">Manicuría</a></li>
      <li class="navigation__item"><a href="#pedicuria">Pedicuría</a></li>
      <li class="navigation__item"><a href="#lifting">Lifting</a></li>
      <li class="navigation__item"><a href="#facial">Facial</a></li>
      <li class="navigation__item"><a href="#microblading">Microblading</a></li>
      <li class="navigation__item"><a href="#masajes">Masajes</a></li>
    </ul>
  </nav>
</template>

<style>
.navigation {
  position: sticky;
  top: 10.625rem;
  background: linear-gradient(180deg, rgba(225,178,230,0.958420868347339) 0%, rgba(237,232,208,1) 13%);
  border-radius: 0 0 1rem 1rem;
  margin: 0 1rem;
  z-index: 4;
}

.navigation__list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.navigation__item {
  padding: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all .3s;
}
</style>