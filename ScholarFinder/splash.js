import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Simulate a loading time for the splash screen
    setTimeout(() => {
      navigation.replace('Home');
    }, 2500); // Replace 4000 with the desired loading time in milliseconds (4 se
  }, []);

  return (
    <View style={styles.container}>
      {/* Add your splash screen design elements, e.g., logo */}
      <Image source={require('./assets/log.png')} style={styles.logo} />
      <Text style={styles.appName}>ScholarFinder</Text>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Set the background color as needed
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
