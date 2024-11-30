<script setup lang="ts">
import SudokuBlock from './SudokuBlock.vue'

const { title = 'Sudoku' } = defineProps<{
  title?: string
}>()
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="board">
    <SudokuBlock v-for="n in 9" :key="n" />
  </div>
</template>

<style scoped></style>
