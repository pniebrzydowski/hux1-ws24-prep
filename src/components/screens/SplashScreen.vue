<script setup lang="ts">
import { router } from '@/routing/router'
import StartForm from '../StartForm.vue'

const onSubmit = () => {
  router.push('/play')
}
</script>

<template>
  <header>
    <h1>Welcome to Sudoku+</h1>
  </header>
  <main>
    <StartForm :on-submit="onSubmit" />
  </main>
</template>

<style scoped>
main {
  margin-top: 16px;
}
</style>
