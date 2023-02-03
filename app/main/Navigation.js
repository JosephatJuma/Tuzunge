import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Navigation({
  profile,
  home,
  events,
  bookings,
  isHome,
  isProfile,
  isEvents,
  isBookings,
}) {
  return (
    <LinearGradient
      colors={["#fff", "#fff"]}
      style={styles.btnArea}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={home}
          style={[isHome ? styles.current : {}, styles.item]}
        >
          <FontAwesome
            name="tachometer"
            size={28}
            color={isHome ? "orange" : "#808080"}
          />
          <Text
            style={[styles.text, isHome ? styles.textCurrent : styles.other]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={events}
          style={[isEvents ? styles.current : {}, styles.item]}
        >
          <MaterialIcons
            name="explore"
            size={28}
            color={isEvents ? "orange" : "#808080"}
          />
          <Text
            style={[styles.text, isEvents ? styles.textCurrent : styles.other]}
          >
            Trips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[isBookings ? styles.current : {}, styles.item]}
          onPress={bookings}
        >
          <FontAwesome5
            name="briefcase"
            size={28}
            color={isBookings ? "orange" : "#808080"}
          />
          <Text
            style={[
              styles.text,
              isBookings ? styles.textCurrent : styles.other,
            ]}
          >
            Bookings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={profile}
          style={[isProfile ? styles.current : {}, styles.item]}
        >
          <FontAwesome
            name="user"
            size={28}
            color={isProfile ? "orange" : "#808080"}
          />
          <Text
            style={[styles.text, isProfile ? styles.textCurrent : styles.other]}
          >
            Account
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  nav: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 0,
    borderColor: "#F7BE15",
    // shadowColor: "#000",
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 1,
    // shadowRadius: 2,
    // elevation: 2,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
  },

  item: {
    width: "22%",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-evenly",
    // borderTopWidth: 1,
  },
  current: {
    // borderColor: "orange",
    // borderTopWidth: 2,
    //borderBottomWidth: 2,
  },
  text: { fontWeight: "bold", fontSize: 14 },
  textCurrent: { color: "orange" },
  other: { color: "#808080" },
});
