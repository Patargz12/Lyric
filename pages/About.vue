<script setup>
import PageBanner from "~/components/Ui/PageBanners.vue";
import Timeline from "~/components/Misc/timeline.vue";
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import TheFooter from "~/components/layouts/footer/Footer.vue";
import LocationCard from "~/components/cards/LocationCard.vue";
import { useBranches } from "~/composables/useBranches";
import AboutSection from "~/components/cms/AboutSection.vue";

import { aboutSections } from "~/composables/constants/about";

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

    <AboutSection
      v-for="(section, index) in aboutSections"
      :key="index"
      v-bind="section"
      :index="index"
    />

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