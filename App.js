import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKDT0_-fqHsw7HKNJrrX0jyOfvotBKB7w",
  authDomain: "instagram-clone-f16e3.firebaseapp.com",
  projectId: "instagram-clone-f16e3",
  storageBucket: "instagram-clone-f16e3.appspot.com",
  messagingSenderId: "845743723168",
  appId: "1:845743723168:web:a63d5b03f5caa18826afc5",
  measurementId: "G-BCZ3SJPCVN"
}; 

if (firebase.apps.lenght ===0)
{
  firebase.initializeApp(firebaseConfig)
}
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';



import LandingScreen from './components/auth/Landing';

const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
    </Stack.Navigator>

    </NavigationContainer>
  );
}
