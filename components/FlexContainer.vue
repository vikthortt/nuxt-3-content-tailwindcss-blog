<script setup lang="ts">
interface ContainerProps {
  direction: string;
  items: string;
  justify: string;
}

const { direction, items, justify } = defineProps<ContainerProps>();
</script>

<template>
  <div class="flex container-props w-full max-w-screen-lg">
    <slot></slot>
  </div>
</template>

<style scoped>
.container-props {
  flex-direction: v-bind(direction);
  align-items: v-bind(items);
  justify-content: v-bind(justify);
}
</style>
