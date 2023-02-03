import { View, Text, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const AnimatedArrow = ({ scrollY, direction }) => {
  const [rotate, setRotate] = useState(
    scrollY.interpolate({
      inputRange: [0, 1],
      outputRange: direction === "up" ? ["0deg", "180deg"] : ["180deg", "0deg"],
    })
  );

  useEffect(() => {
    setRotate(
      scrollY.interpolate({
        inputRange: [0, 1],
        outputRange:
          direction === "up" ? ["0deg", "180deg"] : ["180deg", "0deg"],
      })
    );
  }, [scrollY]);

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          //width: "100%",
        }}
      >
        <MaterialCommunityIcons
          name="chevron-double-up"
          size={24}
          color="orange"
        />
        <MaterialCommunityIcons
          name="chevron-double-down"
          size={24}
          color="orange"
        />
      </View>
    </Animated.View>
  );
};
