import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import BottomTabNavigator from './BottomTabNavigator'
import CompletedScreen from '../screens/Completed'
import Colors from '../constants/Colors'
import { MainStackParamList } from '../types'

const Stack = createStackNavigator<MainStackParamList>()

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen
        name="CompletedScreen"
        component={CompletedScreen}
        options={{
          headerShown: false,
          headerBackTitle: 'Back',
          headerTitle: 'Completed',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Colors.light.white,
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: '600',
    color: Colors.light.white,
    fontSize: 16,
  },
  header: {
    backgroundColor: Colors.light.primary,
  },
})
