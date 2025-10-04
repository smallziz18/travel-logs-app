<script setup lang="ts">
import AuthBtn from "~/component/auth-btn.vue";
import ThemeToggler from "~/component/theme-toggler.vue";
</script>

<template>
  <div class="navbar bg-primary text-primary-content ">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <ThemeToggler />
      <AuthBtn class="ml-2" />
    </div>
  </div>
</template>

<style scoped>

</style>
