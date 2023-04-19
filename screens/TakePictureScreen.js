import { StyleSheet, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import ImagePicker from "../components/ImagePicker";
import { ImagesContext } from "../context/ImagesContext";

const TakePictureScreen = () => {
  return (
    <View style={styles.container}>
      <ImagePicker />
    </View>
  );
};

export default TakePictureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
