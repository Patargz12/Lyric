<template>
  <section class="relative h-[400px] w-full overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        :src="image"
        :alt="title"
        class="h-full w-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-end h-full pb-16">
        <h1 class="text-white text-5xl font-bold mb-4">
          {{ title }}
        </h1>
        <p class="text-white/90 text-lg max-w-2xl">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
