<template>
  <div
    class="relative w-full overflow-hidden bg-white border-y border-gray-200"
  >
    <div class="flex animate-scroll-left">
      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="flex items-center justify-center mx-12 min-w-[120px]"
      >
        <img :src="logo.src" :alt="logo.name" class="h-24 object-contain" />
      </div>

      <div
        v-for="(logo, index) in logos"
        :key="'clone-' + index"
        class="flex items-center justify-center mx-12 min-w-[120px]"
      >
        <img :src="logo.src" :alt="logo.name" class="h-24 object-contain" />
      </div>
      <div
        v-for="(logo, index) in logos"
        :key="'clone-' + index"
        class="flex items-center justify-center mx-12 min-w-[120px]"
      >
        <img :src="logo.src" :alt="logo.name" class="h-24 object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { name: "Elixir", src: "/aa_logo.png" },
  { name: "Nord", src: "/akg_logo.png" },
  { name: "Marshall", src: "elixir_logo.png" },
  { name: "Meinl", src: "gret_logo.png" },
  { name: "AKG", src: "jbl_logo.png" },
  { name: "Gretsch", src: "marshall_logo.png" },
  { name: "PRS", src: "prs_logo.png" },
];
</script>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll-left {
  display: flex;
  animation: scroll 20s linear infinite;
  will-change: transform;
}

.flex {
  display: flex;
  min-width: fit-content;
}
</style>
