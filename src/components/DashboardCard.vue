<!-- src/components/DashboardCard.vue -->
<template>
  <div class="rounded-lg border bg-card text-card-foreground p-6 space-y-4">
    <h3 class="text-base font-bold">{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>
