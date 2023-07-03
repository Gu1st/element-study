<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
<script lang="ts" setup>
import { useNamespace } from "@/hooks/useNameSpace";

defineOptions({
  name: "HarexsMain",
});

const ns = useNamespace("main");
</script>
