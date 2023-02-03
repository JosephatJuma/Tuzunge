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
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Login({
  goToForgot,
  loginFunction,
  create,
  verifying,
}) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <ScrollView style={styles.login} contentContainerStyle={styles.loginCont}>
      <StatusBar style="light" backgroundColor="orange" />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}>
        Login to Continue
      </Text>

      <View style={styles.form}>
        <Text style={styles.text}>Enter email address</Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholderTextColor="grey"
          inputStyle={styles.input}
          placeholder="Enter e-mail address"
          containerStyle={styles.inputCont}
          leftIcon={<MaterialIcons name="email" size={24} color="grey" />}
          style={styles.input}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.text}>User password</Text>
        <Input
          maxLength={10}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          secureTextEntry={!show}
          placeholderTextColor="grey"
          placeholder="Enter a password"
          inputStyle={styles.input}
          containerStyle={styles.inputCont}
          leftIcon={<MaterialIcons name="lock" size={24} color="grey" />}
          rightIcon={
            <Ionicons
              name={show ? "eye-off" : "eye"}
              size={24}
              color="grey"
              onPress={toggleShow}
            />
          }
        />
      </View>

      <View style={styles.form}>
        <Button
          onPress={loginFunction}
          buttonStyle={styles.loginBtn}
          titleStyle={styles.loginBtnText}
          title={
            verifying ? (
              <>
                <ActivityIndicator color="orange" size={30} />
                <Text style={styles.loginBtnText}>verifying.....</Text>
              </>
            ) : (
              "Login"
            )
          }
        />
      </View>
      <Text style={styles.elseText} onPress={goToForgot}>
        FORGOT PASSWORD
      </Text>

      <View style={styles.alt}>
        <Text>OR</Text>
        <Button
          title="Login with Google"
          buttonStyle={styles.altBtn}
          titleStyle={styles.altBtnTitle}
          icon={<AntDesign name="google" size={24} color="#F5F5F5" />}
        />
        <Button
          title="Login with Facebook"
          buttonStyle={[styles.altBtn, { backgroundColor: "#3b5998" }]}
          titleStyle={styles.altBtnTitle}
          icon={
            <Entypo name="facebook-with-circle" size={24} color="#F5F5F5" />
          }
        />
        <Text>OR</Text>
        <Text style={styles.elseText} onPress={create}>
          CREACT ACCOUNT
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    width: "100%",
    // backgroundColor: "red",
    marginTop: 50,
  },
  loginCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },

  form: {
    width: "90%",
    marginTop: 20,
    backgroundColor: "#F5F5F5",
    alignContent: "center",
    justifyContent: "center",
  },
  input: { fontWeight: "bold", color: "grey", fontSize: 15 },
  inputCont: {
    borderColor: "#F7BE15",
    borderWidth: 1,
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
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
  },
  loginBtnText: {
    color: "orange",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  alt: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  altBtn: {
    backgroundColor: "#0F9D58",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    justifyContent: "space-evenly",
  },
  altBtnTitle: {
    color: "#F5F5F5",
    fontWeight: "bold",
  },
  elseText: {
    alignSelf: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "orange",
    marginTop: 10,
  },
});
