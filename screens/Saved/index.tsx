import * as React from 'react'
import { StyleSheet } from 'react-native'
import Screen from '../../components/Screen'

import { Text } from '../../components/Themed'

interface Props {}

export default function Saved({}: Props) {
  return (
    <Screen scroll>
      <Text style={styles.title}>ANXIETY</Text>
      <Text style={styles.title}>SLEEP</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19,
  },
})
