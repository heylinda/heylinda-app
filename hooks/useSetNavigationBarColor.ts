import * as React from 'react'
import * as NavigationBar from 'expo-navigation-bar'
import { useThemeColor } from '../components'

export default function useSetNavigationBarColor() {
  const backgroundColor = useThemeColor({}, 'navBarBackground')

  React.useEffect(() => {
    NavigationBar.setBackgroundColorAsync(backgroundColor)
  }, [backgroundColor])
}
