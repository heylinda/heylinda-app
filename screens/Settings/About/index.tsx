import * as React from 'react'
import * as Application from 'expo-application'
import { Caption, Card, List } from 'react-native-paper'

const About = () => {
  return (
    <>
      <Card>
        <Card.Content>
          <List.Item
            title="Application Version"
            right={() => (
              <Caption style={{ marginTop: 5 }}>{Application.nativeApplicationVersion}</Caption>
            )}
          />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <List.Item
            title="Build Version"
            right={() => (
              <Caption style={{ marginTop: 5 }}>{Application.nativeBuildVersion}</Caption>
            )}
          />
        </Card.Content>
      </Card>
    </>
  )
}

export default About
