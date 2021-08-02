import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'
import Screen from '../../components/Screen'

import { Text } from '../../components/Themed'
import Colors from '../../constants/Colors'
import { meditations, MeditationItem } from '../../data/meditations'
import useColorScheme from '../../hooks/useColorScheme'
import { HomeParamList } from '../../types'

interface Props {
  navigation: StackNavigationProp<HomeParamList, 'HomeScreen'>
}

export default function Home({ navigation }: Props) {
  const colorScheme = useColorScheme()

  const renderPopularCard = ({ item }: MeditationItem) => {
    return (
      <Card
        elevation={1}
        style={styles.card}
        onPress={() =>
          navigation.navigate('PlayScreen', {
            id: item.id,
          })
        }
      >
        <Card.Cover style={[styles.cardImage, styles.popularImage]} source={item.image} />
        <Card.Title
          titleStyle={colorScheme === 'light' ? styles.lightCardTitle : styles.darkCardTitle}
          subtitleStyle={styles.cardSubtitle}
          title={item.title}
          subtitle={item.subtitle}
        />
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.cardParagraph}>{item.time} minutes</Paragraph>
        </Card.Content>
      </Card>
    )
  }

  const renderCard = ({ item }: MeditationItem) => {
    return (
      <Card
        style={styles.card}
        onPress={() =>
          navigation.navigate('PlayScreen', {
            id: item.id,
          })
        }
      >
        <Card.Cover style={styles.cardImage} source={item.image} />
        <Card.Title
          titleStyle={colorScheme === 'light' ? styles.lightCardTitle : styles.darkCardTitle}
          subtitleStyle={styles.cardSubtitle}
          title={item.title}
          subtitle={item.subtitle}
        />
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.cardParagraph}>{item.time} minutes</Paragraph>
        </Card.Content>
      </Card>
    )
  }

  return (
    <Screen scroll>
      <Text style={styles.title}>POPULAR</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.popular}
        renderItem={renderPopularCard}
        keyExtractor={({ id }) => id}
      />
      <Text style={styles.title}>ANXIETY</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.anxiety}
        renderItem={renderCard}
        keyExtractor={({ id }) => id}
      />
      <Text style={styles.title}>SLEEP</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.sleep}
        renderItem={renderCard}
        keyExtractor={({ id }) => id}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    marginRight: 10,
  },
  lightCardTitle: {
    fontSize: 16,
    color: Colors.light.gray900,
  },
  darkCardTitle: {
    fontSize: 16,
    color: Colors.light.white,
  },
  cardImage: {
    height: 135,
  },
  popularImage: {
    height: 250,
  },
  cardContent: {},
  cardSubtitle: {
    color: Colors.light.gray800,
    fontSize: 14,
  },
  cardParagraph: {
    color: Colors.light.purple900,
    fontWeight: '600',
  },
  cards: {
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19,
  },
})
