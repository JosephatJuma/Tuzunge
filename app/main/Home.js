import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
//import setRota
import { StatusBar } from "expo-status-bar";
import { Header, Badge, Button } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import Navigation from "./Navigation";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { AnimatedArrow } from "./components/AnimatedArrow";

export default function Home({
  toWallet,
  toProfile,
  toEvents,
  toPay,
  toTrack,
  toBook,
  toRecent,
  toTravel,
  toSupport,
}) {
  const today = new Date();
  const hr = today.getHours();
  const home = true;
  //const Drawer = createDrawerNavigator();
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [arrowDirection, setArrowDirection] = useState("down");

  //   const onScroll = (e) => {
  //     const currentY = e.nativeEvent.contentOffset.y;
  //     const direction = currentY > scrollY._value ? "up" : "down";
  //     setArrowDirection(direction);
  //     setScrollY(currentY);
  //   };
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="#F7BE15" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        nestedScrollEnabled={true}
      >
        <View style={styles.home}>
          <Header
            ViewComponent={LinearGradient}
            linearGradientProps={styles.linear}
            containerStyle={{ width: "100%", height: 180 }}
            backgroundColor="grey"
            centerComponent={<TouchableOpacity>{/*  */}</TouchableOpacity>}
            rightComponent={
              <TouchableOpacity>
                <Ionicons name="notifications" size={35} color="#1F1F1F" />
                <Badge
                  badgeStyle={styles.badge}
                  value={10}
                  textStyle={styles.badgeText}
                />
              </TouchableOpacity>
            }
            children={
              <View style={styles.children}>
                <Text style={styles.greet}>
                  {hr < 12
                    ? "Good morning"
                    : hr < 16
                    ? "Good afternoon"
                    : "Good evening"}
                </Text>
                <Text style={styles.name}>Josephat</Text>
              </View>
            }
          />
          <View style={[styles.savings, styles.boxShadow]}>
            <View>
              <Text>Your Savings</Text>
              <Text style={{ fontWeight: "900", color: "grey", fontSize: 15 }}>
                UGX. 150,000
              </Text>
            </View>

            <TouchableOpacity onPress={toPay} style={styles.add}>
              <Text style={{ color: "orange" }}>Add to wallet</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.name,
              {
                fontSize: 20,
                color: "grey",
                alignSelf: "flex-start",
                marginLeft: 15,
              },
            ]}
          >
            Services
          </Text>
          <View style={styles.area}>
            <TouchableOpacity
              style={[styles.select, styles.boxShadow]}
              onPress={toWallet}
            >
              <Entypo name="wallet" size={40} color="orange" />
              <Text style={styles.text}>In-App Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.select, styles.boxShadow]}
              onPress={toTrack}
            >
              <MaterialCommunityIcons
                name="car-connected"
                size={40}
                color="orange"
              />
              <Text style={styles.text}>Rent a car</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.area}>
            <TouchableOpacity
              style={[styles.selectOne, styles.boxShadow]}
              onPress={toBook}
            >
              <FontAwesome name="bookmark" size={40} color="orange" />
              <Text style={styles.text}>View Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.selectOne, styles.boxShadow]}
              onPress={toTravel}
            >
              <Entypo name="calendar" size={40} color="orange" />
              <Text style={styles.text}>Travel Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.selectOne, styles.boxShadow]}
              onPress={toRecent}
            >
              <FontAwesome5 name="map-marker-alt" size={40} color="orange" />
              <Text style={styles.text}>Recent Trips</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.area}>
            <TouchableOpacity
              style={[styles.selectTwo, styles.boxShadow]}
              onPress={toEvents}
            >
              <Foundation name="target" size={40} color="orange" />
              <Text style={styles.text}>Tour trips</Text>
              <Badge
                value="05 Trips"
                badgeStyle={{
                  width: 80,
                  height: 30,
                  top: "-20%",
                  backgroundColor: "orange",
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: "grey",
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.area1}>
            <View style={[styles.select3, { borderRadius: 5, borderWidth: 1 }]}>
              <Text style={styles.text}>
                Get to know about any trip, Travel with us to learn and discover
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <AnimatedArrow scrollY={scrollY} direction={arrowDirection} /> */}
      <Navigation
        profile={toProfile}
        isHome={home}
        events={toEvents}
        bookings={toBook}
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
    height: "100%",
  },
  linear: {
    colors: ["#F7BE15", "orange", "#ff5349"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  },
  greet: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: -1,
    color: "#fff",
  },
  name: {
    fontWeight: "100",
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  children: {
    width: 150,
    alignContent: "center",
    alignItems: "flex-start",
    height: "80%",
    borderRadius: 5,
  },
  badge: {
    backgroundColor: "#fff",
    width: 20,
    height: 20,
    borderRadius: 10,
    top: "-180%",
    left: 12,
  },
  badgeText: {
    color: "grey",
    fontSize: 7,
    fontWeight: "bold",
  },
  savings: {
    backgroundColor: "#fff",
    width: "80%",
    alignContent: "center",
    alignItems: "center",
    height: "10%",
    top: "-7%",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  add: {
    backgroundColor: "#000000",
    width: "50%",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: "60%",
    padding: 10,
  },
  area: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 6,
    height: 90,
  },
  area1: {
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginBottom: 50,
    height: 100,
  },
  select: {
    backgroundColor: "#ffffff",
    width: "45%",
    height: "100%",
    padding: 10,
  },
  selectTwo: {
    backgroundColor: "#ffffff",
    width: "95%",
    height: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  select3: {
    backgroundColor: "#ffffff",
    width: "95%",
    height: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "orange",
    borderWidth: 1,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  selectOne: {
    backgroundColor: "#ffffff",
    width: "30%",
    height: "100%",
    padding: 10,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: -0.1,
    textAlign: "center",
  },
});
