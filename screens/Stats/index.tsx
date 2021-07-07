import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { Calendar } from "react-native-calendars";

import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { useQuote } from "../../hooks/useQuote";

export default function StatsScreen() {
  const { quote } = useQuote();

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>QUICK STATS</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cards}
      >
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Current Streak</Paragraph>
            <Title>2 days</Title>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Total Sessions</Paragraph>
            <Title>2 sessions</Title>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Listened</Paragraph>
            <Title>20 minutes</Title>
          </Card.Content>
        </Card>
      </ScrollView>
      <Text style={styles.title}>CALENDAR</Text>
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: Colors.light.primary,
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: Colors.light.gray900,
          monthTextColor: Colors.light.text,
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      <Text style={styles.title}>QUOTE OF THE DAY</Text>
      <Text style={styles.quote}>"{quote}"</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 14,
    backgroundColor: Colors.light.background,
  },
  contentContainer: {
    paddingBottom: 36,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 19,
  },
  cards: {
    marginBottom: 30,
  },
  card: {
    width: 150,
    marginRight: 10,
  },
  calendar: {
    marginRight: 14,
    marginBottom: 30,
  },
  quote: {
    fontSize: 16,
    marginBottom: 30,
    fontStyle: "italic",
  },
});
