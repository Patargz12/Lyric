<template>
  <div class="mb-8">
    <NuxtLink
      :to="`/${category.toLowerCase()}`"
      class="inline-flex items-center text-primary-500 mb-4 hover:text-primary-800"
    >
      <svg
        class="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </NuxtLink>

    <div class="text-sm text-gray-500 uppercase mb-2">{{ category }}</div>
    <h1 class="text-4xl font-bold mb-2">{{ title }}</h1>
    <p class="text-gray-500">{{ date }}</p>

    <div class="flex space-x-3 mt-4">
      <!-- Facebook -->
      <button class="social-button bg-gray-200 shadow-subtle">
        <svg
          class="w-5 h-5 text-primary-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
          />
        </svg>
      </button>

      <!-- Twitter/X -->
      <button class="social-button bg-gray-200 shadow-subtle">
        <svg
          class="w-5 h-5 text-primary-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </button>

      <!-- Link/Share -->
      <button class="social-button bg-gray-200 shadow-subtle">
        <svg
          class="w-5 h-5 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: string;
  title: string;
  date: string;
}>();
</script>

<style scoped>
.social-button {
  @apply p-2.5 rounded-full transition-all duration-200 hover:scale-110;
}

.shadow-subtle {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>