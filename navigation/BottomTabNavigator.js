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

import TabBarIcon from "../components/TabBarIcon";
import Colors from "../constants/Colors.js";

//Find Company Stack
const FindCompanyStack = createStackNavigator({
  Find: {
    screen: FindCompanyTabScreen,
  },
});
const FindCompanyNavigationOptions = {
  tabBarLabel: "Find",
  tabBarIcon: ({ tintColor }) => (
    <View>
      <Ionicons style={[{ color: tintColor }]} size={25} name={"ios-home"} />
    </View>
  ),
};

//Request Officer Stack
const RequestOfficerStack = createStackNavigator({
  Request: {
    screen: RequestOfficerTabScreen,
  },
});
const RequestOfficerNavigationOptions = {
  tabBarLabel: "Request",
  tabBarIcon: ({ tintColor }) => (
    <View>
      <Ionicons style={[{ color: tintColor }]} size={25} name={"ios-home"} />
    </View>
  ),
};

// Business Profile Stack
const BusinessProfileStack = createStackNavigator({
  Business: {
    screen: BusinessProfileTabScreen,
  },
});
const BusinessProfileNavigationOptions = {
  tabBarLabel: "Business",
  tabBarIcon: ({ tintColor }) => (
    <View>
      <Ionicons style={[{ color: tintColor }]} size={25} name={"ios-home"} />
    </View>
  ),
};

//Bottom Tabs
const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    FindStack: {
      screen: FindCompanyStack,
      navigationOptions: FindCompanyNavigationOptions,
    },
    RequestStack: {
      screen: RequestOfficerStack,
      navigationOptions: RequestOfficerNavigationOptions,
    },
    BusinessStack: {
      screen: BusinessProfileStack,
      navigationOptions: BusinessProfileNavigationOptions,
    },
  },
  {
    initialRouteName: "RequestStack",
    activeColor: Colors.main,
    inactiveColor: "#226557",
    barStyle: { backgroundColor: "#F6F6F6" },
  }
);

export default BottomTabNavigator;
