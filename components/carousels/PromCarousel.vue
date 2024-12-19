<template>
  <div class="relative overflow-hidden py-8">
    <div
      class="flex transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] mb-10"
      :style="{ transform: `translateX(${getTranslateX}px)` }"
      @transitionend="handleTransitionEnd"
    >
      <div
        v-for="(slide, index) in getVisibleSlides"
        :key="slide.originalIndex"
        class="flex-shrink-0 transition-all duration-700 ease-in-out cursor-pointer"
        :class="{
          'scale-110 z-10': isActiveSlide(index),
        }"
        :style="{
          width: `${slideWidth}px`,
          marginRight: `${slideGap}px`,
        }"
        @click="handleSlideClick(index)"
      >
        <img
          :src="slide.image"
          :alt="slide.title"
          class="rounded-lg shadow-xl w-full h-auto"
          draggable="false"
        />
      </div>
    </div>

    <ProgressPagination
      :current-index="currentSlideIndex"
      :total-slides="slides.length"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useCarousel } from "~/components/carousels/promoCarousel/useCarousel";
import ProgressPagination from "~/components/carousels/promoCarousel/ProgressPagination.vue";

const slides = ref([
  {
    image: "/promo_pic1.png",
    title: "TikTok Live Selling",
  },
  {
    image: "/promo_pic2.png",
    title: "Lyric Music Store",
  },
  {
    image: "/promo_pic3.png",
    title: "Marshall Amplifiers",
  },
  {
    image: "/promo_pic44.png",
    title: "Kawai Digital Piano",
  },
  {
    image: "/promo_pic55.png",
    title: "Electric Guitars",
  },
]);

const {
  slideWidth,
  slideGap,
  currentSlideIndex,
  isActiveSlide,
  handleSlideClick,
  handleTransitionEnd,
  getTranslateX,
  startAutoplay,
  resetAutoplay,
  getVisibleSlides,
} = useCarousel(slides.value);

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  resetAutoplay();
});
</script>