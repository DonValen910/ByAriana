<template>
  <main class="gallery">
    <h1 class="gallery__title">Galería</h1>
    
    <div class="gallery__filter">
      <button 
        class="gallery__filter-button"
        :class="{ 'gallery__filter-button--active': selectedCategory === null }"
        @click="selectedCategory = null"
      >
        Todos
      </button>
      <button 
        v-for="(category, index) in categories" 
        :key="index" 
        @click="selectedCategory = index"
        :class="{ 'gallery__filter-button--active': selectedCategory === index }"
        class="gallery__filter-button"
      >
        {{ getCategoryName(index) }}
      </button>
    </div>

    <div class="gallery__masonry">
      <div 
        v-for="photo in filteredPhotos" 
        :key="photo.id" 
        class="gallery__item"
      >
        <img 
          :src="photo.url.replace('public', '')" 
          :alt="photo.description" 
          loading="lazy" 
          class="gallery__image" 
        />
        <div class="gallery__overlay">
          <h3 class="gallery__overlay-title">{{ photo.title }}</h3>
          <p class="gallery__overlay-category">{{ photo.category }}</p>
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
const selectedCategory = ref<number | null>(null); // Ahora comienza como null para mostrar todas las categorías

// Define an interface for photo objects
interface Photo {
  id: string | number;
  url: string;
  title: string;
  description: string;
  category: string;
}

// Obtener todas las fotos y añadir información de categoría
const allPhotos = computed(() => {
  const photos: Photo[] = [];
  
  // Manicuria
  PHOTOS[0]?.manos?.forEach(photo => {
    photos.push({
      ...photo,
      category: 'Manicuria'
    });
  });

  // Lifting
  PHOTOS[1]?.lifting?.forEach(photo => {
    photos.push({
      ...photo,
      category: 'Lifting'
    });
  });

  // Pedicuria
  PHOTOS[2]?.pies?.forEach(photo => {
    photos.push({
      ...photo,
      category: 'Pedicuria'
    });
  });

  // Facial
  PHOTOS[3]?.facial?.forEach(photo => {
    photos.push({
      ...photo,
      category: 'Facial'
    });
  });

  // Perfilado Común
  PHOTOS[4]?.perfilado?.[0]?.comun?.forEach(photo => {
    photos.push({
      ...photo,
      category: 'Perfilado Común'
    });
  });

  // Perfilado con Henna
  PHOTOS[4]?.perfilado?.[1]?.henna?.forEach(photo => {
    photos.push({
      ...photo,
      category: 'Perfilado con Henna'
    });
  });

  return photos;
});

// Filtrar fotos según la categoría seleccionada
const filteredPhotos = computed(() => {
  if (selectedCategory.value === null) {
    return allPhotos.value;
  }

  switch (selectedCategory.value) {
    case 0: return allPhotos.value.filter(photo => photo.category === 'Manicuria');
    case 1: return allPhotos.value.filter(photo => photo.category === 'Lifting');
    case 2: return allPhotos.value.filter(photo => photo.category === 'Pedicuria');
    case 3: return allPhotos.value.filter(photo => photo.category === 'Facial');
    case 4: return allPhotos.value.filter(photo => 
      photo.category === 'Perfilado Común' || photo.category === 'Perfilado con Henna'
    );
    default: return allPhotos.value;
  }
});

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
  margin-bottom: 1.5rem;
  font-size: 3rem;
}

.gallery__filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: 1.875rem;
}

.gallery__filter-button {
  font-size: 0.9rem;
  padding: 0.625rem 1.25rem;
  background: #f4f4f4;
  border: 1px solid #0000003b;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery__filter-button:hover {
  background: #e1b2e6b7;
}

.gallery__filter-button--active {
  background: #E1B2E6;
  box-shadow: 0 0 10px #00000094;
}

.gallery__masonry {
  columns: 4;
  column-gap: 16px;
}

.gallery__item {
  break-inside: avoid;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: inline-block;
  width: 100%;
}

.gallery__item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.gallery__image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.gallery__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery__item:hover .gallery__overlay {
  opacity: 1;
}

.gallery__overlay-title {
  margin: 0;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.gallery__overlay-category {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 1200px) {
  .gallery__masonry {
    columns: 3;
  }
}

@media (max-width: 900px) {
  .gallery__masonry {
    columns: 2;
  }
}

@media (max-width: 580px) {
  .gallery__masonry {
    columns: 1;
  }
  
  .gallery__filter-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>