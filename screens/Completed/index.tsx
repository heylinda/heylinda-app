import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { AntDesign as Icon } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

import { Screen, Text, useThemeColor } from '../../components'
import Colors from '../../constants/Colors'
import { MainStackParamList } from '../../types'
import { Linking } from 'react-native'
import { useAppSelector } from '../../hooks'
import { selectTotalSessions } from '../../redux/selectors'

interface Props {
  navigation: StackNavigationProp<MainStackParamList, 'CompletedScreen'>
}

const Completed = ({ navigation }: Props) => {
  const totalSessions = useAppSelector(selectTotalSessions)
  const backgroundColor = useThemeColor({}, 'completedBackground')
  const primaryColor = useThemeColor({}, 'completedPrimary')
  const onPressDonate = () => {
    Linking.openURL('https://opencollective.com/heylinda/donate')
  }
  const onPressSkip = () => navigation.replace('Main')

  return (
    <Screen style={[styles.screen, { backgroundColor }]}>
      <Icon size={50} name="checkcircle" color={primaryColor} style={styles.checkMark} />
      <Text style={styles.title}> Congratulations!</Text>
      <Text style={styles.description}>
        You have completed {totalSessions} meditation{totalSessions === 1 ? '' : 's'}!{'\n'}Do you
        want to give a donation?
      </Text>
      <Button onPress={onPressDonate} style={styles.button} mode="contained" color={primaryColor}>
        Donate
      </Button>
      <Button
        onPress={onPressSkip}
        style={[styles.button, styles.skipButton]}
        mode="outlined"
        color={Colors.light.white}
      >
        Skip
      </Button>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.primary,
    padding: 40,
  },
  checkMark: {
    marginBottom: 20,
  },
  title: {
    color: Colors.light.white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  description: {
    color: Colors.light.white,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 60,
  },
  button: {
    padding: 8,
    width: '100%',
    marginBottom: 20,
  },
  skipButton: {
    borderColor: Colors.light.white,
  },
})

export default Completed
