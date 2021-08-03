import * as React from 'react'
import { StyleSheet } from 'react-native'
import dayjs from 'dayjs'

import { useAppSelector } from '../../../hooks'
import { selectCalendar } from '../../../redux/selectors'
import { Calendar as DefaultCalendar } from 'react-native-calendars'
import { useThemeColor } from '../../../components/Themed'

export default function Calendar() {
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
