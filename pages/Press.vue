<template>
  <div>
    <the-navbar />
    <page-banner
      image="/news_banner.jpg"
      title="News and Events"
      description="Stay Tuned! Get the latest news, events, and exclusive offers from our music world. Don’t miss a beat—stay in tune with us!"
    />
    <category-nav />

    <ArticleList :articles="articles" />
    <the-footer />
  </div>
</template>

<script setup>
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";
import ArticleList from "@/components/cards/ArticleList.vue";
import PageBanner from "@/components/Ui/PageBanners.vue";
import CategoryNav from "@/components/cms/CategoryNav.vue";
const { data: articles } = await useFetch("/api/press");
</script>