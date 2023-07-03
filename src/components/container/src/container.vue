<template>
  <section :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots, Component } from "vue";
import { useNamespace } from "@/hooks/useNameSpace";
defineOptions({
  name: "HarexsContainer",
});

const props = defineProps({
  direction: {
    type: String,
  },
});
const slots = useSlots();
const ns = useNamespace("container");

const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true;
  } else if (props.direction === "horizontal") {
    return false;
  }
  // 如果有传递插槽 则判断有没有header 或者footer
  if (slots && slots.default) {
    const vNodes = slots.default();
    return vNodes.some((vnode) => {
      const tag = (vnode.type as Component).name;
      return tag === "HarexsHeader" || tag === "HarexsFooter";
    });
  } else {
    return false;
  }
});
</script>
