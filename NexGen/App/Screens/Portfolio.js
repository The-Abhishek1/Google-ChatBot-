import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function Portfolio() {
  return (
    <ScrollView>
      <View style={styles.whole}>
        <View style={styles.inside}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}>
            Portfolio
          </Text>
          <View style={styles.portfolio}>
            <View style={styles.values}>
              <View style={styles.insideValues}>
                <Text style={{ color: "gray" }}>Current</Text>
                <Text>₹66.47</Text>
              </View>
              <View style={styles.insideValues}>
                <Text style={{ color: "gray" }}>Invested</Text>
                <Text>₹254.90</Text>
              </View>
              <View style={styles.insideValues}>
                <Text style={{ color: "gray" }}>Returns</Text>
                <Text style={{ color: "red" }}>₹188.43%</Text>
              </View>
              <View style={styles.insideValues}>
                <Text style={{ color: "gray" }}>Total returns</Text>
                <Text style={{ color: "red" }}>₹73.92%</Text>
              </View>
            </View>
            <View style={styles.insights}>
              <Image
                source={require("../Images/rocket.jpg")}
                style={styles.img}
              />
              <Text>Insights</Text>
              <Text>
                Today <Text>-₹2.16(-0.85%)</Text>
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ textAlign: "center", margin: 10 }}>
          Your investment returns may be indicative
        </Text>
        <View style={{ height: 450 }}></View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  insights: {
    display: "flex",
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 10,
  },
  insideValues: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    padding: 20,
    width: 120,
  },
  values: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: -20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  portfolio: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  whole: {
    height: "auto",
    backgroundColor: "aliceblue",
    padding: 10,
  },
  inside: {
    marginTop: 30,
  },
});
