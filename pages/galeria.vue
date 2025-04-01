<template>
  <main class="gallery">
    <h1 class="gallery__title">Galería</h1>
    
    <div class="gallery__tabs">
      <button 
        v-for="(category, index) in categories" 
        :key="index" 
        @click="selectedCategory = index"
        :class="{ 'gallery__tab--active': selectedCategory === index }"
        class="gallery__tab"
      >
        {{ getCategoryName(index) }}
      </button>
    </div>

    <!-- Manicuria Section -->
    <div v-if="selectedCategory === 0" class="gallery__grid">
      <div v-for="photo in manosPhotos" :key="photo.id" class="gallery__item">
        <img :src="photo.url.replace('public', '')" :alt="photo.description" loading="lazy" class="gallery__image" />
        <div class="gallery__overlay">
          <h3 class="gallery__overlay-title">{{ photo.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Lifting Section -->
    <div v-if="selectedCategory === 1" class="gallery__grid">
      <div v-for="photo in liftingPhotos" :key="photo.id" class="gallery__item">
        <img :src="photo.url.replace('public', '')" :alt="photo.description" loading="lazy" class="gallery__image" />
        <div class="gallery__overlay">
          <h3 class="gallery__overlay-title">{{ photo.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Pedicuria Section -->
    <div v-if="selectedCategory === 2" class="gallery__grid">
      <div v-for="photo in piesPhotos" :key="photo.id" class="gallery__item">
        <img :src="photo.url.replace('public', '')" :alt="photo.description" loading="lazy" class="gallery__image" />
        <div class="gallery__overlay">
          <h3 class="gallery__overlay-title">{{ photo.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Facial Section -->
    <div v-if="selectedCategory === 3" class="gallery__grid">
      <div v-for="photo in facialPhotos" :key="photo.id" class="gallery__item">
        <img :src="photo.url.replace('public', '')" :alt="photo.description" loading="lazy" class="gallery__image" />
        <div class="gallery__overlay">
          <h3 class="gallery__overlay-title">{{ photo.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Perfilado Section -->
    <div v-if="selectedCategory === 4" class="gallery__section gallery__section--perfilado">
      <h2 class="gallery__subtitle">Perfilado Común</h2>
      <div class="gallery__grid">
        <div v-for="photo in perfiladoComunPhotos" :key="photo.id" class="gallery__item">
          <img :src="photo.url.replace('public', '')" :alt="photo.description" loading="lazy" class="gallery__image" />
          <div class="gallery__overlay">
            <h3 class="gallery__overlay-title">{{ photo.title }}</h3>
          </div>
        </div>
      </div>

      <h2 class="gallery__subtitle">Perfilado con Henna</h2>
      <div class="gallery__grid">
        <div v-for="photo in perfiladoHennaPhotos" :key="photo.id" class="gallery__item">
          <img :src="photo.url.replace('public', '')" :alt="photo.description" loading="lazy" class="gallery__image" />
          <div class="gallery__overlay">
            <h3 class="gallery__overlay-title">{{ photo.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { PHOTOS } from '../data/photos';

useHead({
  title: 'Galeria',
});

const categories = [0, 1, 2, 3, 4]; // Indices for each category
const selectedCategory = ref(0);

const manosPhotos = computed(() => PHOTOS[0].manos);
const liftingPhotos = computed(() => PHOTOS[1].lifting);
const piesPhotos = computed(() => PHOTOS[2].pies);
const facialPhotos = computed(() => PHOTOS[3].facial);
const perfiladoComunPhotos = computed(() => PHOTOS[4]?.perfilado?.[0]?.comun);
const perfiladoHennaPhotos = computed(() => PHOTOS[4]?.perfilado?.[1]?.henna);

function getCategoryName(index: number): string {
  switch (index) {
    case 0: return 'Manicuria';
    case 1: return 'Lifting';
    case 2: return 'Pedicuria';
    case 3: return 'Facial';
    case 4: return 'Perfilado';
    default: return '';
  }
}
</script>

<style scoped>
.gallery {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.gallery__title {
  text-align: center;
  margin-bottom: 1.875rem;
  font-size: 3rem;
}

.gallery__subtitle {
  margin: 1.875rem 0 0.9375rem 0;
}

.gallery__tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: 1.875rem;
}

.gallery__tab {
  font-size: .9rem;
  padding: 0.625rem 1.25rem;
  background: #f4f4f4;
  border: 1px solid #0000003b;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery__tab:hover {
  background: #e1b2e6b7;
}

.gallery__tab--active {
  background: #E1B2E6;
  box-shadow: 0 0 10px #00000094;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.gallery__item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery__item:hover .gallery__image {
  transform: scale(1.05);
}

.gallery__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery__item:hover .gallery__overlay {
  opacity: 1;
}

.gallery__section--perfilado {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .gallery__grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
  
  .gallery__tab {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>