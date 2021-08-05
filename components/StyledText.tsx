import * as React from 'react'

import { Text, TextProps } from './Themed'

export function MonoText(props: TextProps) {
  return <Text testID="mono-text" {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
}
