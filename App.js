import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import MainComponent from "./src/screens/MainComponent"
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from './src/components/LoadingScreen';
import Search from './src/screens/Search';


const Stack = createStackNavigator();
export default function App() {
  const [loading, setLoading] = useState(false)
  let [fontsLoaded] = useFonts({
    "Inter-300": require("./src/assets/fonts/Inter-Light.ttf"),
    "Inter-400": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-500": require("./src/assets/fonts/Inter-Medium.ttf"),
    "Inter-600": require("./src/assets/fonts/Inter-SemiBold.ttf"),
    "Inter-700": require("./src/assets/fonts/Inter-Bold.ttf"),
    "Inter-800": require("./src/assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-900": require("./src/assets/fonts/Inter-Black.ttf"),
  });
  // i
  if (!fontsLoaded || loading === true) {
    return <LoadingScreen />;
  } else
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={MainComponent} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}



