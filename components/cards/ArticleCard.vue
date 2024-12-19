<template>
  <article class="group cursor-pointer">
    <NuxtLink :to="`/article/${article.slug}`">
      <div class="relative overflow-hidden aspect-[4/3] mb-4">
        <img
          :src="article.image"
          :alt="article.title"
          class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3
        class="text-xl font-semibold mb-2 group-hover:text-[#E23D3D] transition-colors"
      >
        {{ article.title }}
      </h3>
      <p class="text-gray-600 text-sm mb-3">{{ article.description }}</p>
      <div class="flex items-center text-sm text-gray-500">
        <time>{{ article.date }}</time>
        <span class="mx-2">•</span>
        <span>{{ article.category }}</span>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { Article } from "~/types/";

defineProps<{
  article: Article;
}>();
</script>