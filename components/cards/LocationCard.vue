<template>
  <div class="overflow-hidden rounded-lg bg-white shadow">
    <div class="h-72 overflow-hidden">
      <img
        :src="location.image"
        :alt="location.name"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <div class="p-6">
      <h2 class="mb-4 text-xl font-bold text-gray-900">{{ location.name }}</h2>

      <div class="space-y-3">
        <div class="flex items-start gap-3">
          <MapPin class="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
          <span class="text-sm text-gray-600">{{ location.address }}</span>
        </div>

        <div class="flex items-center gap-3">
          <Phone class="h-5 w-5 flex-shrink-0 text-red-500" />
          <a
            :href="`tel:${location.phone}`"
            class="text-sm text-gray-600 hover:text-gray-900"
          >
            {{ location.phone }}
          </a>
        </div>

        <div class="flex items-center gap-3">
          <Globe class="h-5 w-5 flex-shrink-0 text-red-500" />
          <a
            :href="location.website"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-gray-600 hover:text-gray-900"
          >
            {{ location.website }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Phone, Globe } from "lucide-vue-next";
import type { Location } from "~/types/location";

defineProps<{
  location: Location;
}>();
</script>

<style scoped>
.overflow-hidden img {
  pointer-events: none;
  user-select: none;
}
</style>

