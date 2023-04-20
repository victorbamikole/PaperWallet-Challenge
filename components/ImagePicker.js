import { View, Alert, Image, StyleSheet } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import {
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions,
} from "expo-image-picker";
import OutlineButton from "./UI/OutlineButton";
import { ImagesContext } from "../context/ImagesContext";

export default function ImagePicker({ onTakeImage }) {
  const inmageCtx = useContext(ImagesContext);
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [imagesUri, setImagesUri] = useState([]);

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
      let images = inmageCtx.uris;
      console.log("images", images);

      onTakeImage(image.assets[0].uri);
      setImagesUri(images);
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
