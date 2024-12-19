<template>
  <div class="group relative aspect-square overflow-hidden rounded-lg">
    <NuxtImg
      :src="lesson.image"
      :alt="lesson.title"
      class="object-cover transition-transform duration-300"
      sizes="sm:100vw md:50vw lg:400px"
      width="400"
      height="400"
    />
    <!-- bg-black/40 -->
    <div class="absolute inset-0 transition-opacity duration-300" />
    <div class="absolute bottom-4 left-4">
      <h3 class="text-xl font-semibold text-white">{{ lesson.title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Lesson } from "~/types/";

defineProps<{
  lesson: Lesson;
}>();

function defineProps<T>() {
  throw new Error("Function not implemented.");
}
</script>