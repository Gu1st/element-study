<template>
  <section>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "HarexsContainer",
});
const props = defineProps({
  direction: {
    type: String,
  },
});
console.log(props);
</script>
