<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
      :class="{ 'md:flex-row-reverse': isImageRight }"
    >
      <!-- Image Column -->
      <div
        class="rounded-lg overflow-hidden"
        :class="{
          'md:order-last': isImageRight,
          'md:order-first': !isImageRight,
        }"
      >
        <div :class="{ 'aspect-w-1 aspect-h-1': square }">
          <NuxtImg
            :src="image"
            :alt="imageAlt"
            class="w-full h-full"
            :class="[square ? 'object-contain' : 'object-cover h-auto']"
          />
        </div>
      </div>

      <!-- Content Column -->
      <div
        class="space-y-4"
        :class="{
          'md:order-first': isImageRight,
          'md:order-last': !isImageRight,
        }"
      >
        <h2
          v-if="title"
          class="text-3xl font-bold text-gray-900 leading-tight lg:text-3xl"
        >
          {{ title }}
        </h2>
        <template v-if="Array.isArray(content)">
          <p
            v-for="(paragraph, index) in content"
            :key="index"
            class="text-gray-600 leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </template>
        <p v-else class="text-gray-600 leading-relaxed">
          {{ content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: [String, Array],
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
  square: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    required: true,
  },
});

const isImageRight = computed(() => props.index % 2 !== 0);
</script>