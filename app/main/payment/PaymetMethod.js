import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FlutterwaveButton } from "flutterwave-react-native";
import { Button } from "@rneui/base";
export default function PaymetMethod({ toMoMo }) {
  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="orange" />
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.area}>
          <FlutterwaveButton onPress={toMoMo} />
        </View>
        <View style={styles.area}>
          <Button
            title="I will pay cash"
            buttonStyle={{
              backgroundColor: "orange",
              width: "100%",
              height: 52,
              borderRadius: 5,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  area: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
    height: 90,
    alignSelf: "center",
  },
  select: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "30%",
    height: "100%",
    alignContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: -0.1,
  },
});
