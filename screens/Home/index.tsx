import * as React from "react";
import { StyleSheet, ImageBackground, ScrollView, View } from "react-native";

import { Text } from "../../components/Themed";
import { BlurView } from "expo-blur";
import Colors from "../../constants/Colors";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>FOR YOU</Text>
        <View>
          <ImageBackground
            style={styles.image}
            source={require("../../assets/images/meditate1.jpg")}
          >
            <BlurView intensity={75} style={styles.blurView}>
              <Text style={styles.blurText}>5 MINUTES</Text>
            </BlurView>
          </ImageBackground>
        </View>
      </View>
      <View>
        <Text style={styles.title}>SAFE AND SOUND</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  blurView: {
    width: "90%",
    margin: 20,
    padding: 30,
    borderRadius: 50,
  },
  blurText: {
    color: Colors.light.white,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
