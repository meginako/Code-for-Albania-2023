import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const UserInformation = () => {
  // Dummy user information
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: require('./assets/snack-icon.png'), // Replace with the actual image path
  };

  return (
    <View style={styles.userContainer}>
      <Image source={user.profilePicture} style={styles.profilePicture} />
      <Text style={styles.profileName}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const UserSettings = () => {
  // Add user settings components here
  const handleCardPress = cardTitle => {
    // Add your logic here to handle card press based on cardTitle
    console.log(`Pressed: ${cardTitle}`);
  };

  return (
    <View style={styles.settingsContainer}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('Applied')}>
        <Text style={styles.cardTitle}>Applied</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('User Settings')}>
        <Text style={styles.cardTitle}>User Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('User Info')}>
        <Text style={styles.cardTitle}>User Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <UserInformation />
      <UserSettings />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  settingsContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  card: {
    height: 60,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 20, // Make the edges more rounded
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ProfilePage;
