<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      v-show="isOpen"
      class="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        @click="close"
      ></div>

      <!-- Modal -->
      <div class="flex min-h-screen items-center justify-center p-4">
        <div
          class="relative w-full max-w-[1000px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <!-- Close button -->
          <button
            @click="close"
            class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Close modal"
          >
            <XIcon class="h-6 w-6" />
          </button>

          <div class="flex flex-col md:flex-row">
            <!-- Image Section -->
            <div class="w-full md:w-[45%] p-4 md:p-8">
              <div
                class="aspect-[3/4] relative w-full overflow-hidden rounded-lg"
              >
                <img
                  :src="service.image"
                  :alt="service.title"
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Content Section -->
            <div class="md:py-8 w-full md:w-[55%]">
              <h2 class="text-2xl md:text-[28px] font-bold text-gray-900 mb-4">
                {{ service.title }}
              </h2>
              <p class="text-gray-600 mb-8 leading-relaxed mr-16">
                {{ service.modal_description }}
              </p>

              <!-- Benefits list -->
              <ul class="space-y-6 mb-8">
                <li
                  v-for="benefit in service.benefits"
                  :key="benefit.title"
                  class="flex items-start"
                >
                  <span class="mr-3 text-lg">•</span>
                  <div>
                    <h3 class="font-bold text-gray-900">
                      {{ benefit.title }}:
                    </h3>
                    <p class="text-gray-600">
                      {{ benefit.description }}
                    </p>
                  </div>
                </li>
              </ul>

              <!-- CTA Button -->
              <div class="flex justify-start">
                <button
                  @click="inquire"
                  class="inline-flex bg-gray-900 text-white uppercase text-sm font-bold py-3 px-8 rounded hover:bg-gray-800 transition-colors duration-200"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { XIcon } from "lucide-vue-next";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close", "inquire"]);

const close = () => {
  emit("close");
};

const inquire = () => {
  emit("inquire", props.service);
};
</script>