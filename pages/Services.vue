<script setup>
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import TheFooter from "~/components/layouts/footer/Footer.vue";
import pageBanner from "~/components/Ui/PageBanners.vue";
import { useServices } from "~/composables/useServices";
import { useSupports } from "~/composables/useSupports";
import { useSetups } from "~/composables/useSetups";
import ServiceCard from "~/components/cards/ServiceCard.vue";
import ServiceModal from "~/components/modals/ServiceModal.vue";
const { services } = useServices();
const { supports } = useSupports();
const { setups } = useSetups();

const isModalOpen = ref(false);
const selectedService = ref(null);

const openModal = (service) => {
  console.log("Opening modal with service:", service);
  selectedService.value = service;
  console.log("Selected service Opening Modal:", selectedService.value);
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedService.value = null;
};

const handleInquire = (service) => {
  console.log("Inquiry for service:", service);
};
</script>

<template>
  <div>
    <the-navbar />
    <page-banner
      image="/services_pic.png"
      title="Services"
      description="We offer a range of services to keep your music playing. From instrument repairs 
      and maintenance to customization and tuning, our skilled technicians ensure your instruments 
      are always performance-ready."
    />

    <section class="py-12 lg:py-12">
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-14 px-6 lg:px-24 xl:px-[2px]"
      >
        <div class="w-[540px] h-[500px]">
          <video
            src="/services_vid.mp4"
            autoplay
            muted
            loop
            class="w-full h-full object-cover"
          ></video>
        </div>

        <div class="space-y-2 max-w-md">
          <h2 class="text-gray-900 text-3xl font-bold leading-tight">
            Comprehensive Musical Solutions for Your Every Need
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Expert services designed to enhance your musical experience, from
            piano restoration to professional audio installations. Trust Lyric
            for reliable support on all your instrument and equipment needs.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[#FDF8F9] py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Piano Rebuilding & Tuning Services
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            Bring your piano back to life with our professional rebuilding and
            tuning services. Our experienced technicians provide comprehensive
            care, from full restoration and rebuilding of aging pianos to
            precise tuning that ensures perfect pitch. Whether your piano needs
            minor adjustments or a complete overhaul, we use expert
            craftsmanship to restore its beautiful tone and playability.
          </p>
          <button
            class="mt-8 rounded-md bg-gray-900 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            INQUIRE NOW
          </button>
          <div class="min-h-screen p-4 sm:p-6 lg:p-8">
            <div class="columns-1 sm:columns-2 lg:columns-2 gap-4">
              <ServiceCard
                v-for="service in services"
                :key="service.title"
                :title="service.title"
                :description="service.description"
                :image="service.image"
                @click="openModal(service)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Electronic Product Support
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            Experience crystal-clear sound with our expert audio installation
            services. We provide custom audio setups for homes, studios, event
            venues, and commercial spaces. Our team of skilled technicians
            ensures seamless installation and optimal sound performance,
            tailored to your unique environment and needs. From speaker
            placement to system calibration, we’ve got you covered for the
            perfect audio experience.
          </p>
          <button
            class="mt-8 rounded-md bg-gray-900 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            INQUIRE NOW
          </button>
          <div class="min-h-screen p-4 sm:p-6 lg:p-8">
            <div class="columns-1 sm:columns-2 lg:columns-2 gap-4">
              <ServiceCard
                v-for="support in supports"
                :key="support.id"
                :title="support.title"
                :description="support.description"
                :image="support.image"
                @click="openModal(support)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#FDF8F9] py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Minor Guitar Setup / Restring
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            For all your electronic music gear and instrument maintenance needs,
            our stores are here to help. From amplifiers and mixers to
            restringing your musical instruments, we provide expert guidance and
            hands-on assistance. Our dedicated team is ready to support you with
            personalized advice, repairs, and professional services that keep
            your gear in top condition.
          </p>
          <button
            class="mt-8 rounded-md bg-gray-900 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            INQUIRE NOW
          </button>
          <div class="min-h-screen p-4 sm:p-6 lg:p-8">
            <div class="columns-1 sm:columns-2 lg:columns-2 gap-4">
              <ServiceCard
                v-for="setup in setups"
                :key="setup.id"
                :title="setup.title"
                :description="setup.description"
                :image="setup.image"
                @click="openModal(setup)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <ServiceModal
      :is-open="isModalOpen"
      :service="selectedService || {}"
      @close="closeModal"
      @inquire="handleInquire"
    />

    <the-footer />
  </div>
</template>

<style scoped>
</style>