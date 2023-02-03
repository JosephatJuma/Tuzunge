import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/base";
export default function Wallet({ toPay }) {
  const [history, setHistory] = useState([
    { id: 1, date: "Today", amount: "50000" },
    { id: 2, date: "Yesterday", amount: "50000" },
    { id: 7, date: "Yesterday", amount: "50000" },
    { id: 3, date: "Friday", amount: "50000" },
    { id: 4, date: "13-01-2023", amount: "50000" },
    { id: 5, date: "11-01-2023", amount: "50000" },
    { id: 6, date: "01-01-2023", amount: "50000" },
  ]);

  return (
    <View style={styles.wallet}>
      <StatusBar style="light" backgroundColor="#F7BE15" />
      <View style={styles.amountArea}>
        <View style={styles.amount}>
          <Text style={styles.amountText}>Total Amount(UGX):</Text>
          <Text style={[{ fontWeight: "bold" }, styles.amountText]}>
            150,000
          </Text>
        </View>
      </View>
      <Button
        title="Add to wallet"
        buttonStyle={styles.btn}
        containerStyle={styles.btnCont}
        titleStyle={styles.btnTitle}
        onPress={toPay}
      />
      <ScrollView
        style={{ width: "100%", height: "80%" }}
        contentContainerStyle={{ alignContent: "center", alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {history.map((h) => {
          return (
            <TouchableOpacity
              key={h.id}
              style={[styles.boxShadow, styles.item]}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 15,
                  fontWeight: "800",
                  letterSpacing: -0.5,
                }}
              >
                {h.date}
              </Text>
              <Text
                style={{
                  color: "#808080",
                  fontSize: 15,
                  fontWeight: "300",
                  letterSpacing: -0.5,
                }}
              >
                You added UGX {h.amount} to your wallet
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  wallet: { width: "100%", alignContent: "center", alignItems: "center" },
  amountArea: {
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "space-evenly",
    height: 50,
  },
  amount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  amountText: { fontSize: 20, color: "grey" },
  btnCont: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  btn: { height: 50, width: "100%", backgroundColor: "orange" },
  btnTitle: { fontWeight: "bold", fontSize: 18 },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  item: {
    width: "98%",
    backgroundColor: "#fff",
    margin: 2,
    height: 80,
    padding: 10,
    borderStartColor: "red",
  },
});
