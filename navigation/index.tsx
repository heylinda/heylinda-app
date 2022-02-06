/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import MainNavigator from './MainNavigator'
import LinkingConfiguration from './LinkingConfiguration'
import { StatusBar } from 'expo-status-bar'
import { PageHit } from 'expo-analytics'
import analytics from '../utils/analytics'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const navigationContainerRef = React.useRef<NavigationContainerRef<any>>(null)

  const handleNavigationStateChange = async () => {
    const currentRouteName = navigationContainerRef?.current?.getCurrentRoute()?.name
    try {
      await analytics.hit(new PageHit(currentRouteName || 'Unknown'))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      onStateChange={handleNavigationStateChange}
      ref={navigationContainerRef}
    >
      <StatusBar style="light" />
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={MainNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}
