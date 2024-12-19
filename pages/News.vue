<script setup lang = "ts">
import navbar from "~/components/Layouts/navbar.vue";
import TheNavbar from "~/components/Layouts/TheNavbar.vue";
import PageBanner from "~/components/Ui/PageBanners.vue";
import test from "~/components/Layouts/test.vue";

import ArticleCard from "~/components/cards/ArticleCard.vue";
import Pagination from "~/components/misc/Pagination.vue";
import { useArticles } from "~/composables/useArticles";
import type { Tab } from "~/types/article";

const tabs: Tab[] = ["News", "Blog", "Event", "Press"];
const { articles, pagination, activeTab, setPage, setActiveTab } =
  useArticles();
</script>

<template>
  <div>
    <navbar />
    <page-banner
      image="/news_banner.jpg"
      title="News and Events"
      description="Stay Tuned! Get the latest news, events, and exclusive offers from our music world. Don’t miss a beat—stay in tune with us!"
    />

    <section class="max-w-7xl mx-auto px-4 py-8 mb-8">
      <!-- Tabs -->
      <div class="flex gap-5 mb-12 items-center justify-center">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="setActiveTab(tab)"
          :class="[
            'px-4 py-2',
            'text-md',
            activeTab === tab
              ? 'bg-[#E23D3D] text-white font-medium'
              : 'bg-white text-[#333333] border border-[#E5E5E5]',
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>

      <!-- Pagination -->
      <Pagination
        :current-page="pagination.currentPage"
        :total-pages="pagination.totalPages"
        @change="setPage"
      />
    </section>

    <test />
  </div>
</template>

<style scoped>
</style>