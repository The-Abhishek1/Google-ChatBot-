import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WatchList from "./WatchList";
import OptionsWatchList from "./OptionsWatchList";

export default function WatchListTabBar() {
  const [watchList, setWatchList] = useState(true);
  const [optionsList, setOptionsList] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "aliceblue",
        minHeight: Dimensions.get("screen").height * 1,
      }}
    >
      <View
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          gap: 15,
          padding: 10,
          paddingLeft: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setOptionsList(false), setWatchList(true);
          }}
        >
          <Text style={styles.buttonText}>WatchList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setOptionsList(true), setWatchList(false);
          }}
        >
          <Text style={styles.buttonText}>Options</Text>
        </TouchableOpacity>
      </View>
      {optionsList ? <OptionsWatchList /> : null}
      {watchList ? <WatchList /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
