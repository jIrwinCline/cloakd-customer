import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {
  BusinessProfileTabScreen,
  FindCompanyTabScreen,
  RequestOfficerTabScreen,
} from "../screens";

export const BottomTabNavigator = createMaterialBottomTabNavigator({
  find: FindCompanyTabScreen,
  request: RequestOfficerTabScreen,
  business: BusinessProfileTabScreen,
});
