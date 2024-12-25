`<template>
  <div class="prose prose-lg max-w-none">
    <template v-for="(block, index) in content" :key="index">
      <img
        v-if="block.type === 'image'"
        :src="block.url"
        :alt="block.caption"
        class="w-full rounded-lg mb-6"
      />
      <p
        v-else-if="block.type === 'text'"
        class="text-gray-700 leading-relaxed mb-6"
        v-html="block.content"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
interface ContentBlock {
  type: "text" | "image";
  content?: string;
  url?: string;
  caption?: string;
}

defineProps<{
  content: ContentBlock[];
}>();
</script>`