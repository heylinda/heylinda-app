import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Text, View, useThemeColor } from '../Themed'
import Colors from '../../constants/Colors'

const mockTheme = 'dark'

jest.mock('../../hooks/useColorScheme', () => {
  return jest.fn(() => ({
    useColorScheme: () => mockTheme,
  }))
})

describe('Themed component tests', () => {
  it('renders themed text correctly', () => {
    const tree = render(<Text />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders themed View correctly', () => {
    const tree = render(<View />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it('use correct dark theme color for text', () => {
  //   const colorName = 'text'
  //   const color = useThemeColor({}, colorName)
  //   expect(color).toBe(Colors.dark[colorName])
  // })
})
