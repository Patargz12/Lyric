<template>
  <swiper
    :slides-per-view="5"
    :space-between="30"
    :centered-slides="true"
    :loop="true"
    :pagination="{
      type: 'progressbar',
      clickable: true,
      el: '.pagination-custom',
    }"
    :modules="modules"
    @slideChange="handleSlideChange"
    class="mySwiper mt-14"
  >
    <swiper-slide
      v-for="(item, index) in carouselItems"
      :key="index"
      :class="{'swiper-slide-active-custom': isActiveSlide(index)}"
    >
      <img
        :src="item.image"
        :alt="'Slide ' + (index + 1)"
        class="w-full h-full object-cover"
      />
    </swiper-slide>
    <div class="pagination-custom"></div>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const carouselItems = [
      { image: "/promo_pic1.png" },
      { image: "/promo_pic2.png" },
      { image: "/promo_pic3.png" },
      { image: "/promo_pic4.jpg" },
      { image: "/promo_pic5.jpg" },
    ];

    let activeIndex = Math.round(carouselItems.length / 2) - 1;

    const handleSlideChange = (swiper) => {
      activeIndex = swiper.activeIndex;
    };

    // Function to check if the slide is active
    const isActiveSlide = (index) => {
      return index === activeIndex;
    };

    return {
      modules: [FreeMode, Pagination],
      carouselItems,
      isActiveSlide,
      handleSlideChange,
    };
  },
};
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: auto;
  position: relative;
}

/* Center active slide and make it larger */
.swiper-slide-active-custom img {
  transform: scale(1.2);
  transition: transform 0.3s ease-in-out;
  z-index: 10;
}

/* Square format for all images */
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px; /* Optional: Add rounded corners */
  transition: transform 0.3s ease-in-out;
}

/* Pagination styles */
.pagination-custom {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #ccc;
}

.pagination-custom .swiper-pagination-progressbar-fill {
  background-color: #000;
  height: 100%;
}
</style>
