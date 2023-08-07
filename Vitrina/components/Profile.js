import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  Button,
  ScrollView
} from 'react-native';

import CameraRoll from "@react-native-community/cameraroll";
import firebase from '../firebase';
// import ActionSheet
import ActionSheet from 'react-native-actionsheet';
import { AuthContext } from '../context/AuthContext';
import BottomSheet from '../components/BottomSheet';

const Profile = ({ route, navigation }) => {
  var initialUser = { username };

  if (route.params) {
    const { initialUsername, initialPickedImagePath } = route.params;
    if (initialUsername) {
      initialUser = initialUsername;
    }
    if (initialPickedImagePath) {
      // ...
    }
  }

  const [username, setUsername] = React.useContext(AuthContext);
  const [bio, setBio] = React.useState('');
  const [saved, setSaved] = React.useState(true);
  const [image, setImage] = React.useState(null);

  const name = username?.displayName;

  // Step 1: Define language state and toggle function
  const [language, setLanguage] = useState('english');

  // Step 2: Language-specific translation objects
  const translations = {
    english: {
      profile: 'Profile',
      bio: 'BIO',
      edit: 'Edit',
      signOut: 'Sign out',
      done: 'Done',
    },
    albanian: {
      profile: 'Profili',
      bio: 'BIO',
      edit: 'Ndrysho',
      signOut: 'Dil',
      done: 'Kryer',
    },
  };

  // Step 3: Use the language state to display translated text
  const translation = translations[language];

  // Step 4: Create a switch function to toggle between English and Albanian
  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'albanian' : 'english');
  };

  function saveChanges() {
    setSaved(true);
  }

  function editPicPressed() {
    setSaved(false);
    navigation.navigate('Picture', {
      initialPickedImagePath: pickedImagePath,
    });
  }

  const signOut = async () => {
    const input = window.confirm('Are you sure you want to sign out?');
    console.log(input);
    const auth = firebase.auth();
    try {
      await auth.signOut();
      console.log('Successfully signed out user');
      // setUser(null);
      navigation.navigate('Login');
    } catch (error) {
      window.alert(error);
    }
  };

  const pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      const image = pickerResult.uri;
      setImage(image);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* HEADER */}
        <View style={styles.hdrContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleStyle}>{translation.profile}</Text>
          </View>
          {/* Step 5: Add the switch */}
          <TouchableOpacity onPress={toggleLanguage} style={styles.switchWrapper}>
            <Text style={styles.switchText}>
              {language === 'english' ? 'Albanian' : 'English'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSaved(true)} style={styles.doneWrapper}>
            {saved ? null : <Text style={styles.doneText}>{translation.done}</Text>}
          </TouchableOpacity>
        </View>

        {/* PROFILE PIC AND USERNAME EDITING */}
        <View style={styles.topBlueContainer}>
          <View style={styles.picHorizontalWrapper}>
            <TouchableOpacity style={styles.picVerticalWrapper} onPress={pickImage}>
              <Image source={image} style={styles.profilePic} />
              <Text style={styles.profilePicEdit}>{translation.edit}</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.usernameInput}
            value={name}
            onChangeText={(text) => {
              setUsername(text);
              setSaved(false);
            }}
          />
        </View>

        <View style={styles.formItemContainer}>
          <Text style={styles.formItemText}>{translation.bio}</Text>
          <TextInput
            style={styles.usernameInput}
            value={bio}
            onChangeText={(text) => {
              setBio(text);
              setSaved(false);
            }}
          />
          <Button title='Add Post' color="#FFDA0A" onPress={signOut} />
          <Button title={translation.signOut} color="#232358" onPress={signOut} />
          <BottomSheet />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  hdrContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 30
  },
  topBlueContainer: {
    backgroundColor: '#87a7fa',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 25,
    width: '100%',
  },
  picHorizontalWrapper: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  picVerticalWrapper: {
    flexDirection: 'column',
    width: 75,
    height: 75, // Fixed typo 'hieght' to 'height'
  },
  profilePic: {
    flex: 1,
    height: '100%',
    width: '50%',
    minHeight: 50,
    minWidth: 50,
    borderRadius: 50, // Removed single quotes
    marginLeft: 12,
  },
  formItemContainer: {
    marginTop: 25
  },
  formItemText : {
    color: '#141414',
    marginLeft: 12,
    marginBottom: 4
  },
  profilePicEdit: {
    color: '#141414',
    textAlign: 'center',
  },
  usernameInput: {
    width: '100%',
    height: 30,
    borderTopColor: '#000000',
    borderTopWidth: 0.2,
    borderBottomColor: '#000000',
    borderBottomWidth: 0.2,
    color: '#141414',
    backgroundColor: '#87a7fa'
  },
  doneWrapper: {
    flex: 1,
    maxWidth: 50
  },
  doneText: {
    fontWeight: 'bold',
    color: '#87a7fa',
    textAlign: 'center',
  },
  titleWrapper : {
    flex: 1,
    paddingLeft: 60,
  },
  titleStyle:{
    color: '#87a7fa',
    textAlign: 'center',
    fontSize: 16,
  },
  // Step 6: Add styles for the switch
  switchWrapper: {
    flex: 1,
    maxWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchText: {
    fontWeight: 'bold',
    color: '#87a7fa',
    textAlign: 'center',
  },
});
