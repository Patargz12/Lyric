<template>
  <section class="relative w-full py-8">
    <div class="container mx-auto px-8 lg:px-12">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Image Container -->
        <div
          class="relative overflow-hidden rounded-lg"
          :class="{ 'md:order-last': index % 2 !== 0 }"
        >
          <NuxtImg
            :src="image"
            :alt="imageAlt"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content Container -->
        <div class="" :class="{ 'md:order-first': index % 2 !== 0 }">
          <div class="">
            <p
              v-for="(paragraph, idx) in content"
              :key="idx"
              class="text-gray-600 text-lg leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>

          <div v-if="button" class="mt-4">
            <NuxtLink
              :to="button.link"
              class="inline-block bg-zinc-900 px-8 py-3 text-white font-medium hover:bg-zinc-800 transition-colors duration-200"
            >
              {{ button.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  content: {
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
  button: {
    type: Object,
    default: null,
    validator: (value) => {
      if (value === null) return true;
      return value.hasOwnProperty("text") && value.hasOwnProperty("link");
    },
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>