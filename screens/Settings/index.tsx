import * as React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import {
  Button,
  Checkbox,
  Dialog,
  Divider,
  List,
  Paragraph,
  Portal,
  RadioButton,
  TextInput,
} from 'react-native-paper'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
  clearReminder,
  MeditationReminder,
  ReminderFrequency,
  reset,
  setReminder,
} from '../../redux/meditationSlice'
import { selectReminder } from '../../redux/selectors'
import { cancelReminderNotifications, scheduleMeditationReminder } from '../../utils/reminders'
import { openURL } from '../../utils'
import { StackNavigationProp } from '@react-navigation/stack'
import { SettingsParamList } from '../../types'

interface Props {
  navigation: StackNavigationProp<SettingsParamList, 'SettingsScreen'>
}

const WEEKDAYS = [
  { label: 'Sun', value: 1 },
  { label: 'Mon', value: 2 },
  { label: 'Tue', value: 3 },
  { label: 'Wed', value: 4 },
  { label: 'Thu', value: 5 },
  { label: 'Fri', value: 6 },
  { label: 'Sat', value: 7 },
]

const DEFAULT_WEEKDAYS = WEEKDAYS.map(({ value }) => value)
const REMINDER_ERROR_COLOR = '#b00020'

const formatTime = (hour: number, minute: number) => {
  const suffix = hour >= 12 ? 'PM' : 'AM'
  const twelveHour = hour % 12 || 12
  return `${twelveHour}:${minute.toString().padStart(2, '0')} ${suffix}`
}

const formatReminder = (reminder: MeditationReminder) => {
  if (reminder.frequency === 'daily') {
    return `Daily at ${formatTime(reminder.hour, reminder.minute)}`
  }

  const dayLabels = WEEKDAYS.filter(({ value }) => reminder.weekdays.includes(value))
    .map(({ label }) => label)
    .join(', ')

  return `${dayLabels} at ${formatTime(reminder.hour, reminder.minute)}`
}

const Settings = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()
  const reminder = useAppSelector(selectReminder)
  const [reminderVisible, setReminderVisible] = React.useState(false)
  const [frequency, setFrequency] = React.useState<ReminderFrequency>('daily')
  const [hour, setHour] = React.useState('8')
  const [minute, setMinute] = React.useState('00')
  const [weekdays, setWeekdays] = React.useState(DEFAULT_WEEKDAYS)
  const [reminderError, setReminderError] = React.useState('')
  const [saving, setSaving] = React.useState(false)

  const openReminderModal = () => {
    setFrequency(reminder?.frequency || 'daily')
    setHour((reminder?.hour ?? 8).toString())
    setMinute((reminder?.minute ?? 0).toString().padStart(2, '0'))
    setWeekdays(reminder?.weekdays?.length ? reminder.weekdays : DEFAULT_WEEKDAYS)
    setReminderError('')
    setReminderVisible(true)
  }

  const closeReminderModal = () => {
    if (!saving) {
      setReminderVisible(false)
    }
  }

  const toggleWeekday = (weekday: number) => {
    setWeekdays((selectedWeekdays) => {
      const nextWeekdays = selectedWeekdays.includes(weekday)
        ? selectedWeekdays.filter((selectedWeekday) => selectedWeekday !== weekday)
        : [...selectedWeekdays, weekday]

      return nextWeekdays.sort()
    })
  }

  const parseReminderTime = () => {
    const parsedHour = Number(hour)
    const parsedMinute = Number(minute)

    if (
      !Number.isInteger(parsedHour) ||
      !Number.isInteger(parsedMinute) ||
      parsedHour < 0 ||
      parsedHour > 23 ||
      parsedMinute < 0 ||
      parsedMinute > 59
    ) {
      return null
    }

    return { hour: parsedHour, minute: parsedMinute }
  }

  const saveReminder = async () => {
    const parsedTime = parseReminderTime()
    const selectedWeekdays = frequency === 'daily' ? [] : weekdays

    if (!parsedTime) {
      setReminderError('Enter a valid time from 00:00 to 23:59.')
      return
    }

    if (frequency === 'weekly' && selectedWeekdays.length === 0) {
      setReminderError('Select at least one day.')
      return
    }

    try {
      setSaving(true)
      setReminderError('')

      const notificationIds = await scheduleMeditationReminder({
        frequency,
        ...parsedTime,
        weekdays: selectedWeekdays,
      })
      await cancelReminderNotifications(reminder?.notificationIds)

      dispatch(
        setReminder({
          enabled: true,
          frequency,
          ...parsedTime,
          weekdays: selectedWeekdays,
          notificationIds,
        })
      )
      setReminderVisible(false)
    } catch (err) {
      Alert.alert(
        'Reminder Not Scheduled',
        err instanceof Error ? err.message : 'Unable to schedule reminder notifications.'
      )
    } finally {
      setSaving(false)
    }
  }

  const disableReminder = async () => {
    try {
      setSaving(true)
      await cancelReminderNotifications(reminder?.notificationIds)
      dispatch(clearReminder())
      setReminderVisible(false)
    } catch (err) {
      Alert.alert(
        'Reminder Not Disabled',
        err instanceof Error ? err.message : 'Unable to cancel reminder notifications.'
      )
    } finally {
      setSaving(false)
    }
  }

  const openPrivacyPolicy = () => {
    try {
      openURL('https://heylinda.netlify.app/privacy')
    } catch (error) {
      console.error(error)
    }
  }
  const resetAppData = async () => {
    try {
      await cancelReminderNotifications(reminder?.notificationIds)
    } finally {
      dispatch(reset())
    }
  }
  const clearData = () => {
    Alert.alert(
      'Clear Data',
      'Are you sure you want to delete your data? All your stats will be reset. This cannot be undone.',
      [
        {
          text: 'Clear Data',
          onPress: resetAppData,
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
      <List.Item
        title="Set Daily Reminder"
        description={reminder?.enabled ? formatReminder(reminder) : 'Off'}
        onPress={openReminderModal}
      />
      <Divider />
      <List.Item title="Clear Data" onPress={clearData} />
      <Divider />
      <List.Item title="Privacy Policy" onPress={openPrivacyPolicy} />
      <Divider />
      <List.Item title="About" onPress={() => navigation.navigate('AboutScreen')} />
      <Divider />
      <Portal>
        <Dialog visible={reminderVisible} onDismiss={closeReminderModal}>
          <Dialog.Title>Daily Reminder</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Time of day</Paragraph>
            <View style={styles.timeRow}>
              <TextInput
                keyboardType="number-pad"
                label="Hour"
                maxLength={2}
                onChangeText={setHour}
                style={styles.timeInput}
                value={hour}
              />
              <TextInput
                keyboardType="number-pad"
                label="Minute"
                maxLength={2}
                onChangeText={setMinute}
                style={styles.timeInput}
                value={minute}
              />
            </View>
            <RadioButton.Group
              onValueChange={(value) => setFrequency(value as ReminderFrequency)}
              value={frequency}
            >
              <RadioButton.Item label="Daily" value="daily" />
              <RadioButton.Item label="Specific days" value="weekly" />
            </RadioButton.Group>
            {frequency === 'weekly' &&
              WEEKDAYS.map(({ label, value }) => (
                <Checkbox.Item
                  key={value}
                  label={label}
                  onPress={() => toggleWeekday(value)}
                  status={weekdays.includes(value) ? 'checked' : 'unchecked'}
                />
              ))}
            {reminderError ? <Paragraph style={styles.error}>{reminderError}</Paragraph> : null}
          </Dialog.Content>
          <Dialog.Actions>
            {reminder?.enabled && (
              <Button disabled={saving} onPress={disableReminder}>
                Disable
              </Button>
            )}
            <Button disabled={saving} onPress={closeReminderModal}>
              Cancel
            </Button>
            <Button disabled={saving} onPress={saveReminder}>
              Save
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  )
}

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  timeInput: {
    flex: 1,
    marginRight: 8,
  },
  error: {
    color: REMINDER_ERROR_COLOR,
    marginTop: 8,
  },
})

export default Settings
