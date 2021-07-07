const primary = "#463FB0";
const purples = {
  purple900: "#4A5784",
};
const grays = {
  white: "#fff",
  gray100: "#F2F2F2",
  gray800: "#5D5D5D",
  gray900: "#333333",
  black: "#000",
};

export default {
  light: {
    primary,
    text: grays.black,
    background: grays.gray100,
    tint: primary,
    tabIconDefault: "#ccc",
    ...purples,
    ...grays,
  },
  dark: {
    primary,
    text: grays.black,
    background: grays.gray100,
    tint: primary,
    tabIconDefault: "#ccc",
    ...purples,
    ...grays,
  },
};
