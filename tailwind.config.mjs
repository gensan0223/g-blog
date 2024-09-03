/** @type {import('tailwindcss').Config} */
const kanagawaColors = {
  sumiInk0: "#1F1F28",
  sumiInk1: "#2A2A37",
  sumiInk2: "#363646",
  sumiInk3: "#54546D",
  sumiInk4: "#727169",
  fujiWhite: "#DCD7BA",
  sakuraPink: "#E46876",
  waveBlue1: "#223249",
  waveBlue2: "#2D4F67",
  springViolet1: "#938AA9",
  springViolet2: "#957FB8",
  autumnRed: "#C34043",
  boatYellow1: "#FF9E3B",
  boatYellow2: "#FFA066",
  carpYellow: "#DCA561",
  autumnGreen: "#76946A",
  autumnYellow: "#FF9E3B",
  winterGreen: "#658594",
  winterYellow: "#D7BA7D",
  winterRed: "#957FB8",
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography'),],
  daisyui: {
    themes: [
      {
        kanagawa: {
          "primary": kanagawaColors.waveBlue2,
          "secondary": kanagawaColors.springViolet2,
          "accent": kanagawaColors.boatYellow2,
          "neutral": kanagawaColors.sumiInk1,
          "base-100": kanagawaColors.sumiInk0,
          "base-200": kanagawaColors.sumiInk2,
          "base-300": kanagawaColors.sumiInk3,
          "info": kanagawaColors.waveBlue1,
          "success": kanagawaColors.autumnGreen,
          "warning": kanagawaColors.boatYellow1,
          "error": kanagawaColors.autumnRed,
        },
      },
    ],
  },
};
