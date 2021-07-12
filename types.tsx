/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Home: undefined
  Stats: undefined
  Settings: undefined
}

export type HomeParamList = {
  HomeScreen: undefined
  PlayScreen: {
    id: string
  }
}

export type StatsParamList = {
  StatsScreen: undefined
}

export type SettingsParamList = {
  SettingsScreen: undefined
}
