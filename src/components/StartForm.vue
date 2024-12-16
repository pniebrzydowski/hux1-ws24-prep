<script setup lang="ts">
import { useGameStore } from '@/store/game'
import { useUserStore } from '@/store/user'

const { onSubmit } = defineProps<{
  onSubmit: () => void
}>()
const userStore = useUserStore()
const gameStore = useGameStore()

const handleSubmit = () => {
  if (!userStore.firstName || !userStore.lastName) {
    alert('You must enter your full name')
    return
  }

  onSubmit()
}
</script>

<template>
  <form @submit="handleSubmit">
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="userStore.firstName" />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="userStore.lastName" />
    </div>
    <div>
      <label for="difficulty">Difficulty:</label>
      <select
        id="difficulty"
        :value="gameStore.difficultyLevel"
        @change="gameStore.difficultyLevel = Number(($event.target as HTMLSelectElement).value)"
      >
        <option v-for="n in 3" :key="n" :value="n">{{ gameStore.getDifficultyLabel(n) }}</option>
      </select>
    </div>
    <button type="submit">Play Game</button>
  </form>
</template>

<style scoped>
input,
select {
  width: 100%;
}
button {
  margin-top: 16px;
  width: 100%;
}
</style>
