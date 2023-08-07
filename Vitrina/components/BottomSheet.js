import React, { useState } from 'react';

import {StyleSheet, View, Text, Button } from 'react-native';

import { BottomSheet } from 'react-native-btr';
import { SocialIcon } from 'react-native-elements';


const Share = () => {
  const [isvisible, setIsvisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setIsvisible(prev => !prev);
  };

  return(
    <View style={styles.container}>
        <Button 
          onPress={toggleBottomNavigationView}
          title = 'SHARE'
          color="#9A031E"
        />
       
        <BottomSheet
          visible = {isvisible}
          onBackButtonPress = {toggleBottomNavigationView}
          onBackdropPress = {toggleBottomNavigationView}
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20,
                }}>
                Share Using
              </Text>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <SocialIcon
                  //Social Icon using react-native-elements
                  type="twitter"
                  //Type of Social Icon
                  onPress={() => {
                    //Action to perform on press of Social Icon
                    toggleBottomNavigationView();
                    alert('twitter');
                  }}
                />
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('facebook');
                  }}
                />
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('instagram');
                  }}
                />
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <SocialIcon
                  type="youtube"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('youtube');
                  }}
                />
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('linkedin');
                  }}
                />
                <SocialIcon
                  type="pinterest"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('pinterest');
                  }}
                />
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
  );
};

export default Share;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
