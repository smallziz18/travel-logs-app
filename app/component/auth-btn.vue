<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <button
    :disabled="authStore.loading"
    class="btn"
    @click="authStore.signIn"
  >
    Sign in with GitHub
    <span v-if="authStore.loading" class="loading loading-ring loading-xl" />
    <Icon name="tabler:brand-github-copilot" size="26" />
  </button>
</template>

<style scoped>

</style>
