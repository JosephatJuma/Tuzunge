import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { UnAvailable } from "../components/UnAvailable";
export const Support = () => {
  return (
    <View>
      <StatusBar style="light" backgroundColor="#F7BE15" />
      <UnAvailable />
    </View>
  );
};

const styles = StyleSheet.create({});
