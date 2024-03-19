import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export default function OptionsWatchList() {
  return (
    <ScrollView>
      <View style={styles.whole}>
        <View style={styles.list}>
          <View
            style={{
              minHeight: Dimensions.get("screen").height * 0.79,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: 5,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <TouchableOpacity style={styles.button}>
                  <Text>My OptionsList</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>My OptionsList</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <MaterialIcons name="add-to-photos" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.watch}>
              <View style={styles.watchItems}>
                <View>
                  <Text>NiftyBank</Text>
                </View>
                <View>
                  <Text>₹1,634.10</Text>
                  <Text>-195.85(0.42%)</Text>
                </View>
              </View>
              <View style={styles.watchItems}>
                <View>
                  <Text>Nifty50</Text>
                </View>
                <View>
                  <Text>₹1,634.10</Text>
                  <Text>-195.85(0.42%)</Text>
                </View>
              </View>
              <View style={styles.watchItems}>
                <View>
                  <Text>NBCC (India)</Text>
                </View>
                <View>
                  <Text>₹1,634.10</Text>
                  <Text>-195.85(0.42%)</Text>
                </View>
              </View>
              <View style={styles.watchItems}>
                <View>
                  <Text>BankNifty</Text>
                </View>
                <View>
                  <Text>₹1,634.10</Text>
                  <Text>-195.85(0.42%)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.3,
    padding: 5,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  list: {
    width: Dimensions.get("screen").width * 1,
    padding: 10,
  },
  whole: {
    minHeight: Dimensions.get("screen").height * 0.91,
    backgroundColor: "aliceblue",
  },
  watch: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    marginTop: 10,
  },
  watchItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
    padding: 10,
    justifyContent: "space-between",
  },
});
