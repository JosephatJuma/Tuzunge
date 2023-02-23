import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { color, Input, Button } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Forgot({ reset, sending, sent, login, resend }) {
  const [email, setEmail] = useState("");

  return (
    <ScrollView style={styles.login} contentContainerStyle={styles.container}>
      <StatusBar style="light" backgroundColor="orange" />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}>
        Reset password
      </Text>
      <Text style={styles.text}>
        {sent
          ? "We have sent the password change link on your email, check your email and follow it to reset your password"
          : "To reset your password, provide the email you registered with"}
      </Text>
      <View
        style={{
          backgroundColor: "lightgrey",
          width: 150,
          height: 150,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: 10,
          borderRadius: 100,
        }}
      >
        {sent ? (
          <Entypo name="check" size={100} color="orange" />
        ) : (
          <Entypo name="lock" size={100} color="orange" />
        )}
      </View>

      {!sent ? (
        <View style={styles.form}>
          <Text style={styles.text}>Enter email address</Text>
          <Input
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholderTextColor="grey"
            inputStyle={styles.input}
            placeholder="Enter e-mail address"
            containerStyle={styles.inputCont}
            leftIcon={<MaterialIcons name="email" size={24} color="grey" />}
            value={email}
            onChangeText={setEmail}
            disabled={sending}
          />
          <Button
            title={
              sending ? <ActivityIndicator color="orange" size={30} /> : "Send"
            }
            disabled={sending}
            buttonStyle={styles.loginBtn}
            titleStyle={styles.loginBtnText}
            onPress={() => reset(email)}
            disabledStyle={{ backgroundColor: "#000000c0" }}
          />
        </View>
      ) : (
        <View style={styles.form}>
          <Button
            title="Login now"
            buttonStyle={styles.loginBtn}
            titleStyle={styles.loginBtnText}
            onPress={login}
            disabledStyle={{ backgroundColor: "#000000c0" }}
          />
          <Button
            title="Resend Email"
            buttonStyle={styles.resendBtn}
            titleStyle={styles.loginBtnText}
            onPress={resend}
            disabledStyle={{ backgroundColor: "#000000c0" }}
          />
        </View>
      )}
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
    justifyContent: "space-between",
    height: 200,
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
  resendBtn: {
    backgroundColor: "transparent",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    height: 50,
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "#000",
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
    maxWidth: "90%",
  },
});
