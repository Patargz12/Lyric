<template>
  <button :class="buttonClass" :type="type" @click="$emit('click', $event)">
    <slot name="icon-left" v-if="variant === 'left'">
      <Camera v-if="showDefaultIcon" class="w-5 h-5 mr-2" />
    </slot>

    <span class="font-medium">
      <slot>DEFAULT</slot>
    </span>

    <slot name="icon-right" v-if="variant === 'right'">
      <Camera v-if="showDefaultIcon" class="w-5 h-5 ml-2 mr-2" />
    </slot>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { Camera } from "lucide-vue-next";

const props = defineProps({
  variant: {
    type: String,
    default: "center",
    validator: (value) => ["left", "center", "right"].includes(value),
  },
  type: {
    type: String,
    default: "button",
  },
  showDefaultIcon: {
    type: Boolean,
    default: true,
  },
});

defineEmits(["click"]);

const buttonClass = computed(() => [
  "inline-flex items-center bg-gray-900 text-white px-5 py-4 transition-colors",
  "hover:bg-gray-900 focus:outline-none",
  props.variant === "left"
    ? "flex-row"
    : props.variant === "right"
    ? "flex-row-reverse"
    : "justify-center",
  "align-top",
]);
</script>
