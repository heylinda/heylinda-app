import * as React from 'react'
import { ScrollView, ViewProps, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { useThemeColor, View } from './Themed'

interface Props extends ViewProps {
  scroll?: boolean
  style?: StyleProp<ViewStyle>
}

export const Screen: React.FC<Props> = ({ scroll, style, children }) => {
  const backgroundColor = useThemeColor({}, 'background')

  return scroll ? (
    <ScrollView
      testID="scrollview-screen"
      contentContainerStyle={styles.contentContainer}
      style={[styles.container, { backgroundColor }, style]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View testID="view-screen" style={style}>
      {children}
    </View>
  )
}
export default Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 14,
  },
  contentContainer: {
    paddingBottom: 36,
  },
})
