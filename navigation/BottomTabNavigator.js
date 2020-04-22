import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import {
//   BusinessProfileTabScreen,
//   FindCompanyTabScreen,
//   RequestOfficerTabScreen,
// } from "../screens";
import FindCompanyTabScreen from "../screens/FindCompanyTabScreen.tsx";
import RequestOfficerTabScreen from "../screens/RequestOfficerTabScreen.tsx";
import BusinessProfileTabScreen from "../screens/BusinessProfileTabScreen.tsx";

// import Ionicons from "react-native-vector-icons/Ionicons";
import TabBarIcon from "../components/TabBarIcon";
import Colors from "../constants/Colors.js";

const FindCompanyStackNavigator = createStackNavigator({
  Find: {
    screen: FindCompanyTabScreen,
  },
});
const FindCompanyNavigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor }) => (
    <View>
      <Ionicons style={[{ color: tintColor }]} size={25} name={"ios-home"} />
    </View>
  ),
};

// FindCompanyStackNavigator.navigationOptions = ({ navigation }) => ({
//   tabBarLabel: "Find",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-home${focused ? "" : "-outline"}`
//           : "md-home"
//       }
//     />
//   ),
// });

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    FindStack: {
      screen: FindCompanyStackNavigator,
      navigationOptions: FindCompanyNavigationOptions,
    },
    RequestOfficerTabScreen,
    BusinessProfileTabScreen,
  },
  {
    initialRouteName: "RequestOfficerTabScreen",
    activeColor: Colors.main,
    inactiveColor: "#226557",
    barStyle: { backgroundColor: "#F6F6F6" },
  }
);

// find.navigationOptions = ({ navigation }) => ({
//   tabBarLabel: "Find",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={"md-home"} />
//   ),
// });

export default BottomTabNavigator;
