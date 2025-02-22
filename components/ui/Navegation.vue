<template>
  <nav class="navigation" :class="{ 'navigation--active': isActive }">
    <ul class="navigation__list">
      <li class="navigation__item"><a href="#manicuria">Manicuría</a></li>
      <li class="navigation__item"><a href="#pedicuria">Pedicuría</a></li>
      <li class="navigation__item"><a href="#lifting">Lifting</a></li>
      <li class="navigation__item"><a href="#facial">Facial</a></li>
      <li class="navigation__item"><a href="#microblading">Microblading</a></li>
      <li class="navigation__item"><a href="#masajes">Masajes</a></li>
    </ul>
    <button class="navigation__btn" @click="toggleNavigation">Navegar</button>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isActive = ref(false);
console.log(isActive.value);

function toggleNavigation() {
  isActive.value = !isActive.value;
  console.log(isActive.value);
}
</script>

<style>
.navigation {
  position: sticky;
  top: 10.625rem;
  background: rgba(237, 232, 208, 1);
  border-radius: 0 0 1rem 1rem;
  margin: 0 1rem;
  z-index: 4;
  transition: transform 0.3s ease-in-out;
}

.navigation__list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: all .3s;
}

.navigation__item {
  padding: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
}

.navigation__btn {
  display: none;
}

@media (max-width: 425px) {
  .navigation__list {
    display: none;
  }

  .navigation__btn {
    display: block;
    padding: 1rem;
    width: 100%;
    font-size: 1.25rem;
    background: rgba(237, 232, 208, 1);
    color: black;
    border: none;
    border-top: 1px solid black;
    border-radius: 0 0 1rem 1rem;
    cursor: pointer;
  }

  .navigation--active {
    display: block;
  }
}
</style>