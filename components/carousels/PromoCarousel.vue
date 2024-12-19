<template>
  <div class="w-full max-w-7xl mx-auto px-4 py-8">
    <!-- Images Container -->
    <div class="relative w-full h-[300px] flex justify-center items-center">
      <div class="flex items-center gap-4">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          @click="goToSlide(index)"
          class="w-[200px] h-[200px] shrink-0 cursor-pointer transition-all duration-500 ease-in-out"
          :class="{
            'scale-110 z-10': currentIndex === index,
            'scale-90 opacity-70': currentIndex !== index
          }"
          :style="{
            transform: `translateX(${getSlidePosition(index)}px) ${currentIndex === index ? 'scale(1.1)' : 'scale(0.9)'}`,
          }"
        >
          <img 
            :src="slide.image" 
            :alt="slide.title"
            class="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Pagination Dots -->
    <div class="flex justify-center items-center space-x-3 mt-8">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all duration-200"
        :class="currentIndex === index ? 'bg-black' : 'bg-gray-300'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const slides = ref([
  { id: 0, image: '/promo_pic1.png', title: 'TikTok Live Selling' },
  { id: 1, image: '/promo_pic2.png', title: 'Drumsticks Display' },
  { id: 2, image: '/promo_pic3.png', title: 'Marshall Amplifiers' },
  { id: 3, image: '/promo_pic4.jpg', title: 'Kawai ES120' },
  { id: 4, image: '/promo_pic5.jpg', title: 'Electric Guitars' }
])

const currentIndex = ref(0)
const SLIDE_WIDTH = 220 // Width + gap

const getSlidePosition = (index) => {
  const centerIndex = Math.floor(slides.value.length / 2)
  const offset = index - currentIndex
  const basePosition = offset * SLIDE_WIDTH
  return basePosition
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// Auto-play functionality
let autoplayInterval
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length
  }, 5000)
}

onMounted(() => {
  startAutoplay()
  return () => {
    if (autoplayInterval) clearInterval(autoplayInterval)
  }
})
</script>

<style scoped>
.slide-move {
  transition: transform 0.5s ease-in-out;
}
</style>