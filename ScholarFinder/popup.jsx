/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */

// scholarshipName
// requiredGPA
// id
// schoolName
// minimumVolunteerHours
// requiredApPrograms
// awardAmount
// extraInfo
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';

const popup = (props,{navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  // const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        onDismiss={()=>setModalVisible(!modalVisible)}
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            {/* Close button */}
            <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.closeButton}>
              <Text style={{marginLeft:'30%'}}>X</Text>
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.modalText}>{props.scholarshipName}</Text>

            {/* All the info */}
            <ScrollView>

              <Card style={styles.innerCard}>
                <Text style={{textAlign: 'center'}}>
                  GPA {'\n'} {props.requiredGPA}
                </Text>
              </Card>

              <Card style={styles.innerCard}>
                <Text style={{textAlign: 'center'}}>
                School Name {'\n'} {props.schoolName}
                </Text>
              </Card>

              <Card style={styles.innerCard}>
                <Text style={{textAlign: 'center'}}>
                Minimum Volunteer Hours {'\n'} {props.minimumVolunteerHours}
                </Text>
              </Card>

              <Card style={styles.innerCard}>
                <Text style={{textAlign: 'center'}}>
                Required Ap Programs {'\n'} {props.requiredApPrograms}
                </Text>
              </Card>

              <Card style={styles.innerCard}>
                <Text style={{textAlign: 'center'}}>
                Award Amount {'\n'} {props.awardAmount}
                </Text>
              </Card>

              <Card style={styles.innerCard}>
                <Text style={{textAlign: 'center'}}>
                Extra Info {'\n'} {props.extraInfo}
                </Text>
              </Card>

            </ScrollView>

            {/* Apply button */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                // setModalVisible(!modalVisible);
                navigation.navigate('Apply', props);
              }}>
                <Text style={styles.textStyle}>Apply now</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Card style={[styles.button, styles.buttonOpen]}>
      <Pressable
        onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>{props.scholarshipName}</Text>
      </Pressable>
          </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingTop:10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:'80%',
  
  },
  buttonOpen: {
    backgroundColor: '#94D2D4',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    width:25,
    height:25,
    borderRadius:25,
    backgroundColor:'#eeeeee',
    position:'relative',
    marginLeft:'85%',
    justifyContent:'center',
  },
  innerCard: {
    width:'95%',
    padding: 5,
    margin: 5,
    textAlign: 'center',
    alignContent: 'center',
  },
});

export default popup;
