import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from './src/screens/SignInScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ 
            headerShown: false,
          }}
          initialRouteName = "SignInScreen"
        >
          <Stack.Screen 
            name="SignInScreen" 
            component={SignInScreen} 
          />

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}