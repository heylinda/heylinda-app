import * as React from 'react'
import { render } from '@testing-library/react-native'
import LoadingScreen from '../LoadingScreen'

describe('tests for LoadingScreen component', () => {
  it('given Loading screen without props, null should be returned', () => {
    const tree = render(<LoadingScreen />).toJSON()
    expect(tree).toBeNull()
  })

  it('given the Loading prop, ActivityIndicator should be returned', () => {
    const { getByTestId } = render(<LoadingScreen loading />)
    const element = getByTestId('activity-indicator')
    expect(element).not.toBeNull()
  })
})
