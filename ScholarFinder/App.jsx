import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Image,
} from 'react-native';
import Popup from './popup';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Apply from './apply';
import MainPP from './mainProfilePage';

const Tab = createBottomTabNavigator();

// FIREBASE stuff
import fb from './firebase';
import {getDocs, getFirestore, collection} from 'firebase/firestore';
const db = getFirestore(fb);

function App() {
  const navigation = useNavigation();
  const [isDone, setIsDone] = React.useState(false);
  const [temp, setTemp] = React.useState([]);
  const [searchBarText, onSearchBarText] = React.useState('');
  const [filtered, setFiltered] = React.useState(false);

  async function getScholarships() {
    let scholarships = [];
    try {
      await getDocs(collection(db, 'scholarships')).then(querySnapshot => {
        querySnapshot.forEach(doc => {
          scholarships.push(doc.data());
        });
      });
      setTemp(scholarships);
      console.log(temp);
      setIsDone(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getScholarships();
  }, []);
  return (
    <View>
      {filtered ? (
        <Text
          style={styles.filterWidgets}
          onPress={() => setFiltered(!filtered)}>
          4.0
        </Text>
      ) : (
        <></>
      )}

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.SearchBar}
          onChangeText={onSearchBarText}
          value={searchBarText}
          placeholder="Search"
        />
        <Pressable
          onPress={() => {
            setFiltered(!filtered);
            onSearchBarText('');
          }}
          style={styles.SearchIcon}>
          <Image
            style={styles.icon}
            source={require('./assets/searchicon1.png')}
          />
        </Pressable>
      </View>

      {!filtered ? (
        isDone ? (
          <FlatList
            data={temp}
            renderItem={({item}) => (
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
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <></>
        )
      ) : (
        <FlatList
          data={temp}
          renderItem={({item}) =>
            item.required_gpa === 4 ? (
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
            ) : (
              <></>
            )
          }
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  SearchBar: {
    flex: 0.95,
    alignContent: 'center',
    borderRadius: 7,
    paddingHorizontal: 5,
  },
  SearchIcon: {
    height: 25,
    width: 30,

    alignSelf: 'center',
    position: 'relative',
    color: 'red',
    borderRadius: 10,
  },
  searchContainer: {
    borderRadius: 20,
    width: '95%',
    // height: '8%',
    margin: 12,
    borderWidth: 1,
    // padding: 3,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  filterWidgets: {
    margin: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#3B3B3B',
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // Add shadow for a subtle elevation effect
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
