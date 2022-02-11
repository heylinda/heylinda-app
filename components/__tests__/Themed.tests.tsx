import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Text, View } from '../Themed'

describe('Themed component tests', () => {
  it('renders themed text correctly', () => {
    const { getByTestId } = render(<Text />)
    const element = getByTestId('themed-text')

    expect(element.type).toBe('Text')
  })

  it('renders themed View correctly', () => {
    const { getByTestId } = render(<View />)
    const element = getByTestId('themed-view')

    expect(element.type).toBe('View')
  })
})
