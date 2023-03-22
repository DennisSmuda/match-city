import { gameStore } from "./store";

const sounds = {
  clickSound: new Audio("./sounds/Toot02.wav"),
  randomTileSound: new Audio("./sounds/Tap01.wav"),
  comboSound: new Audio("./sounds/Tap03.wav"),
  combo2Sound: new Audio("./sounds/Woohoo05.wav"),
};

const soundToggle = document.getElementById("audio-toggle");

export const setupAudio = () => {
  sounds.comboSound.volume = 0.25;
  sounds.combo2Sound.volume = 0.25;
  sounds.clickSound.volume = 0.25;
  sounds.randomTileSound.volume = 0.25;

  const audioEnabled = localStorage.getItem("audio-enabled") || "true";

  if (audioEnabled === "true") {
    soundToggle?.classList.add("enabled");
    gameStore.set(() => ({
      isAudioEnabled: true,
    }));
  } else {
    soundToggle?.classList.remove("enabled");
    gameStore.set(() => ({
      isAudioEnabled: false,
    }));
  }

  setupSoundToggle();
};

export const playSound = async (name: keyof typeof sounds) => {
  if (!gameStore.state.isAudioEnabled) return;

  await sounds[name].play();
};

const setupSoundToggle = () => {
  soundToggle?.addEventListener("click", () => {
    if (gameStore.state.isAudioEnabled) {
      soundToggle?.classList.remove("enabled");
      localStorage.setItem("audio-enabled", "false");
      gameStore.set(() => ({
        isAudioEnabled: false,
      }));
    } else {
      soundToggle?.classList.add("enabled");
      localStorage.setItem("audio-enabled", "true");
      gameStore.set(() => ({
        isAudioEnabled: true,
      }));
    }
  });
};
