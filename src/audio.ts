import { gameStore } from "./store";

const sounds = {
  helloSound: new Audio("./sounds/Hallo.wav"),
  squishSound: new Audio("./sounds/Squishy01.wav"),
  errorSound: new Audio("./sounds/Error01.wav"),
  clickSound: new Audio("./sounds/Toot02.wav"),
  tootSound: new Audio("./sounds/Toot03.wav"),
  randomTileSound: new Audio("./sounds/Tap01.wav"),
  comboSound: new Audio("./sounds/Tap03.wav"),
  combo2Sound: new Audio("./sounds/Woohoo05.wav"),
};

const soundToggle = document.getElementById("audio-toggle");

export const setupAudio = () => {
  sounds.comboSound.volume = 0.25;
  sounds.combo2Sound.volume = 0.25;
  sounds.clickSound.volume = 0.25;
  sounds.tootSound.volume = 0.25;
  sounds.randomTileSound.volume = 0.25;
  sounds.squishSound.volume = 0.125;
  sounds.errorSound.volume = 0.125;

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

  try {
    await sounds[name].play();
  } catch (e) {
    console.log(e);
  }
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
