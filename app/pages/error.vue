<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occurred";
</script>

<template>
  <div class="container card bg-base-300 flex flex-col justify-center mt-4 min-h-72 text-center mx-auto">
    <div role="alert" class="alert alert-error mx-auto">
      <span>oups! {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary mt-4 mx-auto">
      Home
      <Icon name="tabler:home" size="32" />
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
