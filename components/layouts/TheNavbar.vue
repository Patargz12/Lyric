<template>
  <div>
    <!-- Top contact bar -->
    <div class="bg-gray-900 text-gray-300 px-4 py-2 text-sm">
      <div class="container mx-auto">
        Need any help? Contact us at
        <a href="tel:(02)8654-5740" class="hover:text-white">(02)8654 - 5740</a>
        or
        <a href="mailto:lyric@email.com" class="hover:text-white"
          >lyric@email.com</a
        >
      </div>
    </div>

    <!-- Main header -->
    <header class="bg-white">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <NuxtImg src="/lyric_logo.png" class="h-16 w-34" />
            </NuxtLink>
            <hr class="w-px h-20 mx-4 bg-gray-500 border-none" />
            <div class="text-gray-600 mx-8">
              <div class="text-sm">TALK TO AN EXPERT</div>
              <a
                target="_blank"
                href="tel:+639237029349"
                class="text-lg h2 flex font-bold items-center"
              >
                <Phone class="h4 w-4 mr-2" />
                +639237029349
              </a>
            </div>
          </div>

          <!-- Icons -->
          <div class="flex items-center space-x-4">
            <!-- Main navigation -->
            <nav class="hidden lg:flex items-center mx-8 space-x-6">
              <NuxtLink
                v-for="link in mainLinks"
                :key="link.text"
                :to="link.href"
                class="text-gray-700 font-semibold hover:text-gray-900"
              >
                {{ link.text }}
              </NuxtLink>
            </nav>
            <button class="text-gray-700 hover:text-gray-900">
              <Search class="h-6 w-6" />
            </button>
            <button class="text-gray-700 hover:text-gray-900">
              <ShoppingCart class="h-6 w-6" />
            </button>
            <button class="text-gray-700 hover:text-gray-900">
              <User class="h-6 w-6" />
            </button>
            <button
              class="lg:hidden text-gray-700 hover:text-gray-900"
              @click="isMobileMenuOpen = true"
            >
              <Menu class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Categories navigation -->
    <NavigationMenu>
      <nav class="bg-white border-2">
        <div class="container mx-auto px-4">
          <div class="hidden lg:flex items-center justify-between">
            <div
              v-for="category in categoryLinks"
              :key="category.text"
              class="relative group py-4"
            >
              <button
                class="flex items-center font-semibold text-gray-700 hover:text-gray-900"
              >
                {{ category.text }}
                <ChevronDown class="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </NavigationMenu>

    <!-- Mobile menu -->
    <div class="lg:hidden">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50"
        @click="isMobileMenuOpen = false"
      ></div>
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
        :class="{
          'translate-x-0': isMobileMenuOpen,
          'translate-x-full': !isMobileMenuOpen,
        }"
      >
        <div class="p-4">
          <button
            class="absolute top-4 right-4 text-gray-700"
            @click="isMobileMenuOpen = false"
          >
            <X class="h-6 w-6" />
          </button>
          <nav class="mt-8 space-y-4">
            <NuxtLink
              v-for="link in mainLinks"
              :key="link.text"
              :to="link.href"
              class="block text-gray-700 hover:text-gray-900"
            >
              {{ link.text }}
            </NuxtLink>
            <hr class="my-4" />
            <NuxtLink
              v-for="category in categoryLinks"
              :key="category.text"
              to="#"
              class="block text-gray-700 hover:text-gray-900"
            >
              {{ category.text }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Phone,
} from "lucide-vue-next";

const isMobileMenuOpen = ref(false);

const mainLinks = [
  { text: "ABOUT US", href: "/about" },
  { text: "NEWS & EVENTS", href: "/news" },
  { text: "CONTACT US", href: "/contact" },
];

const categoryLinks = [
  { text: "WHAT'S NEW" },
  { text: "DEALS" },
  { text: "SHOP BY CATEGORY" },
  { text: "BRANDS" },
  { text: "LESSONS" },
  { text: "SERVICES" },
  { text: "SOLUTIONS" },
];
</script>
