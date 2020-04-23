import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton.tsx";

const LoginScreen = (props) => {
  return (
    <View>
      <Text>LoginScreen LoginScreen</Text>
      <CustomButton
        title="Login"
        onPress={() => {
          props.navigation.navigate({ routeName: "Tabs" });
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
