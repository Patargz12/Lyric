<script setup lang="ts">
import PromoCarousel from "~/components/Carousels/PromoCarousel.vue";
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import LogoCarousel from "~/components/Carousels/LogoCarousel.vue";
import leftPic from "~/components/Ui/LeftPic.vue";
import CookieConsent from "~/components/cms/CookieConsent.vue";
import ButtonDemo from "~/components/Buttons/BaseButton.vue";
import secondaryButton from "~/components/Buttons/SecondaryButton.vue";
import HomeSection from "~/components/cms/HomeSection.vue";
import { ArrowLeftIcon } from "lucide-vue-next";
import { useArticles } from "~/composables/useArticles";
import type { Tab } from "~/types/article";
import { homeSections } from "~/composables/constants/home";
import TheFooter from "~/components/layouts/footer/Footer.vue";
import ArticleTabs from "~/components/article/ArticleTabs.vue";
import Pagination from "~/components/article/ArticlePagination.vue";
import ArticleCard from "~/components/article/ArticleCard.vue";

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
</script>

<template>
  <div>
    <the-navbar />
    <logo-carousel />
    <home-section
      v-for="(section, index) in homeSections"
      :key="index"
      v-bind="section"
      :index="index"
    />
    <promo-carousel />

    <cookie-consent />
    <section class="max-w-7xl mx-auto px-4 py-8 mb-8">
      <h1 class="text-h1 text-center mt-16 mb-4">Posts by Lyric</h1>

      <div class="container mx-auto px-12 py-8">
        <article-tabs />

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article-card
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>

      <div class="mt-12 flex items-center justify-center">
        <NuxtLink to="/news">
          <secondary-button class="px-8 py-4 font-semibold"
            >View All</secondary-button
          >
        </NuxtLink>
      </div>
    </section>
    <the-footer />
  </div>
</template>

<style scoped>
</style>