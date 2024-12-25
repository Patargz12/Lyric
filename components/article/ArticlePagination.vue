<template>
  <div
    v-if="totalPages > 1"
    class="mt-8 flex items-center justify-center gap-2"
  >
    <!-- Previous button -->
    <button
      @click="$emit('page-change', currentPage - 1)"
      :disabled="currentPage === 1"
      class="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
    >
      <svg
        class="w-5 h-5"
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
    </button>

    <!-- Page numbers -->
    <div class="flex items-center gap-4">
      <button
        v-for="page in displayedPages"
        :key="page"
        @click="$emit('page-change', page)"
        class="py-1 text-lg"
        :class="[
          currentPage === page
            ? 'text-red-500 font-semibold'
            : 'text-gray-600 hover:text-gray-900',
        ]"
      >
        {{ page === "..." ? page : page }}
      </button>
    </div>

    <!-- Next button -->
    <button
      @click="$emit('page-change', currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

defineEmits<{
  (e: "page-change", page: number): void;
}>();

const displayedPages = computed(() => {
  if (props.totalPages <= 3) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1);
  }

  if (props.currentPage <= 2) {
    return [1, 2, 3, "...", props.totalPages];
  }

  if (props.currentPage >= props.totalPages - 1) {
    return [
      1,
      "...",
      props.totalPages - 2,
      props.totalPages - 1,
      props.totalPages,
    ];
  }

  return [1, "...", props.currentPage, "...", props.totalPages];
});
</script>