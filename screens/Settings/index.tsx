import * as React from 'react'
import { Alert } from 'react-native'
import { Divider, List } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/meditationSlice'
import { openURL } from '../../utils'
import { StackNavigationProp } from '@react-navigation/stack'
import { SettingsParamList } from '../../types'

interface Props {
  navigation: StackNavigationProp<SettingsParamList, 'SettingsScreen'>
}

const Settings = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()

  const openPrivacyPolicy = () => {
    try {
      openURL('https://www.heylinda.app/privacy')
    } catch (error) {
      console.error(error)
    }
  }
  const clearData = () => {
    Alert.alert(
      'Clear Data',
      'Are you sure you want to delete your data? All your stats will be reset. This cannot be undone.',
      [
        {
          text: 'Clear Data',
          onPress: () => dispatch(reset()),
          style: 'destructive',
        },
        {
          text: 'Cancel',
        },
      ]
    )
  }
  return (
    <>
      <List.Item title="Clear Data" onPress={clearData} />
      <Divider />
      <List.Item title="Privacy Policy" onPress={openPrivacyPolicy} />
      <Divider />
      <List.Item title="About" onPress={() => navigation.navigate('AboutScreen')} />
      <Divider />
    </>
  )
}

export default Settings
