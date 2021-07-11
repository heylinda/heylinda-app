import * as React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

import Calendar from './Calendar'
import { Text } from '../../components/Themed'
import { useQuote } from '../../hooks/useQuote'
import Screen from '../../components/Screen'
import { useAppSelector, useMsToMinutes } from '../../hooks'
import { selectStreak, selectTotalDuration, selectTotalSessions } from '../../redux/selectors'

export default function StatsScreen() {
  const totalSessions = useAppSelector(selectTotalSessions)
  const totalDuration = useAppSelector(selectTotalDuration)
  const streak = useAppSelector(selectStreak)
  const totalMinutes = useMsToMinutes(totalDuration)
  const { quote } = useQuote()

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
      <Text style={styles.title}>QUOTE OF THE DAY</Text>
      <Text style={styles.quote}>"{quote}"</Text>
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
  quote: {
    fontSize: 16,
    marginBottom: 30,
    marginRight: 14,
    fontStyle: 'italic',
  },
})
