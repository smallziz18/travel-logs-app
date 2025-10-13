<script setup lang="ts">
import SidebarBtn from "~/component/sidebar-btn.vue";

const isSidebarOpen = ref(true);

onMounted(() => {
  isSidebarOpen.value = localStorage.getItem("isSidebarOpen") === "true";
});

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
  localStorage.setItem("isSidebarOpen", isSidebarOpen.value.toString());
}
</script>

<template>
  <div class="flex flex-1 ">
    <div class="bg-base-100 transition-all duration-300" :class="isSidebarOpen ? 'w-60' : 'w-16'">
      <div class="flex justify-end" :class="{ 'justify-center': !isSidebarOpen, 'justify-end': isSidebarOpen }">
        <Icon
          v-if="isSidebarOpen"
          name="tabler:chevron-left"
          size="42"
          @click="toggleSidebar"
        />
        <Icon
          v-else
          name="tabler:chevron-right"
          size="42"
          @click="toggleSidebar"
        />
      </div>
      <div class="flex flex-col">
        <SidebarBtn
          label="LOCATION"
          icon="tabler:map"
          href="/Dashboard"
          :show-label="isSidebarOpen"
        />
        <SidebarBtn
          label="ADD LOCATION"
          icon="tabler:circle-plus-filled"
          href=""
          :show-label="isSidebarOpen"
        />
        <div class="divider" />
        <SidebarBtn
          label="SIGN OUT"
          icon="tabler:logout-2"
          href="/sign-out"
          :show-label="isSidebarOpen"
        />
      </div>
    </div>
    <div class="flex-1 bg-base-300">
      <h1>Dashboard</h1>
    </div>
  </div>
</template>

<style scoped>

</style>
