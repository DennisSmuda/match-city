import { gameStore } from './store'

const sounds = {
  clickSound: new Audio('./sounds/click_001.ogg'),
  dropSound: new Audio('./sounds/drop_002.ogg'),
  confirmationSound: new Audio('./sounds/confirmation_001.ogg'),
  errorSound: new Audio('./sounds/error_003.ogg'),
}

const soundToggle = document.getElementById('audio-toggle')

export function setupAudio() {
  sounds.clickSound.volume = 0.25
  sounds.dropSound.volume = 0.25
  sounds.confirmationSound.volume = 0.25
  sounds.errorSound.volume = 0.25

  const audioEnabled = localStorage.getItem('audio-enabled') || 'true'

  if (audioEnabled === 'true') {
    soundToggle?.classList.add('enabled')
    gameStore.set(() => ({
      isAudioEnabled: true,
    }))
  }
  else {
    soundToggle?.classList.remove('enabled')
    gameStore.set(() => ({
      isAudioEnabled: false,
    }))
  }

  setupSoundToggle()
}

export async function playSound(name: keyof typeof sounds) {
  if (!gameStore.state.isAudioEnabled)
    return

  try {
    await sounds[name].play()
    console.warn('Play', name)
  }
  catch (e) {
    console.warn(e)
  }
}

function setupSoundToggle() {
  soundToggle?.addEventListener('click', () => {
    if (gameStore.state.isAudioEnabled) {
      soundToggle?.classList.remove('enabled')
      localStorage.setItem('audio-enabled', 'false')
      gameStore.set(() => ({
        isAudioEnabled: false,
      }))
    }
    else {
      soundToggle?.classList.add('enabled')
      localStorage.setItem('audio-enabled', 'true')
      gameStore.set(() => ({
        isAudioEnabled: true,
      }))
    }
  })
}
