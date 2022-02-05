import * as React from 'react'
import * as NavigationBar from 'expo-navigation-bar'
import { useThemeColor } from '../components'
import { Platform } from 'react-native'

export default function useSetNavigationBarColor() {
  const backgroundColor = useThemeColor({}, 'navBarBackground')

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(backgroundColor)
    }
  }, [backgroundColor])
}
