import { gameStore } from './store'

export type Color = 'primary' | 'secondary' | 'tertiary'
export const colors = ['primary', 'secondary', 'tertiary']

export function generateRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)] as Color
}

export function getRandomGridPosition() {
  let randomPos = null
  while (!randomPos) {
    const x = Math.floor(Math.random() * 5)
    const y = Math.floor(Math.random() * 5)
    if (!gameStore.state.grid[`${x}:${y}`]) {
      randomPos = { x, y }
    }
  }

  return {
    x: randomPos.x,
    y: randomPos.y,
  }
}

export function getMatchCountDescription(matchCount: number) {
  switch (matchCount) {
    case 2:
      return 'double'
    case 3:
      return 'triple'
    case 4:
      return 'quadruple'
    case 5:
      return 'quintuple'
    default:
      return ''
  }
}

export async function sleep(timeout: number) {
  await new Promise(resolve => setTimeout(resolve, timeout))
}
