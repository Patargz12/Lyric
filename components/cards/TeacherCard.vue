<template>
  <div
    class="flex flex-col cursor-pointer transform transition-all duration-300 hover:scale-[1.02] group"
    @click="$emit('click')"
  >
    <div class="relative">
      <img
        :src="imageUrl"
        :alt="name"
        class="w-full aspect-[3/4] object-cover mb-4 ring-2 ring-transparent group-hover:ring-primary-500"
      />
    </div>
    <h3 class="font-bold text-lg">{{ title }} {{ name }}</h3>
    <p class="text-gray-600">{{ specialization }}</p>
  </div>
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Mr.",
  },
  specialization: {
    type: String,
    required: true,
  },
});

defineEmits(["click"]);
</script>