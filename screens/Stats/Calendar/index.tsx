import * as React from 'react'
import { Alert, StyleSheet } from 'react-native'
import dayjs from 'dayjs'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { selectCalendar } from '../../../redux/selectors'
import {
  Calendar as _DefaultCalendar,
  CalendarBaseProps,
  DateObject,
  DotMarkingProps,
} from 'react-native-calendars'
import { useThemeColor } from '../../../components/Themed'
import { manualEntry } from '../../../redux/meditationSlice'

// Workaround for tsc using CustomMarkingProps
type DefaultCalendarProps = DotMarkingProps & CalendarBaseProps & { testID: string }
const DefaultCalendar = _DefaultCalendar as unknown as React.ComponentClass<DefaultCalendarProps>

export default function Calendar() {
  const dispatch = useAppDispatch()
  const calendar = useAppSelector(selectCalendar)
  const white = useThemeColor({}, 'white')
  const primary = useThemeColor({}, 'primary')
  const textColor = useThemeColor({}, 'text')
  const today = dayjs().format('YYYY-MM-DD')
  const markedDates = {
    [today]: {
      marked: true,
    },
    ...calendar,
  }

  const addManualInput = (timestamp: number, value: string | number = NaN) => {
    const duration = Number(value)

    if (value === '' || Number.isNaN(duration) || duration < 0 || duration > 60 * 24) {
      Alert.alert('Invalid amount of time', 'Please enter how long you meditated for in minutes.')
      return
    }

    dispatch(
      manualEntry({
        timestamp,
        duration,
      })
    )
  }

  const onManualInput = ({ day, month, year }: DateObject) => {
    const timestamp = new Date(year, month - 1, day).getTime()

    if (timestamp > Date.now()) {
      return
    }

    Alert.prompt(
      'Manual entry',
      'Enter how long you meditated for in minutes.',
      [
        {
          style: 'cancel',
          text: 'Cancel',
        },
        {
          style: 'default',
          text: 'Submit',
          onPress: (value) => addManualInput(timestamp, value),
        },
      ],
      'plain-text',
      '',
      'number-pad'
    )
  }

  return (
    <DefaultCalendar
      testID="default-calendar"
      style={styles.calendar}
      markedDates={markedDates}
      onDayPress={onManualInput}
      theme={{
        backgroundColor: white,
        calendarBackground: white,
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: primary,
        selectedDayTextColor: white,
        todayTextColor: primary,
        dayTextColor: textColor,
        textDisabledColor: '#d9e1e8',
        dotColor: primary,
        selectedDotColor: white,
        arrowColor: textColor,
        monthTextColor: textColor,
        indicatorColor: 'blue',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
    />
  )
}

const styles = StyleSheet.create({
  calendar: {
    marginRight: 14,
    marginBottom: 30,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
})
