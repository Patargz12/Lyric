<script setup>
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";
import Navbar from "~/components/layouts/Navbar.vue";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

import {
  ChevronLeftIcon,
  FacebookIcon,
  TwitterIcon,
  LinkIcon,
} from "lucide-vue-next";

const route = useRoute();
const { data, pending, error } = await useFetch(
  `/api/article/${route.params.slug}`
);
</script>



<template>
  <div>
    <the-navbar />
    <div class="min-h-screen bg-white">
      <!-- Back Button -->
      <div class="max-w-4xl mx-auto pt-8 px-4">
        <NuxtLink
          to="/news"
          class="inline-flex items-center text-red-500 hover:text-red-600"
        >
          <ChevronLeftIcon class="w-5 h-5 mr-1" />
          Back
        </NuxtLink>
      </div>

      <!-- Loading State -->
      <div
        v-if="pending"
        class="flex justify-center items-center min-h-[400px]"
      >
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"
        ></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <template v-else>
        <!-- Article Header -->
        <div class="max-w-4xl mx-auto px-4 py-8">
          <div class="mb-4">
            <span class="text-gray-600">{{ data.article.category }}</span>
          </div>
          <h1 class="text-4xl font-bold mb-4">{{ data.article.title }}</h1>
          <div class="text-gray-600 mb-8">{{ data.article.date }}</div>

          <!-- Social Share -->
          <div class="flex gap-4 mb-8">
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <FacebookIcon class="w-5 h-5" />
            </button>
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <TwitterIcon class="w-5 h-5" />
            </button>
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <LinkIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Dynamic Article Content -->
        <div class="max-w-4xl mx-auto px-4">
          <div
            v-for="(item, index) in data.article.content"
            :key="index"
            class="mb-8"
          >
            <template v-if="item.type === 'image'">
              <figure class="mb-4">
                <img
                  :src="item.image"
                  :alt="item.caption"
                  class="w-full h-auto rounded-lg"
                />
                <figcaption
                  v-if="item.caption"
                  class="text-sm text-gray-600 mt-2"
                >
                  {{ item.caption }}
                </figcaption>
              </figure>
            </template>
            <template v-else-if="item.type === 'text'">
              <p class="text-gray-800 leading-relaxed">{{ item.content }}</p>
            </template>
          </div>
        </div>

        <!-- Related Articles -->

        <!-- Related Articles section -->
        <div
          v-if="data.relatedArticles.length > 0"
          class="max-w-4xl mx-auto px-4 py-16"
        >
          <h2 class="text-3xl font-bold mb-8">Related news</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <article
              v-for="article in data.relatedArticles"
              :key="article.id"
              class="group cursor-pointer flex gap-6 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors w-full"
              @click="navigateTo(`/article/${article.slug}`)"
            >
              <div class="relative shrink-0">
                <img
                  :src="article.content[0].image"
                  :alt="article.title"
                  class="w-32 h-32 object-cover rounded-lg"
                />
              </div>
              <div class="flex flex-col min-w-0 w-full">
                <!-- Added w-full -->
                <h3
                  class="text-lg font-bold mb-2 group-hover:text-gray-700 transition-colors truncate"
                >
                  {{ article.title }}
                </h3>
                <div class="relative flex-1">
                  <!-- Added wrapper div -->
                  <p class="text-gray-600 text-sm absolute w-full">
                    {{ article.description }}
                  </p>
                </div>
                <div
                  class="flex items-center text-sm text-gray-500 mt-auto pt-6 gap-2"
                >
                  <!-- Added pt-6 -->
                  <span>{{ article.date }}</span>
                  <span>•</span>
                  <span>{{ article.category }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </template>
    </div>
    <the-footer />
    <footer />
  </div>
</template>





<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>