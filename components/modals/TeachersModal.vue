<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <div class="bg-white max-w-5xl w-full relative">
        <button
          @click="$emit('close')"
          class="absolute right-8 top-8 text-gray-500 hover:text-gray-700"
        >
          <XIcon class="w-6 h-6" />
        </button>

        <!-- Modal Content -->
        <div class="flex flex-col md:flex-row">
          <!-- Image Section - Remove padding -->
          <div class="md:w-[400px]">
            <NuxtImg
              :src="teacher.imageUrl"
              :alt="teacher.name"
              class="w-full h-full px-12 py-12 object-cover"
            />
          </div>

          <!-- Content Section - Adjust padding and spacing -->
          <div class="px-2 py-10 flex-1">
            <h2 class="text-2xl font-bold mb-1">
              {{ teacher.title }} {{ teacher.name }}
            </h2>
            <h3 class="text-gray-600 font-bold mb-8">
              {{ teacher.specialization }} Teacher
            </h3>

            <div class="space-y-6">
              <p class="text-gray-800 leading-relaxed">
                {{ teacher.education }}
              </p>
              <p class="text-gray-800 leading-relaxed">
                {{ teacher.experience }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { XIcon } from "lucide-vue-next";

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  teacher: {
    type: Object,
    required: true,
  },
});

defineEmits(["close"]);
</script>