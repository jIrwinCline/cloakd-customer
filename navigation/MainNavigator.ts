import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import LoginScreen from "../screens/LoginScreen";

import Colors from "../constants/colors";

import BottomTabNavigator from "./BottomTabNavigator";

// const AuthStack = createStackNavigator({ LoginSignup: LoginSignupScreen });
// const MessageStack = createStackNavigator({ Message: MessageScreen });

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    Tabs: BottomTabNavigator,
    // Message: MessageStack,
  },
  {
    initialRouteName: "Auth",
  }
  // {
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: Colors.primary
  //     },
  //     headerTintColor: Platform.OS === "android" ? "white" : "white"
  //     //   headerShown: false
  //   }
  // }
);
export default createAppContainer(MainNavigator);
