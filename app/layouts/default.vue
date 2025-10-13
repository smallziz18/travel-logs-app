<script setup lang="ts">
import NavBar from "~/component/nav-bar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen ">
    <NavBar />
    <main class="flex flex-1 flex-col">
      <slot />
    </main>
  </div>
</template>

<style scoped>

</style>
