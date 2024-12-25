<template>
  <div>
    <the-navbar />
    <page-banner
      image="/news_banner.jpg"
      title="News and Events"
      description="Stay Tuned! Get the latest news, events, and exclusive offers from our music world. Don’t miss a beat—stay in tune with us!"
    />
    <div class="container mx-auto px-12 py-8">
      <article-tabs />

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article-card
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>

      <pagination
        v-if="pagination"
        :current-page="pagination.current"
        :total-pages="pagination.total"
        @page-change="handlePageChange"
      />
    </div>
    <the-footer />
  </div>
</template>

<script setup lang="ts">
import ArticleTabs from "~/components/article/ArticleTabs.vue";
import Pagination from "~/components/article/ArticlePagination.vue";
import ArticleCard from "~/components/article/ArticleCard.vue";
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import PageBanner from "~/components/Ui/PageBanners.vue";
import TheFooter from "~/components/layouts/footer/Footer.vue";

const route = useRoute();
const category = computed(() => route.params.category?.toString() || "news");
const page = ref(1);

const { data } = await useFetch("/api/articles", {
  query: {
    category,
    page,
  },
});

const articles = computed(() => data.value?.articles || []);
const pagination = computed(() => data.value?.pagination);

function handlePageChange(newPage: number) {
  page.value = newPage;
}

// Update page title based on category
useHead({
  title: `${
    category.value.charAt(0).toUpperCase() + category.value.slice(1)
  } - Lyric`,
});
</script>
