import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'
import Screen from '../../components/Screen'

import DownloadButton from '../../components/DownloadButton'
import SaveButton from '../../components/SaveButton'

import { useThemeColor } from '../../components/Themed'
import Colors from '../../constants/Colors'
import { MeditationItem } from '../../data/meditations'
import { SavedParamList } from '../../types'
import { useSavedMeditations } from '../../hooks/useSavedMeditations'

interface Props {
  navigation: StackNavigationProp<SavedParamList, 'SavedScreen'>
}

export default function Saved({ navigation }: Props) {
  const textColor = useThemeColor({}, 'text')
  const savedMeditations = useSavedMeditations()

  const renderCard = ({ item }: MeditationItem) => {
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
          titleStyle={[styles.cardTitle, { color: textColor }]}
          subtitleStyle={styles.cardSubtitle}
          title={item.title}
          subtitle={item.subtitle}
        />
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.cardParagraph}>{item.time} minutes</Paragraph>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <DownloadButton id={item.id} />
            <SaveButton id={item.id} />
          </View>
        </Card.Content>
      </Card>
    )
  }

  return (
    <Screen scroll>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={savedMeditations}
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
  cardTitle: {
    fontSize: 16,
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
