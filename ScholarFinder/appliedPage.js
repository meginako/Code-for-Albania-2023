import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {Card} from 'react-native-paper';
import Popup from './popup';
import userData from './user.json';
// import fb from './firebase';
// import {getDocs, getFirestore, collection} from 'firebase/firestore';
// const db = getFirestore(fb);

const size = userData[0].Applied.length;

const AppliedPage = () => {
  // const [temp, setTemp] = React.useState([]);
  // const [isDone, setIsDone] = React.useState(false);

  // async function getScholarships() {
  //   let scholarships = [];
  //   try {
  //     await getDocs(collection(db, 'scholarships')).then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         scholarships.push(doc.data());
  //       });
  //     });
  //     setTemp(scholarships[0]);
  //     console.log(temp);
  //     setIsDone(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // React.useEffect(() => {
  //   getScholarships();
  // }, []);

  return (
    <View style={styles.container}>
      {userData[0].Applied.map(item => (
        <Popup
          scholarshipName={item.scholarship_name}
          requiredGPA={item.required_gpa}
          id={item.id}
          schoolName={item.school_name}
          minimumVolunteerHours={item.minimum_volunteer_hours}
          requiredApPrograms={item.required_ap_programs}
          awardAmount={item.award_amount}
          extraInfo={item.extra_info}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 5,
    height: size * 100,
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  settingsContainer: {
    marginBottom: 20,
    // Add styles for user settings components
  },
  appliedScholarshipsContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scholarshipItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  scholarshipName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  schoolName: {
    fontSize: 16,
    color: '#555',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppliedPage;
