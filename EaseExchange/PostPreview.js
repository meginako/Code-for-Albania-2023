import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const PostPreview = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("View Post", props.details)}>
      <Card style={styles.previewCard}>
      <Text style={styles.header}>{props.details.title}</Text>
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: props.details.image }} />
          <Text style={styles.details}>{props.details.content}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  previewCard: {
    padding: 15,
    margin: 10,
    backgroundColor: '#FCBDF9',
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  image: {
    width: 80,
    height: 100,
    resizeMode: 'contain'
  },
  details: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    padding: 2,
  },
});

export default PostPreview;
