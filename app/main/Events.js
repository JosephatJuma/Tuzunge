import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Header,
  SearchBar,
  Skeleton,
  Badge,
  Button,
  Dialog,
  Divider,
} from "@rneui/base";
import Navigation from "./Navigation";
import { Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
//Api endpoint prefix
import { port } from "../../api/Api";

const bookingAPI = port + ":10000/user/booking/";
const tripsAPI = port + ":10000/all/trips";
export default function Events({
  toHome,
  toProfile,
  toBook,
  back,
  num,
  userID,
}) {
  const isEvents = true;
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(0);
  const [booking, setBooking] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [events, setEvents] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
    { id: 4, name: "" },
    { id: 5, name: "" },
    { id: 6, name: "" },
  ]);
  const [trips, setTrips] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  //Function to fetch trips
  const fetchTrips = () => {
    if (trips.length <= 0) {
      fetch(tripsAPI)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            var values = Object.values(data);
            for (var i = 0; i < values.length; i++) {
              const trip = values[i];
              setTrips((prevNotes) => [...prevNotes, trip]);
            }
          } else {
            setErrMsg("There are no events currently");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
          setErrMsg(error.message);
        });
    }
  };

  //Function to search for trips
  const searchForTrip = (searchTerm) => {
    trips.filter(
      (item) => {
        console.log(item);
      }
      //item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const seeTripDetails = (id) => {
    setShowDetails(true);
    setSelectedTrip(id);
  };
  const deselectItem = () => {
    if (booking === true) {
      return;
    }
    setShowDetails(false);
    setSelectedTrip(0);
    setSuccess(false);
  };

  //make a booking
  const bookingProcess = () => {
    let booking = trips.find((trip) => trip.id === selectedTrip);
    booking = { ...booking, userID: userID };
    setBooking(true);
    setTimeout(() => {
      axios
        .post(bookingAPI, booking)
        .then((response) => {
          console.log(response.data);
          if (response.data.status === false) {
            Alert.alert(
              "Booking unsuccessful!",
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
            setBooking(false);
            return;
          }
          setSuccess(true);
          setBooking(false);
        })
        .catch((error) => {
          alert(error);
          setBooking(false);
          console.log(error);
        });
    }, 2000);
  };

  //Refresh
  const onRefresh = React.useCallback(() => {
    setTrips([]);
    setLoading(true);
    setRefreshing(true);
    setTimeout(() => {
      fetchTrips();
      setRefreshing(false);
    }, 3000);
  }, []);

  //Initial Fetch when the component renders
  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <View style={styles.events}>
      <StatusBar style="light" backgroundColor="orange" />
      <Header
        ViewComponent={LinearGradient}
        linearGradientProps={styles.linear}
        containerStyle={{ width: "100%", height: 110 }}
        backgroundColor="orange"
        centerComponent={
          <View
            style={{
              width: "100%",
              marginRight: 50,
              alignSelf: "center",
              justifyContent: "space-evenly",
            }}
          >
            <SearchBar
              placeholder="Search by location"
              onChangeText={setSearch}
              value={search}
              lightTheme
              containerStyle={styles.searchContainer}
              style={styles.input}
              inputContainerStyle={[styles.InputContainer, styles.boxShadow]}
              onChange={(text) => searchForTrip(text)}
            />
          </View>
        }
        leftComponent={
          <Entypo name="chevron-left" color="#fff" size={30} onPress={back} />
        }
        rightContainerStyle={{ marginTop: -20 }}
        leftContainerStyle={{ marginTop: -10 }}
        rightComponent={
          <TouchableOpacity>
            <Badge
              badgeStyle={styles.badge}
              value={0}
              textStyle={styles.badgeText}
            />

            <MaterialCommunityIcons
              name="briefcase-check-outline"
              color="#fff"
              size={26}
              onPress={toBook}
            />
          </TouchableOpacity>
        }
      />

      {loading ? (
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          {events &&
            events.map((event) => {
              return (
                <TouchableOpacity
                  style={[styles.boxShadow, styles.loading]}
                  key={event.id}
                >
                  <Skeleton
                    LinearGradientComponent={LinearGradient}
                    animation="wave"
                    width={"40%"}
                    height={"90%"}
                  />
                  <View style={styles.other}>
                    <Skeleton
                      LinearGradientComponent={LinearGradient}
                      animation="wave"
                      width={"80%"}
                      height={"30%"}
                      style={{ margin: 10 }}
                    />
                    <Skeleton
                      LinearGradientComponent={LinearGradient}
                      animation="wave"
                      width={"80%"}
                      height={"30%"}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      ) : (
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["orange", "grey", "black"]}
              size="large"
              title="Relaoding"
            />
          }
        >
          {trips.length === 0 ? (
            <View
              style={[
                styles.boxShadow,
                styles.loading,
                { height: 400, flexDirection: "column" },
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
              <Text style={styles.text}>{errMsg}</Text>
              <Button
                title="Refresh"
                onPress={onRefresh}
                buttonStyle={{
                  backgroundColor: "orange",
                  width: "100%",
                  borderRadius: 5,
                }}
                containerStyle={{ width: "80%" }}
              />
            </View>
          ) : (
            trips.map((trip) => {
              return (
                <View
                  style={[
                    styles.boxShadow,
                    styles.loading,
                    { borderRightWidth: 5, borderColor: "orange" },
                  ]}
                  key={trip.id}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: trip.photoURL,
                    }}
                  />
                  <View style={styles.textArea}>
                    <Text style={styles.text}>{trip.title}</Text>
                    <Text style={[styles.text, { fontSize: 14 }]}>
                      {trip.createdOn}
                    </Text>
                    <Text>{trip.venue.location}</Text>
                    <Button
                      title="+"
                      buttonStyle={styles.btn}
                      containerStyle={styles.btnContainer}
                      titleStyle={{ fontSize: 20 }}
                      onPress={() => seeTripDetails(trip.id)}
                    />
                  </View>
                </View>
              );
            })
          )}
        </ScrollView>
      )}
      <Navigation
        profile={toProfile}
        home={toHome}
        isEvents={events}
        bookings={toBook}
      />
      {showDetails && (
        <Dialog
          overlayStyle={{
            backgroundColor: "#fff",
            width: "96%",
            maxHeight: "60%",
            marginBottom: "-85%",
            borderRadius: 15,
            padding: 20,
          }}
          onPressOut={deselectItem}
        >
          <ScrollView>
            {!booking && (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={[{ fontSize: 20, fontWeight: "600", color: "orange" }]}
                >
                  Trip details
                </Text>
                <TouchableOpacity>
                  <FontAwesome5
                    name="times"
                    size={26}
                    color="orange"
                    onPress={deselectItem}
                  />
                </TouchableOpacity>
              </View>
            )}
            {!success ? (
              <View disabled={booking}>
                {trips.map((trip) => {
                  if (trip.id === selectedTrip) {
                    return (
                      <View key={trip.id}>
                        <Image
                          source={{ uri: trip.photoURL }}
                          style={{
                            width: "100%",
                            height: 200,
                            borderRadius: 10,
                          }}
                        />
                        <Text>Trip ID: {trip.id}</Text>
                        <Text>Trip Title: {trip.title}</Text>
                        <Text>Date Added: {trip.createdOn}</Text>
                        <Text>Scheduled for: {trip.scheduled}</Text>
                        <Text>Location: {trip.venue.location}</Text>

                        <Button
                          onPress={bookingProcess}
                          title={
                            booking ? (
                              <ActivityIndicator size={30} color="orange" />
                            ) : (
                              "Book now"
                            )
                          }
                          disabled={booking}
                          buttonStyle={{
                            backgroundColor: "#000",
                            borderRadius: 10,
                            justifyContent: "space-evenly",
                            width: "80%",
                            alignSelf: "center",
                          }}
                          titleStyle={{
                            fontSize: 15,
                            fontWeight: "900",
                            color: "orange",
                          }}
                          icon={
                            !booking && (
                              <MaterialCommunityIcons
                                name="briefcase-plus"
                                size={24}
                                color="orange"
                              />
                            )
                          }
                        />
                      </View>
                    );
                  }
                  return null;
                })}
              </View>
            ) : (
              <View
                style={{
                  alignSelf: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="briefcase-check"
                  size={130}
                  color="orange"
                />
                <Text
                  style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}
                >
                  Successfull Booking!
                </Text>
                <Button
                  title="OK"
                  buttonStyle={{ backgroundColor: "#000", borderRadius: 10 }}
                  onPress={deselectItem}
                  titleStyle={{
                    color: "orange",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                />
              </View>
            )}
          </ScrollView>
        </Dialog>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  events: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    height: 700,
  },
  linear: {
    colors: ["orange", "orange", "orange"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  },
  badge: {
    backgroundColor: "#fff",
    width: 20,
    height: 20,
    borderRadius: 10,
    left: 10,
    top: 10,
  },
  badgeText: {
    color: "grey",
    fontSize: 8,
    fontWeight: "bold",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  searchContainer: {
    backgroundColor: "transparent",
    width: "130%",
    padding: 0,
    borderRadius: 10,
    marginTop: -15,
    height: 45,
  },
  InputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: "100%",
  },
  input: { fontSize: 18, color: "grey", fontWeight: "bold" },
  loading: {
    width: "96%",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    height: 110,
    margin: 4,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  other: {
    width: "60%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: "40%",
    height: "98%",
    alignSelf: "flex-start",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textArea: {
    width: "60%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnContainer: {
    alignSelf: "flex-end",
    width: "20%",
    marginRight: 10,
    height: 40,
  },
  btn: {
    backgroundColor: "orange",
    borderRadius: 10,
    width: "100%",
  },
  text: { fontSize: 18, fontWeight: "500", color: "grey" },
});
