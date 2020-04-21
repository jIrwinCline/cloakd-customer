import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import {
//   BusinessProfileTabScreen,
//   FindCompanyTabScreen,
//   RequestOfficerTabScreen,
// } from "../screens";
import FindCompanyTabScreen from "../screens/FindCompanyTabScreen.tsx";
import RequestOfficerTabScreen from "../screens/RequestOfficerTabScreen.tsx";
import BusinessProfileTabScreen from "../screens/BusinessProfileTabScreen.tsx";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors.js";

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    find: FindCompanyTabScreen,
    request: RequestOfficerTabScreen,
    business: BusinessProfileTabScreen,
  },
  {
    initialRouteName: "request",
    activeColor: Colors.main,
    inactiveColor: "#226557",
    barStyle: { backgroundColor: "#F6F6F6" },
  }
);

export default BottomTabNavigator;
