<template>
  <div class="flex items-center justify-center gap-2 mt-8">
    <button
      v-for="page in visiblePages"
      :key="page"
      @click="$emit('change', page)"
      :class="[
        'w-8 h-8 flex items-center justify-center rounded',
        currentPage === page
          ? 'bg-red-500 text-white'
          : 'text-gray-600 hover:bg-gray-100',
      ]"
    >
      {{ page }}
    </button>
    <span v-if="totalPages > maxVisible" class="px-2">...</span>
    <button
      v-if="totalPages > maxVisible"
      @click="$emit('change', totalPages)"
      :class="[
        'w-8 h-8 flex items-center justify-center rounded',
        currentPage === totalPages
          ? 'bg-red-500 text-white'
          : 'text-gray-600 hover:bg-gray-100',
      ]"
    >
      {{ totalPages }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

defineEmits<{
  (e: "change", page: number): void;
}>();

const maxVisible = 3;

const visiblePages = computed(() => {
  const pages: number[] = [];
  let start = Math.max(1, props.currentPage - Math.floor(maxVisible / 2));
  let end = Math.min(props.totalPages, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});
</script>