import * as React from 'react';
import {ImageBackground} from 'react-native';
import {Image} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import { AuthContext } from '../context/AuthContext';
import { DataContext } from '../context/DataContext';





const Tab = createBottomTabNavigator();
import Screen1 from '../pages/Screen1';
import Screen2 from '../pages/Screen2';
import Screen4 from '../pages/Screen4';
import Tab1Screen from '../pages/Tab1Screen';
import Tab2Screen from '../pages/Tab2Screen';
import Profile from '../components/Profile';




export default function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
          name="Home"
          component={Tab1Screen}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: 'https://i.pinimg.com/originals/d7/34/6c/d7346c03444c44944cf2f5b5674ccf27.png',
                }}
              />
            ),
          }}
        />
      <Tab.Screen
          name="Favorites"
          component={Tab2Screen}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3126/3126608.png',
                }}
              />
            ),
          }}
        />
      <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg',
                }}
              />
            ),
          }}
        />
    </Tab.Navigator>
  );
}


