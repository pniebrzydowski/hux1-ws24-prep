<script setup lang="ts">
import GameBoard from '../GameBoard.vue'
import GameInfo from '../GameInfo.vue'
import PlayerInfo from '../PlayerInfo.vue'
</script>

<template>
  <div class="container">
    <header>
      <h1>Sudoku</h1>
      <PlayerInfo />
      <GameInfo />
    </header>
    <main>
      <GameBoard />
    </main>
  </div>
</template>

<style scoped>
main {
  margin-top: 16px;
}
@media (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
