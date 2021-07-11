import * as React from 'react'
import { StyleSheet } from 'react-native'
import dayjs from 'dayjs'

import { useAppSelector } from '../../../hooks'
import { selectActivity } from '../../../redux/selectors'
import { Calendar as DefaultCalendar } from 'react-native-calendars'
import { useThemeColor } from '../../../components/Themed'

export default function Calendar() {
  const activity = useAppSelector(selectActivity)
  const white = useThemeColor({}, 'white')
  const primary = useThemeColor({}, 'primary')
  const gray900 = useThemeColor({}, 'gray900')
  const text = useThemeColor({}, 'text')
  const today = dayjs().format('YYYY-MM-DD')
  const markedDates = {
    [today]: {
      marked: true,
    },
    ...activity,
  }

  return (
    <DefaultCalendar
      style={styles.calendar}
      markedDates={markedDates}
      theme={{
        backgroundColor: white,
        calendarBackground: white,
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: primary,
        selectedDayTextColor: white,
        todayTextColor: primary,
        dayTextColor: text,
        textDisabledColor: '#d9e1e8',
        dotColor: primary,
        selectedDotColor: white,
        arrowColor: gray900,
        monthTextColor: text,
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
