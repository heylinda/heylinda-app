import * as React from 'react'
import { render } from '@testing-library/react-native'
import Calendar from '..'
import { AlertButton } from 'react-native'

jest.mock('react-native-calendars', () => ({
  Calendar: 'DefaultCalendar',
}))
jest.mock('../../../../hooks')
jest.mock('react-native/Libraries/Alert/Alert')

const Alert = jest.requireMock('react-native/Libraries/Alert/Alert')

const createDateObject = (date: Date = new Date()) => {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  }
}

describe('tests for Calendar component', () => {
  beforeEach(() => {
    Alert.prompt.mockReset()
    Alert.alert.mockReset()
  })

  it('should render a react-native-calendars Calendar', () => {
    const calendar = render(<Calendar />).getByTestId('default-calendar')
    expect(calendar.type).toBe('DefaultCalendar')
  })

  it('pressing on a future date, no prompt should be opened', () => {
    const calendar = render(<Calendar />).getByTestId('default-calendar')
    const { onDayPress } = calendar.props

    const date = createDateObject(new Date(Date.now() + 24 * 3600 * 1000))
    onDayPress(date)

    expect(Alert.prompt).toBeCalledTimes(0)
  })

  it('pressing on a past date and entering a valid input, no alert should be opened', () => {
    const calendar = render(<Calendar />).getByTestId('default-calendar')
    const { onDayPress } = calendar.props

    onDayPress(createDateObject())

    Alert.prompt.mockImplementationOnce(
      (_title: string, _message: string, buttons: AlertButton[]) => {
        const submitButton = buttons.find((btn) => btn.style !== 'cancel')
        submitButton?.onPress?.('30')
      }
    )

    expect(Alert.prompt).toBeCalledTimes(1)
    expect(Alert.alert).toBeCalledTimes(0)
  })

  it('pressing on a past date and entering invalid inputs, alerts should be opened', () => {
    const calendar = render(<Calendar />).getByTestId('default-calendar')
    const { onDayPress } = calendar.props

    const invalidInputs = ['-1', '1441', 'not a number', '']
    const dateObj = createDateObject()

    invalidInputs.forEach((input) => {
      Alert.prompt.mockImplementationOnce(
        (_title: string, _message: string, buttons: AlertButton[]) => {
          const submitButton = buttons.find((btn) => btn.style !== 'cancel')
          submitButton?.onPress?.(input)
        }
      )

      onDayPress(dateObj)
    })

    expect(Alert.prompt).toBeCalledTimes(invalidInputs.length)
    expect(Alert.alert).toBeCalledTimes(invalidInputs.length)
  })
})
