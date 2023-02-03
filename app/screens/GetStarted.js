import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
export default function GetStarted({ toLogin, toSignUp }) {
  return (
    <View style={styles.main}>
      <StatusBar style="dark" backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/images/getStarted.jpg")}
        style={{
          width: "100%",
          height: "90%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#F7BE80c0",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.text}>Travel, Learn, Discover.</Text>
        </View>
      </ImageBackground>
      <LinearGradient
        colors={["#F7BE80c0", "#F7BE15", "orange"]}
        style={styles.btnArea}
      >
        <Button
          title="Login"
          buttonStyle={styles.btn}
          onPress={toLogin}
          titleStyle={styles.btnText}
          containerStyle={styles.btnContainer}
        />

        <Button
          title="Create Account"
          buttonStyle={styles.btn}
          onPress={toSignUp}
          titleStyle={styles.btnText}
          containerStyle={styles.btnContainer}
        />
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#F7BE15",
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 90,
  },
  btnTitle: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    marginTop: 200,
    textShadowColor: "#0F0C01",
    padding: 10,
  },
  btnArea: {
    width: "100%",
    height: 260,
    alignContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "100%",
    height: 100,
    alignContent: "center",
    alignItems: "center",
    marginTop: -20,
  },
  btn: {
    width: "80%",
    backgroundColor: "#0F0C01",
    alignContent: "center",
    alignItems: "center",
    height: "18%",
    padding: 10,
    borderRadius: 100,
    margin: 10,
    height: 50,
  },
  btnText: {
    color: "#F7BE15",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "900",
    color: "#fff",
    marginTop: 200,
    textAlign: "center",
  },
});
