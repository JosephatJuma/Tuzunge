import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@rneui/base";
export const Search = ({ back }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const clearSearchTerm = () => {
    setSearchTerm("");
  };
  return (
    <View style={styles.search}>
      <StatusBar style="light" backgroundColor="orange" />
      <Input
        ref={inputRef}
        containerStyle={[styles.searchBar, styles.boxShadow]}
        inputStyle={styles.searchInput}
        leftIcon={
          <MaterialIcons
            name="arrow-back"
            size={30}
            color="orange"
            onPress={back}
          />
        }
        inputContainerStyle={{ borderBottomWidth: 0 }}
        value={searchTerm}
        onChangeText={setSearchTerm}
        rightIcon={
          searchTerm && (
            <MaterialIcons
              name="cancel"
              size={25}
              color="orange"
              onPress={clearSearchTerm}
            />
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    //alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  searchBar: {
    backgroundColor: "#fff",
    height: 50,
    marginTop: 40,
    width: "98%",
    alignSelf: "center",
    borderRadius: 10,
  },
  searchInput: {
    backgroundColor: "#fff",
    height: "100%",
    color: "orange",
    fontSize: 16,
    fontWeight: "600",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: "grey",
    fontWeight: "400",
    fontSize: 22,
  },
});
