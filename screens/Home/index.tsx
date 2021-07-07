import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, ScrollView, FlatList, Alert } from "react-native";
import { Card, Paragraph } from "react-native-paper";

import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { meditations, MeditationItem } from "../../data/meditations";
import { HomeParamList } from "../../types";

interface Props {
  navigation: StackNavigationProp<HomeParamList, "HomeScreen">;
}

export default function Home({ navigation }: Props) {
  const renderCard = ({ item }: MeditationItem) => {
    return (
      <Card
        style={styles.card}
        onPress={() =>
          navigation.navigate("PlayScreen", {
            id: item.id,
          })
        }
      >
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
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>FOR YOU</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.three}
        renderItem={renderCard}
        keyExtractor={({ id }) => id}
      />
      <Text style={styles.title}>FOR FOCUS</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.five}
        renderItem={renderCard}
        keyExtractor={({ id }) => id}
      />
      <Text style={styles.title}>JUST LET GO</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.ten}
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
    backgroundColor: Colors.light.background,
  },
  contentContainer: {
    paddingBottom: 36,
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
