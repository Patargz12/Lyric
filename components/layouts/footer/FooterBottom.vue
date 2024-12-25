<template>
  <div class="w-full bg-[#1F1F1F] py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <p class="text-white text-sm">
        © {{ currentYear }} LYRIC. All Rights Reserved.
      </p>
      <div class="flex space-x-6">
        <NuxtLink
          v-for="link in links"
          :key="link.text"
          :to="link.url"
          class="text-white text-sm hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentYear = computed(() => new Date().getFullYear());

const links = [
  { text: "Terms of Use", url: "/terms" },
  { text: "Privacy Policy", url: "/privacy" },
];
</script>