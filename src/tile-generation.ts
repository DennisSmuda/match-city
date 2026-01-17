import type { Color } from './utils'
import { animationConfig } from './config'
import { rippleEffect } from './event-handlers'
import { gameStore } from './store'
import { generateRandomColor, getRandomGridPosition } from './utils'

export async function generateNextTile() {
  const nextTileContainer = document.getElementById('next-tile-container')
  const nextTile = document.createElement('div')
  nextTile.classList.add('tile', 'next')
  let nextColor = generateRandomColor()
  if (gameStore.state.tutorialStep <= 2) {
    nextColor = 'primary'
  }
  else if (gameStore.state.tutorialStep === 3) {
    nextColor = 'secondary'
  }
  nextTile.setAttribute('data-type', nextColor)
  // nextTile.innerHTML = "1";
  nextTileContainer?.appendChild(nextTile)
  await nextTile.animate(animationConfig.keyframesSpawn, animationConfig.timing)
    .finished
}

export async function generateRandomTile() {
  const randomTile = document.createElement('div') as HTMLDivElement
  randomTile.classList.add('tile')
  randomTile.setAttribute('data-type', generateRandomColor())
  // randomTile.innerHTML = "1";
  const { x, y } = getRandomGridPosition()
  await rippleEffect(x, y)

  const tileContainer = document.querySelector(`[data-grid-pos="${x}:${y}"]`)
  gameStore.state.grid[`${x}:${y}`] = randomTile.getAttribute('data-type')
  tileContainer?.appendChild(randomTile)
  await randomTile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished

  return { x, y }
}

export async function generateTile(type: Color, x: number, y: number) {
  const newTile = document.createElement('div') as HTMLDivElement
  newTile.classList.add('tile')
  newTile.setAttribute('data-type', type)
  // newTile.innerHTML = "1";
  const tileContainer = document.querySelector(`[data-grid-pos="${x}:${y}"]`)
  gameStore.state.grid[`${x}:${y}`] = newTile.getAttribute('data-type')
  tileContainer?.appendChild(newTile)
  await newTile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished
}

export async function moveNextTileToCell(cell: Element, x: number, y: number) {
  const tile = document.querySelectorAll('.tile.next')[0] as HTMLElement
  // eslint-disable-next-line ts/no-unused-expressions
  tile.animate(animationConfig.keyframesOut, animationConfig.timing).finished

  cell.appendChild(tile)
  gameStore.state.grid[`${x}:${y}`] = tile.getAttribute('data-type')
  tile.classList.remove('next')

  await tile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished
}
