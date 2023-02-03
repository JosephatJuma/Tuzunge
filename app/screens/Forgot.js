import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { color, Input, Button } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Forgot() {
  const [show, setShow] = useState(false);

  const resetPassword = () => {
    alert("Succeess");
    console.log("login Success");
  };

  return (
    <ScrollView style={styles.login} contentContainerStyle={styles.container}>
      <StatusBar style="light" backgroundColor="orange" />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}>
        Reset password
      </Text>
      <Text style={styles.text}>
        To reset your password, provide the email you registered with
      </Text>

      <Entypo name="lock" size={200} color="orange" />

      <View style={styles.form}>
        <Text style={styles.text}>Enter email address</Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholderTextColor="grey"
          inputStyle={styles.input}
          placeholder="Enter e-mail address"
          containerStyle={styles.inputCont}
          leftIcon={<FontAwesome name="user" size={24} color="grey" />}
        />
      </View>

      <View style={styles.form}>
        <Button
          title="Continue"
          buttonStyle={styles.loginBtn}
          titleStyle={styles.loginBtnText}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    width: "100%",
    marginTop: 30,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "90%",
    marginTop: 10,
    backgroundColor: "#F5F5F5",
    alignContent: "center",
    justifyContent: "center",
  },
  input: { fontWeight: "bold", color: "grey", fontSize: 15 },
  inputCont: {
    borderColor: "orange",
    borderWidth: 2,
    justifyContent: "space-evenly",
    height: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  loginBtn: {
    backgroundColor: "#000",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    height: 50,
    justifyContent: "space-evenly",
  },
  loginBtnText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
