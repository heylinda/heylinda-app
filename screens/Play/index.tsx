import * as React from "react";
import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
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

  const { title, subtitle, image } = meditation;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.controls}>
        <PlayerIcon name="stepbackward" onPress={() => {}} size={20} />
        {isPlaying ? (
          <PlayerIcon name="play" onPress={() => setIsPlaying(false)} />
        ) : (
          <PlayerIcon name="pausecircle" onPress={() => setIsPlaying(true)} />
        )}
        <PlayerIcon name="stepforward" onPress={() => {}} size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 66,
    paddingBottom: 66,
    paddingLeft: 31,
    paddingRight: 31,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 50,
  },
  image: {
    width: 252,
    height: 252,
    marginBottom: 66,
    borderRadius: 10,
    alignSelf: "center",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
