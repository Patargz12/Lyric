<template>
  <div>
    <navbar />
    <page-banner
      image="/news_banner.jpg"
      title="News and Events"
      description="Stay Tuned! Get the latest news, events, and exclusive offers from our music world. Don’t miss a beat—stay in tune with us!"
    />
    <category-nav />

    <ArticleList :articles="articles" />
  </div>
</template>

<script setup>
import Navbar from "@/components/layouts/Navbar.vue";
import PageBanner from "@/components/Ui/PageBanners.vue";
import ArticleList from "@/components/cards/ArticleList.vue";
import CategoryNav from "@/components/cms/CategoryNav.vue";
const { data: articles } = await useFetch("/api/news");
</script>