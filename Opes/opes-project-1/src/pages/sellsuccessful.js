import { Text, ScrollView, StyleSheet, View, Image, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Sellsuccessful(){
  return( 
    <View style={styles.background}>
      <TouchableOpacity>
        <Text style={styles.x}>x</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.paragraph1}>Order Successful</Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.paragraph2}>[] of STCK1 have been exchanged for []</Text>
      </View>
    </View>   
)
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#D8E9FD', 
    flex:1,
  },
  container: {
    paddingTop:100,
    alignItems:'center',
  },
  container1: {
    alignItems:'center',
    justifyContent:'center',
  },
  paragraph1: {
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    margin: 2,
    fontSize: 34,
    fontWeight: 'bold',
  },
  paragraph2: {
    textAlign: 'center', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    fontSize: 15,
    paddingHorizontal:20
  },
  x:{
    margin: 2,
    fontSize: 30,
    padding:10,
    fontWeight: '100',
    textAlign: 'right', 
  }
});

