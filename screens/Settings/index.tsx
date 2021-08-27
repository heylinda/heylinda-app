import * as React from 'react'
import { Alert } from 'react-native'
import { Divider, List, Dialog, Button } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/meditationSlice'

import Toast from 'react-native-simple-toast'
import NotificationSetter from './notificationSetter'
import Notify from '../../notifications/notificationHandler'

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
      <Dialog
        visible={showNotification}
        onDismiss={() => {
          toggleShowNotification(!showNotification)
        }}
        dismissable={true}
      >
        <Dialog.Title>Set Reminders</Dialog.Title>
        <Dialog.Content>
          <NotificationSetter />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => toggleShowNotification(!showNotification)}>CANCEL</Button>
        </Dialog.Actions>
      </Dialog>
      <Divider />
      <List.Item
        title="Clear All Reminders"
        onPress={() => {
          Notify.deleteNotification()
          Toast.show('Deleted Reminders')
        }}
      />
      <Divider />
    </>
  )
}

export default Settings
