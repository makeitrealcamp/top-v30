import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from "react-native";

import LoginPage from "./screens/Login";
import RegisterScreen from "./screens/Register";
import ProfileScreen from './screens/Profile';
import Landing from './screens/Landing';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerBackVisible: false }}/>
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
    height: "100%",
  },
  text: {
    color: "white",
  }
})