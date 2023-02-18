import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef } from "react";

import { Input, Button } from "@rneui/base";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [active, setActive] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const inputRefs = useRef([]);

  const enterOTP = (txt, ind) => {
    const newOtp = [...otp];
    newOtp[ind] = txt;
    setOtp(newOtp);
    if (txt.length > 0 && txt.length < 5) {
      try {
        inputRefs.current[ind + 1].focus();
      } catch (error) {
        console.log("Error Occurred!");
      }
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === 4) {
        setActive(true);
      }
      console.log(currentIndex);
    }
  };
  function pressBack(event, ind) {
    const newOtp = [...otp];
    newOtp[ind] = "";
    setOtp(newOtp);
    console.log(event.nativeEvent.key);
    if (event.nativeEvent.key === "Backspace") {
      console.log("yes");
      setCurrentIndex(currentIndex - 1);
      setActive(false);
      try {
        inputRefs.current[ind.length - 1].focus();
      } catch (error) {
        console.log("Error");
      }
    }
  }

  const otpVerification = () => {
    setVerifying(!verifying);
    console.log(otp);
  };
  return (
    <View style={styles.home}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <Text style={styles.label}>
        Enter Verification code that was sent to your number
        <Text style={{ color: "black" }}> +256 702 206985</Text>
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((otp, index) => (
          <Input
            secureTextEntry={true}
            disabled={verifying}
            key={index}
            keyboardType="numeric"
            placeholder="*"
            placeholderTextColor="grey"
            maxLength={1}
            onChangeText={(text) => enterOTP(text, index)}
            ref={(input) => {
              inputRefs.current[index] = input;
            }}
            containerStyle={styles.otpInput}
            value={otp}
            inputContainerStyle={{
              borderColor: "grey",
              borderBottomWidth: 0,
              alignContent: "center",
              alignItems: "center",
            }}
            style={styles.input}
            cursorColor="orange"
            onKeyPress={(e) => pressBack(e, index)}
          />
        ))}
      </View>
      <Button
        onPress={otpVerification}
        disabled={!active}
        title={
          verifying ? (
            <>
              <ActivityIndicator color="orange" size={30} />
              <Text style={styles.btnTitle}>Verifying</Text>
            </>
          ) : (
            "Verify"
          )
        }
        buttonStyle={styles.btn}
        containerStyle={styles.btnCont}
        titleStyle={styles.btnTitle}
      />
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
  otpContainer: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: 10,
    height: 100,
    alignSelf: "center",
    justifyContent: "space-between",
    height: "20%",
  },
  input: {
    color: "orange",
    fontSize: 40,
    fontWeight: "800",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderColor: "grey",
    height: 70,
  },
  otpInput: {
    width: "25%",
  },
  label: {
    color: "grey",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: -0.2,
    textAlign: "center",
    width: "90%",
  },
  btn: {
    backgroundColor: "#000000",
    width: "100%",
    height: 50,
    borderRadius: 10,
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
    width: "80%",
  },
});
