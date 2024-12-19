<script setup lang="ts">
import navbar from "~/components/Layouts/navbar.vue";
import TheNavbar from "~/components/Layouts/TheNavbar.vue";
import PromoCarousel from "~/components/Carousels/PromoCarousel.vue";
import PromCarousel from "~/components/Carousels/PromCarousel.vue";
import test from "~/components/Layouts/test.vue";
import footer from "~/components/Layouts/test.vue";
import LogoCarousel from "~/components/Carousels/LogoCarousel.vue";
import leftPic from "~/components/Ui/LeftPic.vue";
import CookieConsent from "~/components/cms/CookieConsent.vue";
import ArticleCard from "~/components/cards/ArticleCard.vue";
import Pagination from "~/components/misc/Pagination.vue";
import ButtonDemo from "~/components/Buttons/BaseButton.vue";
import secondaryButton from "~/components/Buttons/SecondaryButton.vue";
import { ArrowLeftIcon } from "lucide-vue-next";
import { useArticles } from "~/composables/useArticles";
import type { Tab } from "~/types/article";
const tabs: Tab[] = ["News", "Blog", "Event", "Press"];
const { articles, pagination, activeTab, setPage, setActiveTab } =
  useArticles();
</script>

<template>
  <div>
    <navbar />
    <logo-carousel />
    <left-pic />
    <!-- <promo-carousel /> -->

    <prom-carousel />
    <cookie-consent />
        <section class="max-w-7xl mx-auto px-4 py-8 mb-8">
          <h1 class = "text-h1 text-center mt-12 mb-16">Posts by Lyric</h1>
      <!-- Tabs -->
      <div class="flex gap-5 mb-12 items-center justify-center">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab"
          to = "/news"
          :class="[
            'px-4 py-2',
            'text-md',
            activeTab === tab
              ? 'bg-primary-500 text-white font-medium'
              : 'bg-white text-[#333333] border border-[#E5E5E5]',
          ]"
        >
          {{ tab }}
        </NuxtLink>
      </div>

      <!-- Articles Grid -->
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>

      <div class="mt-12 flex items-center justify-center">
  <secondary-button class="p-4">View All</secondary-button>
</div>


    </section>
    <test />
  </div>
</template>

<style scoped>
</style>