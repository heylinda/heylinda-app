import { render } from '@testing-library/react-native'
import React from 'react'

import About from './index'

describe('About', () => {
  test('renders', async () => {
    const { getByText } = render(<About />)

    getByText('Application Version')
    getByText('Build Version')
  })
})
