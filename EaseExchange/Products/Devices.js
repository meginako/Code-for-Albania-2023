import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { db } from '../Authentication/firebase'; // Import your Firebase configuration
import { PostPreview1 } from '../PostPreview1';

const Devices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Access data from Firebase and set it in the state
    db.collection('EaseExchange3').where('type', '==', 'devices')
      .get()
      .then((querySnapshot) => {
        let listOfDevices = [];
        querySnapshot.forEach((doc) => {
          let tmpdoc = doc.data();
          tmpdoc.id = doc.id;
          listOfDevices.push(tmpdoc);
        });
        setDevices(listOfDevices);
      });
  }, []);

  return (
      <ScrollView>
      <FlatList
        data={devices}
        renderItem={({ item }) => <PostPreview1 details={item} />}
        keyExtractor={(item) => item.id}
      />
      </ScrollView>
  );
};

export default Devices;
