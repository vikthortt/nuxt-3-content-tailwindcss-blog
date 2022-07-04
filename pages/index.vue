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
    <section class="pt-4 lg:pt-20">
      <h1
        class="text-4xl lg:text-5xl leading-normal font-semibold font-header text-center"
      >
        Cloud Learning Journey
      </h1>
    </section>
    <section class="py-8 lg:py-20">
      <h2
        class="text-center uppercase font-medium font-body tracking-wider mb-10 text-gray-500"
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
