import { View, Alert, Image, StyleSheet } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import {
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions,
} from "expo-image-picker";
import OutlineButton from "./UI/OutlineButton";
import { ImagesContext } from "../context/ImagesContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ImagePicker({ onTakeImage }) {
  const inmageCtx = useContext(ImagesContext);
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [images, setImages] = useState([]);

  const saveImagesToAsyncStorage = async (images) => {
    try {
      await AsyncStorage.setItem("images", JSON.stringify(images));
      console.log("Success");
    } catch (error) {
      console.error("Error saving images to AsyncStorage:", error);
    }
  };

  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Information",
        "You need to grant camera permission"
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    try {
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
      setPickedImage(image.assets[0].uri);
      inmageCtx.addImage(image.assets[0].uri);
      var images = inmageCtx.uris;
      console.log(images);
      onTakeImage(image.assets[0].uri);
      setImages(images);
      await saveImagesToAsyncStorage(images);
    } catch (error) {}
  }
  return (
    <View>
      <OutlineButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlineButton>
    </View>
  );
}

const styles = StyleSheet.create({});
