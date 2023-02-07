import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CheckBox, Button } from "@rneui/base";

export const Country = ({ next, setMyCity, cities, selcetedId }) => {
  return (
    <ScrollView style={styles.create} contentContainerStyle={styles.container}>
      <StatusBar style="dark" backgroundColor="transparent" />
      <Text style={styles.text}>Choose city near you</Text>

      {cities.map((city) => {
        return (
          <View key={city.id} style={{ width: "100%" }}>
            <CheckBox
              title={city.name}
              checkedColor="orange"
              checkedTitle={city.name}
              style={{ width: "100%", borderRadius: 50 }}
              containerStyle={styles.checkContainer}
              textStyle={[
                city.id === selcetedId
                  ? { color: "orange" }
                  : { color: "grey" },
                { fontSize: 15 },
              ]}
              iconType="feather"
              checkedIcon="check-circle"
              checked={selcetedId == city.id ? true : false}
              uncheckedIcon="circle"
              onPress={() => setMyCity(city.id, city.name)}
            />
          </View>
        );
      })}
      <Button
        onPress={next}
        title="Continue"
        buttonStyle={{
          backgroundColor: "#000",
          width: "100%",
          borderRadius: 10,
        }}
        containerStyle={{ alignContent: "center", width: "80%" }}
        titleStyle={{ color: "orange", fontSize: 20, fontWeight: "bold" }}
        disabled={selcetedId > 0 ? false : true}
        disabledStyle={{ backgroundColor: "#000000c0" }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  create: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
  checkContainer: {
    borderRadius: 5,
    height: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
});
