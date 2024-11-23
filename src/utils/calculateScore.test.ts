import { calculateScore } from './calculateScore'

describe('score calculation', () => {
  test('should calculate a score', () => {
    expect(calculateScore(2, 3)).toEqual(5)
  })
})
