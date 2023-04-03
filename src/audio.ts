import { gameStore } from "./store";

const sounds = {
  // test: new Audio("./sounds/test.wav"),
};

const soundToggle = document.getElementById("audio-toggle");

export const setupAudio = () => {
  // sounds.test.volume = 0.25;

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
    // await sounds[name].play();
    console.log("Play", name);
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
