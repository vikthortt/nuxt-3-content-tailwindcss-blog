<script setup>
const route = useRoute();
const { data: blog } = await useAsyncData(`blog-${route.path}`, () => {
  return queryContent().where({ _path: route.path }).findOne();
});
useHead({
  title: `${blog.value.title}`,
});
</script>
<template>
  <div>
    <article class="lg:py-20 py-10">
      <ContentRenderer
        class="prose lg:prose-base prose-sm prose-slate prose-headings:font-header prose-p:font-body max-w-none"
        :value="blog"
      >
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </article>
  </div>
</template>
