<template>
  <div>
    <div class="space-y-4">
      <div class="flex items-start space-x-2">
        <div class="text-white mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <a
          href="https://www.google.com/maps?q=80+Florentina+Bldg,+Main+Horseshoe+Drive+corner+N.+Domingo+Street,+New+Manila,+Quezon+City"
          target="_blank"
          class="text-white"
        >
          80 Florentina Bldg, Main Horseshoe Drive corner<br />N. Domingo
          Street, New Manila, Quezon City
        </a>
      </div>
      <div class="flex items-center space-x-2">
        <div class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <a
          href="tel:+639475547102"
          target="_blank"
          class="text-white hover:underline"
          >+63 947 5547 102</a
        >
      </div>
      <div class="flex items-center space-x-2">
        <div class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <a
          href="mailto:lyric_ph@email.com"
          target="_blank"
          class="text-white hover:underline"
          >lyric_ph@email.com</a
        >
      </div>
    </div>
    <div class="flex space-x-4 mt-12">
      <a
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white hover:text-gray-200 transition-colors"
      >
        <font-awesome-icon :icon="social.icon" class="w-6 h-6" />
      </a>
    </div>
  </div>
</template>

<script setup>
const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/lyricphilippines",
    icon: ["fab", "instagram"],
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/lyricph",
    icon: ["fab", "facebook"],
  },
];
</script>