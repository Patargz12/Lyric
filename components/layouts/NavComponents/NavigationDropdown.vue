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
                <router-link :to="item.link" class="hover:text-primary">
                  {{ item.title }}
                </router-link>
              </h3>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </template>

      <!-- Shop by Category Dropdown -->
      <template v-else-if="content.type === 'shop_category'">
        <div class="flex">
          <!-- Left Sidebar -->
          <div class="w-64 bg-gray-50 py-6 border-r">
            <ul class="space-y-1">
              <li v-for="(category, index) in content.mainCategories" :key="index">
                <button 
                  @click="selectedCategory = category.id"
                  class="w-full flex items-center justify-between px-6 py-2 hover:bg-gray-100 text-left"
                  :class="{ 'bg-gray-100': selectedCategory === category.id }"
                >
                  <span>{{ category.name }}</span>
                  <ChevronRightIcon class="h-4 w-4" />
                </button>
              </li>
            </ul>
            <!-- Promo Section -->
            <div class="mt-6 px-4">
              <div class="relative rounded-lg overflow-hidden">
                <img 
                  src="/nav_pic1.png" 
                  alt="Musical Instruments" 
                  class="w-full h-48 object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70">
                  <h3 class="text-white font-medium text-sm">Discover Our Best-Selling Instruments!</h3>
                  <router-link 
                    to="/best-selling" 
                    class="text-blue-400 text-sm hover:text-blue-300"
                  >
                    Read More
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Dynamic Content Area -->
          <div class="flex-1 p-6">
            <div class="grid" :class="selectedCategory === 'pro-audio' ? 'grid-cols-4' : 'grid-cols-5'">
              <!-- Musical Instruments Content -->
              <template v-if="selectedCategory === 'musical-instruments'">
                <!-- Accessories Column -->
                <div>
                  <h3 class="font-medium mb-3">Accessories</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/accessories/guitar" class="hover:text-primary">Guitar Accessories</router-link></li>
                    <li><router-link to="/accessories/strings" class="hover:text-primary">Strings</router-link></li>
                    <li><router-link to="/accessories/keyboard" class="hover:text-primary">Keyboard Accessories</router-link></li>
                    <li><router-link to="/accessories/drum" class="hover:text-primary">Drum Accessories</router-link></li>
                    <li><router-link to="/accessories/brass" class="hover:text-primary">Brass Accessories</router-link></li>
                    <li><router-link to="/accessories/woodwind" class="hover:text-primary">Woodwind Accessories</router-link></li>
                    <li><router-link to="/accessories/bass" class="hover:text-primary">Bass Accessories</router-link></li>
                  </ul>
                </div>

                <!-- Bass Guitar Column -->
                <div>
                  <h3 class="font-medium mb-3">Bass Guitar</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/bass/acoustic" class="hover:text-primary">Acoustic Bass</router-link></li>
                    <li><router-link to="/bass/electric" class="hover:text-primary">Electric Bass</router-link></li>
                  </ul>

                  <h3 class="font-medium mb-3 mt-6">Cello</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/cello/acoustic" class="hover:text-primary">Acoustic Cello</router-link></li>
                    <li><router-link to="/cello/electric" class="hover:text-primary">Electric Cello</router-link></li>
                  </ul>

                  <h3 class="font-medium mb-3 mt-6">Viola</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/viola/acoustic" class="hover:text-primary">Acoustic Viola</router-link></li>
                    <li><router-link to="/viola/electric" class="hover:text-primary">Electric Viola</router-link></li>
                  </ul>
                </div>

                <!-- Keyboard Column -->
                <div>
                  <h3 class="font-medium mb-3">Keyboard</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/keyboard/accordion" class="hover:text-primary">Accordion</router-link></li>
                    <li><router-link to="/keyboard/arranger" class="hover:text-primary">Arranger/workstation</router-link></li>
                    <li><router-link to="/keyboard/melodica" class="hover:text-primary">Melodica</router-link></li>
                    <li><router-link to="/keyboard/portable" class="hover:text-primary">Portable</router-link></li>
                    <li><router-link to="/keyboard/synthesizer" class="hover:text-primary">Synthesizer</router-link></li>
                    <li><router-link to="/keyboard/digital-piano" class="hover:text-primary">Digital Piano</router-link></li>
                    <li><router-link to="/keyboard/electric" class="hover:text-primary">Electric Keyboard</router-link></li>
                  </ul>
                </div>

                <!-- Percussions Column -->
                <div>
                  <h3 class="font-medium mb-3">Percussions</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/percussions/cowbell" class="hover:text-primary">Cowbell</router-link></li>
                    <li><router-link to="/percussions/lyre" class="hover:text-primary">Lyre</router-link></li>
                    <li><router-link to="/percussions/maracas" class="hover:text-primary">Maracas</router-link></li>
                    <li><router-link to="/percussions/tambourine" class="hover:text-primary">Tambourine</router-link></li>
                    <li><router-link to="/percussions/xylophone" class="hover:text-primary">Xylophone</router-link></li>
                  </ul>

                  <h3 class="font-medium mb-3 mt-6">Piano</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/piano/acoustic" class="hover:text-primary">Acoustic Piano</router-link></li>
                    <li><router-link to="/piano/digital" class="hover:text-primary">Digital Piano</router-link></li>
                  </ul>
                </div>

                <!-- Drum and Wind Column -->
                <div>
                  <h3 class="font-medium mb-3">Drum</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/drum/acoustic" class="hover:text-primary">Acoustic Drums</router-link></li>
                    <li><router-link to="/drum/hardware" class="hover:text-primary">Drum Hardware & Parts</router-link></li>
                    <li><router-link to="/drum/electronic" class="hover:text-primary">Electronic Drums</router-link></li>
                  </ul>

                  <h3 class="font-medium mb-3 mt-6">Wind Instruments</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/wind/brass" class="hover:text-primary">Brass</router-link></li>
                    <li><router-link to="/wind/woodwind" class="hover:text-primary">Woodwind</router-link></li>
                  </ul>
                </div>
              </template>

              <!-- Pro-Audio Content -->
              <template v-else-if="selectedCategory === 'pro-audio'">
                <!-- Microphones Column -->
                <div>
                  <h3 class="font-medium mb-3">Microphones</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/microphones/wireless" class="hover:text-primary">Microphone Wireless</router-link></li>
                    <li><router-link to="/microphones/analog" class="hover:text-primary">Microphones Analog</router-link></li>
                    <li><router-link to="/microphones/accessories" class="hover:text-primary">Microphones Accessories</router-link></li>
                    <li><router-link to="/microphones/parts" class="hover:text-primary">Microphones Replacement Parts</router-link></li>
                  </ul>

                  <h3 class="font-medium mb-3 mt-6">Mixers</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/mixers/digital" class="hover:text-primary">Digital</router-link></li>
                    <li><router-link to="/mixers/analog" class="hover:text-primary">Analog</router-link></li>
                    <li><router-link to="/mixers/interfaces" class="hover:text-primary">I/o Interfaces</router-link></li>
                  </ul>
                </div>

                <!-- Professional Audio Column -->
                <div>
                  <h3 class="font-medium mb-3">Professional Audio</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/pro-audio/rackmount" class="hover:text-primary">Rackmount Cases, Stands & Furniture</router-link></li>
                    <li><router-link to="/pro-audio/speakers" class="hover:text-primary">Speakers</router-link></li>
                    <li><router-link to="/pro-audio/dj-boxes" class="hover:text-primary">DJ Boxes</router-link></li>
                  </ul>

                  <h3 class="font-medium mb-3 mt-6">Signal Processors</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/signal/500-series" class="hover:text-primary">500 Series Gear</router-link></li>
                    <li><router-link to="/signal/channel-strips" class="hover:text-primary">Channel Strips</router-link></li>
                    <li><router-link to="/signal/compressors" class="hover:text-primary">Compressors & Limiters</router-link></li>
                    <li><router-link to="/signal/crossovers" class="hover:text-primary">Crossovers</router-link></li>
                    <li><router-link to="/signal/digital-clocks" class="hover:text-primary">Digital Clocks</router-link></li>
                    <li><router-link to="/signal/direct-boxes" class="hover:text-primary">Direct Boxes</router-link></li>
                    <li><router-link to="/signal/equalizers" class="hover:text-primary">Equalizers</router-link></li>
                  </ul>
                </div>

                <!-- Lightings Column -->
                <div>
                  <h3 class="font-medium mb-3">Lightings</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/lighting/color-wash" class="hover:text-primary">Color & Wash Lights</router-link></li>
                    <li><router-link to="/lighting/intelligent" class="hover:text-primary">Intelligent Lighting</router-link></li>
                    <li><router-link to="/lighting/controllers" class="hover:text-primary">Lighting Controllers & Dimmer Packs</router-link></li>
                    <li><router-link to="/lighting/par-cans" class="hover:text-primary">Par Cans</router-link></li>
                    <li><router-link to="/lighting/effects" class="hover:text-primary">Stage Effects</router-link></li>
                  </ul>

                  <h3 class="font-medium mb-3 mt-6">Power Amplifiers</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/amplifiers/wireless" class="hover:text-primary">Wireless</router-link></li>
                    <li><router-link to="/amplifiers/with-wire" class="hover:text-primary">With Wire</router-link></li>
                  </ul>
                </div>

                <!-- Highlight Column -->
                <div>
                  <h3 class="font-medium mb-3">Highlight</h3>
                  <div class="space-y-4">
                    <img 
                      src="/nav_pic2.png" 
                      alt="We're now on GrabMart" 
                      class="w-full rounded-lg"
                    />
                    <div>
                      <h4 class="font-medium mb-2">Shopping at Lyric Online Stores: Our new Website, Grabmart, and more</h4>
                      <p class="text-sm text-gray-600 mb-2">Welcome to the new and improved Lyric website. The ongoing challenges hoisted upon the globe by the pandemic have obvi...</p>
                      <router-link 
                        to="/news/online-stores" 
                        class="inline-block border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        READ MORE
                      </router-link>
                    </div>
                  </div>
                </div>
              </template>

              <!-- Spare Parts Content -->
              <template v-else-if="selectedCategory === 'spare-parts'">
                <div class="col-span-4">
                  <h3 class="font-medium mb-3">Spare Parts</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/spare-parts/guitar" class="hover:text-primary">Guitar Parts</router-link></li>
                    <li><router-link to="/spare-parts/drums" class="hover:text-primary">Drum Parts</router-link></li>
                    <li><router-link to="/spare-parts/keyboard" class="hover:text-primary">Keyboard Parts</router-link></li>
                    <li><router-link to="/spare-parts/wind" class="hover:text-primary">Wind Instrument Parts</router-link></li>
                  </ul>
                </div>
              </template>

              <!-- Books Content -->
              <template v-else-if="selectedCategory === 'books'">
                <div class="col-span-4">
                  <h3 class="font-medium mb-3">Music Books</h3>
                  <ul class="space-y-2 text-sm">
                    <li><router-link to="/books/theory" class="hover:text-primary">Music Theory</router-link></li>
                    <li><router-link to="/books/sheet-music" class="hover:text-primary">Sheet Music</router-link></li>
                    <li><router-link to="/books/instruction" class="hover:text-primary">Instruction Books</router-link></li>
                    <li><router-link to="/books/songbooks" class="hover:text-primary">Songbooks</router-link></li>
                  </ul>
                </div>
              </template>
            </div>

            <!-- All Products Button -->
            <div class="flex justify-end mt-6">
              <router-link 
                to="/all-products"
                class="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800"
              >
                ALL PRODUCTS
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronRightIcon } from 'lucide-vue-next'

const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      type: 'default',
      title: "What's New",
      items: [],
      mainCategories: [
        { id: 'musical-instruments', name: 'Musical Instruments', link: '/musical-instruments' },
        { id: 'pro-audio', name: 'Pro-Audio and Visuals', link: '/pro-audio' },
        { id: 'spare-parts', name: 'Spare Parts', link: '/spare-parts' },
        { id: 'books', name: 'Books', link: '/books' }
      ]
    })
  }
})

const selectedCategory = ref('musical-instruments')
</script>

