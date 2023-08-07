/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
*
* @format
*/

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabnav from './tabnav';
import SplashPage from './splash';
import LogIn from './login';
import SignUp from './signup';
import InfoAdd from './infoAdd';
import Apply from './apply';
import Home from './App';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

 function MyStack() {
    return (
      <NavigationContainer independent={true} >
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }} initialRouteName="Apply">
          <Stack.Screen name="Splash" component={SplashPage} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="InfoAdd" component={InfoAdd} />
          {/* <Stack.Screen name="Tabnav" component={Tabnav} /> */}
          <Stack.Screen name="Apply" component={Apply} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default function Stacks() {
    return (
        <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
}
