import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";

import { Input, Button } from "@rneui/base";

export default function MobileMoney({ toOTP, phone, pay }) {
  const [phoneNumber, setPhoneNumber] = useState(phone);
  const [amount, setAmount] = useState("");

  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="orange" />
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.area}>
          <Input
            label="Enter Phone Number"
            keyboardType="phone-pad"
            style={styles.input}
            labelStyle={styles.label}
            containerStyle={[styles.inputCont]}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="e.g +256712345678"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Input
            label="Enter Amount"
            keyboardType="numeric"
            style={styles.input}
            labelStyle={styles.label}
            containerStyle={[styles.inputCont]}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="e.g 50000"
            value={amount}
            onChangeText={setAmount}
          />

          <Button
            onPress={() => pay(phoneNumber, amount)}
            title="Request Payment"
            buttonStyle={styles.btn}
            titleStyle={styles.btnTitle}
            containerStyle={styles.btnCont}
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
    justifyContent: "space-evenly",
    width: "100%",
  },
  area: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: 10,
    height: 90,
    alignSelf: "center",
    justifyContent: "space-between",
    height: "50%",
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    borderBottomWidth: 0.4,
    borderColor: "orange",
    height: 50,
    backgroundColor: "#fff",
  },
  label: { color: "orange" },
  btn: {
    backgroundColor: "#000000",
    width: "70%",
    height: 52,
    borderRadius: 5,
  },
  btnTitle: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnCont: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  otpContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  otpInput: {
    width: "20%",
  },
});
