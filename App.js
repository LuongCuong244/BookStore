import React, { Component, useState } from "react";
import {
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from './src/screens/SignInScreen';
import AppBar from "./src/components/AppBar";
import IntroduceScreen from "./src/screens/IntroduceScreen";
import ContactScreen from "./src/screens/ContactScreen";
import CartScreen from "./src/screens/CartScreen";
import PayScreen from "./src/screens/PayScreen";
import ProductScreen from "./src/screens/ProductScreen";

const Stack = createStackNavigator();

export default function App() {

  const [screen, setScreen] = useState("SignInScreen");
  const [title, setTitle] = useState("Đăng nhập");
  const [params, setParams] = useState();

  const switchScreenCallBack = (name, title = "", params) => {
    setScreen(name);
    setTitle(title);
    setParams(params);
  }

  return (
    <View style={{ flex: 1 }}>
      {
        screen == "SignInScreen" ? (
          <SignInScreen currentScreen = {screen} switchScreenCallBack={switchScreenCallBack} params = {params}/>
        ) : (
          <View style = {{flex: 1}} >
            <AppBar currentScreen = {screen} title={title} hasLeading switchScreenCallBack={switchScreenCallBack} />
            {
              screen == "HomeScreen" && (
                <HomeScreen switchScreenCallBack={switchScreenCallBack} params = {params}/>
              )
            }
            {
              screen == "IntroduceScreen" && (
                <IntroduceScreen switchScreenCallBack={switchScreenCallBack} params = {params}/>
              )
            }
            {
              screen == "ContactScreen" && (
                <ContactScreen switchScreenCallBack={switchScreenCallBack} params = {params}/>
              )
            }
            {
              screen == "CartScreen" && (
                <CartScreen switchScreenCallBack={switchScreenCallBack} params = {params}/>
              )
            }
            {
              screen == "PayScreen" && (
                <PayScreen switchScreenCallBack={switchScreenCallBack} params = {params}/>
              )
            }
            {
              screen == "ProductScreen" && (
                <ProductScreen switchScreenCallBack={switchScreenCallBack} params = {params}/>
              )
            }
          </View>
        )
      }
    </View>
  )
}