<script setup lang="ts">
import { router } from '@/routing/router'
</script>

<template>
  <h1>Welcome to HUX-Sudoko</h1>
  <!-- <router-link to="/play">Play</router-link> -->
  <button @click="router.push('/play')">Play</button>
</template>

<style scoped></style>
