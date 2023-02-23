import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { UnAvailable } from "../components/UnAvailable";
import { Ionicons } from "@expo/vector-icons";
import Navigation from "../Navigation";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Table, Row, Rows, Col } from "react-native-table-component";
import { ListItem } from "@rneui/base";
import axios from "axios";
//localhost end point prefix
import { port } from "../../../api/Api";

const bookingsAPI = port + ":10000/user/all/bookings";
export const Booking = ({ toHome, toProfile, toEvents, getNum, userID }) => {
  const book = true;
  const [bookings, setBookings] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    const user = { userID: userID };
    if (bookings.length <= 0) {
      setTimeout(() => {
        if (bookings.length <= 0) {
          axios
            .post(bookingsAPI, user)
            .then((response) => {
              const data = response.data;
              console.log(data);
              //var forst_name = "Juma Josephat";

              if (data != null) {
                let values = Object.values(data);
                for (var index = 0; index < values.length; index++) {
                  const booking = values[index];
                  setBookings((prev) => [...prev, booking]);
                }
                setErrMsg("");
              } else {
                setErrMsg(
                  "Looks Like you haven' t made any bookings yet, there are a number of upcoming events, navigate to trips and place your first booking"
                );
              }
            })
            .catch((error) => {
              console.log(error);
              setErrMsg(error.message);
            });
        }
      }, 10);
    }
  }, []);
  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="orange" />
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignContent: "center", alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {bookings.length > 0 ? (
          bookings.map((book) => {
            return (
              <TouchableOpacity
                style={[styles.booking, styles.boxShadow]}
                key={book.id}
              >
                <ListItem.Content>
                  <ListItem.Title style={styles.text}>{book.id}</ListItem.Title>
                  <ListItem.Subtitle style={styles.text}>
                    {book.dateBooked}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </TouchableOpacity>
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
            <View
              style={{
                backgroundColor: "lightgrey",
                width: 150,
                height: 150,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                margin: 10,
                borderRadius: 100,
              }}
            >
              <MaterialIcons name="wifi-off" size={100} color="orange" />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "grey",
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              {errMsg}
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
    width: "96%",
    height: 80,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 5,
    //borderWidth: 1,
    borderColor: "orange",
    margin: 2,
    padding: 10,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    fontWeight: "500",
    color: "grey",
    fontSize: 15,
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
