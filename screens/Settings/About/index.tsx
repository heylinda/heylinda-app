import * as React from 'react'
import * as Application from 'expo-application'
import { Caption, Divider, List } from 'react-native-paper'

const About = () => {
  return (
    <>
      <List.Item
        title="Application Version"
        right={() => (
          <Caption style={{ marginTop: 5 }}>{Application.nativeApplicationVersion}</Caption>
        )}
      />
      <Divider />
      <List.Item
        title="Build Version"
        right={() => <Caption style={{ marginTop: 5 }}>{Application.nativeBuildVersion}</Caption>}
      />
      <Divider />
    </>
  )
}

export default About
