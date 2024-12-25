<template>
  <section class="relative w-full py-32 bg-primary-500">
    <div class="container mx-auto px-8 lg:px-12">
      <div class="grid md:grid-cols-2 gap-20 items-center">
        <!-- Image Container - Always on Left -->
        <div class="aspect-square relative overflow-hidden rounded-lg">
          <NuxtImg
            :src="image"
            :alt="imageAlt"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content Container - Always on Right -->
        <div class="space-y-8">
          <h2 class="text-5xl font-bold text-white leading-tight">
            {{ title }}
          </h2>

          <div class="space-y-6">
            <p
              v-for="(paragraph, idx) in description"
              :key="idx"
              class="text-white/90 text-lg leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>

          <div>
            <NuxtLink
              :to="buttonLink"
              class="inline-block bg-white px-12 py-4 font-bold text-red-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {{ buttonText }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "READ MORE",
  },
  buttonLink: {
    type: String,
    default: "#",
  },
  backgroundColor: {
    type: String,
    default: "bg-primary-500",
  },
});
</script>