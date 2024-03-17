import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Orders() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text>Orders</Text>
      <AntDesign name="rightcircle" size={24} color="black" />
    </View>
  );
}
