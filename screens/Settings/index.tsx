import * as React from 'react'
import { Alert, StyleSheet } from 'react-native'
import { Divider, List, Dialog } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/meditationSlice'
import { Ionicons } from '@expo/vector-icons'

import Toast from '../../components/ToastSnackBar'
import NotificationSetter from './notificationSetter'
import Notify from '../../notifications/notificationHandler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useThemeColor } from '../../components'

const Settings = () => {
  const dispatch = useAppDispatch()
  const [showNotificationSetter, toggleShowNotificationSetter] = React.useState(false)
  const [toastShow, setToastShow] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState('')
  const [notificationSet, setNotificationSet] = React.useState(false)
  const primaryColor = useThemeColor({}, 'primary')
  const getNotificationStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('heylindaNotificationTime')
      if (value !== null) {
        if (value === '\0') {
          setNotificationSet(false)
        } else {
          setNotificationSet(true)
        }
      } else {
        setNotificationSet(false)
      }
    } catch (e) {
      setNotificationSet(false)
    }
  }
  React.useEffect(() => {
    getNotificationStatus()
  }, [toastShow])
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
        onPress={() => toggleShowNotificationSetter(!showNotificationSetter)}
        right={() => (
          <Ionicons
            name={notificationSet ? 'notifications' : 'notifications-off'}
            color={primaryColor}
            style={styles.iconStyle}
            size={25}
          />
        )}
      />
      <Dialog
        visible={showNotificationSetter}
        onDismiss={() => {
          toggleShowNotificationSetter(!showNotificationSetter)
        }}
        dismissable={true}
        style={[styles.dialogStyle, { borderColor: useThemeColor({}, 'primary') }]}
      >
        <Dialog.Title>Set Reminders</Dialog.Title>
        <Dialog.Content>
          <NotificationSetter
            setToastMessage={setToastMessage}
            setToastShow={setToastShow}
            setNotificationSetter={toggleShowNotificationSetter}
          />
        </Dialog.Content>
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
      <Toast message={toastMessage} show={toastShow} setShow={setToastShow} />
    </>
  )
}

const styles = StyleSheet.create({
  dialogStyle: {
    width: 350,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
  },
})
export default Settings
