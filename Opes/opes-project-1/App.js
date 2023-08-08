import {Button, View, TouchableOpacity, StyleSheet, ScrollView, Image, Text, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/pages/signup.js';
import Splash from './src/pages/splashscreen.js';
import * as React from 'react';
import News from './src/pages/news.js';
import Profile from './src/pages/profile.js';


const Stack = createNativeStackNavigator();

export default function APP ()  {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="News" component={News}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}