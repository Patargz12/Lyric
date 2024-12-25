<template>
  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-2">
      <h3 class="text-white font-semibold text-lg uppercase mb-4">
        Categories
      </h3>
      <div class="grid grid-cols-2 gap-x-8 gap-y-2">
        <NuxtLink
          v-for="link in categoryLinks"
          :key="link.text"
          :to="link.url"
          class="text-white hover:underline"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
    <div>
      <h3 class="text-white font-semibold text-lg uppercase mb-4">About</h3>
      <ul class="space-y-2">
        <li v-for="link in aboutLinks" :key="link.text">
          <NuxtLink :to="link.url" class="text-white hover:underline">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const categoryLinks = [
  { text: "Acoustic Guitars", url: "/category/acoustic-guitars" },
  { text: "Amplifier", url: "/category/amplifier" },
  { text: "Bass Guitar", url: "/category/bass-guitar" },
  { text: "Drums", url: "/category/drums" },
  { text: "Electric Guitar", url: "/category/electric-guitar" },
  { text: "Folk and Wind", url: "/category/folk-and-wind" },
  { text: "Keyboards", url: "/category/keyboards" },
  { text: "Piano - Acoustic", url: "/category/piano-acoustic" },
  { text: "Piano - Digital", url: "/category/piano-digital" },
  { text: "Audio & Recording", url: "/category/audio-recording" },
  { text: "String", url: "/category/string" },
];

const aboutLinks = [
  { text: "News and Events", url: "/news" },
  { text: "About", url: "/about" },
  { text: "Contacts Us", url: "/contact" },
  { text: "Clearance", url: "/clearance" },
  { text: "Sale", url: "/sale" },
];
</script>