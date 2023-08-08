import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import {useForm, Controller} from 'react-hook-form';

const Contact = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryValue, setInquiryValue] = useState(null);
  const [inquiry, setInquiry] = useState([
    { label: "Business", value: "business" },
    { label: "Payments", value: "payments" },
    { label: "Bug report", value: "bug" },    
    { label: "General information", value: "information" },
    { label: "Other", value: "other" },
  ]);

  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact</Text>
      <TouchableOpacity onPress={() => navigation.navigate('allstockspage')}>
        <Text style={styles.x}>x</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Email Address</Text>
      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <View>

      <Text style={styles.label}>Reason for inquiry</Text>
      <Controller
        name="inquiry"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownInquiry}>
            <DropDownPicker
              style={styles.dropdown}
              open={inquiryOpen}
              value={inquiryValue} //inquiryValue
              items={inquiry}
              setOpen={setInquiryOpen}
              setValue={setInquiryValue}
              setItems={setInquiry}
              placeholder="Select an option"
              placeholderStyle={styles.placeholderStyles}
              onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
        )}
      />
      </View>

            <Text style={styles.label}>Message title</Text>
      <Controller
        name="title"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Text style={styles.label}>Message</Text>
      <Controller
        name="message"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={onChange}
            value={value}
          />
        )}
      />


      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={styles.getStarted}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E9FD',
  },
  input: {
    backgroundColor: '#B1D4FB',
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Times-New-Romans',
    padding: '5%',
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownInquiry: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },

  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
    backgroundColor: '#B1D4FB',
  },
  getStarted: {
    backgroundColor: "#5188E3",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
    x:{
    margin: 2,
    fontSize: 30,
    fontWeight: '100',
    textAlign: 'right', 
  },
});

export default Contact;
