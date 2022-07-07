<script setup lang="ts">
import { computed } from "vue";

interface Blog {
  title: string;
  description: string;
  date: string;
  _path: string;
}

interface BlogEntryProps {
  blog: Blog;
}

const { blog } = defineProps<BlogEntryProps>();

const displayDate = computed(() => {
  const date = new Date(blog.date);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
});
</script>

<template>
  <div class="w-full border-l-4 my-8 pl-4 lg:pl-8">
    <div class="p-2 lg:p-4 shadow hover:shadow-lg">
      <p class="font-body text-dark-gray text-xs">{{ displayDate }}</p>
      <NuxtLink :to="blog._path">
        <h3 class="text-xl text-primary font-bold font-header my-2 lg:mb-4">
          {{ blog.title }}
        </h3>
      </NuxtLink>
      <p class="font-body text-secondary">{{ blog.description }}</p>
    </div>
  </div>
</template>
