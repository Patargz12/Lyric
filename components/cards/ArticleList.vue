<template>
  <div class="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
    <CategoryNav />

    <!-- Loading State -->
    <div
      v-if="isLoading"
      class="flex justify-center items-center min-h-[400px]"
    >
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"
      ></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-500">{{ error }}</p>
    </div>

    <!-- Empty State -->
    <div v-else-if="!articles?.length" class="text-center py-12">
      <p class="text-gray-500">No articles found</p>
    </div>

    <!-- Articles Grid -->
    <div
      v-else
      class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
    >
      <article
        v-for="article in paginatedArticles"
        :key="article.id"
        class="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-[500px]"
        @click="navigateToArticle(article.slug)"
      >
        <div class="h-[280px] w-full">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
            {{ article.title }}
          </h3>
          <p class="text-gray-600 mb-4 flex-grow line-clamp-3">
            {{ article.description }}
          </p>
          <div class="flex items-center gap-2 text-sm mt-auto">
            <span class="text-gray-500">{{ article.date }}</span>
            <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span class="font-medium text-primary-500">{{
              article.category
            }}</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Pagination section remains unchanged -->
    <div
      v-if="totalPages > 1"
      class="mt-8 flex justify-center items-center gap-4"
    >
      <button
        @click="currentPage = currentPage - 1"
        :disabled="currentPage === 1"
        class="text-2xl text-gray-400 disabled:text-gray-200 hover:text-primary-500 transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeftIcon class="h-6 w-6" />
      </button>

      <div class="flex items-center gap-3">
        <button
          v-for="page in displayedPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'text-lg hover:text-[#E23D3D] mx-1 transition-colors',
            currentPage === page
              ? 'text-[#E23D3D] font-medium'
              : 'text-gray-900',
          ]"
        >
          {{ page }}
        </button>

        <span v-if="showEllipsis" class="text-lg text-gray-900">...</span>

        <button
          v-if="showLastPage"
          @click="currentPage = totalPages"
          :class="[
            'text-lg hover:text-[#E23D3D] transition-colors',
            currentPage === totalPages
              ? 'text-[#E23D3D] font-medium'
              : 'text-gray-900',
          ]"
        >
          {{ totalPages }}
        </button>
      </div>

      <button
        @click="currentPage = currentPage + 1"
        :disabled="currentPage === totalPages"
        class="text-2xl text-gray-400 disabled:text-gray-200 hover:text-[#E23D3D] transition-colors"
        aria-label="Next page"
      >
        <ChevronRightIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
// Script section remains unchanged as it works correctly
import { ref, computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

const currentPage = ref(1);
const itemsPerPage = 6;

// Calculate total pages
const totalPages = computed(() =>
  Math.ceil((props.articles?.length || 0) / itemsPerPage)
);

// Get current page articles
const paginatedArticles = computed(() => {
  if (!props.articles) return [];

  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.articles.slice(start, end);
});

// Calculate displayed pagination numbers
const displayedPages = computed(() => {
  const pages = [];
  const maxDisplayed = 3;

  if (totalPages.value <= maxDisplayed) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (currentPage.value > 2) {
      pages.push(currentPage.value - 1);
    }
    if (currentPage.value !== 1 && currentPage.value !== totalPages.value) {
      pages.push(currentPage.value);
    }
    if (currentPage.value < totalPages.value - 1) {
      pages.push(currentPage.value + 1);
    }
  }

  return [...new Set(pages)].sort((a, b) => a - b);
});

const showEllipsis = computed(() => {
  return (
    totalPages.value > 3 && !displayedPages.value.includes(totalPages.value - 1)
  );
});

const showLastPage = computed(() => {
  return (
    totalPages.value > 3 && !displayedPages.value.includes(totalPages.value)
  );
});

// Navigation function
const navigateToArticle = (slug) => {
  navigateTo(`/article/${slug}`);
};
</script>