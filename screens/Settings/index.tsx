import * as React from 'react'
import { Alert } from 'react-native'
import { Divider, List } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/meditationSlice'

import Toast from 'react-native-simple-toast'
import NotificationSetter from './notificationSetter'
import Notify from './notificationHandler'

const Settings = () => {
  const dispatch = useAppDispatch()
  const [showNotification, toggleShowNotification] = React.useState(false)
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
      <List.Item
        title="Set Daily Reminder"
        onPress={() => toggleShowNotification(!showNotification)}
      />
      {showNotification && <NotificationSetter />}
      <Divider />
      <List.Item
        title="Clear All Reminders"
        onPress={() => {
          Notify.deleteNotification()
          Toast.show('Deleted Notifiers')
        }}
      />
      <Divider />
    </>
  )
}

export default Settings
