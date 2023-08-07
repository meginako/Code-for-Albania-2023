import * as React from 'react';
import { ImageBackground } from 'react-native';
import { useState, createContext, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Login from './components/Login';
import SignUp from './components/SignUp';
import SellerProfile from './components/SellerProfile';

import Navigator from './components/Navigator';

import { AuthContext } from './context/AuthContext';
import { DataContext } from './context/DataContext';

import Tab1Screen from './pages/Tab1Screen';
import Tab2Screen from './pages/Tab2Screen';

const Stack = createNativeStackNavigator();
function Splash({ navigation }) {
  setTimeout(() => navigation.navigate('Login'), 2000);
  return (
    <ImageBackground
      source={require('./assets/Vitrina.png')}
      style={{
        flex: 1,
        marginHorizontal: 15,
        marginLeft: 15,
        marginRight: 15,
        width: 300,
        height: 300,
        backgroundColor: '#232358',
        alignItems: 'center',
        justifyContent: 'center',
      }}></ImageBackground>
  );
}

export default function App() {
  const [user, setUser] = React.useState(null);
  const [favoriteItems, setFavoriteItems] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <DataContext.Provider
        value={{
          favoriteItems,
          setFavoriteItems,
          alertMessage,
          setAlertMessage,
        }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerStyle: {
                  backgroundColor: '#060221',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignUp}
              options={{
                headerStyle: {
                  backgroundColor: '#060221',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Navigator"
              component={Navigator}
              options={{
                headerStyle: {
                  backgroundColor: '#9A031E',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="SellerProfile"
              component={SellerProfile}
              options={{
                headerStyle: {
                  backgroundColor: '#232358',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataContext.Provider>
    </AuthContext.Provider>
  );
}
