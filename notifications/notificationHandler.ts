import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

const askPermissions = async () => {
  Notifications.getPermissionsAsync().then((status) => {
    if (!status.granted) {
      Notifications.requestPermissionsAsync()
    }
  })
}

const deleteNotifications = async () => {
  Notifications.cancelAllScheduledNotificationsAsync()
}

const iosScheduler = (weekday: number[], time: Date) => {
  if (weekday !== [-1]) {
    Notifications.cancelAllScheduledNotificationsAsync()
    weekday.forEach((v) => {
      if (v !== -1) {
        Notifications.scheduleNotificationAsync({
          content: {
            title: 'Practice your meditation today  🙇‍♂️',
          },
          trigger: {
            hour: time.getHours(),
            minute: time.getMinutes(),
            weekday: v,
          },
        })
      }
    })
  }
}

const androidSchedular = (weekday: number[], time: Date) => {
  Notifications.cancelAllScheduledNotificationsAsync()
  if (weekday !== [-1]) {
    weekday.forEach((v) => {
      if (v !== -1) {
        Notifications.scheduleNotificationAsync({
          content: {
            title: 'Practice your meditation today 🙇‍♂️',
          },
          trigger: {
            hour: time.getHours(),
            minute: time.getMinutes(),
            weekday: v,
            repeats: true,
          },
        })
      }
    })
  }
}

const platformScheduler = (weekday: number[], time: Date) => {
  if (Platform.OS === 'android') {
    androidSchedular(weekday, time)
  }
  if (Platform.OS === 'ios') {
    iosScheduler(weekday, time)
  }
}

export default {
  askPermission: askPermissions,
  testSchedular: platformScheduler,
  deleteNotification: deleteNotifications,
}
