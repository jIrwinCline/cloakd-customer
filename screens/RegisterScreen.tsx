import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RegisterScreen = () => {
  return (
    <View>
      <Text>RegisterScreen</Text>
      <CustomButton
        title="Login"
        onPress={() => {
          props.navigation.navigate({ routeName: "Tabs" });
        }}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
