<script setup>
import PageBanner from "~/components/Ui/PageBanners.vue";
import TheNavbar from "~/components/layouts/TheNavbar.vue";
import TheFooter from "~/components/layouts/footer/Footer.vue";
import LessonCard from "~/components/cards/LessonCard.vue";
import TeacherCard from "~/components/cards/TeacherCard.vue";
import TeacherModal from "~/components/modals/TeachersModal.vue";
import RecitalCard from "~/components/cards/RecitalCard.vue";
import { ref } from "vue";
import { useLessons } from "~/composables/useLessons";
import { useRecitals } from "~/composables/useRecitals";
import { useLocations } from "~/composables/useLocations";
import LocationCard from "~/components/cards/LocationCard.vue";
import LessonSection from "~/components/cms/LessonSection.vue";
import { LessonSections } from "~/composables/constants/lesson";

const { locations } = useLocations();
const { events } = useRecitals();
const { lessons } = useLessons();

const isModalOpen = ref(false);
const selectedTeacher = ref(null);

const openModal = (teacher) => {
  selectedTeacher.value = teacher;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const teachers = [
  {
    id: 1,
    imageUrl: "/lessons_t1.png",
    name: "Elizabeth Villaverde",
    title: "Ms.",
    specialization: "Piano / Organ / Guitar",
    education:
      "Elizabeth B. Villaverde studied at the UST Conservatory of Music with a degree of Music Education where she takes piano lessons under Prof. Milagross de Ocampo and guitar lessons under Prof. Ernani Cuenco. She also took special lessons in Electone Organ Yamaha School of Music.",
    experience:
      "She taught in Arellano High School, Eulogio Rodriguez High School, and Camp Gen.Emilio Aguinaldo High. In November 2018, she taught piano and guitar lessons at the Bahrain Music Institute until 2020. She's now working as a piano and guitar teacher at the Lyric Music School.",
  },
  {
    id: 2,
    imageUrl: "/lessons_t2.png",
    name: "Michael Regalado",
    title: "Mr.",
    specialization: "Drums",
    education: "Sample education background",
    experience: "Sample teaching experience",
  },
  {
    id: 3,
    imageUrl: "/lessons_t3.png",
    name: "Romy Madrid",
    title: "Mr.",
    specialization: "Violin / Piano",
    education: "Sample education background",
    experience: "Sample teaching experience",
  },
  {
    id: 4,
    imageUrl: "/lessons_t4.png",
    name: "Jacinto Lagonoy",
    title: "Mr.",
    specialization: "Guitar / Bass / Ukulele",
    education: "Sample education background",
    experience: "Sample teaching experience",
  },
];
</script>

<template>
  <div>
    <the-navbar />
    <page-banner
      image="/lessons_banner.png"
      title="Lessons"
      description="Learn, play, and grow with us! Our music school offers lessons for all ages 
      and skill levels. Whether you're a beginner or an experienced player, our expert instructors 
      will guide you in mastering your favorite instrument."
    />

    <!-- Content Section -->
    <section>
      <div class="lg:px-24 mt-20 mb-12">
        <h1 class="text-center font-semibold text-h1 mb-12">
          Lyric Institute of music<br />
          and Related Arts
        </h1>

        <lesson-section
          v-for="(section, index) in LessonSections"
          :key="index"
          v-bind="section"
          :index="index"
        />
      </div>
    </section>

    <!-- Teachers Section -->
    <section>
      <div class="container mx-auto px-4 py-12">
        <h2 class="text-h1 font-bold text-center mb-12">Meet our Teachers</h2>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <teacher-card
            v-for="teacher in teachers"
            :key="teacher.id"
            :image-url="teacher.imageUrl"
            :name="teacher.name"
            :title="teacher.title"
            :specialization="teacher.specialization"
            @click="openModal(teacher)"
          />
        </div>

        <teacher-modal
          :is-open="isModalOpen"
          :teacher="selectedTeacher"
          @close="closeModal"
        />
      </div>
    </section>

    <!-- Lessons Section -->
    <section>
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div class="w-1/2 pr-8">
            <h2 class="text-h1 font-bold text-gray-900 mb-8">
              Comprehensive Musical Solutions for Your Every Need
            </h2>
          </div>
          <div class="w-1/2 pl-8">
            <p class="text-gray-700 mb-8">
              Expert services designed to enhance your musical experience, from
              piano restoration to professional audio installations. Trust Lyric
              for reliable support on all your instrument and equipment needs.
            </p>
          </div>
        </div>

        <div
          class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <LessonCard
            v-for="lesson in lessons"
            :key="lesson.id"
            :lesson="lesson"
          />
        </div>
      </div>
    </section>

    <!-- Enrollment Section -->
    <section>
      <div class="space-y-4 pl-6 lg:px-24 mb-14 mt-12">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Image Section -->
          <div class="w-full">
            <NuxtImg
              src="/enrollment_pic.png"
              alt="Lyric Institute Team"
              class="w-full h-auto rounded-lg"
            />
          </div>

          <!-- Text Content Section -->
          <div class="space-y-4 pl-6">
            <p class="text-gray-800 text-h2 mt-4">Enrollment</p>

            <p class="text-gray-800">
              Families who purchased Lyric pianos asked for an accompanying
              curriculum which prompted Mr. Severo Panganiban to devise one for
              a music school. Thus in 1979, 15 years after the company was
              founded, Lyric Music School (LMS) was born.
            </p>

            <p class="text-gray-800">
              Enrolling in LIMRA is easy and convenient. We welcome enrolments
              at any Lyric store location across the country, ensuring
              accessibility wherever you are. To make the process even smoother,
              we accept a variety of payment methods to suit your preference.
              You can pay via cash, GCash, credit card, or check—giving you
              flexibility and convenience. Whether you’re signing up for piano
              lessons, guitar, or any other instrument, our friendly staff is
              ready to assist you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recital Section -->
    <section>
      <div class="bg-[#FDF8F9] px-6 py-12">
        <div class="mx-auto max-w-7xl">
          <h1 class="mb-12 text-4xl font-bold text-gray-900">
            Upcoming Recital Schedule
          </h1>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RecitalCard
              v-for="event in events"
              :key="event.id"
              :event="event"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Locations Section -->
    <section>
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 class="mb-12 text-center text-4xl font-bold text-gray-900">
          Music Schools
        </h1>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <LocationCard
            v-for="location in locations"
            :key="location.id"
            :location="location"
          />
        </div>
      </div>
    </section>

    <section>
      <div
        class="relative justify-center items-center w-full place-items-center"
      >
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0">
          <NuxtImg
            src="/CTA_pic.png"
            alt="Background"
            class="h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50" />
        </div>

        <!-- Content Section -->
        <div class="relative flex mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div class="flex-1 max-w-2xl">
            <h1
              class="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Start Your Teaching Journey with LIMRA!
            </h1>
            <p class="mb-8 text-lg text-gray-200 sm:text-xl">
              Are you passionate about music and ready to inspire the next
              generation of musicians? Join the Lyric Institute of Music &
              Related Arts (LIMRA) and build a fulfilling teaching career with
              us! We're always on the lookout for talented, dedicated
              instructors.
            </p>
          </div>
          <div class="ml-auto self-center">
            <button
              type="button"
              class="rounded bg-red-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              SEND US YOUR RESUME
            </button>
          </div>
        </div>
      </div>
    </section>

    <the-footer />
  </div>
</template>

<style scoped>
</style>