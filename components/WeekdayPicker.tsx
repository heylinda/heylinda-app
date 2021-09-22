import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useThemeColor } from '../components/Themed'

interface Props {
  weekdays: number[]
  setWeekdays: React.Dispatch<React.SetStateAction<number[]>>
}
export default function DayPicker({ weekdays, setWeekdays }: Props) {
  function daysIO(v: number) {
    if (weekdays.includes(v)) {
      const weekdayRemoved = weekdays.filter((element) => element !== v)
      setWeekdays(weekdayRemoved)
    } else {
      setWeekdays([...weekdays, v])
    }
  }

  const activeColor = useThemeColor({}, 'primary')
  const inactiveColor = useThemeColor({}, 'gray800')
  const whiteColor = useThemeColor({}, 'white')
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  return (
    <View style={[styles.boxContainer]}>
      {days.map((value, index) => (
        <TouchableOpacity key={value} onPress={() => daysIO(index + 1)}>
          <View
            style={[
              styles.box,
              { backgroundColor: weekdays.includes(index + 1) ? activeColor : inactiveColor },
            ]}
          >
            <Text style={{ color: whiteColor }}>{value}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 310,
  },
})
