<template>
  <div>
    <the-navbar />
    <page-banner
      image="/news_banner.jpg"
      title="News and Events"
      description="Stay Tuned! Get the latest news, events, and exclusive offers from our music world. Don’t miss a beat—stay in tune with us!"
    />
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-center mb-8 space-x-4">
        <NuxtLink
          v-for="category in categories"
          :key="category"
          :to="category.toLowerCase()"
          class="px-4 py-2 rounded-full"
          :class="
            currentCategory === category
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          "
        >
          {{ category }}
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ArticleCardz
          v-for="article in displayedArticles"
          :key="article.id"
          :article="article"
        />
      </div>

      <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
    <the-footer />
  </div>
</template>

<script setup lang = "ts">
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import TheFooter from "~/components/layouts/footer/Footer.vue";
import PageBanner from "@/components/Ui/PageBanners.vue";
import ArticleCardz from "~/components/cards/ArticleCardz.vue";
import Pagination from "~/components/cms/Pagination.vue";
import ArticleList from "@/components/cards/ArticleList.vue";
import CategoryNav from "@/components/cms/CategoryNav.vue";
const categories = ["News", "Blog", "Event", "Press"];
const currentCategory = ref("News");
const currentPage = ref(1);
const itemsPerPage = 6;

const { data: articles } = await useFetch("/api/news");

const totalPages = computed(() =>
  Math.ceil(articles.value.length / itemsPerPage)
);

const displayedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return articles.value.slice(start, end);
});

const handlePageChange = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
