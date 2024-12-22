<script setup>
import PageBanner from "~/components/Ui/PageBanners.vue";
import navbar from "~/components/Layouts/navbar.vue";
import test from "~/components/Layouts/test.vue";
import Timeline from "~/components/Misc/timeline.vue";
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";
import LocationCard from "~/components/cards/LocationCard.vue";
import { useBranches } from "~/composables/useBranches";

const { tabs, activeTab, setActiveTab, filteredLocations } = useBranches();
</script>

<template>
  <div>
    <the-navbar />
    <page-banner
      image="/about_banner.jpg"
      title="About Us"
      description="Your one-stop shop for all things music. From instruments to accessories, we bring you the best selection and expertise to fuel your passion for music."
    />

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <!-- Image Column -->
        <div class="rounded-lg overflow-hidden">
          <NuxtImg
            src="/about_pic1.png"
            alt="Historical photo of Lyric's founding"
            class="w-full h-auto object-cover"
          />
        </div>

        <!-- Content Column -->
        <div class="space-y-4">
          <h2
            class="text-3xl font-bold text-gray-900 leading-tight lg:text-3xl"
          >
            Lyric: The Philippines' Leading Music Store Since 1964 – From Piano
            Manufacturer to Full-Line Musical Instrument Retailer
          </h2>

          <p class="text-gray-600 leading-relaxed">
            Lyric is the Philippines' largest musical instrument retail chain.
            It was founded in 1964 by Mr. Severo Panganiban as a supplier of
            parts and accessories to piano manufacturers. In 1968, it evolved
            into manufacturing its own pianos for the domestic market and, after
            a few years, exported its first set of pianos under its own label.
            In order to meet the local demand for imported pianos, Lyric
            acquired the distributorship of Samick and Kohler & Campbell pianos.
            Soon thereafter, Wurlitzer and Baldwin pianos were also acquired. By
            1998, Lyric assumed the exclusive local distributorship of pianos
            Boston and Steinway & Sons. Yamaha, Kawai and Fazioli are its
            current biggest piano brands.
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div class="space-y-4">
          <p class="text-gray-600 leading-relaxed mb-4">
            To support its sales outlets, Lyric has a well-organized service
            center with trained staff and technicians. They are being trained in
            Japan and Germany to fully support and maintain the musical
            instruments being offered by the company to the public. It also
            maintains a spare parts and accessories outlet to supply the
            instruments it carries with original parts straight from
            manufacturers.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Although famous for its piano heritage, Lyric has now expanded to
            become a full-line music store as they offer official
            distributorship of world-renowned instrument brands such as Yamaha
            guitars and drums; Peavey amplifiers; PRS guitars; ESP guitars;
            Warwick basses; DW drums; Meinl cymbals; Digitech effects; Mono
            bags; and Nord keyboards. It also expanded into professional audio
            with the acquisition of select brands as JBL speakers, Soundcraft
            mixers; AKG microphones; Peavey speakers; and DAS, to name a few.
            With 50 years in the business, Lyric has retail branches in the most
            accessible locations and continues to expand across the country. It
            has dedicated itself to ensure that Filipino music fans can grow and
            play the best brands with Lyric.
          </p>
        </div>

        <div class="rounded-lg overflow-hidden">
          <!-- NuxtImg with square and object-contain -->
          <div class="aspect-w-1 aspect-h-1">
            <NuxtImg
              src="/about_pic2.jpg"
              alt="Historical photo of Lyric's founding"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- <timeline /> -->

    <section class="container mx-auto px-4 py-12">
      <h1 class="mb-8 text-center text-5xl font-bold">Our Branches</h1>

      <!-- Tabs -->
      <div class="mb-8 flex justify-center gap-4">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="setActiveTab(tab.id)"
          :class="[
            'px-6 py-2 transition-colors',
            activeTab === tab.id
              ? 'bg-red-500 text-white'
              : 'text-gray-600 hover:bg-gray-100',
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Location Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <LocationCard
          v-for="location in filteredLocations"
          :key="location.id"
          :location="location"
        />
      </div>
    </section>
    <the-footer />
  </div>
</template>

<style scoped>
</style>