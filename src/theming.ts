export type AvailableThemes = keyof typeof themes;
export type ThemeProperty = keyof typeof themes[AvailableThemes];

export const themes = {
  black: {
    // https://tailwindcss.com/docs/customizing-colors
    "--bg-color": "#181818",
    "--cell-bg-color": "#22222288",
    "--text-color": "#ffffff",
    "--score-color": "#fbbf24",

    "--primary-color": "#e11d48",
    "--primary-border-color": "#881337",
    "--secondary-color": "#2563eb",
    "--secondary-border-color": "#1e3a8a",
    "--tertiary-color": "#16a34a",
    "--tertiary-border-color": "#14532d",
  },
  white: {
    // https://tailwindcss.com/docs/customizing-colors
    "--bg-color": "#ffffff",
    "--cell-bg-color": "#DFDFDF88",
    "--text-color": "#181818",
    "--score-color": "#fbbf24",

    "--primary-color": "#F87171",
    "--primary-border-color": "#B91C1C",
    "--secondary-color": "#38BDF8",
    "--secondary-border-color": "#0369A1",
    "--tertiary-color": "#4ADE80",
    "--tertiary-border-color": "#16A34A",
  },
  fancade: {
    // https://lospec.com/palette-list/fancade32
    "--bg-color": "#1c1c28",
    "--cell-bg-color": "#3d3d5244",
    "--text-color": "#ffeaea",
    "--score-color": "yellow",

    "--primary-color": "#ff4a68",
    "--primary-border-color": "#bb3049",
    "--secondary-color": "#008fff",
    "--secondary-border-color": "#0066db",
    "--tertiary-color": "#3bbf46",
    "--tertiary-border-color": "#008648",
  },
  bubblegum: {
    // https://lospec.com/palette-list/bubblegum-16
    "--bg-color": "#ff80a4",
    "--cell-bg-color": "#ff267444",
    "--text-color": "#fafdff",
    "--score-color": "#ffd100",

    "--primary-color": "#ff2674",
    "--primary-border-color": "#94216a",
    "--secondary-color": "#68aed4",
    "--secondary-border-color": "#007899",
    "--tertiary-color": "#10d275",
    "--tertiary-border-color": "#0a8f4e",
  },
};

/**
 * Loop through and change css custom properties on document:root
 * @param name Name of the color theme to use, these are defined in the `themes` object
 */
export const changeColorTheme = (name: AvailableThemes) => {
  localStorage.setItem("color-theme", name);
  for (const [property, value] of Object.entries(themes[name])) {
    document.documentElement.style.setProperty(property, value);
  }
};

/**
 * Toggle borders
 */
export const setupThemeToggles = () => {
  setupBorderWidthToggle();
  setupBorderRadiusToggle();
  setupTileSizeToggle();
  setupSettingsToggle();
  setupGapSizeToggle();
  setupColorSwitchers();
};

const setupSettingsToggle = () => {
  const toggleButton = document.getElementById("toggle-settings-button");
  const settingsContainer = document.getElementById("theme-settings");

  toggleButton?.addEventListener("click", () => {
    settingsContainer?.classList.toggle("active");
  });
};

const setupGapSizeToggle = () => {
  const toggleButton = document.getElementById("toggle-gap-size-button");
  toggleButton?.addEventListener("click", () => {
    const currentGap = getComputedStyle(document.documentElement)
      .getPropertyValue("--cell-gap")
      .trim();

    if (currentGap === "0.5rem") {
      document.documentElement.style.setProperty("--cell-gap", "0.125rem");
    } else if (currentGap === "0.125rem") {
      document.documentElement.style.setProperty("--cell-gap", "0.25rem");
    } else {
      document.documentElement.style.setProperty("--cell-gap", "0.5rem");
    }
  });
};

const setupTileSizeToggle = () => {
  const toggleButton = document.getElementById("toggle-tile-size-button");
  toggleButton?.addEventListener("click", () => {
    const currentSize = getComputedStyle(document.documentElement)
      .getPropertyValue("--tile-size")
      .trim();

    if (currentSize === "4rem") {
      document.documentElement.style.setProperty("--tile-size", "3rem");
    } else {
      document.documentElement.style.setProperty("--tile-size", "4rem");
    }
  });
};

const setupBorderRadiusToggle = () => {
  const toggleButton = document.getElementById("toggle-border-radius-button");
  toggleButton?.addEventListener("click", () => {
    const currentRadius = getComputedStyle(document.documentElement)
      .getPropertyValue("--cell-border-radius")
      .trim();

    if (currentRadius === "0.75rem") {
      document.documentElement.style.setProperty("--cell-border-radius", "0px");
      document.documentElement.style.setProperty("--tile-border-radius", "0px");
    } else if (currentRadius === "0px") {
      document.documentElement.style.setProperty(
        "--cell-border-radius",
        "100%"
      );
      document.documentElement.style.setProperty(
        "--tile-border-radius",
        "100%"
      );
    } else {
      document.documentElement.style.setProperty(
        "--cell-border-radius",
        "0.75rem"
      );
      document.documentElement.style.setProperty(
        "--tile-border-radius",
        "0.5rem"
      );
    }
  });
};

const setupBorderWidthToggle = () => {
  const toggleButton = document.getElementById("toggle-borders-button");

  toggleButton?.addEventListener("click", () => {
    const currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue("--cell-border-width")
      .trim();

    if (currentWidth === "4px") {
      document.documentElement.style.setProperty("--cell-border-width", "0px");
    } else {
      document.documentElement.style.setProperty("--cell-border-width", "4px");
    }
  });
};

/**
 * Loop through all available themes and create buttons for them inside #theme-switcher
 */
const setupColorSwitchers = () => {
  const container = document.getElementById("theme-switcher");

  for (const [theme, properties] of Object.entries(themes)) {
    const themeButton = document.createElement("button");
    themeButton.classList.add("theme-button");
    themeButton.innerHTML = `<span class="sr-only">${theme}</span>`;
    container?.appendChild(themeButton);
    themeButton.style.backgroundColor = properties["--bg-color"];
    themeButton.style.borderColor = properties["--text-color"];

    themeButton.addEventListener("click", () => {
      changeColorTheme(theme as AvailableThemes);
    });
  }
};
