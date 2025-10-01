<script setup lang="ts">
const colormod = useColorMode();

const isDark = computed({
  get() {
    return colormod.value === "dark";
  },
  set(value) {
    colormod.value = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <!-- sun icon -->
    <Icon
      class="swap-on"
      name="tabler:sun"
      size="24"
    />
    <!-- moon icon -->
    <Icon
      :is-dark
      class="swap-off"
      name="tabler:moon-filled"
      size="24"
    />
  </label>
</template>

<style scoped>

</style>
