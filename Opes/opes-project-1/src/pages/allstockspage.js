import { Text, ScrollView, StyleSheet, View, TouchableOpacity, FlatList, SafeAreaView, Image, Modal} from 'react-native';
import {SampleStocks} from '../utils/SampleStocks';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import News from '../pages/news.js';
import Profile from '../pages/profile.js';
import Contact from '../pages/contact.js';


export default function Stocks() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return( 
  <SafeAreaView style={styles.bg}>
      <View style={styles.stocksHeader}>
       <Text style={styles.stk}>Stocks</Text>
          <TouchableOpacity style={styles.navDots} onPress={() => setMenuVisible(true)}>
           <Image source={require('../media/navDots.png')} style={styles.navDots} />
          </TouchableOpacity>
      </View>
     <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={SampleStocks}
          renderItem={({ item }) =>
            <StkList
              stockdifference={item.stockdifference}
              companyname={item.companyname}
              companystock={item.companystock}
              stockvalue={item.stockvalue} />}
          keyExtractor={item => item.id}>
        </FlatList>
      </ScrollView>
      <TouchableOpacity style={styles.newsButton} onPress={() => { navigation.navigate('news') }}>
        <Text style={styles.buttonTxt}>News</Text>
      </TouchableOpacity>
      <Modal visible={isMenuVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <NavMenu/>
      <TouchableOpacity onPress={() => setMenuVisible(false)}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
        </View>
        </View>
      </Modal>
  </SafeAreaView>
  );
}



const NavMenu = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => { navigation.navigate('profile') }}>
        <Text style={styles.navMenu} >Profile</Text>
         <View style={styles.hr2}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('contact') }}>
        <Text style={styles.navMenu}>Contact</Text>
          <View style={styles.hr2}/>
      </TouchableOpacity>
    </View>
  );
};




function StkList(props) {
  return (
    <View style={styles.bg}>
    <View style={styles.container}>

      <TouchableOpacity >
        <View style={styles.hr}/>
        <View style={styles.row}>
          <Text style={styles.compStock}> {props.companystock}</Text>
          <Text style={styles.stkVal}>{props.stockvalue}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.compName}>{props.companyname}</Text>
          <Text style={styles.stkDiff}>{props.stockdifference}</Text>
        </View> 
      </TouchableOpacity>

     </View>
   </View>
  );
}




const styles = StyleSheet.create({
  bg:{
    backgroundColor: '#D8E9FD', 
    flex:1,
  },
  container: {
   paddingHorizontal:10,
    backgroundColor: '#D8E9FD',
    flexDirection:'column',
    justifyContent:'space-around',
  },
  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1,
    paddingHorizontal:10,
  },
  stk: {
    padding:15,
    margin: 3,
    fontSize: 34,
    fontWeight: 'bold',
    color: '#002D38'
  },
  compStock: {
    paddingVertical:13,
    margin: 2,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003B4A',
  },
  stkVal: {
    paddingVertical:15,
    margin:2,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#003B4A',
  },
  compName: {
    fontSize: 13,
    margin:2,
    color: '#00495C',
    fontWeight: 'thin',
  },
  stkDiff: {
    fontSize: 15,
    margin:2,
    color: '#00495C',
  },
  hr: {
    position: 'relative',
    bottom: 1,
    borderBottomColor: '#81B8F9',
    borderBottomWidth: 1,
  },
  newsButton: {
    backgroundColor: '#C5DFFC',
    padding: 5,
    flex: 4,
  },
  buttonTxt:{
   fontSize: 17,
   fontWeight: 'bold',
   paddingLeft: 15,
   color: '#002D38',
  },
  stocksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#D8E9FD',
    paddingTop: 5,
    paddingBottom: 10,
    zIndex: 1, 
  },
  navDots: {
   opacity: 0.95,
   width: '25%',
   height: '10%',
   paddingTop: 25,
   paddingHorizontal: 23,
   alignSelf: 'left'
  },
   modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: '20%',
    paddingRight: '8%' ,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    textAlign: 'center',
    paddingTop: '10%',
  },
  modalContent: {
    backgroundColor: '#B1D4FB',
    opacity: 0.9,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  closeButton: {
    color: '#002D38',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  navMenu: {
    fontSize: 22,
    color: '#002D38'
  },
  hr2: {
    flex: 1,
    position: 'relative',
    paddingBottom: 3,
    borderBottomColor: '#81B8F9',
    borderBottomWidth: 0.5,

  },
});