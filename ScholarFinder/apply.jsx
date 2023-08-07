/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

// scholarshipName
// requiredGPA
// id
// schoolName
// minimumVolunteerHours
// requiredApPrograms
// awardAmount
// extraInfo
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import userData from './user.json';
import navigator from './plswork';
import schinfo from './scholarships.json';

const Apply = (props) => {
    const [name,setName] = useState(String(userData[0].Data.uName));
    const [GPA,setGPA] = useState(String(userData[0].Data.GPA));
    const [VH,setVH] = useState(String(userData[0].Data.volunteerHours));
    const [info,setInfo] = useState(String(userData[0].Data.extraInfo));
    // const navigator = useNavigation();

    // console.log(schinfo[0]);
  return (
    <View style={styles.centeredView}>

            {/* Title */}
            <Text style={styles.modalText}>{schinfo[0].scholarship_name}</Text>

            {/* All the info */}
            <ScrollView>

                <Text style={{textAlign: 'center'}}>
                  GPA :
                </Text>
                <TextInput
                    onChangeText={setGPA}
                    value={GPA}
                    placeholder={String(schinfo[0].required_gpa)}
                />

                <Text style={{textAlign: 'center'}}>
                Your full name:
                </Text>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder={String(userData[0].Data.uName)}
                />

                <Text style={{textAlign: 'center'}}>
                Volunteer Hours:
                </Text>
                <TextInput
                    onChangeText={setVH}
                    value={VH}
                    placeholder={String(schinfo[0].minimum_volunteer_hours)}
                />

                <Text style={{textAlign: 'center'}}>
                Extra Info:
                </Text>
                <TextInput
                    onChangeText={setInfo}
                    value={info}
                    placeholder={String('Extra info')}
                />

                <ScrollView style={{borderWidth:0}}>
                    <Text style={{textAlign: 'center'}}>
                    Required Ap Programs: {'\n'} {schinfo[0].required_ap_programs} {'\n'}
                    </Text>
                    {userData[0].Data.apPrograms.map((prog) => {
                        return(

                        <Text>
                            <BouncyCheckbox
                                size={25}
                                fillColor="blue"
                                unfillColor="#fff"
                                text={`${String(prog[0])} (${String(prog[1])})`}
                                iconStyle={{ borderColor: 'red' }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ fontFamily: 'JosefinSans-Regular',textDecorationLine: 'none' }}
                            />;
                        </Text>
                        );
                    })}
                </ScrollView>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigator.navigate('Home')}
                >
                    <Text>
                        Apply
                    </Text>
                </TouchableOpacity>
            </ScrollView> 
            
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    fontSize: 16,
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
    width:'95%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
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

export default Apply;
