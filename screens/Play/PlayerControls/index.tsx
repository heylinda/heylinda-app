import * as React from 'react'
import { StyleSheet } from 'react-native'

import PlayerIcon from '../PlayerIcon'
import { View, Text } from '../../../components/Themed'

interface Props {
  positionTime: string
  durationTime: string
  isPlaying: boolean
  pause: () => void
  play: () => void
}
export default function PlayerControls({
  positionTime,
  durationTime,
  isPlaying,
  pause,
  play,
}: Props) {
  return (
    <View style={styles.controls}>
      <Text>{positionTime}</Text>
      <PlayerIcon name="stepbackward" onPress={() => {}} size={20} />
      {isPlaying ? (
        <PlayerIcon name="pausecircle" onPress={pause} />
      ) : (
        <PlayerIcon name="play" onPress={play} />
      )}
      <PlayerIcon name="stepforward" onPress={() => {}} size={20} />
      <Text>{durationTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})
