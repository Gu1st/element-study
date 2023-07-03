<template>
  <section :class="['harexs-container', isVertical ? 'is-vertical' : '']">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
defineOptions({
  name: "HarexsContainer",
});
const props = defineProps({
  direction: {
    type: String,
  },
});
console.log(props);
const isVertical = computed(() => {
  return true;
});
</script>
