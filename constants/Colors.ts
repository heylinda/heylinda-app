const primary = "#463FB0";
const purples = {
  purple900: "#4A5784",
};
const grays = {
  white: "#fff",
  gray100: "#F2F2F2",
  gray800: "#5D5D5D",
  gray900: "#333333",
  gray950: "#1D1E1E",
  black: "#000",
};

export default {
  light: {
    primary,
    text: grays.gray900,
    background: grays.gray100,
    tint: primary,
    tabIconDefault: "#ccc",
    ...purples,
    ...grays,
  },
  dark: {
    primary,
    text: grays.white,
    background: grays.gray900,
    tint: primary,
    tabIconDefault: "#ccc",
    ...purples,
    ...grays,
    white: grays.gray950,
  },
};
