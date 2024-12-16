import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useGameStore = defineStore('game', () => {
  const difficultyLevel = ref(1)
  const getDifficultyLabel = (level: number) => {
    switch (level) {
      case 1:
        return 'Easy'
      case 2:
        return 'Medium'
      case 3:
        return 'Hard'
      default:
        return 'Unknown'
    }
  }

  const difficultyLabel = computed(() => getDifficultyLabel(difficultyLevel.value))

  return {
    difficultyLevel,
    difficultyLabel,
    getDifficultyLabel,
  }
})
