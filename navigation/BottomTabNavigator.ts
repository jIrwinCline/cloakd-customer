import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import {
//   BusinessProfileTabScreen,
//   FindCompanyTabScreen,
//   RequestOfficerTabScreen,
// } from "../screens";
import FindCompanyTabScreen from "../screens/FindCompanyTabScreen.tsx";

const BottomTabNavigator = createMaterialBottomTabNavigator({
  find: FindCompanyTabScreen,
  //   request: RequestOfficerTabScreen,
  //   business: BusinessProfileTabScreen,
});

export default BottomTabNavigator;
