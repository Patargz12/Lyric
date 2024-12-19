<template>
  <div>
    <!-- Main Cookie Banner -->
    <Transition name="slide-up">
      <div
        v-if="showBanner"
        class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-8 shadow-lg z-50"
      >
        <div
          class="container mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div class="flex-1">
            <h2 class="text-h2 font-semibold mb-2">We value your privacy</h2>
            <p class="text-gray-600 text-sm">
              We and our partners use cookies and other technologies to improve
              your experience, measure performance, and tailor marketing.
              Details in our
              <a href="/privacy-policy" class="text-blue-600 hover:underline"
                >Privacy Policy</a
              >
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            <button
              @click="showPreferences = true"
              class="px-4 py-2 text-sm border border-gray-300 hover:bg-gray-50 rounded transition-colors"
            >
              MANAGE PREFERENCES
            </button>
            <secondary-button variant="no-icon" @click="handleDecline" class="">
              DECLINE
            </secondary-button>

            <base-button variant="center" @click="handleAccept" class="">
              ACCEPT
            </base-button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Preferences Modal -->
    <Transition name="fade">
      <div
        v-if="showPreferences"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      >
        <div
          class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 overflow-hidden"
        >
          <div class="p-6">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-semibold">Cookie Preferences</h3>
              <button
                @click="showPreferences = false"
                class="text-gray-400 hover:text-gray-600"
              >
                <XIcon class="h-5 w-5" />
              </button>
            </div>

            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-medium">Essential Cookies</h4>
                  <p class="text-sm text-gray-500">
                    Required for the website to function properly
                  </p>
                </div>
                <div class="relative">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    class="h-4 w-4 rounded border-gray-300"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-medium">Analytics Cookies</h4>
                  <p class="text-sm text-gray-500">
                    Help us improve our website by collecting usage information
                  </p>
                </div>
                <div class="relative">
                  <input
                    v-model="preferences.analytics"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-medium">Marketing Cookies</h4>
                  <p class="text-sm text-gray-500">
                    Used to deliver personalized advertisements
                  </p>
                </div>
                <div class="relative">
                  <input
                    v-model="preferences.marketing"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div class="mt-8 flex justify-end gap-2">
              <button @click="showPreferences = false">Cancel</button>
              <button @click="savePreferences">Save Preferences</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { XIcon } from "lucide-vue-next";
import BaseButton from "~/components/buttons/BaseButton.vue";
import SecondaryButton from "~/components/buttons/SecondaryButton.vue";

// Cookie preferences state
const showBanner = ref(true);
const showPreferences = ref(false);
const preferences = ref({
  essential: true, // Always true
  analytics: false,
  marketing: false,
});

// Check if user has already made a choice
onMounted(() => {
  const savedPreferences = localStorage.getItem("cookiePreferences");
  if (savedPreferences) {
    showBanner.value = false;
    preferences.value = {
      ...preferences.value,
      ...JSON.parse(savedPreferences),
    };
  }
});

// Handle user choices
const handleAccept = () => {
  preferences.value = {
    essential: true,
    analytics: true,
    marketing: true,
  };
  savePreferences();
};

const handleDecline = () => {
  preferences.value = {
    essential: true,
    analytics: false,
    marketing: false,
  };
  savePreferences();
};

const savePreferences = () => {
  localStorage.setItem("cookiePreferences", JSON.stringify(preferences.value));
  showBanner.value = false;
  showPreferences.value = false;

  emit("preferencesUpdated", preferences.value);
};

const emit = defineEmits(["preferencesUpdated"]);
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>