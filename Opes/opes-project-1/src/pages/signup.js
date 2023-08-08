import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import News from '../pages/news.js';
import Profile from '../pages/profile.js';





export default function Signup ({ route, navigation }) {
  const [myName, setName] = React.useState('');
  const [emailTxt, setemailTxt] = React.useState('');
  const [passTxt, setpassTxt] = React.useState('');


  return (
    <ScrollView>
      <View style={stylesheet.bg}>
        <Text style={stylesheet.welc}> Welcome </Text>
        <Text style={stylesheet.acc}> Let's create your account! </Text>


          <View style={{ paddingTop: 30, paddingBottom: 10, }}>
            <TextInput
              style={stylesheet.textInput}
              onChangeText={(text) => setemailTxt(text)}
              placeholder="Username"
            />
            <TextInput
              style={stylesheet.textInput}
              onChangeText={(text) => setName(text)}
              placeholder="Email"
            />
            <TextInput
              style={stylesheet.textInput}
              onChangeText={(text) => setpassTxt(text)}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

     

        <TouchableOpacity
          style={stylesheet.sigButton}
          onPress={() => navigation.navigate('news')}>
          <Text
            style={{
              color: 'black',
              alignContent: 'flex-end',
              fontWeight: 'bold',
              textDecorationLine: 'underline'
            }}>
            Sign up
          </Text>
        </TouchableOpacity>

     <TouchableOpacity
          onPress={() => navigation.navigate('profile')}>
          <Text
            style={{
              color: 'black',
              opacity: 0.5,
              alignContent: 'center',
              textDecorationLine: 'underline',
              padding: 60,
              fontSize: 12,
            }}>
           *In order to make transactions you must link a payment method, which can be done in your Profile after completing registration.
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const stylesheet = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8E9FD',
    textAlign: 'center',
  },

  welc:{
   margin: 45,
   fontSize: 40,
   marginBottom: 10,
   fontWeight: 'bold',
   color: '#003B4A',
  },

 acc: {
  fontSize: 13,
  marginBottom: 5,
  color: '#000029',
 },

  sigButton: {
    justifyContent: 'flex-end',
    padding: 10,
    width: 100,
    height: 40,
    borderRadius: 10,
    borderColor: '#D8E9FD',
    alignSelf: 'flex-end',
    borderWidth: 1,
    marginLeft: 150,
  },

  textInput: {
    backgroundColor: '#CCE0F5',
    margin: 8,
    borderRadius: 19,
    height: 45,
    width: 280,
    alignSelf: 'center',
    alignItems: 'flex-end',
    padding: 25,
    borderWidth: 2,
    borderColor: '#CCE0F5',
    textAlign: 'left',
  },
});