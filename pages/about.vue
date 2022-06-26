<script setup>
const { data: about } = await useAsyncData(`about`, () => {
  return queryContent().where({ _path: "/about" }).findOne();
});
useHead({
  title: `${about.value.title}`,
});
</script>
<template>
  <div class="min-h-screen">
    <Nav />
    <main>
      <article
        class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]"
      >
        <ContentRenderer
          class="prose lg:prose-base prose-sm prose-slate blog-link pr-7 max-w-none"
          :value="about"
        >
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </main>
  </div>
</template>
