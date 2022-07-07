<script setup>
const { data: blogEntriesList } = await useAsyncData("navigation", () => {
  return queryContent("blog")
    .only(["id", "title", "description", "_path", "date"])
    .sort({ date: -1 })
    .find();
});
useHead({
  title: "Victor's Cloud Learning Journey Blog",
  meta: [
    {
      name: "description",
      content:
        "This is a series of blog post where I talk about what I learned while studying for cloud certifications",
    },
  ],
});
</script>
<template>
  <div>
    <section class="pt-4 lg:pt-8">
      <h1
        class="text-2xl lg:text-5xl leading-normal font-semibold font-header text-center text-primary"
      >
        Cloud Learning Journey
      </h1>
    </section>
    <section class="py-4 lg:py-8">
      <h2
        class="text-center uppercase font-medium font-body tracking-wider mb-10 text-secondary"
      >
        Blog Posts
      </h2>
      <div>
        <template
          v-for="(blog, index) in blogEntriesList"
          :key="`BlogNavItem-${blog._path}-${index}`"
        >
          <BlogEntryCard :blog="blog"></BlogEntryCard>
        </template>
      </div>
    </section>
  </div>
</template>
