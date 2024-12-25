<template>
  <div>
    <the-navbar />
    <div class="container mx-auto px-4 py-8">
      <div v-if="pending" class="text-center py-12">
        <p class="text-gray-600">Loading article...</p>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <h2 class="text-xl font-semibold text-red-600 mb-2">
          {{ error.statusMessage }}
        </h2>
        <p class="text-gray-600">{{ error.message }}</p>
        <NuxtLink
          :to="'/'"
          class="mt-4 inline-block text-blue-600 hover:text-blue-800"
        >
          Return to Home
        </NuxtLink>
      </div>

      <article v-else-if="article" class="max-w-3xl mx-auto">
        <ArticleHeader
          :category="article.category"
          :title="article.title"
          :date="article.date"
        />

        <ArticleContent :content="article.content" />

        <RelatedArticles
          :category="article.category"
          :current-article-id="article.id"
        />
      </article>
    </div>
    <the-footer />
  </div>
</template>

<script setup lang="ts">
import ArticleHeader from "~/components/article/ArticleHeader.vue";
import ArticleContent from "~/components/article/ArticleContent.vue";
import RelatedArticles from "~/components/article/RelatedArticles.vue";
import TheNavbar from "~/components/layouts/TheNavbar.vue";

const route = useRoute();
const {
  data: article,
  pending,
  error,
} = await useFetch("/api/articles", {
  query: {
    slug: route.params.slug,
  },
  key: route.params.slug as string,
});

// Redirect if category doesn't match
watchEffect(() => {
  if (article.value && route.params.category) {
    const expectedCategory = article.value.category?.toLowerCase();
    const currentCategory = route.params.category.toString().toLowerCase();

    if (expectedCategory && expectedCategory !== currentCategory) {
      navigateTo(`/${expectedCategory}/${route.params.slug}`);
    }
  }
});

// Update page title
useHead({
  title: computed(() => article.value?.title || "Article Not Found"),
});
</script>




