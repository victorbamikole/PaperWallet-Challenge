import { createContext, useState } from "react";
import ImageModel from "../models/Image";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ImagesContext = createContext({
  uris: [],
  deviceUris: [],
  addImage: ({ uri }) => {},
  getImages: () => {},
});

function ImagesContextProvider({ children }) {
  const [imageUris, setImageUris] = useState([]);
  const [deviceUris, setDeviceImageUris] = useState([]);

  const addImage = async (imageUri) => {
    const newImage = new ImageModel(imageUri);
    setImageUris([...imageUris, newImage]);
    imageUris.push({ ...newImage });
    // myArray.push({ ...newObject });

    try {
      console.log("imageUris", imageUris);
      const set = await AsyncStorage.setItem(
        "images",
        JSON.stringify(imageUris)
      );
    } catch (error) {
      console.error("Error saving images to AsyncStorage:", error);
    }
  };

  const getImages = async () => {
    try {
      const storedImages = await AsyncStorage.getItem("images");
      if (storedImages !== null) {
        let deviceUri = JSON.parse(storedImages);
        setDeviceImageUris(deviceUri);
      }
    } catch (error) {
      console.error("Error getting images from AsyncStorage:", error);
    }
  };

  const value = {
    uris: imageUris,
    deviceUris: deviceUris,
    addImage: addImage,
    getImages: getImages,
  };

  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
}

export default ImagesContextProvider;
