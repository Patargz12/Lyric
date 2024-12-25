<template>
  <NuxtLink
    :to="`/${article.category.toLowerCase()}/${article.slug}`"
    class="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border-2 transition-shadow duration-200"
  >
    <!-- Image Container -->
    <div class="aspect-square relative overflow-hidden p-2">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Content Container -->
    <div class="p-6 flex flex-col h-[200px]">
      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 flex-none">
        {{ article.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 mb-4 line-clamp-2 flex-grow">
        {{ article.description }}
      </p>

      <!-- Footer - Always at bottom -->
      <div class="flex items-center text-sm text-gray-500 flex-none">
        <span>{{ article.date }}</span>
        <span class="mx-2">•</span>
        <span>{{ article.category }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

defineProps<{
  article: Article;
}>();
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>