import { createContext, useState } from "react";
import ImageModel from "../models/Image";
import { AsyncStorage } from "react-native";


export const ImagesContext = createContext({
  uris: [],
  addImage: ({ uri }) => {},
});

function ImagesContextProvider({ children }) {
  const [imageUris, setImageUris] = useState([]);

  const addImage = (imageUri) => {
    const newImage = new ImageModel(imageUri);
    setImageUris([...imageUris, newImage]);
  };

  const value = {
    uris: imageUris,
    addImage: addImage,
  };

  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
}

export default ImagesContextProvider;
