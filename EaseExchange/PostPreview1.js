import {Card} from 'react-native-paper';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const PostPreview1 = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("View Post", props.details)}>
      <Card style={styles.previewCard}>
      <Text style={styles.header}>{props.details.Title}</Text>
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: props.details.image }} />
          <Text style={styles.details}>{props.details.Description}</Text>
        </View>

      <View>
        <Text> Approximate Price: {props.details.Value} </Text>
        <Text> For Exchange: {props.details.Exchange} </Text>
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