import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Input, Button, CheckBox } from "@rneui/base";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const port = "http://192.168.103.198";
//"localhost";
const endpointURL = port + ":10000/user/create";
export default function SignUp({ loginInstead, myCity }) {
  //values
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");

  //validations
  const [isValidEmail, setValidEmail] = useState(false);
  const [isStrongPassword, setStrongPassword] = useState(false);
  const [isValidName, setValidName] = useState(false);
  const [isMatch, setIsMatch] = useState(false);
  const [isValidPhone, setValidPhone] = useState(false);
  //states
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoadin] = useState(false);
  const [disableForm, setDisable] = useState(false);
  const [sent, setSent] = useState(false);
  const [uid, setUid] = useState("Jose@2000");
  const toggleShow = () => {
    setShow(!show);
  };

  //Regexs

  const nameREGEX =
    /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  const passGEX =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;
  const emailREGEX =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const phoneREGEX =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  const handleSignUp = () => {
    if (!emailREGEX.test(email)) {
      setValidEmail(false);
      return;
    } else {
      setValidEmail(true);
    }
    if (!nameREGEX.test(name)) {
      setValidName(false);
      return;
    } else {
      setValidName(true);
    }
    if (!phoneREGEX.test(phone)) {
      setValidPhone(false);
      return;
    } else {
      setValidPhone(true);
    }
    if (!passGEX.test(password)) {
      setStrongPassword(false);
      return;
    } else {
      setStrongPassword(true);
    }
    if (confirm !== password) {
      setIsMatch(false);
      return;
    } else {
      setIsMatch(true);
    }
    if (!agree) {
      alert("You need to agree to our terms and conditions");
      return;
    }
    const user = {
      email: email,
      name: name,
      password: password,
      city: myCity,
      phone: phone,
    };
    setLoadin(!loading);
    setDisable(!disableForm);
    setTimeout(() => {
      axios
        .post(endpointURL, user)
        .then((response) => {
          console.log(response.data);
          if (response.data.status === false) {
            Alert.alert(
              "Registration Error!",
              response.data.message,
              [
                {
                  text: "I get it",
                },
              ],
              {
                cancelable: true,
              }
            );
            setLoadin(false);
            setDisable(false);

            return;
          }
          setUid(response.data.uid);
          setLoadin(false);
          setDisable(false);
          setSent(true);
        })
        .catch((error) => {
          alert(error);
          setLoadin(false);
          setDisable(false);
          console.log(error);
        });
    }, 10);
  };

  return (
    <ScrollView style={styles.login} contentContainerStyle={styles.container}>
      <StatusBar style="dark" backgroundColor="transparent" />

      {sent ? (
        <View
          style={{
            alignSelf: "center",
            marginTop: 100,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="checkcircleo" size={100} color="orange" />
          <Text style={[styles.text, { fontSize: 40 }]}>Success</Text>
          <Text style={[styles.text, { margin: 10 }]}>
            User created with user ID:{" "}
            <Text style={{ color: "orange" }}>{uid}</Text>
          </Text>
          <Button
            disabledStyle={{ backgroundColor: "#000000c0" }}
            onPress={loginInstead}
            title="Login now"
            buttonStyle={[
              styles.signUpBtn,
              { width: "80%", justifyContent: "space-evenly" },
            ]}
            titleStyle={styles.signUpBtnText}
          />
        </View>
      ) : (
        <>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}>
            Sign up for free!
          </Text>

          <View style={styles.form}>
            <Text style={styles.text}>Enter email address</Text>
            <Input
              disabled={disableForm}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholderTextColor="grey"
              inputStyle={styles.input}
              placeholder="Enter e-mail address"
              containerStyle={styles.inputCont}
              leftIcon={<MaterialIcons name="email" size={24} color="grey" />}
              errorMessage={
                isValidEmail ? (
                  <Ionicons name="checkmark-circle" size={15} color="orange" />
                ) : (
                  <Text>Invalid email provided</Text>
                )
              }
              errorStyle={styles.err}
              style={styles.input}
              // onFocus={validateEmail}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.text}>Full name</Text>
            <Input
              disabled={disableForm}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholderTextColor="grey"
              inputStyle={styles.input}
              placeholder="Enter your name"
              containerStyle={styles.inputCont}
              leftIcon={<MaterialIcons name="person" size={24} color="grey" />}
              errorMessage={
                isValidName ? (
                  <Ionicons name="checkmark-circle" size={15} color="orange" />
                ) : (
                  <Text>Please give a valid name!</Text>
                )
              }
              errorStyle={styles.err}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.text}>Phone number</Text>
            <Input
              disabled={disableForm}
              keyboardType="phone-pad"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholderTextColor="grey"
              inputStyle={styles.input}
              placeholder="Enter your phone number"
              containerStyle={styles.inputCont}
              leftIcon={<MaterialIcons name="phone" size={24} color="grey" />}
              errorMessage={
                isValidPhone ? (
                  <Ionicons name="checkmark-circle" size={15} color="orange" />
                ) : (
                  <Text>Please give a valid phone nymber!</Text>
                )
              }
              errorStyle={styles.err}
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Create password</Text>
            <Input
              disabled={disableForm}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              secureTextEntry={!show}
              placeholderTextColor="grey"
              placeholder="Enter a password"
              inputStyle={styles.input}
              containerStyle={styles.inputCont}
              leftIcon={<MaterialIcons name="lock" size={24} color="grey" />}
              errorMessage={
                isStrongPassword ? (
                  <Ionicons name="checkmark-circle" size={15} color="orange" />
                ) : (
                  <Text>Please create strong password</Text>
                )
              }
              errorStyle={styles.err}
              value={password}
              onChangeText={setPass}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.text}>Confirm password</Text>
            <Input
              disabled={disableForm}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              secureTextEntry={!show}
              placeholderTextColor="grey"
              placeholder="Confirm password"
              inputStyle={styles.input}
              containerStyle={styles.inputCont}
              leftIcon={<MaterialIcons name="lock" size={24} color="grey" />}
              errorMessage={
                isMatch ? (
                  <Ionicons name="checkmark-circle" size={15} color="orange" />
                ) : (
                  <Text>Passwords do not match</Text>
                )
              }
              errorStyle={styles.err}
              value={confirm}
              onChangeText={setConfirm}
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
            <CheckBox
              disabled={disableForm}
              title="I have read the Terms of Service"
              checked={agree}
              onPress={() => setAgree(!agree)}
              checkedColor="orange"
              checkedTitle="I greed!"
              containerStyle={styles.inputCont}
            />
          </View>
          <View style={styles.form}>
            <Button
              disabledStyle={{ backgroundColor: "#000000" }}
              disabled={loading}
              onPress={handleSignUp}
              title={
                loading ? (
                  <ActivityIndicator color="orange" size={35} />
                ) : (
                  "Submit"
                )
              }
              buttonStyle={styles.signUpBtn}
              titleStyle={styles.signUpBtnText}
            />
            <Text
              style={styles.insteadText}
              onPress={loginInstead}
              disabled={disableForm}
            >
              LOGIN INSTEAD
            </Text>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    width: "100%",
  },
  alertContainer: { backgroundColor: "orange" },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  message: {
    color: "white",
  },
  buttonContainer: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
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
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: { fontWeight: "bold", color: "grey", fontSize: 15 },
  inputCont: {
    borderColor: "orange",
    borderWidth: 0.5,
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
  err: {
    color: "red",
    marginTop: -8,
    fontWeight: "bold",
    letterSpacing: -0.3,
    alignSelf: "flex-end",
    fontSize: 10,
  },
  signUpBtn: {
    backgroundColor: "#000",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
  },
  signUpBtnText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 20,
  },
  insteadText: {
    alignSelf: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "orange",
    margin: 20,
  },
});
