<template>
  <NuxtLink
    :to="`/${article.category.toLowerCase()}/${article.slug}`"
    class="group"
  >
    <div
      class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div class="aspect-w-16 aspect-h-9">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-gray-600">{{ article.date }}</span>
          <span class="text-sm text-red-600">{{ article.category }}</span>
        </div>
        <h3
          class="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors"
        >
          {{ article.title }}
        </h3>
        <p class="text-gray-600 text-sm">{{ article.description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>