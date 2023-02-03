import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { UnAvailable } from "../components/UnAvailable";
import { Ionicons } from "@expo/vector-icons";
import Navigation from "../Navigation";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const port = "http://192.168.103.198";
// 192.168.103.198
const bookingsAPI = port + ":10000/user/all/bookings";
export const Booking = ({ toHome, toProfile, toEvents, getNum }) => {
  const book = true;
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const user = { userID: "54r73wet4gh3b4pejh" };
    if (bookings.length <= 0) {
      setTimeout(() => {
        if (bookings.length <= 0) {
          axios
            .post(bookingsAPI, user)
            .then((response) => {
              //alert("Fetched");
              const data = response.data;
              console.log(data);
              var values = Object.values(data);
              getNum(values.length);
              if (values) {
                for (var i = 0; i < values.length; i++) {
                  const booking = values[i];
                  setBookings((prev) => [...prev, booking]);
                }
              }
            })
            .catch((error) => {
              Alert.alert(
                "Error!",
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
              console.log(error);
            });
        }
      }, 10);
    }
  }, []);
  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="#F7BE15" />
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignContent: "center", alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {bookings.length > 0 ? (
          bookings.map((book) => {
            return (
              <View style={[styles.booking, styles.boxShadow]} key={book.id}>
                <View style={styles.tr}>
                  <Text style={[styles.text, { marginLeft: 100 }]}>
                    Booking ID
                  </Text>
                  <Text style={styles.text}>{book.id}</Text>
                </View>
                <View style={styles.tr}>
                  <Text style={styles.text}>Booking Date</Text>
                  <Text style={styles.text}>{book.dateBooked}</Text>
                </View>
                <View style={styles.tr}>
                  <Text style={styles.text}>Trip ID</Text>
                  <Text style={styles.text}>{book.tripID}</Text>
                </View>
                <Ionicons
                  name="md-chevron-down-circle"
                  size={50}
                  color="orange"
                  style={{ top: "25%" }}
                />
              </View>
            );
          })
        ) : (
          <View
            style={[
              {
                marginTop: 100,
                borderColor: "grey",
                height: 300,
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                width: "96%",
              },
            ]}
          >
            <MaterialIcons name="error-outline" size={100} color="orange" />
            <Text
              style={{
                fontSize: 20,
                color: "grey",
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              Looks Like you haven' t made any bookings yet, there are a number
              of upcoming events, navigate to trips and place your first booking
            </Text>
          </View>
        )}
      </ScrollView>
      <Navigation
        home={toHome}
        profile={toProfile}
        events={toEvents}
        isBookings={book}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  booking: {
    backgroundColor: "#ffffff",
    width: "98%",
    height: 250,
    padding: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 4,
    borderWidth: 2,
    borderColor: "grey",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 20,
  },
  text: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.1,
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderColor: "orange",
    borderBottomWidth: 1,
    margin: 10,
  },
});
