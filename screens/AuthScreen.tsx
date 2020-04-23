import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";

const AuthScreen = (props) => {
  return (
    <View>
      <Text>AuthScreen</Text>
      <CustomButton
        title="Login"
        onPress={() => {
          props.navigation.navigate({ routeName: "Login" });
        }}
      />
      <CustomButton
        title="Register"
        onPress={() => {
          props.navigation.navigate({ routeName: "Register" });
        }}
      />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
