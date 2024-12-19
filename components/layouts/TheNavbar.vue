<template>
  <div class="w-full">
    <!-- Top Banner -->
    <div class="w-full bg-black text-white px-4 py-2 text-sm">
      <div class="container mx-auto">
        Need any help? Contact us at (02)8854 - 5740 or lyric@email.com
      </div>
    </div>

    <!-- Main Header -->
    <header class="border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-8">
            <img src="/lyric_logo.png" alt="Lyric" class="h-12" />
            <div class="flex flex-col">
              <span class="text-sm text-gray-600">TALK TO AN EXPERT</span>
              <span class="font-medium">+639237028349</span>
            </div>
          </div>

          <!-- Utility Navigation -->
          <div class="flex items-center space-x-6">
            <router-link to="/about" class="text-sm hover:text-primary">ABOUT US</router-link>
            <router-link to="/news" class="text-sm hover:text-primary">NEWS & EVENTS</router-link>
            <div class="relative">
              <button class="text-sm hover:text-primary flex items-center">
                CONTACT US
                <ChevronDownIcon class="h-4 w-4 ml-1" />
              </button>
            </div>
            <button class="hover:text-primary">
              <SearchIcon class="h-6 w-6" />
            </button>
            <button class="hover:text-primary">
              <ShoppingCartIcon class="h-6 w-6" />
            </button>
            <button class="hover:text-primary">
              <UserIcon class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Navigation -->
    <nav class="border-b relative" ref="navRef">
      <div class="container mx-auto">
        <ul class="flex">
          <li 
            v-for="(item, index) in navigationItems" 
            :key="index" 
            class="relative"
            @mouseenter="openDropdown(index)"
            @click="toggleDropdown(index)"
          >
            <button 
              class="px-6 py-4 flex items-center text-sm hover:text-primary"
              :class="{ 'border-b-2 border-black': activeDropdown === index }"
            >
              {{ item.label }}
              <ChevronDownIcon v-if="item.hasDropdown" class="h-4 w-4 ml-1" />
            </button>
          </li>
        </ul>
      </div>

      <!-- Dropdown Container -->
      <NavigationDropdown 
        v-if="activeDropdown !== null"
        :content="navigationItems[activeDropdown].dropdownContent"
      />
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDownIcon, ShoppingCartIcon, UserIcon, SearchIcon } from 'lucide-vue-next'
import { onClickOutside } from '@vueuse/core'
import NavigationDropdown from '~/components/layouts/NavComponents/NavigationDropdown.vue'

const activeDropdown = ref(null)
const navRef = ref(null)

const openDropdown = (index) => {
  if (navigationItems.value[index].hasDropdown) {
    activeDropdown.value = index
  }
}

const toggleDropdown = (index) => {
  if (navigationItems.value[index].hasDropdown) {
    activeDropdown.value = activeDropdown.value === index ? null : index
  }
}

const closeDropdown = () => {
  activeDropdown.value = null
}

onClickOutside(navRef, closeDropdown)

const navigationItems = ref([
  {
    label: "WHAT'S NEW",
    hasDropdown: true,
    dropdownContent: {
      type: 'default',
      title: "What's New",
      items: [
        { title: 'New Arrival', link: '/new-arrival' },
        { title: 'News and Events', link: '/news' },
        { title: 'Subscribe to our newsletter', link: '/subscribe' }
      ]
    }
  },
  {
    label: 'DEALS',
    hasDropdown: true,
    dropdownContent: {
      type: 'deals',
      items: []
    }
  },
  {
    label: 'SHOP BY CATEGORY',
    hasDropdown: true,
    dropdownContent: {
      type: 'shop_category',
      mainCategories: [
        { name: 'Musical Instruments', link: '/musical-instruments' },
        { name: 'Pro-Audio and Visuals', link: '/pro-audio' },
        { name: 'Spare Parts', link: '/spare-parts' },
        { name: 'Books', link: '/books' }
      ]
    }
  },



  
  {
    label: 'BRANDS',
    hasDropdown: true,
    dropdownContent: {
      type: 'brands',
      items: []
    }
  },
  {
    label: 'LESSONS',
    hasDropdown: true,
    dropdownContent: {
      type: 'lessons',
      items: []
    }
  },
  {
    label: 'SERVICES',
    hasDropdown: true,
    dropdownContent: {
      type: 'services',
      items: []
    }
  },
  {
    label: 'SOLUTIONS',
    hasDropdown: false
  }
])
</script>