import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import {
//   BusinessProfileTabScreen,
//   FindCompanyTabScreen,
//   RequestOfficerTabScreen,
// } from "../screens";
import FindCompanyTabScreen from "../screens/FindCompanyTabScreen.tsx";
import RequestOfficerTabScreen from "../screens/RequestOfficerTabScreen.tsx";
import BusinessProfileTabScreen from "../screens/BusinessProfileTabScreen.tsx";

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    find: FindCompanyTabScreen,
    request: RequestOfficerTabScreen,
    business: BusinessProfileTabScreen,
  },
  {
    initialRouteName: "request",
    activeColor: "#f0edf6",
    inactiveColor: "#226557",
    barStyle: { backgroundColor: "#3BAD87" },
  }
);

export default BottomTabNavigator;
