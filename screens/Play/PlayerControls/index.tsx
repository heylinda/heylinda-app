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
  replay: () => void
  forward: () => void
}
export default function PlayerControls({
  positionTime,
  durationTime,
  isPlaying,
  pause,
  play,
  replay,
  forward,
}: Props) {
  return (
    <View style={styles.controls}>
      <Text>{positionTime}</Text>
      <PlayerIcon name="replay-10" onPress={replay} size={30} />
      {isPlaying ? (
        <PlayerIcon name="pause-circle-filled" onPress={pause} />
      ) : (
        <PlayerIcon name="play-circle-filled" onPress={play} />
      )}
      <PlayerIcon name="forward-10" onPress={forward} size={30} />
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
