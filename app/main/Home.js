import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
//import setRota
import { StatusBar } from "expo-status-bar";
import { Header, Badge, Button, AirbnbRating } from "@rneui/base";
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
import { SharedElement } from "react-native-shared-element";

export default function Home({
  toWallet,
  toProfile,
  toEvents,
  toPay,
  toTrack,
  toBook,
  toRecent,
  toTravel,
  toReviws,
  toNotification,
  toDetails,
  name,
}) {
  const today = new Date();
  const hr = today.getHours();
  const home = true;
  //const Drawer = createDrawerNavigator();

  const [arrowDirection, setArrowDirection] = useState("down");
  const [balance, setBalance] = useState("150000");
  const [events, setEvents] = useState([
    { id: 1, name: "Destination", image: "../assets/images/image1.jpg" },
    { id: 2, name: "Destination", image: "../assets/images/image2.jpg" },
    { id: 3, name: "Destination", image: "../assets/images/image3.jpg" },
    { id: 4, name: "Destination", image: "../assets/images/image4.jpg" },
    { id: 5, name: "Destination", image: "../assets/images/image5.jpg" },
  ]);

  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="orange" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        nestedScrollEnabled={true}
      >
        <View style={styles.home}>
          <Header
            ViewComponent={LinearGradient}
            linearGradientProps={styles.linear}
            containerStyle={{
              width: "100%",
              height: 140,
            }}
            backgroundColor="orange"
            rightComponent={
              <TouchableOpacity onPress={toNotification}>
                <Ionicons name="notifications" size={35} color="#1F1F1F" />
                {/* <Badge
                  badgeStyle={styles.badge}
                  value={0}
                  textStyle={styles.badgeText}
                /> */}
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
                <Text style={styles.name}>{name}</Text>
              </View>
            }
          />
          <View style={[styles.savings, styles.boxShadow]}>
            <View>
              <Text>Your Savings</Text>
              <Text style={{ fontWeight: "900", color: "grey", fontSize: 15 }}>
                UGX.{" "}
                <Text style={{ fontSize: 20 }}>
                  {"*".repeat(balance.length)}
                </Text>
              </Text>
            </View>

            <TouchableOpacity onPress={toPay} style={styles.add}>
              <Text style={{ color: "orange" }}>Add to wallet</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
            nestedScrollEnabled={true}
          >
            <Text style={[styles.name, styles.areaText]}>Quick Access</Text>
            <View style={styles.area}>
              <TouchableOpacity
                style={[styles.select, styles.boxShadow, styles.radius]}
                onPress={toEvents}
              >
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={40}
                  color="orange"
                />
                <Text style={styles.text}>Destinations</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.select, styles.boxShadow, styles.radius]}
                onPress={toTrack}
              >
                <MaterialIcons name="hotel" size={40} color="orange" />
                <Text style={styles.text}>Hotel rooms</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.area}>
              <TouchableOpacity
                style={[styles.select, styles.boxShadow, styles.radius]}
                onPress={toWallet}
              >
                <Entypo name="wallet" size={40} color="orange" />
                <Text style={styles.text}>In-App wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.select, styles.boxShadow, styles.radius]}
                onPress={toBook}
              >
                <FontAwesome name="bookmark" size={40} color="orange" />
                <Text style={styles.text}>My bookings</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.areaText]}>Suggested for you </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {events.map((event) => {
                return (
                  <SharedElement key={event.id} id={event.id}>
                    <TouchableOpacity
                      style={[styles.boxShadow, styles.tripContainer]}
                      onPress={toDetails}
                    >
                      <Image
                        style={[styles.trip, styles.boxShadow]}
                        source={require(`../assets/images/image1.jpg`)}
                      />
                      <Text style={styles.text}>{event.name}</Text>
                      <Text
                        style={[
                          styles.text,
                          { fontWeight: "400", fontSize: 13 },
                        ]}
                      >
                        The Details will be here when they are available
                      </Text>
                      <Text style={styles.text}>UGX 100000</Text>
                      {event.id === 5 && (
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <FontAwesome name="star" color="orange" size={15} />
                          <FontAwesome name="star" color="orange" size={15} />
                          <FontAwesome name="star" color="orange" size={15} />
                        </View>
                      )}
                    </TouchableOpacity>
                  </SharedElement>
                );
              })}
            </ScrollView>

            <View style={styles.area}>
              <TouchableOpacity
                style={[styles.selectTwo, styles.boxShadow, styles.radius]}
                onPress={toEvents}
              >
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={50}
                  color="orange"
                />
                <Text style={styles.text}>Up-Coming Destinations</Text>
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
            <Text style={[styles.areaText]}>Popular destinations</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {events.map((event) => {
                return (
                  <TouchableOpacity
                    key={event.id}
                    style={[styles.boxShadow, styles.tripContainer]}
                  >
                    <Image
                      style={[styles.trip, styles.boxShadow]}
                      source={require(`../assets/images/image2.jpg`)}
                    />
                    <Text style={styles.text}>{event.name}</Text>
                    <Text style={styles.text}>The Details will be here</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <Text style={[styles.areaText]}>Hotel rooms</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {events.map((event) => {
                return (
                  <TouchableOpacity
                    key={event.id}
                    style={[styles.boxShadow, styles.tripContainer]}
                  >
                    <Image
                      style={[styles.trip, styles.boxShadow]}
                      source={require(`../assets/images/image6.jpg`)}
                    />
                    <Text style={styles.text}>{event.name}</Text>
                    <Text style={[styles.text, { fontWeight: "400" }]}>
                      The Details will be here
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <View style={styles.area1}>
              <View
                style={[styles.select3, { borderRadius: 5, borderWidth: 1 }]}
              >
                <Text style={styles.text}>
                  Discover any Trip around the country with us, let us link you
                  there
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <Navigation
        profile={toProfile}
        isHome={home}
        events={toEvents}
        bookings={toBook}
        reviews={toReviws}
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
    colors: ["orange", "orange", "#ff5349"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  },
  greet: {
    fontWeight: "bold",
    fontSize: 22,
    letterSpacing: -0.8,
    color: "#fff",
  },
  name: {
    fontWeight: "100",
    fontSize: 22,
    fontWeight: "900",
    color: "#000",
    letterSpacing: -0.8,
  },
  children: {
    width: 180,
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
    height: "5%",
    top: "-5%",
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
    height: 40,
    padding: 10,
  },
  area: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 5,
    height: 75,
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

  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,
  },
  radius: {
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  tripContainer: {
    height: 200,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 150,
    alignContent: "center",
    alignItems: "center",
  },
  trip: {
    width: "100%",
    backgroundColor: "orange",
    height: "50%",
    // margin: 5,
    borderRadius: 15,
    alignContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  text: {
    color: "grey",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.1,
    textAlign: "center",
  },
  areaText: {
    fontSize: 20,
    color: "#6B6766",
    alignSelf: "flex-start",
    marginLeft: 15,
    fontWeight: "bold",
  },
});
