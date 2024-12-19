<template>
  <div class="absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t">
    <div class="container mx-auto">
      <!-- Default What's New Dropdown -->
      <template v-if="content.type === 'default'">
        <div class="py-8">
          <h2 class="text-xl font-medium mb-6 px-4">{{ content.title }}</h2>
          <div class="grid grid-cols-3 gap-8">
            <div v-for="(item, index) in content.items" :key="index">
              <h3 class="font-medium mb-2">
                <NuxtLink :to="item.link" class="hover:text-primary">
                  {{ item.title }}
                </NuxtLink>
              </h3>
              <!-- Add more content or links here if needed -->
            </div>
          </div>
        </div>
      </template>

      <!-- Other dropdown types -->
      <template v-else>
        <div class="p-8">
          <p class="text-gray-500">Content coming soon...</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      type: 'default',
      title: "What's New",
      items: []
    })
  }
})
</script>