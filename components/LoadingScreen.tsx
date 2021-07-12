import * as React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useThemeColor } from './Themed'

interface Props {
  loading: boolean
}
export const LoadingScreen: React.FC<Props> = ({ loading }) => {
  const primary = useThemeColor({}, 'primary')

  if (loading) {
    return <ActivityIndicator style={styles.loading} color={primary} />
  }
  return null
}

const styles = StyleSheet.create({
  loading: { flex: 1 },
})

export default LoadingScreen
