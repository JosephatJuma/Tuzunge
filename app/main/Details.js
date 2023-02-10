import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
//import setRota
import { StatusBar } from "expo-status-bar";

export default function Details() {
  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="orange" />
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
