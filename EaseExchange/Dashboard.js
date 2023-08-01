import React from 'react';
import { Image } from 'react-native';

import { AuthContext } from './Authentication/auth-context';

import HomeScreen from './HomeScreen1';
import WritePostPage from './WritePostPage';
import ProfileScreen from './ProfileScreen';

import Clothes from './Products/Clothes';
import Devices from './Products/Devices';
import Accessories from './Products/Accessories';
import Furniture from './Products/Furniture';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Dashboard(props) {
  const [user, setUser] = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Navi}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                style={{ width: size, height: size }}
                source={require('./images/home_icon.png')}
              />
            ),
            header: () => ( // Custom header for the "Home" screen
              <Image
                source={require('./images/logo.png')}
                style={{ height: 50, width: 300, alignSelf: 'center' }}
              />
            ),
            headerTitleAlign: 'center',
          }}
        />

        <Tab.Screen
          name="Add post"
          component={WritePostPage}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./images/addPost.webp')}
                />
              );
            },
            headerTitle: () => (
              <Image
                source={require('./images/logo.png')}
                style={{ height: 50, width: 300 }}
              />
            ),
            headerTitleAlign: 'center',
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                style={{ width: size, height: size }}
                source={require('./images/profile_icon.png')}
              />
            ),
            headerTitle: () => (
              <Image
                source={require('./images/logo.png')}
                style={{ height: 50, width: 300 }}
              />
            ),
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Navi() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: route.name !== 'Home', // Hide the header on the "Home" screen
        headerTitleAlign: 'center',
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Clothes" component={Clothes} />
      <Stack.Screen name="Devices" component={Devices} />
      <Stack.Screen name="Accessories" component={Accessories} />
      <Stack.Screen name="Furniture" component={Furniture} />
    </Stack.Navigator>
  );
}