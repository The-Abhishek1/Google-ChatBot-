import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.top}>
        <Text style={styles.toptext}>Your Account</Text>
        <View style={styles.topinside}>
          <Pressable style={styles.refer}>
            <Text>Get ₹200</Text>
          </Pressable>
          <Image
            source={require("../Images/rocket.jpg")}
            style={styles.topimg}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "aliceblue",
    alignItems: "center",
    padding: 10,
  },
  toptext: {
    fontSize: 19,
    fontWeight: "bold",
  },
  topimg: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  refer: {
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 25,
    paddingRight: 25,
    padding: 10,
    borderRadius: 20,
  },
  topinside: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
