<script setup lang="ts">
const props = defineProps<{
  label: string;
  icon: string;
  href: string;
  showLabel: boolean;
}>();
const route = useRoute();
</script>

<template>
  <NuxtLink
    :class=" { 'bg-base-200': route.path === props.href }"
    :to="props.href"
    class="flex gap-2 tooltip  tooltip-right p-2 hover:bg-base-300 hover:cursor-pointer justify-start"
    :data-tip="!props.showLabel ? props.label : ''"
  >
    <Icon :name="props.icon" size="32" />
    <span v-if="props.showLabel">{{ props.label }}</span>
  </NuxtLink>
</template>

<style scoped>

</style>
