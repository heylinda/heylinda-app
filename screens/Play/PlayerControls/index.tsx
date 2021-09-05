import * as React from 'react'
import { StyleSheet } from 'react-native'

import PlayerIcon from '../PlayerIcon'
import { View, Text } from '../../../components/Themed'

interface Props {
  positionTime: string
  durationTime: string
  isPlaying: boolean
  isFavorite: boolean
  pause: () => void
  play: () => void
  replay: () => void
  forward: () => void
  toggleFavorite: () => void
}
export default function PlayerControls({
  positionTime,
  durationTime,
  isPlaying,
  isFavorite,
  pause,
  play,
  replay,
  forward,
  toggleFavorite,
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
      {isFavorite ? (
        <PlayerIcon name="favorite" onPress={toggleFavorite} size={30} />
      ) : (
        <PlayerIcon name="favorite-outline" onPress={toggleFavorite} size={30} />
      )}
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
