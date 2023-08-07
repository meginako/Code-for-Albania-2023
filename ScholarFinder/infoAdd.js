import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Card = ({content, onChangeRating}) => {
  const [rating, setRating] = useState(1);

  const handleRatingChange = value => {
    setRating(value);
    onChangeRating(value);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{content}</Text>
      <View style={styles.radioGroup}>
        {[1, 2, 3, 4, 5].map(value => (
          <TouchableOpacity
            key={value}
            style={[
              styles.radioButton,
              rating === value && styles.radioButtonSelected,
            ]}
            onPress={() => handleRatingChange(value)}>
            <Text style={styles.radioButtonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default function InfoAdd() {
  const navigation = useNavigation();
  const [cards, setCards] = useState([]);
  const [gpa, setGPA] = useState('');
  const [volunteerHours, setVolunteerHours] = useState('');
  const [gpaList, setGPAList] = useState([]);
  const [volunteerHoursList, setVolunteerHoursList] = useState([]);

  const [newCardData, setNewCardData] = useState('');

  const handleAddCard = () => {
    if (newCardData.trim() === '') {
      alert('Please enter data for the card.');
      return;
    }

    const newCard = {
      content: newCardData,
      rating: 1,
    };
    setCards([...cards, newCard]);
    setNewCardData('');
  };

  const handleRemoveCard = index => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleChangeRating = (index, rating) => {
    const updatedCards = [...cards];
    updatedCards[index].rating = rating;
    setCards(updatedCards);
  };

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card
          key={index}
          content={card.content}
          onChangeRating={rating => handleChangeRating(index, rating)}
        />
      ))}

      <TextInput
        style={styles.input}
        value={newCardData}
        onChangeText={text => setNewCardData(text)}
        placeholder="Enter AP class"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.addButtonText}>Add AP class</Text>
      </TouchableOpacity>

      <View style={{marginTop: 30, flexDirection: 'colum', width: '50%'}}>
        <TextInput
          style={styles.input}
          placeholder="Enter GPA"
          value={gpa}
          onChangeText={setGPA}
          keyboardType="numeric"
        />

        {/* Volunteer Hours input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Volunteer Hours"
          value={volunteerHours}
          onChangeText={setVolunteerHours}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        style={styles.SubmitButton}
        onPress={() => navigation.navigate('Splash')}>
        <Text style={{fontSize: 16, color: 'black'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'colum',
  },
  card: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioButton: {
    padding: 10,
    borderRadius: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },
  radioButtonSelected: {
    backgroundColor: 'gray',
  },
  radioButtonText: {
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#94D2D4',
    borderRadius: 8,
  },
  addButtonText: {
    color: 'black',
    fontSize: 16,
  },
  SubmitButton: {
    color: 'black',
    padding: 10,
    backgroundColor: '#94D2D4',
    borderRadius: 8,
  },
});
