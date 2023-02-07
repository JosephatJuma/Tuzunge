import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { UnAvailable } from "../components/UnAvailable";
import Navigation from "../Navigation";
export const Reviews = () => {
  return (
    <View>
      <StatusBar style="light" backgroundColor="#F7BE15" />

      <UnAvailable />
      <Navigation isReviews={true} />
    </View>
  );
};

const styles = StyleSheet.create({});
