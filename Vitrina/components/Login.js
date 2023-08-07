import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';
import firebase from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../assets/vit.png'; 

import {Navigator} from './Navigator';


export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const [user, setUser] = React.useContext(AuthContext);

  const logIn = async ({ email, password }) => {
    const auth = firebase.auth();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      setUser(user);
      console.log('Logged in', user.displayName);
      setEmail('');
      setPassword('');
      navigation.navigate('Navigator');
    } catch (error) {
      window.alert(error);
      setUser(null);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.image}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <br></br>
        <br></br>
        <Button
          title="Log in"
          color="#9A031E"
          onPress={() => {
            console.log('Log in click');
            logIn({ email, password });
          }}
        />
        <br></br>
        <Button
          title="Sign up"
          color="#9A031E"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    outlineColor: 'white',
    borderRadius: 8,
    fontSize: 16,
    marginVertical: 4,
    color: '#141414',
  },
  image: {
    width: 315,
    height: 500,
    marginBottom: 10,
    alignSelf: 'center',
  },
});
