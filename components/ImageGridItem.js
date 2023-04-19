import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";

const ImageGridItem = ({ imageUrl }) => {
  return (
    <View style={styles.gridItem}>
      <View style={[styles.innerContainer, { backgroundColor: GlobalStyles.colors.primary800 }]}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    </View>
  );
};

export default ImageGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 150,
  },
});
