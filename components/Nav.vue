<script setup>
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

<template>
  <header
    class="flex items-center justify-center h-16 px-[1em] lg:px-[2em] bg-primary"
  >
    <FlexContainer direction="row" items="center" justify="space-between">
      <NuxtLink
        to="/"
        class="flex items-center text-lg lg:text-2xl text-white"
      >
        <span class="font-['Oxanium']"> VICTOR TORRES</span>
      </NuxtLink>
      <nav class="flex items-center space-x-7 text-white">
        <template v-for="(item, idx) in items" :key="`Link-${idx}`">
          <NuxtLink :to="item.link">
            <span class="font-medium font-header">{{ item.name }}</span>
          </NuxtLink>
        </template>
      </nav>
    </FlexContainer>
  </header>
</template>
