/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { AppRoutes } from './navigation/AppRoutes'

export type NO_PARAMS = undefined
export type RootStackParamList = {
  [AppRoutes.Root]: NO_PARAMS
  [AppRoutes.NotFound]: NO_PARAMS
}

export type MainStackParamList = {
  [AppRoutes.Main]: NO_PARAMS
  [AppRoutes.CompletedScreen]: NO_PARAMS
}

export type BottomTabParamList = {
  [AppRoutes.Home]: NO_PARAMS
  [AppRoutes.Stats]: NO_PARAMS
  [AppRoutes.Settings]: NO_PARAMS
}

export type HomeParamList = {
  [AppRoutes.HomeScreen]: NO_PARAMS
  [AppRoutes.PlayScreen]: {
    id: string
  }
}

export type StatsParamList = {
  [AppRoutes.StatsScreen]: NO_PARAMS
}

export type SettingsParamList = {
  [AppRoutes.SettingsScreen]: NO_PARAMS
}
