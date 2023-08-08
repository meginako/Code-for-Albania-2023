import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-paper';

import Stocks from '../pages/allstockspage.js';

export default function Profile() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container1}>
       <Text style={styles.paragraph1}>Profile</Text>
       <TouchableOpacity onPress={() => navigation.navigate('allstockspage')}>
        <Text style={styles.x}>x</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.signup}>
        <View style={styles.container5}>
          <TextInput style={styles.signupbutton} placeholder="Username"/>
          <Image style={styles.logo1} source={require('../media/pencil-icon.png')}/>
        </View>
        <View style={styles.container5}>
          <TextInput style={styles.signupbutton} placeholder="Email"/>
          <Image style={styles.logo1} source={require('../media/pencil-icon.png')}/>
        </View>
        <View style={styles.container5}>
          <TextInput style={styles.signupbutton} placeholder="Password"/>
          <Image style={styles.logo1} source={require('../media/pencil-icon.png')}/>
        </View>
       <Card style={styles.signupbutton1}>
        <View style={styles.container2}>
          <Text>
          Balance
          </Text>
          <Text>
          $1000,00
          </Text>
          </View>
       </Card>
      </View>
      <View style={styles.container3}>
        <View style={styles.hr1} />
        <Text style={styles.paragraph2}>Add payment method</Text>
        <View style={styles.hr2} />
        <View>
          <View style={styles.container4}>
            <Image style={styles.logo2} source={require('../media/snack-icon.png')}/>
            <Image style={styles.logo2} source={require('../media/snack-icon.png')}/>
            <Image style={styles.logo2} source={require('../media/snack-icon.png')}/>
          </View>
          <View style={styles.container4}>
            <Image style={styles.logo2} source={require('../media/snack-icon.png')}/>
            <Image style={styles.logo2} source={require('../media/snack-icon.png')}/>
            <Image style={styles.logo2} source={require('../media/snack-icon.png')}/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#D8E9FD', 
    flex:1 
  },
  container1: {
    flex: 1,
    backgroundColor: '#D8E9FD',
    paddingTop:20,
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container2: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container3: {
   flex: 1,
    backgroundColor: '#D8E9FD',
    padding:20,
  },
  container4: {
    flex: 1,
    paddingTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container5: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  paragraph1: {
    margin: 2,
    fontSize: 34,
    fontWeight: 'bold',
  },
  paragraph2: {
    paddingTop:10,
    paddingBottom:5,
    margin: 2,
    fontSize: 13,
    textAlign: 'center',
  },
  hr1: {
    position: 'relative',
    top: 5,
    borderBottomColor: '#81B8F9',
    borderBottomWidth: 1,
    paddingTop:30,
  },
  hr2: {
    position: 'relative',
    top: 5,
    borderBottomColor: '#81B8F9',
    borderBottomWidth: 1,
    // paddingTop:30,
  },
  signup:{
    backgroundColor: '#D8E9FD',
    paddingHorizontal:10,
  },
  signupbutton:{
    flex:1,
    margin:5,
    backgroundColor: '#CCE0F5',
    padding: 10,
    borderRadius: 10, 
  },
  signupbutton1:{
    margin:5,
    backgroundColor: '#CCE0F5',
    padding: 10,
    borderRadius: 10, 
  },
  x:{
    margin: 2,
    fontSize: 30,
    fontWeight: '100',
    textAlign: 'right', 
  },
  logo1:{
    height:30,
    width:30,
  },
  logo2:{
    height:50,
    width:50
  }
});