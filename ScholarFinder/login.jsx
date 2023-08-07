import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import UserData from './user.json';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const [user, setUser] = useState(UserData[0]);
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [hidden, setHidden] = useState(true);
  const navigation = useNavigation();

  const validate = () => {
    if (!name) {
      return false;
    }
    if (!pass) {
      return false;
    }
    return true;
  };

  const logIn = () => {
    if (validate()) {
      console.log(user);
      try {
        if (user !== null) {
          // Alert.alert('User logged in successfully!');
          navigation.navigate('Splash');
        }
      } catch (error) {
        Alert.alert(error);
      }
    }
  };

  const signUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>WELCOME</Text>

        <Text style={styles.text}>Enter your email:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#c5cdd9"
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
        </View>

        <Text style={styles.text}>Enter your password:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#c5cdd9"
            style={styles.input}
            onChangeText={setPass}
            value={pass}
            secureTextEntry={hidden}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setHidden(!hidden)}>
            <Text style={styles.toggleButtonText}>
              {hidden ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={logIn} style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={signUp} style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', // Set the background color to white
    width: '100%',
    height: '100%',
  },
  safeArea: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', // Set the text color to black
  },
  text: {
    color: 'black', // Set the text color to black
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: '#000000',
    backgroundColor: 'white',
    height: 40,
    color: 'black', // Set the text color to black
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -11 }],
  },
  toggleButtonText: {
    color: 'black', // Set the text color to black
  },
  button: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91C8E4',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black', // Set the text color to black
    fontWeight: 'bold',
  },
});

export default Login;
