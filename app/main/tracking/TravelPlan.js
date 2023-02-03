import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { UnAvailable } from "../components/UnAvailable";

export const TravelPlan = () => {
  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="#F7BE15" />
      <UnAvailable />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
