<template>
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
    <div class="w-32 h-1 bg-white/20 relative overflow-hidden rounded-full">
      <div
        class="absolute top-0 left-0 h-full bg-primary-500 rounded-full"
        :style="{
          width: `${(currentIndex + 1) * (100 / totalSlides)}%`,
          transition: isProgressing ? 'width 5s linear' : 'width 0.3s ease-out',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  currentIndex: number;
  totalSlides: number;
}>();

const isProgressing = ref(true);

watch(
  () => props.currentIndex,
  () => {
    isProgressing.value = false;
    setTimeout(() => {
      isProgressing.value = true;
    }, 50);
  }
);
</script>