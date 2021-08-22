import * as React from 'react'
import { StyleSheet } from 'react-native'
import dayjs from 'dayjs'

import { useAppSelector } from '../../../hooks'
import { selectCalendar } from '../../../redux/selectors'
import {
  Calendar as _DefaultCalendar,
  CalendarBaseProps,
  DateObject,
  DotMarkingProps,
} from 'react-native-calendars'
import { useThemeColor } from '../../../components/Themed'

// Workaround for tsc using CustomMarkingProps
type DefaultCalendarProps = DotMarkingProps & CalendarBaseProps
const DefaultCalendar = _DefaultCalendar as unknown as React.ComponentClass<DefaultCalendarProps>

interface Props {
  setManualEntryTimestamp: (value: number) => void
}

export default function Calendar({ setManualEntryTimestamp }: Props) {
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

  const onManualInput = ({ day, month, year }: DateObject) => {
    const newTimestamp = new Date(year, month - 1, day).getTime()

    if (newTimestamp < Date.now()) {
      setManualEntryTimestamp(newTimestamp)
    }
  }

  return (
    <DefaultCalendar
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
