import * as React from 'react'
import * as Application from 'expo-application'
import { Caption, Divider, List } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { openURL } from '../../../utils'

const About = () => {
  const openAboutUs = () => {
    try {
      openURL('https://www.heylinda.app/about')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <List.Item
        title="Application Version"
        right={() => (
          <Caption style={styles.caption}>{Application.nativeApplicationVersion}</Caption>
        )}
      />
      <Divider />
      <List.Item
        title="Build Version"
        right={() => <Caption style={styles.caption}>{Application.nativeBuildVersion}</Caption>}
      />
      <Divider />
      <List.Item title="About Us" onPress={openAboutUs} />
      <Divider />
    </>
  )
}

const styles = StyleSheet.create({
  caption: {
    marginTop: 5,
  },
})

export default About
