import { StyleSheet, Text } from "react-native";
import { useEffect, useContext } from "react";
import ImagesList from "../components/ImagesList";
import { ImagesContext } from "../context/ImagesContext";

const GalleryScreen = () => {
  const imagesCtx = useContext(ImagesContext);
  const imagesUris = imagesCtx.uris;
  const deviceUris = imagesCtx.deviceUris;

  useEffect(() => {
    const deviceUris = imagesCtx.getImages();
  }, [deviceUris]);
  return <ImagesList items={deviceUris} />;
};

export default GalleryScreen;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
