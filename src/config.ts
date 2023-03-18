export const animationConfig = {
  keyframesIn: [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }],
  keyframesSpawn: [
    { scale: 0.8, transform: "translateY(-4rem)" },
    { scale: 1.1 },
    { scale: 1, transform: "translateY(-0rem)" },
  ],
  keyframesOut: [{ scale: 1 }, { scale: 1.1 }, { scale: 0.2 }],
  keyframesDisappear: [
    { scale: 1, opacity: 1 },
    { scale: 0.2, opacity: 0 },
  ],
  timing: {
    easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    duration: 130,
  },
  timingShort: {
    easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    duration: 80,
  },
  timingLong: {
    easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    duration: 240,
  },
};
