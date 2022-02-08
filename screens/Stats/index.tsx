import * as React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { AntDesign as Icon } from '@expo/vector-icons'

import useColorScheme from '../../hooks/useColorScheme'
import Calendar from './Calendar'
import Screen from '../../components/Screen'
import { useAppSelector, useMinutesToStatsTime, useMsToMinutes, useQuote } from '../../hooks'
import { selectStreak, selectTotalDuration, selectTotalSessions } from '../../redux/selectors'
import ManualEntry from './ManualEntry'
import { useThemeColor } from '../../components'

export default function StatsScreen() {
  //Component key will redraw calendars color switch issue.
  const colorScheme = useColorScheme()
  const totalSessions = useAppSelector(selectTotalSessions)
  const totalDuration = useAppSelector(selectTotalDuration)
  const streak = useAppSelector(selectStreak)
  const totalMinutes = useMsToMinutes(totalDuration)
  const listenedStat = useMinutesToStatsTime(totalMinutes)
  const primary = useThemeColor({}, 'primary')
  const [manualEntryTimestamp, setManualEntryTimestamp] = React.useState<number>()
  const { quote, author } = useQuote()

  return (
    <>
      <Screen scroll>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cards}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Icon name="Trophy" style={styles.icon} size={30} color={primary} />
              <Paragraph>Current Streak</Paragraph>
              <Title>
                {streak} day{streak === 1 ? '' : 's'}
              </Title>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Icon name="calendar" style={styles.icon} size={30} color={primary} />
              <Paragraph>Total Sessions</Paragraph>
              <Title>
                {totalSessions} session{totalSessions === 1 ? '' : 's'}
              </Title>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Icon name="clockcircleo" style={styles.icon} size={30} color={primary} />
              <Paragraph>Time Meditating</Paragraph>
              <Title>{listenedStat}</Title>
            </Card.Content>
          </Card>
        </ScrollView>
        <Calendar key={colorScheme} setManualEntryTimestamp={setManualEntryTimestamp} />
        <View style={styles.quoteContainer}>
          <Card style={styles.quoteCard}>
            <Card.Content style={styles.cardContent}>
              <Paragraph>{author}</Paragraph>
              <Title style={styles.quoteTitle}>{quote}</Title>
            </Card.Content>
          </Card>
        </View>
      </Screen>
      <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
        <ManualEntry
          timestamp={manualEntryTimestamp}
          onDismiss={() => setManualEntryTimestamp(undefined)}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  cards: {
    marginBottom: 30,
  },
  card: {
    width: 150,
    marginRight: 10,
    textAlign: 'center',
  },
  quoteContainer: { marginRight: 10, marginBottom: 30 },
  quoteCard: {
    width: '100%',
  },
  quoteTitle: {
    textAlign: 'center',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
  },
})
