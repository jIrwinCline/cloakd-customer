import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

export interface CustomButtonProps {
  title?: string;
  style?: any;
  textStyle?: any;
  onPress(): void;
}

const CustomButton: React.SFC<CustomButtonProps> = (props) => {
  const { title = "Enter", style = {}, textStyle = {}, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 36,
    borderRadius: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.main,
    shadowColor: "#2AC062",
    padding: 6,
  },
  text: {
    fontSize: 18,
    // fontWeight: "bold",
    color: "white",
  },
});
