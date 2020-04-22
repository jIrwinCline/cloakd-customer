import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton as Button from '../components/CustomButton.tsx'

const AuthScreen = () => {
  return (
    <View>
      <Text>AuthScreen</Text>
      <Button title="Login" onPress={() => {props.navigation.navigate({routeName: "Tabs"})})}/>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
