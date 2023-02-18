import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { UnAvailable } from "../components/UnAvailable";
import { FontAwesome } from "@expo/vector-icons";
import Navigation from "../Navigation";
export const Reviews = () => {
  return (
    <View style={styles.reviews}>
      <StatusBar style="light" backgroundColor="#F7BE15" />

      <View style={styles.iconArea}>
        <FontAwesome name="star" size={100} color="orange" />
      </View>
      <Text style={styles.text}>Your reviews will be here</Text>
      <Navigation isReviews={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  reviews: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    height: "100%",
  },
  iconArea: {
    backgroundColor: "lightgrey",
    width: 150,
    height: 150,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
    borderRadius: 100,
  },
  text: {
    color: "grey",
    fontWeight: "400",
    fontSize: 22,
  },
});
