<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <div>
    <div v-if="!authStore.loading && authStore.user" class="dropdown bg-base-300 dropdown-end">
      <div
        tabindex="0"
        role="button"
        class="btn m-1"
      >
        <div class="avatar">
          <div class="w-11 rounded-full mr-2">
            <img :src="authStore.user.image || undefined" :alt="authStore.user.name">
          </div>
        </div>
        {{ authStore.user.name }}
      </div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li class="text-black dark:text-white">
          <NuxtLink to="/sign-out">
            <Icon name="tabler:logout" size="24" />
            Sign out
          </NuxtLink>
        </li>
      </ul>
    </div>
    <button
      v-else
      :disabled="authStore.loading"
      class="btn"
      @click="authStore.signIn"
    >
      Sign in with GitHub
      <span v-if="authStore.loading" class="loading loading-ring loading-xl" />
      <Icon name="tabler:brand-github-copilot" size="26" />
    </button>
  </div>
</template>

<style scoped>
</style>
