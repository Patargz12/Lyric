<template>
  <nav class="flex justify-center mb-8 mt-12">
    <ul class="inline-flex items-center gap-6">
      <li v-for="category in categories" :key="category.name">
        <NuxtLink
          :to="category.path"
          :class="[
            'px-3 py-3 text-lg transition-colors border border-gray-200',
            isActiveTab(category.path)
              ? 'bg-[#E23D3D] text-white border-transparent'
              : 'bg-white text-gray-900 hover:bg-gray-50',
          ]"
        >
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute();

const categories = [
  { name: "News", path: "/news" },
  { name: "Blog", path: "/blogs" },
  { name: "Event", path: "/events" },
  { name: "Press", path: "/press" },
];

// Enhanced active state logic
const isActiveTab = (path) => {
  // If we're at root or /news, make News tab active
  if (route.path === "/" || route.path === "/News") {
    return path === "News";
  }
  // For other paths, match exactly
  return route.path === path;
};

// Ensure redirect to news happens on root path
onMounted(() => {
  if (route.path === "/") {
    navigateTo("/News", { replace: true });
  }
});

// Watch route changes to handle navigation
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      navigateTo("/news", { replace: true });
    }
  },
  { immediate: true }
);
</script>