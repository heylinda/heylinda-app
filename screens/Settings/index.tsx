import * as React from 'react'
import { Alert } from 'react-native'
import { Divider, List, Dialog, Button } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/meditationSlice'

import Toast from '../../components/ToastSnackBar'
import NotificationSetter from './notificationSetter'
import Notify from '../../notifications/notificationHandler'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Settings = () => {
  const dispatch = useAppDispatch()
  const [showNotification, toggleShowNotification] = React.useState(false)
  const [toastShow, setToastShow] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState('')
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
          <NotificationSetter setToastMessage={setToastMessage} setToastShow={setToastShow} />
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
          AsyncStorage.removeItem('heylindaNotificationTime')
          setToastMessage('All Reminders Cleared')
          setToastShow(true)
        }}
      />
      <Divider />
      <Toast message={toastMessage} show={toastShow} changeShow={setToastShow} />
    </>
  )
}

export default Settings
