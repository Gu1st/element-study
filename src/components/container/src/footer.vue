<template>
  <header :class="[ns.b()]" :style="styles">
    <slot />
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNamespace } from "@/hooks/useNameSpace";
defineOptions({
  name: "HarexsFooter",
});

const ns = useNamespace("footer");

const props = defineProps({
  height: {
    type: String,
    defalut: null,
  },
});
// 由于闭包的特性 ns.cssVarBlock中的 block参数 会取 header
const styles = computed(() => {
  return props.height ? ns.cssVarBlock({ height: props.height }) : {};
});
</script>
