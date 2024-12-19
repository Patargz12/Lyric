<script setup lang="ts">
import { ArrowLeft, Facebook, Twitter, Link2 } from "lucide-vue-next";
import type { Article } from "@/types/article";
import { useArticles } from "~/composables/useArticles";
import ArticleCard from "~/components/cards/ArticleCard.vue";

// Simulated article data
const article = ref<Article>({
  id: 1,
  title: "The Yin and Yang of Senri Kawaguchi",
  date: "2024-03-01",
  category: "News",
  mainImage: "/yin_pic1.png",
  secondaryImage: "/yin_pic2.png",
  description:
    "She looks like a typical wholesome young lady in her cardigan, loose shirt, and sneakers, her hair in bangs at the front and ponytail in the back, and her frame slight, almost delicate. Were it not for the guests expecting her and the Yamaha executives by her side, she would be unobtrusive, invisible even, as she is soft-spoken and quiet, attributes magnified further perhaps by the face mask she adorns in light of the global coronavirus scare. She picks up a pair of drumsticks and tries to find a comfortable angle on the drum stool.",
  content:
    'Yamaha in cooperation with Lyric brought the now 23-year old drum phenom for a Drum Clinic at Teatrino, Promenade, Greenhills on Feb 22, 2020. The drumming community was immediately abuzz mere hours after the initial announcement was made in early Feb, as were fans of Japanese pop culture. Of the former, veteran drummers such as The Dawn\'s JB Leonor were drawn to her performance videos-Leonor in fact says he "recently cropped this fast sextuplet thing she does with the cymbals, double kick, and snare from the Drumeo channel!" The latter community discovered Senri when she did drum cover videos of songs from the anime series K-on when she was 14 (anime songs tend to be metallic high energy, fast tempo affairs). The Drum Clinic attendees informally represented both communities; career-wise, Senri has mostly leaned toward upbeat jazz and high energy fusion particularly in the virtuosic Senri Kawaguchi Triangle with keyboardist Philip Saisse and bassist Armand Sabal-Lecco.',
  slug: "yin-and-yang",
});

const { articles } = useArticles();

const relatedArticles = computed(() => {
  return articles.value
    .filter(
      (a) => a.category === article.value.category && a.id !== article.value.id
    )
    .slice(0, 2);
});

const socialButtons = [
  {
    icon: Facebook,
    action: () => shareOnFacebook(),
  },
  {
    icon: Twitter,
    action: () => shareOnTwitter(),
  },
  {
    icon: Link2,
    action: () => copyLink(),
  },
];

// Format date
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

// Social share functions
const shareOnFacebook = () => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
    "_blank"
  );
};

const shareOnTwitter = () => {
  window.open(
    `https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.value.title}`,
    "_blank"
  );
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    // Toast dito
  } catch (err) {
    console.error("Failed to copy link:", err);
  }
};
</script>





<template>
  <article class="max-w-4xl mx-auto px-4 py-8">
    <!-- Back Navigation -->
    <div class="mb-6">
      <NuxtLink
        to="/news"
        class="inline-flex items-center text-[#E23D3D] hover:opacity-80"
      >
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back
      </NuxtLink>
    </div>

    <!-- Category -->
    <div class="text-gray-600 mb-4">{{ article.category }}</div>

    <!-- Article Header -->
    <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
    <div class="text-gray-600 mb-6">{{ formatDate(article.date) }}</div>

    <!-- Social Share -->
    <div class="flex gap-3 mb-8">
      <button
        v-for="(btn, index) in socialButtons"
        :key="index"
        @click="btn.action"
        class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
      >
        <component :is="btn.icon" class="w-5 h-5 text-gray-700" />
      </button>
    </div>

    <!-- Main Image -->
    <img
      :src="article.mainImage"
      :alt="article.title"
      class="w-full mb-8 rounded-lg"
    />

    <!-- Article Content -->
    <div class="prose max-w-none mb-16">
      <p class="text-gray-700 mb-8">{{ article.description }}</p>
      <img
        :src="article.secondaryImage"
        :alt="article.title"
        class="w-full mb-8 rounded-lg"
      />
      <p class="text-gray-700 mb-8">{{ article.content }}</p>
    </div>

    <!-- Related Articles -->
    <section v-if="relatedArticles.length > 0">
      <h2 class="text-2xl font-bold mb-6">Related news</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ArticleCard
          v-for="related in relatedArticles"
          :key="related.id"
          :article="related"
        />
      </div>
    </section>
  </article>
</template>

