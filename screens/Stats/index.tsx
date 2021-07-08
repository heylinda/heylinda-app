import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

import Calendar from "./Calendar";
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
      <Text style={styles.title}>YOUR ACTIVITY</Text>
      <Calendar />
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
  quote: {
    fontSize: 16,
    marginBottom: 30,
    marginRight: 14,
    fontStyle: "italic",
  },
});
