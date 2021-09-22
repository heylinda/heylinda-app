import * as React from 'react'
import { Platform, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useThemeColor } from '../../components/Themed'
import AsyncStorage from '@react-native-async-storage/async-storage'

import DateTimePicker from '@react-native-community/datetimepicker'
import Notify from '../../notifications/notificationHandler'
import WeekdayPicker from '../../components/WeekdayPicker'

interface Props {
  setToastMessage: React.Dispatch<React.SetStateAction<string>>
  setToastShow: React.Dispatch<React.SetStateAction<boolean>>
  setNotificationSetter: React.Dispatch<React.SetStateAction<boolean>>
}

const NotificationSetter = ({ setToastMessage, setToastShow, setNotificationSetter }: Props) => {
  const [time, setTime] = React.useState(new Date())
  const [pickedTime, setPickedTime] = React.useState(false)
  const [weekdays, setWeekdays] = React.useState([-1])
  const [show, setShow] = React.useState(false)
  const [previousNotificationTime, setPreviousNotificationTime] = React.useState('')
  const getNotificationTime = async () => {
    try {
      const value = await AsyncStorage.getItem('heylindaNotificationTime')
      if (value !== null) {
        setPreviousNotificationTime(value)
      } else {
        setPreviousNotificationTime('\0')
      }
    } catch (e) {
      setPreviousNotificationTime('\0')
    }
  }
  getNotificationTime()
  const changeTimeHandler = (event: Event, value?: Date) => {
    setShow(Platform.OS === 'ios')
    if (value) {
      setPickedTime(true)
      AsyncStorage.setItem('heylindaNotificationTime', timeString(value))
    } else {
      setPickedTime(false)
    }
    setTime(value || new Date())
  }

  const timeString = (timeSet: Date) => {
    const timeHours = timeSet.getHours()
    const timeMinutes = timeSet.getMinutes()
    const hours =
      timeHours === 0 ? '00' : timeHours <= 9 ? '0' + timeHours.toString() : timeHours.toString()
    const minutes =
      timeMinutes === 0
        ? '00'
        : timeMinutes <= 9
        ? '0' + timeMinutes.toString()
        : timeMinutes.toString()
    return hours + ' : ' + minutes
  }

  const textWhite = useThemeColor({}, 'white')
  const primaryColor = useThemeColor({}, 'primary')

  return (
    <>
      <WeekdayPicker weekdays={weekdays} setWeekdays={setWeekdays} />
      <View style={styles.buttonContainer}>
        {Platform.OS === 'ios' ? (
          <DateTimePicker
            value={time}
            mode="time"
            is24Hour={true}
            display="clock"
            onChange={changeTimeHandler}
            style={styles.buttonIcon}
          />
        ) : (
          <View style={styles.buttonIcon}>
            <TouchableOpacity onPress={() => setShow(!show)}>
              <View style={[styles.pickTime, { backgroundColor: primaryColor }]}>
                <Text style={[styles.selectedTime, { color: textWhite }]}>
                  {previousNotificationTime !== '\0' ? previousNotificationTime : timeString(time)}{' '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            if (weekdays.length !== 1 && pickedTime) {
              Notify.testSchedular(weekdays, time)
              setToastMessage('Reminders Set')
              setToastShow(true)
              setNotificationSetter(false)
            } else {
              setToastMessage('Please Pick Day and Time')
              setToastShow(true)
            }
          }}
        >
          <View style={[styles.pickTime, { backgroundColor: useThemeColor({}, 'primary') }]}>
            <Text style={{ color: textWhite, fontSize: 15 }}>NOTIFY</Text>
          </View>
        </TouchableOpacity>
      </View>
      {show && Platform.OS === 'android' && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="clock"
          onChange={changeTimeHandler}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  pickTime: {
    width: 90,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedTime: {
    fontSize: 20,
  },
  buttonIcon: {
    flexDirection: 'row',
    width: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 1,
  },
})

export default NotificationSetter
