import * as React from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { AntDesign as Icon } from '@expo/vector-icons'
import { Audio, AVPlaybackStatus } from 'expo-av'

import Screen from '../../components/Screen'
import { View, Text } from '../../components/Themed'
import Colors from '../../constants/Colors'
import { useMeditation } from '../../hooks/useMeditation'
import NotFoundScreen from '../NotFoundScreen'
import { HomeParamList } from '../../types'
import { RouteProp } from '@react-navigation/native'
import { useState } from 'react'
import useMsToTime from '../../hooks/useMsToTime'

function PlayerIcon(props: {
  name: React.ComponentProps<typeof Icon>['name']
  color?: string
  size?: number
  onPress: () => void
}) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Icon size={50} color={Colors.light.primary} style={styles.playerIcon} {...props} />
    </TouchableWithoutFeedback>
  )
}
type PlayRouteProp = RouteProp<HomeParamList, 'PlayScreen'>
interface Props {
  route: PlayRouteProp
}
export default function PlayScreen({ route }: Props) {
  const { id } = route.params
  const meditation = useMeditation(id)
  const [isPlaying, setIsPlaying] = useState(false)
  const [sound, setSound] = useState<Audio.Sound>()
  const [currentTime, setCurrentTime] = useState(0)
  const time = useMsToTime(currentTime)

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
    const { sound: _sound } = await Audio.Sound.createAsync(
      require('../../assets/meditations/meditation.mp3'),
      {},
      onPlaybackStatusUpdate
    )
    setSound(_sound)
    await _sound.playAsync()
    setIsPlaying(true)
  }

  const pause = async () => {
    if (sound) {
      await sound.pauseAsync()
    }
    setIsPlaying(false)
  }

  if (!meditation) {
    return <NotFoundScreen />
  }

  const { title, subtitle, image } = meditation

  return (
    <Screen style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
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
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 66,
    paddingBottom: 66,
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
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  playerIcon: { marginBottom: -3 },
})
