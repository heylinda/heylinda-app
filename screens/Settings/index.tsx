import * as React from 'react'
import { Alert } from 'react-native'
import { Divider, List } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/meditationSlice'
import { openURL } from '../../utils'

const Settings = () => {
  const dispatch = useAppDispatch()
  const opnePrivacyPolicy = () => {
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
      <List.Item title="Privacy Policy" onPress={opnePrivacyPolicy} />
      <Divider />
    </>
  )
}

export default Settings
