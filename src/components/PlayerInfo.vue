<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>

<template>
  <p>Welcome, {{ userStore.fullName }}</p>
</template>

<style scoped></style>
