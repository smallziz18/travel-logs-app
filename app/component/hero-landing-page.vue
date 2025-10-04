<script setup lang="ts">
import AuthBtn from "~/component/auth-btn.vue";
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-4 min-h-96">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel logs
        </h1>
        <p class="py-6">
          Keep track of your travel experiences with the world. Create and publish your travel logs easily.
        </p>
        <AuthBtn />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
