<script setup>
const { data: about } = await useAsyncData(`about`, () => {
  return queryContent().where({ _path: "/about" }).findOne();
});
useHead({
  title: `${about.value.title}`,
});
</script>
<template>
  <div>
    <article class="lg:py-20 py-10">
      <ContentRenderer
        class="prose lg:prose-base prose-sm prose-slate blog-link pr-7 max-w-none"
        :value="about"
      >
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </article>
  </div>
</template>
