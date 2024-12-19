<template>
  <button
    :class="[
      'inline-flex items-center px-4 py-2',
      'border border-black rounded-none',
      'text-sm font-medium uppercase',

      'hover:outline hover:outline-1 hover:outline-black',
      'active:bg-gray-200',
      ,
      variant === 'left'
        ? 'flex-row'
        : variant === 'right'
        ? 'flex-row-reverse'
        : 'justify-center',
      'align-top',
    ]"
    @click="$emit('click')"
  >
    <component
      :is="icon"
      v-if="variant !== 'no-icon' && icon"
      :class="['w-4 h-4', variant === 'left' ? 'mr-2' : 'ml-2']"
    />
    <slot>Button</slot>
  </button>
</template>

<script setup>
import { Flag, ArrowLeft } from "lucide-vue-next";

const props = defineProps({
  variant: {
    type: String,
    default: "no-icon",
    validator: (value) => ["left", "right", "no-icon", "back"].includes(value),
  },
  icon: {
    type: Object,
    default: () => Flag,
  },
});

defineEmits(["click"]);
</script>

<style scoped>
button {
  /* Ensure crisp edges */
  background-clip: padding-box;
  /* Remove default button styles */
  -webkit-appearance: none;
  -moz-appearance: none;
}

/* Remove default focus styles in Firefox */
button::-moz-focus-inner {
  border: 0;
}
</style>