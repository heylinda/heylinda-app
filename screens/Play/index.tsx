import * as React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Audio, AVPlaybackStatus } from 'expo-av'

import PlayerControls from './PlayerControls'
import Screen from '../../components/Screen'
import { Text } from '../../components/Themed'
import { useMeditation } from '../../hooks'
import NotFoundScreen from '../NotFoundScreen'
import { HomeParamList } from '../../types'
import { RouteProp } from '@react-navigation/native'
import { useMsToTime, useAppDispatch } from '../../hooks'
import { completed } from '../../redux/meditationSlice'
import { LoadingScreen } from '../../components'

type PlayRouteProp = RouteProp<HomeParamList, 'PlayScreen'>
interface Props {
  route: PlayRouteProp
}
export default function PlayScreen({ route }: Props) {
  const { id } = route.params
  const meditation = useMeditation(id)
  const [isLoadingAudio, setIsLoadingAudio] = React.useState(true)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [sound, setSound] = React.useState<Audio.Sound>()
  const [currentTime, setCurrentTime] = React.useState(0)
  const time = useMsToTime(currentTime)
  const dispatch = useAppDispatch()
  const uri = meditation?.uri || ''

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  React.useEffect(() => {
    const loadAudio = async () => {
      setIsLoadingAudio(true)
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
      })
      const { sound: _sound } = await Audio.Sound.createAsync({ uri }, {}, onPlaybackStatusUpdate)
      setSound(_sound)
      setIsLoadingAudio(false)
    }
    if (uri) {
      loadAudio()
    }
  }, [uri])

  const play = async () => {
    if (sound) {
      await sound.playAsync()
    }
    setIsPlaying(true)
    dispatch(completed())
  }

  const pause = async () => {
    if (sound) {
      await sound.pauseAsync()
    }
    setIsPlaying(false)
  }

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

  if (!meditation) {
    return <NotFoundScreen />
  }

  const { title, subtitle, image } = meditation

  if (isLoadingAudio) {
    return <LoadingScreen loading={isLoadingAudio} />
  }

  return (
    <Screen style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <PlayerControls isPlaying={isPlaying} play={play} pause={pause} time={time} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 31,
    paddingRight: 31,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 50,
  },
  image: {
    width: 252,
    height: 252,
    marginBottom: 66,
    borderRadius: 10,
    alignSelf: 'center',
  },
})
