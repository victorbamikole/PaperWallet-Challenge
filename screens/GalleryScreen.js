import { StyleSheet, Text } from "react-native";
import { useEffect, useState, useContext } from "react";
import ImagesList from "../components/ImagesList";
import payLoadItems from "../data/payLoad";
import { ImagesContext } from "../context/ImagesContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GalleryScreen = () => {
  const imagesCtx = useContext(ImagesContext);
  const [images, setImages] = useState([]);
  const imagesUris = imagesCtx.uris;
  let imagesGrid = <Text style={styles.text}>No Images Taken Yet</Text>;

  return <ImagesList items={imagesUris} />;
};

export default GalleryScreen;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
