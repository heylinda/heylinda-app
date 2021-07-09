import * as React from 'react'
import { Image, StyleSheet } from 'react-native'

import PlayerControls from './PlayerControls'
import Screen from '../../components/Screen'
import { Text } from '../../components/Themed'
import { useMeditation } from '../../hooks'
import NotFoundScreen from '../NotFoundScreen'
import { HomeParamList } from '../../types'
import { RouteProp } from '@react-navigation/native'

type PlayRouteProp = RouteProp<HomeParamList, 'PlayScreen'>
interface Props {
  route: PlayRouteProp
}
export default function PlayScreen({ route }: Props) {
  const { id } = route.params
  const meditation = useMeditation(id)

  if (!meditation) {
    return <NotFoundScreen />
  }

  const { title, subtitle, image } = meditation

  return (
    <Screen style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <PlayerControls />
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
})
