<template>
  <div
    class="break-inside-avoid p-4 mb-4 h-98 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-md transition-shadow duration-300 cursor-pointer"
    @click="handleClick"
  >
    <img
      :src="image"
      :alt="title"
      class="w-full h-full p-1 object-cover"
      loading="lazy"
    />
    <div class="p-1 text-left">
      <h2 class="text-xl mt-3 font-semibold text-gray-900 mb-2">
        {{ title }}
      </h2>
      <p class="text-gray-600">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  const serviceData = {
    title: props.title,
    description: props.description,
    image: props.image,
    benefits: [
      {
        title: "Maintains Optimal Sound Quality",
        description:
          "Tuning keeps each note pitch-perfect, ensuring the full richness of your piano's tone.",
      },
      {
        title: "Prolongs Piano Lifespan",
        description: "Regular tuning helps prevent long-term damage and wear.",
      },
      {
        title: "Enhances Playing Experience",
        description:
          "Enjoy the best touch and response from your keys with a finely-tuned piano.",
      },
    ],
  };
  console.log("Card clicked:", serviceData);
  emit("click", serviceData);
};
</script>

