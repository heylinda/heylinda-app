import * as React from "react";
import { StyleSheet, ScrollView, FlatList, Alert } from "react-native";
import { Card, Paragraph } from "react-native-paper";

import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { meditations, MeditationItem } from "../../data/meditations";

export default function Home() {
  const renderCard = ({ item }: MeditationItem) => {
    return (
      <Card style={styles.card} onPress={() => Alert.alert("foo")}>
        <Card.Cover style={styles.cardImage} source={item.image} />
        <Card.Title
          titleStyle={styles.cardTitle}
          subtitleStyle={styles.cardSubtitle}
          title={item.title}
          subtitle={item.subtitle}
        />
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.cardParagraph}>
            {item.time} minutes
          </Paragraph>
        </Card.Content>
      </Card>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>SHORT AND SWEET</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.short}
        renderItem={renderCard}
        keyExtractor={({ id }) => id}
      />
      <Text style={styles.title}>GOT SOME TIME</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.medium}
        renderItem={renderCard}
        keyExtractor={({ id }) => id}
      />
      <Text style={styles.title}>LET GO</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.medium}
        renderItem={renderCard}
        keyExtractor={({ id }) => id}
      />
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
