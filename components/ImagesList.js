import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import ImageGridItem from "./ImageGridItem";
import { GlobalStyles } from "../constants/styles";

const ImagesList = ({ items }) => {
  let imagesGrid = <Text style={styles.infoText}>No Images Taken Yet</Text>;

  function renderImageItem(itemData) {
    const item = itemData.item;
    return <ImageGridItem imageUrl={item.imageUri} />;
  }

  if (items.length > 0) {
    imagesGrid = (
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderImageItem}
        numColumns={2}
      />
    );
  }

  return <View>{imagesGrid}</View>;
};

export default ImagesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  infoText: {
    color: GlobalStyles.colors.primary800,
    fontSize: 26,
    textAlign: "center",
    marginTop: 100,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
