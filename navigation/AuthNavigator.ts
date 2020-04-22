import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

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
