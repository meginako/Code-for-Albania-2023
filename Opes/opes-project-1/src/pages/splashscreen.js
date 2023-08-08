import  {ImageBackground, StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import Signup from '../pages/signup.js';

export default function Splash ({ navigation }) {
  const [doUpdate, setDoUpdate] = React.useState(false);
  setTimeout(() => navigation.navigate(Signup), 1100);
  return (
    <View style={styles.bg}>
    <ImageBackground style={styles.imgbg}
      source={require('../media/logo1.png')}
      >
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
bg: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    verticalAlign: 'center',
    backgroundColor: '#D8E9FD'
},
  imgbg: {
    height: 300,
    width: 300,
  }
});