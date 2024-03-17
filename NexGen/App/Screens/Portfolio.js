import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
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
              <View style={styles.values1}>
                <View style={styles.insideValues}>
                  <Text style={{ color: "gray" }}>Current</Text>
                  <Text>₹66.47</Text>
                </View>
                <View style={styles.insideValues}>
                  <Text style={{ color: "gray" }}>Invested</Text>
                  <Text>₹254.90</Text>
                </View>
              </View>
              <View style={styles.values1}>
                <View style={styles.insideValues}>
                  <Text style={{ color: "gray" }}>Returns</Text>
                  <Text style={{ color: "red" }}>₹188.43%</Text>
                </View>
                <View style={styles.insideValues}>
                  <Text style={{ color: "gray" }}>Total returns</Text>
                  <Text style={{ color: "red" }}>₹73.92%</Text>
                </View>
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
        <View style={styles.orderItems}>
          <Text style={{ color: "gray", marginLeft: 10 }}>Invested Stocks</Text>
          <View style={styles.box2}>
            <View style={styles.valueNames}>
              <View style={styles.insideValueNames1}>
                <Image
                  source={require("../Images/github.png")}
                  style={styles.img}
                />
                <Text
                  style={{
                    fontSize: 15,
                  }}
                >
                  Axie Infinity
                </Text>
              </View>
              <View style={styles.insideValueNames1}>
                <Text style={{ color: "gray" }}>0.03765 AXS</Text>
                <Text style={{ color: "black" }}>></Text>
              </View>
            </View>
            <View style={styles.investedvalues}>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Returns</Text>
                <Text>₹164.33</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Current</Text>
                <Text>₹36.67</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Invested</Text>
                <Text>₹201.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.valueNames}>
              <View style={styles.insideValueNames1}>
                <Image
                  source={require("../Images/github.png")}
                  style={styles.img}
                />
                <Text
                  style={{
                    fontSize: 15,
                  }}
                >
                  Axie Infinity
                </Text>
              </View>
              <View style={styles.insideValueNames1}>
                <Text style={{ color: "gray" }}>0.03765 AXS</Text>
                <Text style={{ color: "black" }}>></Text>
              </View>
            </View>
            <View style={styles.investedvalues}>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Returns</Text>
                <Text>₹164.33</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Current</Text>
                <Text>₹36.67</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Invested</Text>
                <Text>₹201.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.valueNames}>
              <View style={styles.insideValueNames1}>
                <Image
                  source={require("../Images/github.png")}
                  style={styles.img}
                />
                <Text
                  style={{
                    fontSize: 15,
                  }}
                >
                  Axie Infinity
                </Text>
              </View>
              <View style={styles.insideValueNames1}>
                <Text style={{ color: "gray" }}>0.03765 AXS</Text>
                <Text style={{ color: "black" }}>></Text>
              </View>
            </View>
            <View style={styles.investedvalues}>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Returns</Text>
                <Text>₹164.33</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Current</Text>
                <Text>₹36.67</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Invested</Text>
                <Text>₹201.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.valueNames}>
              <View style={styles.insideValueNames1}>
                <Image
                  source={require("../Images/github.png")}
                  style={styles.img}
                />
                <Text
                  style={{
                    fontSize: 15,
                  }}
                >
                  Axie Infinity
                </Text>
              </View>
              <View style={styles.insideValueNames1}>
                <Text style={{ color: "gray" }}>0.03765 AXS</Text>
                <Text style={{ color: "black" }}>></Text>
              </View>
            </View>
            <View style={styles.investedvalues}>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Returns</Text>
                <Text>₹164.33</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Current</Text>
                <Text>₹36.67</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Invested</Text>
                <Text>₹201.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.valueNames}>
              <View style={styles.insideValueNames1}>
                <Image
                  source={require("../Images/github.png")}
                  style={styles.img}
                />
                <Text
                  style={{
                    fontSize: 15,
                  }}
                >
                  Axie Infinity
                </Text>
              </View>
              <View style={styles.insideValueNames1}>
                <Text style={{ color: "gray" }}>0.03765 AXS</Text>
                <Text style={{ color: "black" }}>></Text>
              </View>
            </View>
            <View style={styles.investedvalues}>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Returns</Text>
                <Text>₹164.33</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Current</Text>
                <Text>₹36.67</Text>
              </View>
              <View style={styles.valuesinside}>
                <Text style={{ color: "gray" }}>Invested</Text>
                <Text>₹201.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  box2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "",
    gap: 10,
    borderWidth: 0.3,
    borderColor: "gray",
    padding: 5,
    marginTop: 15,
    borderRadius: 10,
  },
  valuesinside: {
    display: "flex",
    flexDirection: "column",
  },
  investedvalues: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderColor: "gray",
  },
  insideValueNames1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  valueNames: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  orderItems: {
    height: "auto",
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
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
    width: 130,
  },
  values1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  values: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: -20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  portfolio: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  whole: {
    minHeight: Dimensions.get("screen").height * 0.9,
    height: "auto",
    backgroundColor: "aliceblue",
    padding: 10,
  },
  inside: {
    marginTop: 30,
  },
});
