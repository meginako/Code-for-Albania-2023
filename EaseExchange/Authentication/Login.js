import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {auth} from './firebase';
import { AuthContext } from './auth-context';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetMail, setResetMail] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const [user, setUser] = useContext(AuthContext);

  const reset = async () => {
    try {
      await auth.sendPasswordResetEmail(resetMail);
      alert("Email sent");
    } catch (error) {
      alert("Error occurred");
    }
  };

  const logIn = async () => {
    console.log('hdeudh')
    
    try {
      
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      setUser(user);
    } catch (error) {
      alert(error.message);
      setUser(null);
    }
  };

  const signUp = async () => {
    
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('User created successfully!');
      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.top}>EaseExchange</Text>

      <TextInput
        style={styles.input}
        placeholder="Type Email Here"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Type Password Here"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={hidePassword}
      />
      <TouchableOpacity
        onPress={() => setHidePassword(prev => !prev)}
        style={styles.showHidePasswordButton}>
        <Text>{hidePassword ? 'Show Password' : 'Hide Password'}</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={logIn}
          style={styles.loginButton}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={signUp}
          style={styles.signUpButton}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotPasswordText}>Forgot Password? Reset it Now</Text>
      <View style={styles.resetContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          onChangeText={setResetMail}
          value={resetMail}
        />
        <TouchableOpacity
          onPress={reset}
          style={styles.resetButton}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
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
  },
  top: {
    textAlign: 'center',
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  showHidePasswordButton: {
    textAlign: 'center',
    padding: 8,
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  loginButton: {
    flex: 1,
    textAlign: 'center',
    padding: 8,
    marginHorizontal: 8,
    backgroundColor: '#FCBDF9',
    borderRadius: 8,
  },
  signUpButton: {
    flex: 1,
    textAlign: 'center',
    padding: 8,
    marginHorizontal: 8,
    backgroundColor: '#FCBDF9',
    borderRadius: 8,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 16,
  },
  resetContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  resetButton: {
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FCBDF9',
    borderRadius: 16,
    marginHorizontal: 8,
  },
});
