import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Text, View } from '../Themed'

describe('Themed component tests', () => {
  it('renders themed text correctly', () => {
    const tree = render(<Text />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders themed View correctly', () => {
    const tree = render(<View />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
