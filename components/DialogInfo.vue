<template>
  <Transition name="fade">
    <div class="dialog-overlay" v-if="isOpen" @click.self="closeDialog">
      <Transition name="slide-fade">
        <div class="dialog-content" v-if="isOpen">
          <button class="dialog-close" @click="closeDialog"></button>
          <img v-if="imageUrl" :src="imageUrl" :alt="title" class="dialog-image">
          <div class="dialog-info">
            <h3 class="dialog-title">{{ title }}</h3>
            <div class="dialog-description">{{ description }}</div>
            <div class="dialog-price" v-if="price">Precio: {{ price }}</div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  imageUrl: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);

const closeDialog = () => {
  emit('close');
};
</script>

<style>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.dialog-content {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 26.25rem;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  top: 15%;
}

.dialog-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #E1B2E6;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-image: url('../assets/Close.svg');
  background-size: cover;
  transition: .3s ease-in-out;
}

.dialog-close:hover {
  transform: scale(1.1);
}

.dialog-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  aspect-ratio: 9/8;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.dialog-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.dialog-description {
  margin-bottom: 1rem;
}

.dialog-price {
  font-weight: bold;
  font-size: 1.2rem;
}

/* Animaciones para fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animaciones para slide-fade */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>