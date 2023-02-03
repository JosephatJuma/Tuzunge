import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { Header, Avatar, Button, Switch } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Navigation from "./Navigation";
export default function Profile({
  back,
  goHome,
  goEvents,
  toBook,
  logoutFunction,
  toUser,
}) {
  const profile = true;

  return (
    <View>
      <ScrollView
        style={{ height: "80%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profile}>
          <StatusBar style="light" backgroundColor="transparent" />
          <Header
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["orange", "orange", "grey"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            containerStyle={{ width: "100%", height: 130 }}
            backgroundColor="grey"
            rightComponent={
              <TouchableOpacity style={styles.user} onPress={toUser}>
                <AntDesign name="user" size={30} color="#fff" />
              </TouchableOpacity>
            }
            leftComponent={
              <TouchableOpacity
                onPress={back}
                style={{ borderWidth: 2, borderColor: "#fff", borderRadius: 8 }}
              >
                <Ionicons name="chevron-back-outline" size={25} color="#fff" />
              </TouchableOpacity>
            }
            centerComponent={
              <Text
                style={{
                  color: "#fff",
                  fontSize: 25,
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                }}
              >
                Account
              </Text>
            }
          />
          <View
            style={[
              {
                width: "100%",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                height: 80,
              },
              styles.boxShadow,
            ]}
          >
            <Text style={styles.text}>
              <Text>Logged in As </Text>

              <Text>jumajosephat61@gmail.com </Text>
            </Text>
          </View>
          <View style={styles.area}>
            <TouchableOpacity style={[styles.select, styles.boxShadow]}>
              <View style={styles.icon}>
                <AntDesign name="edit" size={25} color="grey" />
                <Text style={styles.text}>Edit Profile</Text>
              </View>
              <Entypo name="chevron-right" size={22} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.select, styles.boxShadow]}>
              <View style={styles.icon}>
                <MaterialCommunityIcons name="history" size={25} color="grey" />
                <Text style={styles.text}>Travel History</Text>
              </View>
              <Entypo name="chevron-right" size={22} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.select, styles.boxShadow]}>
              <View style={styles.icon}>
                <MaterialIcons name="date-range" size={25} color="grey" />
                <Text style={styles.text}>Schedule</Text>
              </View>
              <Entypo name="chevron-right" size={22} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.select, styles.boxShadow]}
              onPress={toBook}
            >
              <View style={styles.icon}>
                <FontAwesome name="bookmark" size={25} color="grey" />
                <Text style={styles.text}>Bookings</Text>
              </View>
              <Entypo name="chevron-right" size={22} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.select, styles.boxShadow]}>
              <View style={styles.icon}>
                <Entypo name="share" size={25} color="grey" />
                <Text style={styles.text}>Share app</Text>
              </View>
              <Entypo name="chevron-right" size={22} color="grey" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.select, styles.boxShadow]}>
              <View style={styles.icon}>
                <MaterialIcons name="star-rate" size={25} color="grey" />
                <Text style={styles.text}>Rate app</Text>
              </View>
              <Entypo name="chevron-right" size={22} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.select, styles.boxShadow]}
              onPress={logoutFunction}
            >
              <View style={styles.icon}>
                <MaterialCommunityIcons name="logout" size={25} color="grey" />
                <Text style={styles.text}>Logout</Text>
              </View>
              <Entypo name="chevron-right" size={22} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          {
            width: "100%",
            backgroundColor: "#F5F5F5",
            justifyContent: "center",
            alignItems: "center",
            height: 80,
          },
          styles.boxShadow,
        ]}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "orange" }}>
          App Version:
        </Text>
        <Text>1.0.0</Text>
      </View>
      <Navigation
        home={goHome}
        isProfile={profile}
        events={goEvents}
        bookings={toBook}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    height: 700,
  },
  user: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 100,
  },
  area: {
    alignItems: "center",
    width: "100%",
    height: "60%",
  },
  select: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    width: "98%",
    height: "12%",
    alignContent: "center",
    padding: 10,

    marginTop: 5,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  text: { fontWeight: "bold", color: "grey", fontSize: 16 },
  icon: {
    display: "flex",
    flexDirection: "row",
  },
});
