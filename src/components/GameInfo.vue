<script setup lang="ts">
import { useGameStore } from '@/store/game'

const { difficultyLabel } = useGameStore()
</script>

<template>
  <p>Difficulty: {{ difficultyLabel }}</p>
</template>

<style scoped></style>
