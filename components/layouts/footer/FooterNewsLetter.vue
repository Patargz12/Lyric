<template>
  <div class="space-y-4">
    <h3 class="text-white text-lg font-semibold">
      Stay in the Loop with our Music Newsletter
    </h3>
    <p class="text-white">
      Sign up for our newsletter and be the first to know about exclusive
      offers, new arrivals, upcoming events, and music tips.
    </p>

    <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
      <div class="flex flex-col w-full">
        <label for="email" class="text-white mb-1"> Email Address </label>
        <div class="flex gap-2">
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="Enter your email address"
            class="flex-1 px-4 py-2 rounded bg-transparent border border-white text-white focus:outline-none placeholder-white placeholder-opacity-50"
          />
          <button
            type="submit"
            class="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const email = ref("");

const handleSubmit = () => {
  console.log("Newsletter subscription:", email.value);
};
</script>