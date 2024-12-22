<template>
  <div class="carousel-container px-8">
    <swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="5"
      :space-between="5"
      :centered-slides="true"
      :initial-slide="2"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        type: 'progressbar',
      }"
      :breakpoints="{
        '320': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '640': {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }"
      :loop-adder="true"
      :virtual-translate-by="20"
      class="mySwiper mt-20"
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="(image, index) in duplicatedImages"
        :key="index"
        @click="handleSlideClick(index % images.length)"
      >
        <img :src="image.src" :alt="image.alt" class="slide-image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const images = [
  { src: "/promo_pic1.png", alt: "Image 1" },
  { src: "/promo_pic2.png", alt: "Image 2" },
  { src: "/promo_pic3.png", alt: "Image 3" },
  { src: "/promo_pic44.png", alt: "Image 4" },
  { src: "/promo_pic55.png", alt: "Image 5" },
];

const duplicatedImages = computed(() => [...images, ...images]);

const handleSlideClick = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index);
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 106.25rem;
  margin: 0 auto;
}

.swiper {
  width: 100%;
  padding: 30px 0 50px;
}

.swiper-slide {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.swiper-slide-active {
  transform: scale(1.2);
  z-index: 2;
}

.slide-image {
  width: 90%;
  border: 3px solid #e5e7eb;
  height: auto;
  object-fit: contain;
}

:deep(.swiper-pagination-progressbar) {
  background: rgba(0, 0, 0, 0.1);
  width: 5% !important;
  left: 50% !important;
  margin-top: 30px !important;
  transform: translateX(-50%) !important;
  top: auto !important;
  bottom: 0 !important;
}

:deep(.swiper-pagination-progressbar-fill) {
  background: #000;
}
</style>