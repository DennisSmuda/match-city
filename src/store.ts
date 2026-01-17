import type { AvailableThemes } from './theming'
import { makeStore } from 'statery'

export const gameStore = makeStore<{
  score: number
  chain: number
  grid: { [key: string]: any }
  matches: { [key: string]: any }
  mouse: { x: number, y: number }
  currentTheme: AvailableThemes
  tutorialStep: number
  isAudioEnabled: boolean
}>({
  score: 0,
  chain: 0,
  grid: {},
  matches: {},
  mouse: { x: 0, y: 0 },
  currentTheme: 'black',
  tutorialStep: 0,
  isAudioEnabled: true,
})

export function numberOfMatches({ matches }: any) {
  return Object.keys(matches).length
}
