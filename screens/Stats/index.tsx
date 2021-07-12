import * as React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

import Calendar from './Calendar'
import { Text } from '../../components/Themed'
import Screen from '../../components/Screen'
import { useAppSelector, useMsToMinutes } from '../../hooks'
import { selectStreak, selectTotalDuration, selectTotalSessions } from '../../redux/selectors'

export default function StatsScreen() {
  const totalSessions = useAppSelector(selectTotalSessions)
  const totalDuration = useAppSelector(selectTotalDuration)
  const streak = useAppSelector(selectStreak)
  const totalMinutes = useMsToMinutes(totalDuration)

  return (
    <Screen scroll>
      <Text style={styles.title}>QUICK STATS</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cards}>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Current Streak</Paragraph>
            <Title>
              {streak} day{streak === 1 ? '' : 's'}
            </Title>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Total Sessions</Paragraph>
            <Title>{totalSessions} sessions</Title>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Listened</Paragraph>
            <Title>{totalMinutes} minutes</Title>
          </Card.Content>
        </Card>
      </ScrollView>
      <Text style={styles.title}>YOUR ACTIVITY</Text>
      <Calendar />
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19,
  },
  cards: {
    marginBottom: 30,
  },
  card: {
    width: 150,
    marginRight: 10,
  },
})
