<template>
  <div class="min-h-screen flex flex-col">
    <Nav />
    <main class="w-full mx-auto max-w-screen-lg px-4 lg:px-0 mb-8 bg-background">
      <slot></slot>
    </main>
    <footer class="w-full text-center bg-primary text-white mt-auto py-4">
      &copy; 2022
    </footer>
  </div>
</template>
