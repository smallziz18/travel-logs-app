<script setup lang="ts">
import ThemeToggler from "~/component/theme-toggler.vue";
</script>

<template>
  <div class="navbar bg-primary text-primary-content ">
    <div class="navbar-start">
      <NuxtLink to="/public" class="btn btn-ghost text-xl">
        Travel log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <ThemeToggler />
      <a class="btn">
        Sign in with GitHub
        <Icon name="tabler:brand-github-copilot" size="26" />
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
