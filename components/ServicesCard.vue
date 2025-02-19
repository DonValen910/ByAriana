<template>
  <div class="card">
    <img class="card__image" :src="url" :alt="alt">
    <h3 class="card__title">{{ title }}</h3>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  url: String,
  alt: String,
  title: String,
})
</script>

<style>
.card {
  width: 325px;
  height: 325px;
  cursor: pointer;
  transition: all .5s;
}

.card:hover {
  transform: scale(1.05);
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

.card__title {
  position: relative;
  padding: 0 0 0.7rem 1.25rem;
  bottom: 2.6rem;
  background: linear-gradient(0deg, rgba(225, 178, 230, 1) 30%, rgba(225, 178, 230, 0.63) 75%, rgba(225, 178, 230, 0.05) 100%);
  border-radius: 0 0 1rem 1rem;
  font-weight: 500;
  font-size: 1.6rem;
}
</style>