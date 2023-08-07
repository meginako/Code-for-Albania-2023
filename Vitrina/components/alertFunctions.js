import React, { useState, createContext, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import {
  createAppContainer,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { DataContext } from '../context/DataContext';
import styles from '../components/styles';

// Alert modal component
const AlertModal = () => {
  const { alertMessage, setAlertMessage } = useContext(DataContext);

  return (
    <Modal visible={!!alertMessage} animationType="fade" transparent>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ marginBottom: 10, textAlign: 'center' }}>
            {alertMessage}
          </Text>
          <Button title="OK" onPress={() => setAlertMessage('')} />
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
