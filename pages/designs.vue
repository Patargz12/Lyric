<template>
  <div class="container mx-auto py-8">
    <section class="space-x-4 mb">
      <h1 class="text-h1 mb-4 font-semibold">Buttons</h1>
      <!-- Left icon button -->
      <h2 class="text-xl font-bold mb-4 mt-4">Primary</h2>
      <base-button variant="left"> Button Text </base-button>

      <!-- Center button (no icon) -->
      <base-button variant="center"> Button Text </base-button>

      <!-- Right icon button -->
      <base-button variant="right"> Button Text </base-button>

      <!-- Custom icons example -->
      <base-button variant="left" :showDefaultIcon="false">
        <template #icon-left>
          <ArrowLeftIcon class="w-5 h-5 mr-2" />
        </template>
        Custom Icon
      </base-button>
      <h2 class="text-xl font-bold mb-4 mt-4">Secondary</h2>

      <secondary-button variant="left">Default</secondary-button>
      <secondary-button variant="no-icon">Default</secondary-button>
      <secondary-button variant="left" :icon="ArrowLeft">Back</secondary-button>
      <secondary-button variant="right">Default</secondary-button>
    </section>
    <!-- Typography Section -->
    <section class="mb-12">
      <h1 class="text-h1 mb-4 font-semibold">Typography</h1>
      <div class="space-y-8">
        <!-- Display each font size with examples -->
        <div>
          <h2 class="text-h2 font-semibold mb-4">Font Sizes</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="font in fonts"
              :key="font.name"
              class="border p-4 rounded"
            >
              <p :class="font.class" class="mb-2">{{ font.name }}</p>
              <p class="text-sm text-gray-600">
                Class: <code>{{ font.class }}</code>
              </p>
            </div>
          </div>
        </div>

        <!-- Font Weights -->
        <div>
          <h2 class="text-h2 font-semibold mb-4">Font Weights</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="weight in fontWeights"
              :key="weight.name"
              class="border p-4 rounded"
            >
              <p :class="weight.class" class="mb-2">{{ weight.name }}</p>
              <p class="text-sm text-gray-600">
                Class: <code>{{ weight.class }}</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h1 class="text-h1 mb-4 font-semibold">Colors</h1>

      <div class="mb-8">
        <h2 class="text-h2 font-semibold mb-4">Brand Colors</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(value, name) in colors.brand"
            :key="name"
            class="text-center border rounded p-4"
          >
            <div
              :style="{ backgroundColor: value }"
              class="w-full h-16 rounded mb-2"
            ></div>
            <p class="text-sm font-medium">{{ name }}</p>
            <p class="text-xs text-gray-600">{{ value }}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-h2 font-semibold mb-4">Semantic Colors</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(value, name) in colors.semantic"
            :key="name"
            class="text-center border rounded p-4"
          >
            <div
              :style="{ backgroundColor: value }"
              class="w-full h-16 rounded mb-2"
            ></div>
            <p class="text-sm font-medium">{{ name }}</p>
            <p class="text-xs text-gray-600">{{ value }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseButton from "~/components/Buttons/BaseButton.vue";
import SecondaryButton from "~/components/Buttons/SecondaryButton.vue";
import { ArrowLeftIcon } from "lucide-vue-next";

import { ref } from "vue";

const fonts = ref([
  { name: "Display", class: "text-display font-bold" },
  { name: "H1", class: "text-h1 font-semibold" },
  { name: "H2", class: "text-h2 font-semibold" },
  { name: "H3", class: "text-h3 font-semibold" },
  { name: "Text LG", class: "text-lg" },
  { name: "Text MD", class: "text-md" },
  { name: "Text SM", class: "text-sm" },
  { name: "Text XS", class: "text-xs" },
  { name: "Caption", class: "text-caption" },
]);

const fontWeights = ref([
  { name: "Bold", class: "font-bold" },
  { name: "Semibold", class: "font-semibold" },
  { name: "Medium", class: "font-medium" },
  { name: "Regular", class: "font-regular" },
]);

const colors = ref({
  brand: {
    primary: "#DA4848",
    pressed: "#B23B3B",
    hovered: "#FF5454",
    disabled: "#DA48481A",
  },
  semantic: {
    info: "#2780ED",
    success: "#4CAF50",
    warning: "#F59638",
    error: "#ED2227",
  },
});
</script>

<style>
.container {
  max-width: 1200px;
}
</style>
