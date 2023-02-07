import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import React from "react";

const Componet = () => {
  return (
    <View>
      <Text>Side bar</Text>
    </View>
  );
};
export const sideBar = createDrawerNavigator({});

export default sideBar;

const styles = StyleSheet.create({});
