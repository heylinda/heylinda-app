import * as React from 'react'
import { Platform, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useThemeColor } from '../../components/Themed'

import DateTimePicker from '@react-native-community/datetimepicker'
import Notify from '../../notifications/notificationHandler'
import WeekdayPicker from '../../components/WeekdayPicker'
import Toast from 'react-native-simple-toast'

const NotificationSetter = () => {
  const [time, setTime] = React.useState(new Date())
  const [pickedTime, setPickedTime] = React.useState(false)
  const [weekdays, setWeekdays] = React.useState([-1])
  const [show, setShow] = React.useState(false)
  const changeTimeHandler = (event: Event, value?: Date) => {
    setShow(Platform.OS === 'ios')
    if (value) {
      setPickedTime(true)
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

  const textColor = useThemeColor({}, 'text')
  const textWhite = useThemeColor({}, 'white')

  return (
    <>
      <WeekdayPicker weekdays={weekdays} setWeekdays={setWeekdays} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <View style={[styles.pickTime, { backgroundColor: useThemeColor({}, 'primary') }]}>
            <Text style={{ color: textWhite }}>PICK TIME</Text>
          </View>
        </TouchableOpacity>
        {pickedTime && (
          <Text style={[styles.selectedTime, { color: textColor }]}>At {timeString(time)} </Text>
        )}
        <TouchableOpacity
          onPress={() => {
            if (weekdays.length !== 1 && pickedTime) {
              Notify.testSchedular(weekdays, time)
              Toast.show('Reminders Set')
            } else {
              Toast.show('Please Set Timing and Weekdays')
            }
          }}
        >
          <View style={[styles.pickTime, { backgroundColor: useThemeColor({}, 'primary') }]}>
            <Text style={{ color: textWhite }}>NOTIFY</Text>
          </View>
        </TouchableOpacity>
      </View>
      {show && (
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 1,
  },
})

export default NotificationSetter
