<template>
  <footer class="bg-primary-500 text-white">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Contact Section -->
        <div class="space-y-6">
          <h2 class="text-4xl font-bold">LYRIC</h2>
          <div class="space-y-4">
            <a
              href="https://maps.google.com/?q=80 Florentina Bldg. Main Horseshoe Drive corner N. Domingo Streeet, New Manila, Quezon City"
              target="_blank"
              class="flex items-start space-x-2 hover:text-gray-200 transition-colors"
            >
              <MapPinIcon class="h-6 w-6 flex-shrink-0 mt-1" />
              <span
                >80 Florentina Bldg. Main Horseshoe Drive corner N. Domingo
                Streeet, New Manila, Quezon City</span
              >
            </a>
            <a
              href="tel:+639475547102"
              target="_blank"
              class="flex items-center space-x-2 hover:text-gray-200 transition-colors"
            >
              <PhoneIcon class="h-5 w-5" />
              <span>+63 947 5547 102</span>
            </a>
            <a
              href="mailto:lyric_ph@email.com"
              target="_blank"
              class="flex items-center space-x-2 hover:text-gray-200 transition-colors"
            >
              <MailIcon class="h-5 w-5" />
              <span>lyric_ph@email.com</span>
            </a>
          </div>
          <!-- Social Media Links -->
          <div class="flex space-x-4">
            <a href="#" class="hover:text-gray-200 transition-colors">
              <InstagramIcon class="h-6 w-6" />
            </a>
            <a href="#" class="hover:text-gray-200 transition-colors">
              <FacebookIcon class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Categories Column -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Categories</h3>
          <ul class="space-y-2">
            <li v-for="category in categories" :key="category">
              <a
                :href="`#${category.toLowerCase()}`"
                class="hover:text-gray-200 transition-colors"
                >{{ category }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Links Column -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link">
              <a
                :href="`#${link.toLowerCase()}`"
                class="hover:text-gray-200 transition-colors"
                >{{ link }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Newsletter Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            Stay in the Loop with our Music Newsletter
          </h3>
          <p class="mb-4 text-sm">
            Sign up for our newsletter and be the first to know about exclusive
            offers, new arrivals, upcoming events, and music tips.
          </p>
          <form @submit.prevent="subscribeToNewsletter" class="space-y-3">
            <div class="flex flex-col space-y-2">
              <label for="email" class="text-sm">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Enter your email address"
                class="px-4 py-2 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-white"
              />
            </div>
            <button
              type="submit"
              class="bg-white text-primary-500 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-white/20">
      <div
        class="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm"
      >
        <p>&copy; 2024 LYRIC. All Rights Reserved.</p>
        <div class="flex space-x-4 mt-2 md:mt-0">
          <a href="#terms" class="hover:text-gray-200 transition-colors"
            >Terms of Use</a
          >
          <span>•</span>
          <a href="#privacy" class="hover:text-gray-200 transition-colors"
            >Privacy Policy</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-vue-next";

const email = ref("");

const categories = [
  "Acoustic Guitars",
  "Amplifier",
  "Bass Guitar",
  "Drums",
  "Electric Guitar",
  "Folk and Wind",
  "Keyboards",
  "Piano - Acoustic",
];

const links = [
  "Piano - Digital",
  "Audio & Recording",
  "String",
  "Clearance",
  "Sale",
  "News and Events",
  "About",
  "Contacts Us",
];

const subscribeToNewsletter = () => {
  // Handle newsletter subscription
  console.log("Subscribing email:", email.value);
  email.value = "";
};
</script>