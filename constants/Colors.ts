const primary = '#463FB0' // rgb(70, 63, 176)
const purples = {
  purple900: '#4A5784', // rgb(74, 87, 132)
  purple500: '#6F69C9', // rgb(111, 105, 201)
}
const grays = {
  white: '#fff', // rgb(255, 255, 255)
  gray100: '#F2F2F2', // rgb(242, 242, 242)
  gray800: '#5D5D5D', // rgb(93, 93, 93)
  gray900: '#333333', // rgb(51, 51, 51)
  gray950: '#1e1e1e', //rgb(30, 30, 30)
  gray975: '#121212', // rgb(18, 18, 18)
  black: '#000', // rgb(0, 0, 0)
}

export default {
  light: {
    primary,
    text: grays.gray900,
    background: grays.gray100,
    tint: primary,
    tabIconDefault: '#ccc',
    ...purples,
    ...grays,
    completedBackground: primary,
    completedPrimary: grays.white,
    navBarBackground: grays.white,
  },
  dark: {
    primary,
    text: grays.white,
    background: grays.gray900,
    tint: primary,
    tabIconDefault: '#ccc',
    ...purples,
    ...grays,
    white: grays.gray950,
    completedBackground: grays.gray900,
    completedPrimary: purples.purple500,
    navBarBackground: grays.gray975,
  },
}
