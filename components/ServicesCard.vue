<template>
  <div class="card">
    <img class="card__image" :src="url" :alt="alt">
    <div class="card__content">
      <h3 class="card__content-title">{{ title }}</h3>
      <button class="card__content-btn" @click="showInfo">Más info</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

const props = defineProps({
  url: String,
  alt: String,
  title: String,
  description: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['show-info']);

const showInfo = () => {
  emit('show-info', {
    url: props.url,
    title: props.title,
    description: props.description,
    price: props.price
  });
};
</script>

<style>
.card {
  width: 325px;
  height: 325px;
  transition: all .5s;
  border-radius: 1rem;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #000000;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

.card__content {
  border-radius: 0 0 1rem 1rem;
  background: linear-gradient(0deg, rgba(225, 178, 230, 1) 30%, rgba(225, 178, 230, 0.63) 75%, rgba(225, 178, 230, 0.05) 100%);
  padding: 0 1.25rem 0.7rem 1.25rem;
  position: relative;
  bottom: 2.6rem;
  display: flex;
  justify-content: space-between;
}

.card__content-title {
  font-weight: 500;
  font-size: 1.6rem;
  display: inline-block;
}

.card__content-btn {
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  background: #703e78;
  color: white;
  cursor: pointer;
  transition: all .3s;
}

.card__content-btn:hover {
  background: #5c2f5c;
}
</style>