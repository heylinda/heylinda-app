import * as React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Audio, AVPlaybackStatus } from 'expo-av'

import PlayerControls from './PlayerControls'
import Screen from '../../components/Screen'
import { Text } from '../../components/Themed'
import { useAppSelector, useMeditation } from '../../hooks'
import NotFoundScreen from '../NotFoundScreen'
import { HomeParamList, MainStackParamList } from '../../types'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { useMsToTime, useAppDispatch } from '../../hooks'
import { completed, updateFavourite } from '../../redux/meditationSlice'
import { LoadingScreen } from '../../components'
import { useCallback } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { selectFavourites, selectFilePaths } from '../../redux/selectors'
import FavouriteButton from '../../components/FavouriteButton'
import { Meditation } from '../../data/meditations'

type PlayRouteProp = RouteProp<HomeParamList, 'PlayScreen'>

type PlayNavProp = CompositeNavigationProp<
  StackNavigationProp<HomeParamList, 'PlayScreen'>,
  StackNavigationProp<MainStackParamList>
>
interface Props {
  navigation: PlayNavProp
  route: PlayRouteProp
}
export default function PlayScreen({ route, navigation }: Props) {
  const { id } = route.params
  const meditation = useMeditation(id)
  const favourites = useAppSelector(selectFavourites)
  const [isLoadingAudio, setIsLoadingAudio] = React.useState(true)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [sound, setSound] = React.useState<Audio.Sound>()
  const [positionMillis, setPositionMillis] = React.useState(0)
  const [durationMills, setDurationMills] = React.useState(0)
  const durationTime = useMsToTime(durationMills)
  const positionTime = useMsToTime(positionMillis)
  const dispatch = useAppDispatch()
  const uri = meditation?.uri || ''
  const filepaths = useAppSelector(selectFilePaths)

  const isFavourited = favourites.some((item: Meditation) => item.id === meditation?.id)

  const onFavourite = () => {
    dispatch(updateFavourite(meditation))
  }

  const onPlaybackStatusUpdate = useCallback(
    (playbackStatus: AVPlaybackStatus) => {
      if (!playbackStatus.isLoaded) {
        // Update your UI for the unloaded state
      } else {
        // Update your UI for the loaded state
        if (playbackStatus.positionMillis) {
          setPositionMillis(playbackStatus.positionMillis)
        }
        if (playbackStatus.durationMillis) {
          setDurationMills(playbackStatus.durationMillis)
        }
        if (playbackStatus.didJustFinish) {
          dispatch(completed(playbackStatus.durationMillis || 0))
          setIsPlaying(false)
          navigation.replace('CompletedScreen')
        }
      }
    },
    [dispatch, navigation]
  )

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  React.useEffect(() => {
    const loadAudio = async () => {
      let filename = uri.split('/').pop() ?? ''
      let filepath = filepaths.find((file) => {
        if (file.split('/').pop() === filename) {
          return file
        }
      })

      setIsLoadingAudio(true)

      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
      })

      if (filepath) {
        // Load from downloaded audio file
        const _sound = new Audio.Sound()
        _sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
        await _sound.loadAsync({ uri: filepath })
        setSound(_sound)
      } else {
        // Load from remote URI
        const { sound: _sound } = await Audio.Sound.createAsync({ uri }, {}, onPlaybackStatusUpdate)
        setSound(_sound)
      }

      setIsLoadingAudio(false)
    }

    loadAudio()
  }, [onPlaybackStatusUpdate, uri, filepaths])

  const replay = async () => {
    await sound?.setPositionAsync(positionMillis - 10 * 1000)
  }

  const forward = async () => {
    await sound?.setPositionAsync(positionMillis + 10 * 1000)
  }

  const play = async () => {
    if (sound) {
      await sound.playAsync()
      setIsPlaying(true)
    }
  }

  const pause = async () => {
    if (sound) {
      await sound.pauseAsync()
      setIsPlaying(false)
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
      <FavouriteButton isFavourited={isFavourited} style={styles.favourite} onPress={onFavourite} />
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <PlayerControls
        isPlaying={isPlaying}
        play={play}
        pause={pause}
        replay={replay}
        forward={forward}
        positionTime={positionTime}
        durationTime={durationTime}
      />
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
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: 300,
    maxHeight: 300,
    marginBottom: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
  favourite: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})
