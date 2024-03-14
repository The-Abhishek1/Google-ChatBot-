import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const TopTab = createMaterialTopTabNavigator();
import Stocks from "./Stocks";
import News from "./News";
import MutualFunds from "./MutualFunds";
import FO from "./FO";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "aliceblue" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 40,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Image
          source={require("../Images/rocket.jpg")}
          style={{ height: 40, width: 40, borderRadius: 100 }}
        />
        <TextInput
          placeholder="Search"
          style={{
            borderColor: "grey",
            width: 200,
            height: 30,
            borderRadius: 100,
            textAlign: "center",
            backgroundColor: "white",
          }}
        />
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image
            source={require("../Images/rocket.jpg")}
            style={{ height: 25, width: 25, borderRadius: 100 }}
          />
          <Image
            source={require("../Images/rocket.jpg")}
            style={{ height: 25, width: 25, borderRadius: 100 }}
          />
        </View>
      </View>
      <View style={{ height: "100%" }}>
        <Top />
      </View>
    </View>
  );
}
function Top() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Stocks" component={Stocks} />
      <TopTab.Screen name="F&O" component={FO} />
      <TopTab.Screen name="Mutual Funds" component={MutualFunds} />
      <TopTab.Screen name="News" component={News} />
    </TopTab.Navigator>
  );
}
