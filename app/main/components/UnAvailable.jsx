import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
export const UnAvailable = () => {
  return (
    <View style={styles.unAvailable}>
      <MaterialIcons name="developer-mode" size={300} color="orange" />
      <Text style={styles.text}>Still under development</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  unAvailable: {
    alignContent: "center",
    alignItems: "center",
    height: "88%",
  },
  text: {
    fontSize: 35,
    fontWeight: "700",
    color: "orange",
  },
});
