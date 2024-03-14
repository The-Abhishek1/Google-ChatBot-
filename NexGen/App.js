import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./App/Screens/Home";
import WatchList from "./App/Screens/WatchList";
import Portfolio from "./App/Screens/Portfolio";
import Orders from "./App/Screens/Orders";
import Profile from "./App/Screens/Profile";
import Signup from "./App/Screens/Signup";
import Login from "./App/Screens/Login";
import Chat from "./App/Screens/Chat";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

import { Ionicons } from "@expo/vector-icons";
function TabNavigator() {
  return (
    <Tab.Navigator
      activeColor="red"
      screenOptions={{ tabBarColor: "green" }}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen name="Home" options={{ title: "Home" }} component={Home} />
      <Tab.Screen
        name="WatchList"
        options={{ title: "Watchlist" }}
        component={WatchList}
      />

      <Tab.Screen
        name="Portfolio"
        options={{ title: "Portfolio" }}
        component={Portfolio}
      />
      <Tab.Screen
        name="Orders"
        options={{ title: "Orders" }}
        component={Orders}
      />

      <Tab.Screen
        name="Profile"
        options={{ title: "Profile" }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
