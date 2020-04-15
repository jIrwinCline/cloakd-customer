import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import {
//   BusinessProfileTabScreen,
//   FindCompanyTabScreen,
//   RequestOfficerTabScreen,
// } from "../screens";
import FindCompanyTabScreen from "../screens/FindCompanyTabScreen.tsx";
import RequestOfficerTabScreen from "../screens/RequestOfficerTabScreen.tsx";
import BusinessProfileTabScreen from "../screens/BusinessProfileTabScreen.tsx";

const BottomTabNavigator = createMaterialBottomTabNavigator({
  find: FindCompanyTabScreen,
  request: RequestOfficerTabScreen,
  business: BusinessProfileTabScreen,
});

export default BottomTabNavigator;
