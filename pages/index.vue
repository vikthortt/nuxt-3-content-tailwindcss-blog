<script setup>
const { data: blogEntriesList } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("blog"));
});
useHead({
  title: "Content Blog",
});
</script>
<template>
  <div class="min-h-screen">
    <Nav />
    <main>
      <section class="px-[5%] lg:px-[15%] pt-20">
        <h1
          class="text-2xl lg:text-5xl leading-normal font-semibold text-center"
        >
          Cloud Learning Journey
        </h1>
      </section>
      <section class="px-[5%] lg:px-[15%] pt-14 lg:pt-20">
        <h2
          class="text-center uppercase font-medium tracking-wider mb-10 text-gray-500"
        >
          Blog Posts
        </h2>
        <div>
          <template
            v-for="(blog, index) in blogEntriesList[0].children"
            :key="`BlogNavItem-${blog._path}-${index}`"
          >
            <div class="my-2 px-7 py-5 rounded-lg border-2">
              <NuxtLink :to="blog._path">
                <h3 class="text-lg font-semibold">{{ blog.title }}</h3>
              </NuxtLink>
            </div>
          </template>
        </div>
      </section>
    </main>
  </div>
</template>
