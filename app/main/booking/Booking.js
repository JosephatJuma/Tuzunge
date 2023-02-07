import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { UnAvailable } from "../components/UnAvailable";
import { Ionicons } from "@expo/vector-icons";
import Navigation from "../Navigation";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Table, Row, Rows, Col } from "react-native-table-component";
import { ListItem } from "@rneui/base";
import axios from "axios";

const port = "http://192.168.72.77";
// 192.168.103.198
const bookingsAPI = port + ":10000/user/all/bookings";
export const Booking = ({ toHome, toProfile, toEvents, getNum, userID }) => {
  const book = true;
  const [bookings, setBookings] = useState([]);

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
              var values = Object.values(data);
              getNum(values.length);
              if (values.length > 0) {
                for (var i = 0; i < values.length; i++) {
                  const booking = values[i];
                  setBookings((prev) => [...prev, booking]);
                }
              }
            })
            .catch((error) => {
              console.log(error);
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
              <ListItem
                style={[styles.booking, styles.boxShadow]}
                key={book.id}
              >
                <ListItem.Content>
                  <ListItem.Title>{book.id}</ListItem.Title>
                  <ListItem.Subtitle>{book.dateBooked}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              // <View style={[styles.booking, styles.boxShadow]} key={book.id}>
              //   <Ionicons
              //     name="md-chevron-down-circle"
              //     size={50}
              //     color="orange"
              //     style={{ top: "25%" }}
              //   />
              // </View>
              // <Table borderStyle={styles.booking} key={book.id}></Table>
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
    height: 180,
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
    borderRadius: 10,
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
