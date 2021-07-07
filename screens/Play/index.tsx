import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";

import { View, Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { useMeditation } from "../../hooks/useMeditation";
import NotFoundScreen from "../NotFoundScreen";
import { HomeParamList } from "../../types";
import { RouteProp } from "@react-navigation/native";

function PlayerIcon(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color?: string;
  size?: number;
}) {
  return (
    <Icon
      size={50}
      color={Colors.light.primary}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}
type PlayRouteProp = RouteProp<HomeParamList, "PlayScreen">;
interface Props {
  route: PlayRouteProp;
}
export default function PlayScreen({ route }: Props) {
  const { id } = route.params;
  const meditation = useMeditation(id);

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
        <PlayerIcon name="stepbackward" size={20} />
        <PlayerIcon name="play" />
        <PlayerIcon name="stepforward" size={20} />
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
