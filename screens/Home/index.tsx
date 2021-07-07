import * as React from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";
import { Card, Paragraph } from "react-native-paper";

import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FOR YOU</Text>
      <ScrollView
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Card style={styles.card} onPress={() => Alert.alert("foo")}>
          <Card.Cover
            style={styles.cardImage}
            source={require("../../assets/images/meditate1.jpg")}
          />
          <Card.Title
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
            title="Sleep"
            subtitle="Drift Off To Sleep"
          />
          <Card.Content style={styles.cardContent}>
            <Paragraph style={styles.cardParagraph}>10 minutes</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card} onPress={() => Alert.alert("foo")}>
          <Card.Cover
            style={styles.cardImage}
            source={require("../../assets/images/meditate1.jpg")}
          />
          <Card.Title
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
            title="Sleep"
            subtitle="Drift Off To Sleep"
          />
          <Card.Content style={styles.cardContent}>
            <Paragraph style={styles.cardParagraph}>10 minutes</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 14,
  },
  card: {
    width: 250,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: Colors.light.gray900,
  },
  cardImage: {
    height: 135,
  },
  cardContent: {},
  cardSubtitle: {
    color: Colors.light.gray800,
    fontSize: 14,
  },
  cardParagraph: {
    color: Colors.light.purple900,
    fontWeight: "600",
  },
  cards: {
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 19,
  },
});
