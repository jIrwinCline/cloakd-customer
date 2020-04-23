import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton.tsx";

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
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
