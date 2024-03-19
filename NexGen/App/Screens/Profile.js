import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Profile() {
  const navigation = useNavigation();
  const logout = () => {
    navigation.navigate("Signup");
  };
  return (
    <ScrollView>
      <View style={{ backgroundColor: "aliceblue" }}>
        <View style={styles.whole}>
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
          <View style={styles.balance}>
            <Text style={{ fontSize: 15 }}>Trading Balance</Text>
            <Text style={{ fontSize: 25 }}>₹ 0.00</Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: -5,
                marginBottom: 10,
              }}
            >
              Last updated at 12:55 pm on 15 Mar 2024
            </Text>
            <View style={styles.addwith}>
              <Pressable style={styles.withdraw}>
                <Text
                  style={{
                    fontSize: 15,
                    textTransform: "uppercase",
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  Withdraw
                </Text>
              </Pressable>
              <Pressable style={styles.add}>
                <Text
                  style={{
                    fontSize: 15,
                    textTransform: "uppercase",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Add Funds
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.account}>
            <Image
              source={require("../Images/rocket.jpg")}
              style={{ height: 35, width: 35, borderRadius: 50 }}
            />
            <View style={styles.name}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Abhishek N
              </Text>
              <Text>Client ID: A52393970</Text>
            </View>
          </View>
          <View style={styles.reports}>
            <View
              style={{
                paddingLeft: 10,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Reports and Statements
              </Text>
              <Text>Modern back office for investors and traders</Text>
            </View>
            <View style={styles.items}>
              <View style={styles.subItems}>
                <View style={styles.itemswhole}>
                  <Image
                    source={require("../Images/rocket.jpg")}
                    style={styles.img}
                  />

                  <View style={styles.itemsText}>
                    <Text style={styles.text1}>Trades and Charges</Text>
                    <Text style={styles.text2}>
                      All your charges in one place
                    </Text>
                  </View>
                </View>
                <View style={styles.arrow}>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.subItems}>
                <View style={styles.itemswhole}>
                  <Image
                    source={require("../Images/rocket.jpg")}
                    style={styles.img}
                  />

                  <View style={styles.itemsText}>
                    <Text style={styles.text1}>Profit and Loss</Text>
                    <Text style={styles.text2}>
                      Analysis profit and loss for your trades
                    </Text>
                  </View>
                </View>
                <View style={styles.arrow}>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.subItems}>
                <View style={styles.itemswhole}>
                  <Image
                    source={require("../Images/rocket.jpg")}
                    style={styles.img}
                  />

                  <View style={styles.itemsText}>
                    <Text style={styles.text1}>Statement/Ledger</Text>
                    <Text style={styles.text2}>
                      Your transactions with InvestWise
                    </Text>
                  </View>
                </View>
                <View style={styles.arrow}>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.subItems}>
                <View style={styles.itemswhole}>
                  <Image
                    source={require("../Images/rocket.jpg")}
                    style={styles.img}
                  />

                  <View style={styles.itemsText}>
                    <Text style={styles.text1}>Fund Transactions</Text>
                    <Text style={styles.text2}>
                      Add Funds and Withdraw history
                    </Text>
                  </View>
                </View>
                <View style={styles.arrow}>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.subItems}>
                <View style={styles.itemswhole}>
                  <Image
                    source={require("../Images/rocket.jpg")}
                    style={styles.img}
                  />

                  <View style={styles.itemsText}>
                    <Text style={styles.text1}>Download Reports</Text>
                    <Text style={styles.text2}>in XLSX</Text>
                  </View>
                </View>
                <View style={styles.arrow}>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.help}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Help & Support
            </Text>
            <Text style={{ marginTop: 10, fontSize: 15, marginBottom: 10 }}>
              How can we help you?
            </Text>
            <View style={styles.wholeitems}>
              <View style={styles.helpItems}>
                <View style={styles.helpwhole}>
                  <Image
                    source={require("../Images/google.png")}
                    style={styles.img}
                  />
                  <Text style={styles.helptext}>Ask InvestWise</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.helpItems}>
                <View style={styles.helpwhole}>
                  <Image
                    source={require("../Images/google.png")}
                    style={styles.img}
                  />
                  <Text style={styles.helptext}>Contact Us</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.helpItems}>
                <View style={styles.helpwhole}>
                  <Image
                    source={require("../Images/google.png")}
                    style={styles.img}
                  />
                  <Text style={styles.helptext}>Rate Us</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.helpItems}>
                <View style={styles.helpwhole}>
                  <Image
                    source={require("../Images/google.png")}
                    style={styles.img}
                  />
                  <Text style={styles.helptext}>FAQs</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.helpItems}>
                <View style={styles.helpwhole}>
                  <Image
                    source={require("../Images/google.png")}
                    style={styles.img}
                  />
                  <Text style={styles.helptext}>Call Us</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.helpItems}>
                <View style={styles.helpwhole}>
                  <Image
                    source={require("../Images/google.png")}
                    style={styles.img}
                  />
                  <Text style={styles.helptext}>Settings</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
              <View style={styles.helpItems}>
                <View style={styles.helpwhole}>
                  <Image
                    source={require("../Images/google.png")}
                    style={styles.img}
                  />
                  <Text style={styles.helptext}>About Us</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={22} color="black" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.join}>
            <Text
              style={{
                fontSize: 17,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Join our community
            </Text>
            <View style={styles.link}>
              <Image
                source={require("../Images/github.png")}
                style={styles.img}
              />
              <Image
                source={require("../Images/github.png")}
                style={styles.img}
              />
              <Image
                source={require("../Images/github.png")}
                style={styles.img}
              />
              <Image
                source={require("../Images/github.png")}
                style={styles.img}
              />
              <Image
                source={require("../Images/github.png")}
                style={styles.img}
              />
            </View>
          </View>

          <Pressable onPress={logout} style={styles.logout}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Logout</Text>

            <AntDesign name="logout" size={20} color="black" />
          </Pressable>
          <Text style={{ padding: 20, textAlign: "center", fontSize: 16 }}>
            App version 1.10
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  logout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    marginTop: 15,
    paddingLeft: 30,
    borderRadius: 10,
    paddingRight: 20,
  },
  join: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 7,
    paddingTop: 15,
    paddingBottom: 15,
  },
  link: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  wholeitems: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  helptext: {
    fontSize: 15,
  },
  helpwhole: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  helpItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 7,
  },
  help: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  text1: {
    fontSize: 15,
  },
  arrowtext: {
    fontSize: 22,
  },
  itemsText: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 3,
  },
  itemswhole: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  items: {
    display: "flex",
    flexDirection: "column",
    gap: 30,

    padding: 10,
    marginTop: 20,
    borderRadius: 7,
  },
  subItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  reports: {
    backgroundColor: "white",
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
  },
  account: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingLeft: 30,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  name: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    marginLeft: 20,
  },
  add: {
    backgroundColor: "blue",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  withdraw: {
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  addwith: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 20,
  },
  balance: {
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  whole: {
    height: "auto",
    backgroundColor: "aliceblue",
    padding: 10,
    marginTop: 30,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "aliceblue",
    alignItems: "center",
    padding: 5,
  },
  toptext: {
    fontSize: 19,
    fontWeight: "bold",
  },
  topimg: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  refer: {
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 7,
    borderRadius: 20,
  },
  topinside: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
