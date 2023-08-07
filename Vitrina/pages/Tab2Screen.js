import React, { useContext } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { DataContext } from '../context/DataContext';
//import {  removeFromFavorites } from '../components/alertFunctions';
import styles from '../components/styles';
import AlertModal from '../components/alertFunctions';

// Tab 2 component (FAVORITES)
const Tab2Screen = () => {
  const { favoriteItems, setFavoriteItems, setAlertMessage } =
    useContext(DataContext);
  const favoritesArray = Object.values(favoriteItems);
  ////////////////////////
  const removeFromFavorites = (title) => {
    const updatedFavorites = { ...favoriteItems };
    delete updatedFavorites[title];
    setFavoriteItems(updatedFavorites);
    setAlertMessage('The movie has been removed from your favorites.');
  };
  ////////////////////////
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232358',
      }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#232358' }}>
        FAVORITES
      </Text>
      <ScrollView>
        {favoritesArray.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}>
            <Image source={item.image} style={{ width: 200, height: 200 }} />
            <Text
              style={{ fontSize: 15, fontWeight: 'bold', color: '#232358' }}>
              Caption: {item.title}
            </Text>
            <Text
              style={{ fontSize: 15, fontWeight: 'bold', color: '#232358' }}>
              Seller: {item.director}
            </Text>
            <TouchableOpacity
              onPress={() => removeFromFavorites(item.title)}
              style={{
                alignSelf: 'flex-end',
                padding: 5,
                borderRadius: 10,
                backgroundColor: 'red',
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tab2Screen;
