export type AvailableThemes = keyof typeof themes;

export const themes = {
  black: {
    "--bg-color": "#181818",
    "--text-color": "#ffffff",
  },
  white: {
    "--bg-color": "#ffffff",
    "--text-color": "#181818",
  },
};

/**
 * Loop through and change css custom properties on document:root
 * @param name Name of the color theme to use, these are defined in the `themes` object
 */
export const changeColorTheme = (name: AvailableThemes) => {
  for (const [property, value] of Object.entries(themes[name])) {
    document.documentElement.style.setProperty(property, value);
  }
};
