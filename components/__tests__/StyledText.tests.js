import * as React from 'react'
import { render } from '@testing-library/react-native'

import { MonoText } from '../StyledText'

it('renders MonoText correctly', () => {
  const { getByTestId } = render(<MonoText>Snapshot test!</MonoText>)
  const element = getByTestId('mono-text')

  expect(element.type).toBe('Text')
})
