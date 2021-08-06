import { AntDesign as Icon } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/Home'
import PlayScreen from '../screens/Play'
import SavedScreen from '../screens/Saved'
import SettingsScreen from '../screens/Settings'
import StatsScreen from '../screens/Stats'
import {
  BottomTabParamList,
  HomeParamList,
  SettingsParamList,
  StatsParamList,
  SavedParamList,
} from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="setting" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon size={25} style={styles.tabBarIcon} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>()

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Colors.light.white,
        }}
      />
      <HomeStack.Screen
        name="PlayScreen"
        component={PlayScreen}
        options={{
          headerBackTitle: 'Back',
          headerTitle: 'Play',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Colors.light.white,
        }}
      />
    </HomeStack.Navigator>
  )
}

const StatsStack = createStackNavigator<StatsParamList>()

function StatsNavigator() {
  return (
    <StatsStack.Navigator>
      <StatsStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{
          headerTitle: 'Stats',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </StatsStack.Navigator>
  )
}

const SavedStack = createStackNavigator<SavedParamList>()

function SavedNavigator() {
  return (
    <SavedStack.Navigator>
      <SavedStack.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{
          headerTitle: 'Saved',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </SavedStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<SettingsParamList>()

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </SettingsStack.Navigator>
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
  tabBarIcon: {
    marginBottom: -3,
  },
})
