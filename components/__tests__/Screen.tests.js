import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Screen } from '../Screen'

describe('screen template tests', () => {
  it('given Screen component without props, it should return View component', () => {
    const { getByTestId } = render(<Screen />)
    const element = getByTestId('view-screen')
    expect(element.type).toBe('View')
  })

  it('given scroll prop, screen component should return ScrollView', () => {
    const { getByTestId } = render(<Screen scroll />)
    const element = getByTestId('scrollview-screen')
    expect(element.type).toBe('RCTScrollView')
  })
})
