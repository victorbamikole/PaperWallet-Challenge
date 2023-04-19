import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

export default function OutlineButton({ onPress, icon, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons style={styles.icon} name={icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary800,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: GlobalStyles.colors.primary800,
  },
});
