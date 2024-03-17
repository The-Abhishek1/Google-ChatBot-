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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "aliceblue" }}>
      <View style={{ backgroundColor: "aliceblue", marginTop: 30 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 0,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Image
            source={require("../Images/rocket.jpg")}
            style={{ height: 35, width: 35, borderRadius: 100 }}
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
            <MaterialIcons name="add-alarm" size={24} color="black" />
            <MaterialCommunityIcons
              name="bell-ring-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={{ height: "100%" }}>
          <Top />
        </View>
      </View>
    </View>
  );
}
function Top() {
  return (
    <TopTab.Navigator style={{ height: 30 }}>
      <TopTab.Screen name="Stocks" component={Stocks} />
      <TopTab.Screen name="F&O" component={FO} />
      <TopTab.Screen name="MF's" component={MutualFunds} />
      <TopTab.Screen name="News" component={News} />
    </TopTab.Navigator>
  );
}
