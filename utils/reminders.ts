import { Platform } from 'react-native'
import * as Notifications from 'expo-notifications'
import { ReminderFrequency } from '../redux/meditationSlice'

export const REMINDER_BODY = 'Practice your meditation today 🧘‍♀️'
const REMINDER_CHANNEL_ID = 'meditation-reminders'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

interface ScheduleReminderInput {
  frequency: ReminderFrequency
  hour: number
  minute: number
  weekdays: number[]
}

export const requestReminderPermissions = async () => {
  const existingPermission = await Notifications.getPermissionsAsync()

  if (existingPermission.granted) {
    return true
  }

  const requestedPermission = await Notifications.requestPermissionsAsync()
  return requestedPermission.granted
}

export const cancelReminderNotifications = async (notificationIds: string[] = []) => {
  await Promise.all(
    notificationIds.map((notificationId) =>
      Notifications.cancelScheduledNotificationAsync(notificationId)
    )
  )
}

export const scheduleMeditationReminder = async ({
  frequency,
  hour,
  minute,
  weekdays,
}: ScheduleReminderInput) => {
  const hasPermission = await requestReminderPermissions()

  if (!hasPermission) {
    throw new Error('Notification permissions are required to schedule reminders.')
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(REMINDER_CHANNEL_ID, {
      name: 'Meditation reminders',
      importance: Notifications.AndroidImportance.DEFAULT,
    })
  }

  const content = {
    title: 'Meditation Reminder',
    body: REMINDER_BODY,
  }

  if (frequency === 'daily') {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content,
      trigger: {
        channelId: REMINDER_CHANNEL_ID,
        hour,
        minute,
        repeats: true,
      },
    })

    return [notificationId]
  }

  return Promise.all(
    weekdays.map((weekday) =>
      Notifications.scheduleNotificationAsync({
        content,
        trigger: {
          channelId: REMINDER_CHANNEL_ID,
          weekday,
          hour,
          minute,
          repeats: true,
        },
      })
    )
  )
}
