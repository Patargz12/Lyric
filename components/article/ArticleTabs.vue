`<template>
  <div class="mb-8">
    <nav class="flex justify-center space-x-4">
      <NuxtLink
        v-for="category in categories"
        :key="category"
        :to="'/' + category.toLowerCase()"
        class="px-4 py-2 transition"
        :class="[
          currentCategory === category.toLowerCase()
            ? 'bg-red-500 text-white'
            : 'text-gray-600 hover:bg-gray-100',
        ]"
      >
        {{ category }}
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
const categories = ["News", "Blog", "Event", "Press"];
const route = useRoute();
const currentCategory = computed(() => route.params.category || "news");
</script>`