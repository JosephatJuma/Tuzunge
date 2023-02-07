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
        colors={["#F7BE80c0", "orange", "orange"]}
        style={styles.btnArea}
      >
        <Button
          title="Login"
          buttonStyle={styles.btn}
          onPress={toLogin}
          titleStyle={styles.btnTitle}
          containerStyle={styles.btnContainer}
        />

        <Button
          title="Create Account"
          buttonStyle={styles.btn}
          onPress={toSignUp}
          titleStyle={styles.btnTitle}
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
    marginTop: 120,
  },
  btnTitle: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "orange",
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
    backgroundColor: "#000000",
    alignContent: "center",
    alignItems: "center",
    height: "18%",
    padding: 10,
    borderRadius: 100,
    margin: 10,
    height: 50,
  },

  text: {
    fontSize: 45,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
    marginTop: 180,
    textAlign: "center",
  },
});
