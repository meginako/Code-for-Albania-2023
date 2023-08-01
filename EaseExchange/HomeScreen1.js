import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { db } from './Authentication/firebase';

import { PostPreview } from './PostPreview';
import {Navi} from './Navi'; // Import the Clothes component from Clothes.js

const HomeTab = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts')
      .get()
      .then((querySnapshot) => {
        let listOfPosts = [];
        querySnapshot.forEach((doc) => {
          let tmpdoc = doc.data();
          tmpdoc.id = doc.id;
          listOfPosts.push(tmpdoc);
        });
        setPosts(listOfPosts);
      });
  }, []);

  return (
    <ScrollView>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search posts..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <View style={styles.erik}>
          <TouchableOpacity onPress={() => navigation.navigate('Clothes')}>
            <Image source={require('./images/tshirt.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Devices')}>
            <Image source={require('./images/device.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Accessories')}>
            <Image source={require('./images/handbag.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Furniture')}>
            <Image source={require('./images/furniture.png')} style={styles.image} />
          </TouchableOpacity>
        </View>

        <Text style={{ marginLeft: 10, fontWeight:'bold', fontSize: 18 }}>Popular products</Text>

        <FlatList
          data={posts}
          renderItem={({ item }) => <PostPreview details={item} />}s
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginVertical: 8,
    resizeMode: 'cover',
    margin: 7,
  },
  erik: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'black',
    margin:10,
  },
});

export default HomeTab;