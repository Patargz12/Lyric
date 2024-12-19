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
    <header class="bg-white border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <NuxtImg src="/lyric_logo.png" class="h-16 w-34"> </NuxtImg>
            </NuxtLink>
            <hr class="w-px h-20 mx-4 bg-gray-500 border-none" />
            <div class="text-gray-600 mx-8">
              <div class="text-sm">TALK TO AN EXPERT</div>
              <a
                href="tel:+639237029349"
                class="text-lg h2 flex font-bold items-center"
              >
                <Phone class="h4 w-4 mr-2" />
                +639237029349
              </a>
            </div>
          </div>

          <!-- Talk to expert section -->
          <div class="hidden md:flex items-center"></div>

          <!-- Main navigation -->
          <nav class="hidden lg:flex items-center space-x-8"></nav>

          <!-- Icons -->
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/About"
              class="text-gray-700 font-semibold hover:text-gray-900"
              >ABOUT US</NuxtLink
            >
            <NuxtLink
              href="/news"
              class="text-gray-700 font-semibold hover:text-gray-900"
              >NEWS & EVENTS</NuxtLink
            >
            <NuxtLink
              href="/contact"
              class="text-gray-700 font-semibold hover:text-gray-900"
              >CONTACT US</NuxtLink
            >
            <button class="text-gray-700 hover:text-gray-900">
              <Search class="h-6 w-6" />
            </button>
            <button class="text-gray-700 hover:text-gray-900">
              <ShoppingCart class="h-6 w-6" />
            </button>
            <button class="text-gray-700 hover:text-gray-900">
              <User class="h-6 w-6" />
            </button>
            <button class="lg:hidden text-gray-700 hover:text-gray-900">
              <Menu class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Categories navigation -->
    <NavigationMenu>
      <nav class="bg-white shadow">
        <div class="container mx-auto px-4">
          <div class="hidden lg:flex items-center justify-between">
            <div class="relative group py-4">
              <button
                class="flex items-center font-semibold text-gray-700 hover:text-gray-900"
              >
                WHAT'S NEW
                <ChevronDown class="h-4 w-4 ml-1" />
              </button>
            </div>
            <div class="relative group py-4">
              <button
                class="flex items-center font-semibold text-gray-700 hover:text-gray-900"
              >
                DEALS
                <ChevronDown class="h-4 w-4 ml-1" />
              </button>
            </div>
            <div class="relative group py-4">
              <button
                class="flex items-center font-semibold text-gray-700 hover:text-gray-900"
              >
                SHOP BY CATEGORY
                <ChevronDown class="h-4 w-4 ml-1" />
              </button>
            </div>
            <div class="relative group py-4">
              <button
                class="flex items-center font-semibold text-gray-700 hover:text-gray-900"
              >
                BRANDS
                <ChevronDown class="h-4 w-4 ml-1" />
              </button>
            </div>
            <div class="relative group py-4">
              <button
                class="flex items-center text-gray-700 font-semibold hover:text-gray-900"
              >
                LESSONS
                <ChevronDown class="h-4 w-4 ml-1" />
              </button>
            </div>
            <div class="relative group py-4">
              <button
                class="flex items-center font-semibold text-gray-700 hover:text-gray-900"
              >
                SERVICES
                <ChevronDown class="h-4 w-4 ml-1" />
              </button>
            </div>
            <div class="relative group py-4">
              <button
                class="flex items-center text-gray-700 font-semibold hover:text-gray-900"
              >
                SOLUTIONS
                <ChevronDown class="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </NavigationMenu>

    <!-- Mobile menu (hidden by default) -->
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
            <a href="/about" class="block text-gray-700 hover:text-gray-900"
              >ABOUT US</a
            >
            <a href="/news" class="block text-gray-700 hover:text-gray-900"
              >NEWS & EVENTS</a
            >
            <a href="/contact" class="block text-gray-700 hover:text-gray-900"
              >CONTACT US</a
            >
            <hr class="my-4" />
            <a href="#" class="block text-gray-700 hover:text-gray-900"
              >WHAT'S NEW</a
            >
            <a href="#" class="block text-gray-700 hover:text-gray-900"
              >DEALS</a
            >
            <a href="#" class="block text-gray-700 hover:text-gray-900"
              >SHOP BY CATEGORY</a
            >
            <a href="#" class="block text-gray-700 hover:text-gray-900"
              >BRANDS</a
            >
            <a href="#" class="block text-gray-700 hover:text-gray-900"
              >LESSONS</a
            >
            <a href="#" class="block text-gray-700 hover:text-gray-900"
              >SERVICES</a
            >
            <a href="#" class="block text-gray-700 hover:text-gray-900"
              >SOLUTIONS</a
            >
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
  Music,
  Phone,
} from "lucide-vue-next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const isMobileMenuOpen = ref(false);
</script>