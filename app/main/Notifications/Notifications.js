import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
export const Notifications = () => {
  return (
    <View style={styles.notifications}>
      <StatusBar style="light" backgroundColor="orange" />
      <View
        style={{
          backgroundColor: "lightgrey",
          width: 150,
          height: 150,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: 10,
          borderRadius: 100,
        }}
      >
        <MaterialIcons name="notifications-active" size={100} color="orange" />
      </View>
      <Text style={styles.text}>You have no Notifications yet</Text>
      {/* <View style={styles.area}>
        <View style={[styles.boxShadow, styles.not]}>
          <Text style={styles.text}>You have no Notifications yet</Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  notifications: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  area: { width: "100%", alignContent: "center", alignItems: "center" },
  not: {
    backgroundColor: "#fff",
    width: "96%",
    height: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: "grey",
    fontWeight: "400",
    fontSize: 22,
  },
});
