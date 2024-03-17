import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../SupaBase/SupabaseConfig";

export default function Signup() {
  const navigation = useNavigation();
  const signWithGoogle = async () => {
    navigation.navigate("Home");
  };
  return (
    <View style={{ backgroundColor: "aliceblue", height: "100%" }}>
      <Text style={{ textAlign: "center", fontSize: 25, marginTop: 200 }}>
        Join NexGen Coders
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 70,
          gap: 30,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: Dimensions.get("screen").width * 0.6,
            borderRadius: 100,
            paddingBottom: 10,
            paddingRight: 17,
            paddingTop: 10,
          }}
        >
          <Image
            source={require("../Images/github.png")}
            style={{ width: 32, height: 32, borderRadius: 100 }}
          />
          <Text>Signup with Github</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: Dimensions.get("screen").width * 0.6,
            borderRadius: 100,
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 19,
          }}
          onPress={signWithGoogle}
        >
          <Image
            source={require("../Images/google.png")}
            style={{ width: 32, height: 32 }}
          />
          <Text>Signup with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: Dimensions.get("screen").width * 0.6,
            borderRadius: 100,
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 3,
          }}
        >
          <Image
            source={require("../Images/facebook.png")}
            style={{ width: 32, height: 32 }}
          />
          <Text>Signup with Facebook</Text>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Already have an Account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "green", fontWeight: "bold" }}>Sign in</Text>
          </Pressable>
        </View>
      </View>
      <Text
        style={{
          padding: 20,
          lineHeight: 20,
          textAlign: "center",
          marginTop: 100,
          color: "grey",
        }}
      >
        Click "Sign Up" to agree to NexGen Coder's
        <Text style={{ textDecorationLine: "underline" }}>
          {" "}
          Term's of Service
        </Text>
        <Text> and acknowledge that NexGen Coder's </Text>
        <Text style={{ textDecorationLine: "underline" }}>
          {" "}
          Privacy Policy{" "}
        </Text>
        applies to you
      </Text>
    </View>
  );
}
