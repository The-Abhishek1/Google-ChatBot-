import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function Stocks() {
  return (
    <>
      <ScrollView>
        <View style={styles.whole}>
          <View
            style={{
              paddingBottom: 10,
              paddingLeft: 5,
              paddingRight: 5,
              height: 160,
              backgroundColor: "aliceblue",
            }}
          >
            <Text
              style={{
                paddingTop: 15,
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Market's Today
            </Text>
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
                    marginRight: item.key === "SENSEX" ? 20 : 0,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    height: 80,
                    width: 110,
                    borderRadius: 10,
                    marginTop: 10,
                    marginLeft: 20,
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
              paddingLeft: 5,
              paddingRight: 5,
              height: 160,
              backgroundColor: "aliceblue",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                paddingTop: 15,
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Product & Tools
            </Text>

            <View style={styles.box2item}>
              <View style={styles.box2items}>
                <Image
                  source={require("../Images/google.png")}
                  style={{ height: 30, width: 30 }}
                />
                <Text style={{ fontSize: 13 }}>IPO</Text>
              </View>
              <View style={styles.box2items}>
                <Image
                  source={require("../Images/github.png")}
                  style={{ height: 30, width: 30 }}
                />
                <Text style={{ fontSize: 13 }}>Events</Text>
              </View>
              <View style={styles.box2items}>
                <Image
                  source={require("../Images/facebook.png")}
                  style={{ height: 30, width: 30 }}
                />
                <Text style={{ fontSize: 13 }}>All Stocks</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 5,
              paddingRight: 5,
              height: 395,
              backgroundColor: "aliceblue",
              marginTop: 5,
            }}
          >
            <Text style={styles.box3text}>Most bought on InvestWise</Text>

            <View style={styles.box3item}>
              <View style={styles.box3items}>
                <Image
                  source={require("../Images/email.png")}
                  style={{ height: 30, width: 30 }}
                />
                <Text style={[styles.box3text1, styles.box3text2]}>
                  Tata Steel
                </Text>
                <Text style={styles.box3text2}>$12.76</Text>
                <Text style={[styles.box3text3, styles.box3text2]}>
                  +2.80[2.43%]
                </Text>
              </View>
              <View style={styles.box3items}>
                <Image
                  source={require("../Images/email.png")}
                  style={{ height: 30, width: 30 }}
                />
                <Text style={[styles.box3text1, styles.box3text2]}>
                  Tata Steel
                </Text>
                <Text style={styles.box3text2}>$12.76</Text>
                <Text style={[styles.box3text3, styles.box3text2]}>
                  -2.80[2.43%]
                </Text>
              </View>
              <View style={styles.box3items}>
                <Image
                  source={require("../Images/email.png")}
                  style={{ height: 30, width: 30 }}
                />
                <Text style={[styles.box3text1, styles.box3text2]}>
                  Tata Steel
                </Text>
                <Text style={styles.box3text2}>12.76</Text>
                <Text style={[styles.box3text3, styles.box3text2]}>
                  -2.80[2.43%]
                </Text>
              </View>
              <View style={styles.box3items}>
                <Image
                  source={require("../Images/email.png")}
                  style={{ height: 30, width: 30 }}
                />
                <Text style={[styles.box3text1, styles.box3text2]}>
                  Tata Steel
                </Text>
                <Text style={styles.box3text2}>$12.76</Text>
                <Text style={[styles.box3text2, styles.box3text3]}>
                  +2.80[2.43%]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.box4}>
            <View style={styles.box4button}>
              <View style={styles.box4buttontouch1}>
                <TouchableOpacity>
                  <Text style={styles.box4button1}>Gainers</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box4buttontouch1}>
                <TouchableOpacity>
                  <Text style={styles.box4button1}>Loosers</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box4smallbutton}>
              <View style={styles.box4buttontouch2}>
                <TouchableOpacity>
                  <Text style={styles.box4button2}>Large</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box4buttontouch2}>
                <TouchableOpacity>
                  <Text style={styles.box4button2}>Mid</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box4buttontouch2}>
                <TouchableOpacity>
                  <Text style={styles.box4button2}>Small</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.glbox}>
              <View style={styles.glboxitems}>
                <Image
                  source={require("../Images/email.png")}
                  style={styles.glimg}
                />
                <Text style={styles.name}>BLS intl Serv</Text>
                <Text style={styles.amt}>₹344.15</Text>
                <Text style={styles.vary}>+55.20[19.17%]</Text>
              </View>
              <View style={styles.glboxitems}>
                <Image
                  source={require("../Images/email.png")}
                  style={styles.glimg}
                />
                <Text style={styles.name}>BLS intl Serv</Text>
                <Text style={styles.amt}>₹344.15</Text>
                <Text style={styles.vary}>+55.20[19.17%]</Text>
              </View>
              <View style={styles.glboxitems}>
                <Image
                  source={require("../Images/email.png")}
                  style={styles.glimg}
                />
                <Text style={styles.name}>BLS intl Serv</Text>
                <Text style={styles.amt}>₹344.15</Text>
                <Text style={styles.vary}>+55.20[19.17%]</Text>
              </View>
              <View style={styles.glboxitems}>
                <Image
                  source={require("../Images/email.png")}
                  style={styles.glimg}
                />
                <Text style={styles.name}>BLS intl Serv</Text>
                <Text style={styles.amt}>₹344.15</Text>
                <Text style={styles.vary}>+55.20[19.17%]</Text>
              </View>
            </View>
          </View>
          <View style={styles.sn}>
            <Text style={styles.heading}>Stocks in News</Text>

            <View style={styles.stocknews}>
              <View style={styles.stocknewsitems}>
                <Image
                  source={require("../Images/email.png")}
                  style={styles.glimg}
                />
                <Text style={styles.name}>BLS intl Serv</Text>
                <Text style={styles.amt}>₹344.15</Text>
                <Text style={styles.vary}>+55.20[19.17%]</Text>
              </View>
              <View style={styles.stocknewsitems}>
                <Image
                  source={require("../Images/email.png")}
                  style={styles.glimg}
                />
                <Text style={styles.name}>BLS intl Serv</Text>
                <Text style={styles.amt}>₹344.15</Text>
                <Text style={styles.vary}>+55.20[19.17%]</Text>
              </View>
              <View style={styles.stocknewsitems}>
                <Image
                  source={require("../Images/email.png")}
                  style={styles.glimg}
                />
                <Text style={styles.name}>BLS intl Serv</Text>
                <Text style={styles.amt}>₹344.15</Text>
                <Text style={styles.vary}>+55.20[19.17%]</Text>
              </View>
              <View style={styles.stocknewsitems}>
                <Image
                  source={require("../Images/email.png")}
                  style={styles.glimg}
                />
                <Text style={styles.name}>BLS intl Serv</Text>
                <Text style={styles.amt}>₹344.15</Text>
                <Text style={styles.vary}>+55.20[19.17%]</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.foot}>
              <Text style={styles.foottext}>InvestWise Tech Pvt. Ltd.</Text>
              <Text style={styles.foottext}>
                (Formerly known as NexGen Coder's Tech.)
              </Text>
              <Text style={styles.foottext}>
                SEBI-Stock Broker - INZ000301838 | Member of NSE, BSE
              </Text>
              <Text style={styles.foottext}>DP - IN-DP-417-2024</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

//Stylesheet
const styles = StyleSheet.create({
  whole: {
    height: "auto",
    backgroundColor: "aliceblue",
  },
  footer: {
    height: 220,
    backgroundColor: "aliceblue",
    marginTop: 5,
    padding: 5,
  },
  foottext: {
    textAlign: "center",
    fontSize: 14,
  },
  heading: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  sn: {
    height: 400,
    backgroundColor: "aliceblue",
    marginTop: 5,
    padding: 5,
  },
  stocknewsitems: {
    display: "flex",
    flexDirection: "column",
    width: 150,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
    gap: 10,
  },
  stocknews: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "centers",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
  },
  vary: {
    color: "green",
  },
  glbox: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  glboxitems: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    width: 150,
    borderRadius: 10,
  },
  glimg: {
    height: 30,
    width: 30,
  },
  box4buttontouch2: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  box4buttontouch1: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 15,
  },
  box4smallbutton: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
    marginTop: 5,
    paddingLeft: 20,
  },
  box4button2: {
    fontSize: 16,
  },
  box4button: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 20,
  },
  box4button1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  box4: {
    height: 460,
    marginTop: 5,
    display: "flex",
    backgroundColor: "aliceblue",
    padding: 5,
  },

  box2item: {
    height: 120,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
    paddingTop: 5,
    paddingBottom: 5,
    padding: 10,
  },
  box2items: {
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    alignItems: "center",
    height: 75,
    width: 85,
    gap: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  box3text: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  box3item: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  box3items: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    backgroundColor: "white",
    padding: 10,
    width: 150,
    borderRadius: 10,
    paddingLeft: 25,
    borderColor: "gray",
    borderWidth: 1,
  },
  box3text1: {
    fontWeight: "bold",
  },
  box3text2: {
    fontSize: 13,
  },
  box3text3: {
    color: "green",
  },
});
