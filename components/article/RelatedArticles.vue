<template>
  <div class="mt-16">
    <h2 class="text-2xl font-bold mb-6">
      Related {{ category.toLowerCase() }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="article in articles"
        :key="article.id"
        class="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border-2 duration-200"
      >
        <!-- Image (Left Side) - Increased to 40% -->
        <div class="w-[45%] relative">
          <NuxtLink :to="`/${article.category.toLowerCase()}/${article.slug}`">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover"
            />
          </NuxtLink>
        </div>

        <!-- Content (Right Side) - Adjusted to 60% -->
        <div class="w-[55%] p-5">
          <NuxtLink
            :to="`/${article.category.toLowerCase()}/${article.slug}`"
            class="block group"
          >
            <h3
              class="font-bold text-gray-900 mb-3 text-lg line-clamp-2 group-hover:text-red-500"
            >
              {{ article.title }}
            </h3>
            <p class="text-sm text-gray-600 mb-3 line-clamp-2">
              {{ article.description }}
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <span>{{ article.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ article.category }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
  currentArticleId: number;
}>();

const { data } = await useFetch("/api/articles", {
  query: {
    category: props.category,
    exclude: props.currentArticleId,
    limit: 2,
  },
});

const articles = computed(() => data.value?.articles || []);
</script>