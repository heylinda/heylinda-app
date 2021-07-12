import * as React from 'react'
import { Alert } from 'react-native'
import { Divider, List } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/meditationSlice'

const Settings = () => {
  const dispatch = useAppDispatch()
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
          style: 'cancel',
        },
      ]
    )
  }
  return (
    <>
      <List.Item title="Clear Data" onPress={clearData} />
      <Divider />
    </>
  )
}

export default Settings
