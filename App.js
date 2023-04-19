import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GalleryScreen from "./screens/GalleryScreen";
import TakePictureScreen from "./screens/TakePictureScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import ImagesContextProvider from "./context/ImagesContext";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ImagesGridView() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      })}
    >
      <BottomTabs.Screen
        name="TakePicture"
        component={TakePictureScreen}
        options={{
          title: "Take Picture",
          tabBarLabel: "Camera",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          title: "Gallery",
          tabBarLabel: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="image" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ImagesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Take Picture"
              component={ImagesGridView}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Gallery" component={GalleryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ImagesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
