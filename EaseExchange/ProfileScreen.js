import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const ProfileTab = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState('John Doe');
  const [website, setWebsite] = useState('www.website.com');
  const [email, setEmail] = useState('name@website.com');
  const [address, setAddress] = useState('Street, City, State');
  const [bio, setBio] = useState('dkjgnkdrejgnke');

  const getCameraRollPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to change your profile picture.');
      }
    }
  };

  const getCameraPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to take a photo for your profile picture.');
      }
    }
  };

  const pickImage = async () => {
    await getCameraRollPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  const takePhoto = async () => {
    await getCameraPermission();

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Profile Picture */}
        <TouchableOpacity style={styles.profilePictureContainer} onPress={pickImage}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
          ) : (
            <Text style={styles.profilePictureText}>Tap to select a profile picture</Text>
          )}
        </TouchableOpacity>

        {/* Take Photo Button */}
        <TouchableOpacity style={styles.changePictureButton} onPress={takePhoto}>
          <Text style={styles.changePictureButtonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.labelText}>Your Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.labelText}>Your Website:</Text>
          <TextInput
            style={styles.input}
            value={website}
            onChangeText={setWebsite}
            placeholder="Enter your website"
          />
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.labelText}>Your Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.labelText}>Your Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
          />
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.labelText}>About You:</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            value={bio}
            onChangeText={setBio}
            placeholder="Tell us about yourself"
            multiline
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f9f9f9',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureContainer: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  profilePictureText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777',
    marginLeft: 15
  },
  changePictureButton: {
    backgroundColor: '#FCBDF9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  changePictureButtonText: {
    fontSize: 16,
    color: 'black',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailItem: {
    marginBottom: 20,
  },
  labelText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default ProfileTab;
