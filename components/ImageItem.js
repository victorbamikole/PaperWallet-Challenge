import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ImageItem = ({ imageUri }) => {
  return (
    <View style={styles.innerContainer}>
      <View>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={styles.title}>Test</Text>
      </View>
    </View>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  imageItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

//<Image source={{ uri: imageList.imageUri }} />
