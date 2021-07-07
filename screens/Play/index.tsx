import * as React from "react";
import { StyleSheet, ScrollView, TouchableWithoutFeedback } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";

import { View, Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { useMeditation } from "../../hooks/useMeditation";
import NotFoundScreen from "../NotFoundScreen";
import { HomeParamList } from "../../types";
import { RouteProp } from "@react-navigation/native";
import { useState } from "react";

function PlayerIcon(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color?: string;
  size?: number;
  onPress: () => void;
}) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Icon
        size={50}
        color={Colors.light.primary}
        style={{ marginBottom: -3 }}
        {...props}
      />
    </TouchableWithoutFeedback>
  );
}
type PlayRouteProp = RouteProp<HomeParamList, "PlayScreen">;
interface Props {
  route: PlayRouteProp;
}
export default function PlayScreen({ route }: Props) {
  const { id } = route.params;
  const meditation = useMeditation(id);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!meditation) {
    return <NotFoundScreen />;
  }

  const { title } = meditation;

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text>{title}</Text>
      <View style={styles.controls}>
        <PlayerIcon name="stepbackward" onPress={() => {}} size={20} />
        {isPlaying ? (
          <PlayerIcon name="play" onPress={() => setIsPlaying(false)} />
        ) : (
          <PlayerIcon name="pausecircle" onPress={() => setIsPlaying(true)} />
        )}
        <PlayerIcon name="stepforward" onPress={() => {}} size={20} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 31,
    paddingRight: 31,
    backgroundColor: Colors.light.background,
  },
  contentContainer: {
    paddingBottom: 36,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
