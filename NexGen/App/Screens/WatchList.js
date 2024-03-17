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
export default function WatchList() {
  return (
    <ScrollView>
      <View style={styles.whole}>
        <View style={styles.list}>
          <Text style={{ marginLeft: 20, fontSize: 17, fontWeight: "bold" }}>
            WatchList
          </Text>
          <View
            style={{
              marginTop: 10,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <FlatList
              nestedScrollEnabled={true}
              horizontal={true}
              data={[
                {
                  key: "NIFTY 50",
                  marketValue: "22,332.65",
                  highLow: "-160.90(0.72%)",
                },
                {
                  key: "BANK NIFTY",
                  marketValue: "47,337.65",
                  highLow: "-507.85(1.06%)",
                },
                {
                  key: "FINNIFTY",
                  marketValue: "20,865.65",
                  highLow: "-143.30(0.68%)",
                },
                {
                  key: "SENSEX",
                  marketValue: "73,502.64",
                  highLow: "-616.75(0.83%)",
                },
              ]}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginRight: item.key === "SENSEX" ? 10 : 0,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    height: 80,
                    width: 110,
                    borderRadius: 10,
                    marginLeft: 10,
                    borderColor: "gray",
                    borderWidth: 1,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>{item.key}</Text>
                  <Text style={{ color: "blue", fontSize: 12 }}>
                    {item.marketValue}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{item.highLow}</Text>
                </View>
              )}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: 10,
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
                <Text>My WatchList</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text>My WatchList</Text>
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
                <Text>NBCC (India)</Text>
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
                <Text>NBCC (India)</Text>
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
    marginTop: 30,
  },
  whole: {
    minHeight: Dimensions.get("screen").height * 0.91,
    backgroundColor: "aliceblue",
  },
  watch: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    paddingRight: 10,
    paddingLeft: 10,
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
