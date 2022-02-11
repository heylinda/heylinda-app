import * as React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useThemeColor } from './Themed'

interface Props {
  loading?: boolean
}
export const LoadingScreen: React.FC<Props> = ({ loading = false }) => {
  const primary = useThemeColor({}, 'primary')

  if (loading) {
    return <ActivityIndicator testID="activity-indicator" style={styles.loading} color={primary} />
  }
  return null
}

const styles = StyleSheet.create({
  loading: { flex: 1 },
})

export default LoadingScreen
