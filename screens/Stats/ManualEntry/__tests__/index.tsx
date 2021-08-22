import * as React from 'react'
import { act, render } from '@testing-library/react-native'
import ManualEntry from '..'
import { useAppSelector as realUseAppSelector } from '../../../../hooks'

const DialogMock = 'Dialog' as unknown as React.FC<{ testID: string }>
const Dialog = (props: React.PropsWithChildren<{}>) => <DialogMock testID="dialog" {...props} />
Dialog.Title = 'Dialog.Title'
Dialog.Content = 'Dialog.Content'
Dialog.Actions = 'Dialog.Actions'

jest.mock('react-native-paper', () => ({
  Button: 'Button',
  Paragraph: 'Paragraph',
  Dialog,
  Portal: 'Portal',
  Provider: 'Provider',
  TextInput: 'TextInput',
}))
jest.mock('../../../../hooks')

const mockedHooks = jest.requireMock('../../../../hooks')
const useAppSelector = mockedHooks.useAppSelector as jest.MockedFunction<typeof realUseAppSelector>
const useAppDispatch = mockedHooks.useAppDispatch as jest.MockedFunction<
  () => jest.MockedFunction<() => void>
>

describe('tests for ManualEntry component', () => {
  it('should render invisible without default value and disabled submit button', () => {
    useAppSelector.mockReturnValue({})
    const { getByTestId } = render(<ManualEntry timestamp={0} onDismiss={() => {}} />)

    const dialog = getByTestId('dialog')
    expect(dialog.props.visible).toBe(false)

    const input = getByTestId('input')
    expect(input.props.defaultValue).toBe('')

    const submitBtn = getByTestId('submit-btn')
    expect(submitBtn.props.disabled).toBe(true)
  })

  it('should render visible with default value and enabled submit button', () => {
    useAppSelector.mockReturnValue({
      '1': { duration: 30 },
    })
    const { getByTestId } = render(<ManualEntry timestamp={1} onDismiss={() => {}} />)

    const dialog = getByTestId('dialog')
    expect(dialog.props.visible).toBe(true)

    const input = getByTestId('input')
    expect(input.props.defaultValue).toBe('30')

    const submitBtn = getByTestId('submit-btn')
    expect(submitBtn.props.disabled).toBe(false)
  })

  it('should set submit button disabled prop on updates', () => {
    useAppSelector.mockReturnValue({})
    const { getByTestId } = render(<ManualEntry timestamp={1} onDismiss={() => {}} />)

    const submitBtn = getByTestId('submit-btn')
    expect(submitBtn.props.disabled).toBe(true)

    act(() => {
      const input = getByTestId('input')
      input.props.onChangeText('10')
    })

    expect(submitBtn.props.disabled).toBe(false)

    act(() => {
      const input = getByTestId('input')
      input.props.onChangeText('NaN')
    })
    expect(submitBtn.props.disabled).toBe(true)
  })

  it('should dispatch manual entry action on submit and dismiss', () => {
    const onDismiss = jest.fn()
    const dispatch = jest.fn()
    useAppSelector.mockReturnValue({})
    useAppDispatch.mockReturnValue(dispatch)
    const { getByTestId } = render(<ManualEntry timestamp={1} onDismiss={onDismiss} />)

    act(() => {
      const submitBtn = getByTestId('submit-btn')
      submitBtn.props.onPress()
    })
    expect(dispatch).toBeCalledTimes(0)
    expect(onDismiss).toBeCalledTimes(0)

    act(() => {
      const input = getByTestId('input')
      input.props.onChangeText('10')
    })
    act(() => {
      const submitBtn = getByTestId('submit-btn')
      submitBtn.props.onPress()
    })
    expect(dispatch).toBeCalledTimes(1)
    expect(onDismiss).toBeCalledTimes(1)
  })

  it('should dismiss on cancel', () => {
    const onDismiss = jest.fn()
    useAppSelector.mockReturnValue({})
    const { getByTestId } = render(<ManualEntry timestamp={1} onDismiss={onDismiss} />)

    act(() => {
      const cancelBtn = getByTestId('cancel-btn')
      cancelBtn.props.onPress()
    })
    expect(onDismiss).toBeCalledTimes(1)
  })
})
