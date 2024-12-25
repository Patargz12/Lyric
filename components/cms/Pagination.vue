`<template>
  <div
    v-if="totalPages > 1"
    class="flex justify-center items-center space-x-2 mt-8"
  >
    <button
      @click="$emit('page-change', currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-1 rounded border"
      :class="
        currentPage === 1
          ? 'text-gray-400 border-gray-200'
          : 'text-gray-700 border-gray-300 hover:bg-gray-50'
      "
    >
      Previous
    </button>

    <template v-for="page in displayedPages" :key="page">
      <button
        v-if="page !== '...'"
        @click="$emit('page-change', page)"
        class="px-3 py-1 rounded"
        :class="
          currentPage === page
            ? 'bg-red-600 text-white'
            : 'text-gray-700 hover:bg-gray-50'
        "
      >
        {{ page }}
      </button>
      <span v-else class="px-2">...</span>
    </template>

    <button
      @click="$emit('page-change', currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 rounded border"
      :class="
        currentPage === totalPages
          ? 'text-gray-400 border-gray-200'
          : 'text-gray-700 border-gray-300 hover:bg-gray-50'
      "
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const displayedPages = computed(() => {
  const pages = [];
  const maxVisiblePages = 5;

  if (props.totalPages <= maxVisiblePages) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1);
  }

  pages.push(1);

  if (props.currentPage > 3) {
    pages.push("...");
  }

  for (
    let i = Math.max(2, props.currentPage - 1);
    i <= Math.min(props.totalPages - 1, props.currentPage + 1);
    i++
  ) {
    pages.push(i);
  }

  if (props.currentPage < props.totalPages - 2) {
    pages.push("...");
  }

  pages.push(props.totalPages);

  return pages;
});

defineEmits(["page-change"]);
</script>`