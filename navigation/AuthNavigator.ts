import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AuthScreen from "../screens/AuthScreen.tsx";
import RegisterScreen from "../screens/RegisterScreen.tsx";
import LoginScreen from "../screens/LoginScreen.tsx";

const AuthStack = createStackNavigator(
  {
    Start: AuthScreen,
    Register: RegisterScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Start",
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
export default AuthStack;
