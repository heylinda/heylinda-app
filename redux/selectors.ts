import dayjs from 'dayjs'
import { RootState } from './store'

interface Calendar {
  [key: string]: {
    selected: boolean
  }
}
export const selectActivity = (state: RootState) => state.meditation.activity
export const selectCalendar = (state: RootState) => {
  const { activity } = state.meditation
  const calendar: Calendar = {}
  Object.keys(activity).forEach((k) => {
    const date = dayjs(parseInt(k, 10)).format('YYYY-MM-DD')
    calendar[date] = {
      selected: true,
    }
  })
  return calendar
}
