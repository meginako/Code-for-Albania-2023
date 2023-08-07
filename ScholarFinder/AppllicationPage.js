import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ScholarshipApplicationPage = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [gpa, setGPA] = useState('');
  const [recommendationLetters, setRecommendationLetters] = useState('');
  const [extracurricularActivities, setExtracurricularActivities] =
    useState('');
  const [citizenship, setCitizenship] = useState('');
  const [volunteerHours, setVolunteerHours] = useState('');

  const handleSubmit = () => {
    // Validate that all fields are filled before submission
    if (
      fullName === '' ||
      address === '' ||
      gpa === '' ||
      recommendationLetters === '' ||
      extracurricularActivities === '' ||
      citizenship === '' ||
      volunteerHours === ''
    ) {
      Alert.alert(
        'Error',
        'Please fill in all fields before submitting the application.',
      );
      return;
    }

    // Perform submission logic here
    const formData = {
      fullName,
      address,
      gpa,
      recommendationLetters,
      extracurricularActivities,
      citizenship,
      volunteerHours,
    };
    console.log('Scholarship Application Data:', formData);

    // Show a success message to the user
    Alert.alert('Success', 'Scholarship application submitted successfully.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scholarship Application</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={text => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="GPA"
        value={gpa}
        onChangeText={text => setGPA(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Letters of Recommendation"
        value={recommendationLetters}
        onChangeText={text => setRecommendationLetters(text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Extracurricular Activities"
        value={extracurricularActivities}
        onChangeText={text => setExtracurricularActivities(text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Citizenship or Residency"
        value={citizenship}
        onChangeText={text => setCitizenship(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Volunteer Hours"
        value={volunteerHours}
        onChangeText={text => setVolunteerHours(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Application</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScholarshipApplicationPage;
