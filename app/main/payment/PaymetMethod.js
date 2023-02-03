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

export default function PaymetMethod({ toMoMo }) {
  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="orange" />
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.area}>
          <TouchableOpacity
            style={[styles.select, styles.boxShadow]}
            onPress={toMoMo}
          >
            <AntDesign name="mobile1" size={40} color="orange" />
            <Text style={styles.text}>Mobile Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.select, styles.boxShadow]}>
            <FontAwesome5 name="google-pay" size={40} color="orange" />
            <Text style={styles.text}>Google pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.select, styles.boxShadow]}>
            <FontAwesome5 name="cc-stripe" size={40} color="orange" />
            <Text style={styles.text}>Stripe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={[styles.select, styles.boxShadow]}>
            <FontAwesome5 name="cc-amazon-pay" size={40} color="orange" />
            <Text style={styles.text}>Amazon pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.select, styles.boxShadow]}>
            <FontAwesome5 name="cc-paypal" size={40} color="orange" />
            <Text style={styles.text}>Paypal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.select, styles.boxShadow]}>
            <FontAwesome5 name="cc-apple-pay" size={40} color="orange" />
            <Text style={styles.text}>Apple Pay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={[styles.select, styles.boxShadow]}>
            <FontAwesome5 name="cc-visa" size={40} color="orange" />
            <Text style={styles.text}>Visa</Text>
          </TouchableOpacity>
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
