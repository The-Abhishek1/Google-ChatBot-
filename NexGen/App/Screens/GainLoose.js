import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const GainLooseTab = createMaterialTopTabNavigator();
import Gain from "./Gain";
import Loose from "./Loose";
export default function GainLoose() {
  return (
    <View style={{ height: 300 }}>
      <GainLooseTabBar />
    </View>
  );
}
// Tab Navigation
function GainLooseTabBar() {
  return (
    <GainLooseTab.Navigator>
      <GainLooseTab.Screen name="Gain" component={Gain} />
      <GainLooseTab.Screen name="Loose" component={Loose} />
    </GainLooseTab.Navigator>
  );
}
