<template>
  <aside :class="ns.b()" :style="styles">
    <slot />
  </aside>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useNamespace } from "@/hooks/useNameSpace";

defineOptions({
  name: "HarexsAside",
});
const props = defineProps({
  width: {
    type: String,
    default: null,
  },
});

const ns = useNamespace("aside");
const styles = computed(() => {
  return props.width ? ns.cssVarBlock({ height: props.width }) : {};
});
</script>
