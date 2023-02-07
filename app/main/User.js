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

export default function User({ email, name, phone, id }) {
  const profile = true;

  return (
    <View>
      <ScrollView
        style={{ height: "80%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profile}>
          <StatusBar style="dark" backgroundColor="#fff" />

          <View
            style={[
              {
                width: "98%",
                height: 400,
                justifyContent: "center",
                alignItems: "center",

                justifyContent: "space-evenly",
              },
            ]}
          >
            <View>
              <FontAwesome name="user-circle" size={100} color="orange" />
            </View>
            <View>
              <Text style={styles.text}>UserID: {id} </Text>
              <Text style={styles.text}>Email: {email} </Text>
              <Text style={styles.text}>Name: {name} </Text>
              <Text style={styles.text}>Phone Number: {phone}</Text>
            </View>
            <View
              style={[
                {
                  marginTop: 20,
                  width: "100%",
                  backgroundColor: "#F5F5F5",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Button
                title="Update by profile"
                containerStyle={{ width: "90%" }}
                buttonStyle={{
                  backgroundColor: "#000",
                  borderRadius: 10,
                  height: 50,
                }}
                titleStyle={{
                  color: "orange",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
  text: { fontWeight: "bold", color: "grey", fontSize: 22 },
  icon: {
    display: "flex",
    flexDirection: "row",
  },
});
