<template>
  <div class="min-h-screen flex flex-col">
    <Nav />
    <main class="mb-8">
      <article>
        <header class="w-full my-4 lg:my-8 p-4 md:p-8 bg-white flex justify-center items-center">
          <div class="w-full mx-auto max-w-screen-lg px-4 lg:px-0">
            <slot name="header"></slot>
          </div>
        </header>
        <div class="w-full mx-auto max-w-screen-lg px-4 lg:px-0">
          <slot></slot>
        </div>
      </article>
    </main>
    <footer class="w-full text-center bg-primary text-white mt-auto py-4">
      &copy; 2022
    </footer>
  </div>
</template>
