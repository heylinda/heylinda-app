import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Audio, AVPlaybackStatus } from 'expo-av'

import PlayerIcon from '../PlayerIcon'
import { View, Text } from '../../../components/Themed'
import { useMsToTime, useAppDispatch } from '../../../hooks'
import { completed } from '../../../redux/meditationSlice'

export default function PlayerControls() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [sound, setSound] = React.useState<Audio.Sound>()
  const [currentTime, setCurrentTime] = React.useState(0)
  const time = useMsToTime(currentTime)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  const onPlaybackStatusUpdate = (playbackStatus: AVPlaybackStatus) => {
    if (!playbackStatus.isLoaded) {
      // Update your UI for the unloaded state
    } else {
      // Update your UI for the loaded state
      if (playbackStatus.positionMillis) {
        setCurrentTime(playbackStatus.positionMillis)
      }
    }
  }

  const play = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    })
    const { sound: _sound } = await Audio.Sound.createAsync(
      require('../../../assets/meditations/meditation.mp3'),
      {},
      onPlaybackStatusUpdate
    )
    setSound(_sound)
    await _sound.playAsync()
    setIsPlaying(true)
    dispatch(completed())
  }

  const pause = async () => {
    if (sound) {
      await sound.pauseAsync()
    }
    setIsPlaying(false)
  }

  return (
    <View style={styles.controls}>
      <Text>{time}</Text>
      <PlayerIcon name="stepbackward" onPress={() => {}} size={20} />
      {isPlaying ? (
        <PlayerIcon name="pausecircle" onPress={pause} />
      ) : (
        <PlayerIcon name="play" onPress={play} />
      )}
      <PlayerIcon name="stepforward" onPress={() => {}} size={20} />
      <Text>{time}</Text>
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
