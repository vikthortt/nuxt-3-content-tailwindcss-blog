<script setup>
import { ref } from "vue";

const items = [
  {
    name: "Blog",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
];
</script>

<style lang="scss" scoped></style>

<template>
  <header class="flex item-center justify-between h-20 px-[5%] lg:px-[15%]">
    <NuxtLink to="/" class="font-bold text-2xl lg:text-4xl">
      Victor's Blog
    </NuxtLink>
    <nav class="flex items-center space-x-7 text-gray-600">
      <template v-for="(item, idx) in items" :key="`Link-${idx}`">
        <NuxtLink :to="item.link">
          <span class="font-medium">{{ item.name }}</span>
        </NuxtLink>
      </template>
    </nav>
  </header>
</template>
