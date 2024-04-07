<script setup></script>

<template>
  <div>
    <div class="grid h-screen place-items-center" id="header">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1
            class="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hello, I'm Roger
          </h1>

          <div class="content mx-auto mt-5 mb-8 max-w-xl text-xl">
            I am a Frontend Developer at <a href="https://www.advery.ch/">Advery</a> and <a href="https://www.brueggli-medien.ch/">Brüggli Medien</a>. <br> I like to build things.
          </div>

          <div class="flex justify-evenly"><Socials /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero-body {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}
</style>
