import * as React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

interface Props {
  loading: boolean
}
export const LoadingScreen: React.FC<Props> = ({ loading }) => {
  if (loading) {
    return <ActivityIndicator style={styles.loading} />
  }
  return null
}

const styles = StyleSheet.create({
  loading: { flex: 1 },
})

export default LoadingScreen
