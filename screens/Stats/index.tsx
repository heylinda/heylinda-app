import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";

export default function StatsScreen() {
  return (
    <ScrollView style={styles.container}>
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
});
