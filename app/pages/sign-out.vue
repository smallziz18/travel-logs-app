<script setup lang="ts">
const authStore = useAuthStore();
onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <div class="container card bg-base-300 flex flex-col justify-center mt-4 min-h-72 text-center mx-auto">
    <span class="loading loading-ring loading-xl" />
  </div>
</template>

<style scoped>

</style>
