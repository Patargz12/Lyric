<template>
  <div class="rounded-lg bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-gray-900">{{ event.title }}</h2>
      <p class="mt-1 text-sm text-gray-500">{{ event.daysLeft }} days left</p>
    </div>

    <div class="space-y-4">
      <div class="flex items-start gap-3">
        <MapPin class="mt-1 h-4 w-4 text-red-500" />
        <span class="text-sm text-gray-700">{{ event.location }}</span>
      </div>

      <div class="flex items-start gap-3">
        <Clock class="mt-1 h-4 w-4 text-red-500" />
        <span class="text-sm text-gray-700">{{ event.time }}</span>
      </div>

      <div class="flex items-start gap-3">
        <Calendar class="mt-1 h-4 w-4 text-red-500" />
        <span class="text-sm text-gray-700">{{ event.date }}</span>
      </div>
    </div>
   
    <p class="mt-6 text-sm text-gray-500">
         <hr class = "mb-4" />
      {{ event.additionalInfo || "No information available" }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Clock, Calendar } from "lucide-vue-next";
import type { RecitalEvent } from "~/types/recital";

defineProps<{
  event: RecitalEvent;
}>();
</script>