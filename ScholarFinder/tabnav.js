/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import App from './App';
import MainPP from './mainProfilePage';
import AppliedPage from './appliedPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-ionicons';

const Tab = createBottomTabNavigator();

export default function Tabnav() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="home"></Icon>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={App}/>
        <Tab.Screen name="MainPP" component={MainPP} />
        <Tab.Screen name="AppliedPage" component={AppliedPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
