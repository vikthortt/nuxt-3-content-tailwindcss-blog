<script setup>
const route = useRoute();
const { data: blog } = await useAsyncData(`blog-${route.path}`, () => {
  return queryContent().where({ _path: route.path }).findOne();
});
useHead({
  title: `${blog.value.title}`,
});
definePageMeta({
  layout: false
});
const publishedDate = computed(() => {
  const date = new Date(blog.value.date);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
})
</script>
<template>
  <div>
    <NuxtLayout name="post">
      <template #header>
        <h1 class="text-2xl lg:text-5xl leading-normal text-primary font-semibold font-header text-center my-4">{{blog.title}}</h1>
        <div class="font-header text-secondary text-bold text-center text-xs">{{publishedDate}}</div>
      </template>

      <ContentRenderer
        class="prose lg:prose-base prose-sm prose-slate prose-headings:font-header prose-p:font-body max-w-none"
        :value="blog"
      >
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </NuxtLayout>
  </div>
</template>
