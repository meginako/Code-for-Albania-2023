import React, { useState } from 'react';
import {
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';
import firebase from '../firebase';

import backgroundImage from '../assets/vit.png'; 

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    if (name === '') {
      window.alert('Name field is required');
      return;
    }

    const auth = firebase.auth();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      user.updateProfile({ displayName: name });

      const userRef = firebase.database().ref(`users/${user.uid}`);
      await userRef.set({ voted: false });

      console.log('Sign up successful');

      setName('');
      setEmail('');
      setPassword('');

      navigation.navigate('Login');
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.image}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Full name"
          required={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
         <br></br>
        <Button
          style={styles.button}
          title="Sign up"
          color="#232358"
          onPress={signUp}
        />
      </View>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
