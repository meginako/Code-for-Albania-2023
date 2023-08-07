import React, { useContext, useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Card,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../context/DataContext.js'; // Update the path to your DataContext
import AlertModal from '../components/alertFunctions.js'; // Assuming you have the AlertModal component in a separate file

const Tab1Screen = () => {
  const { favoriteItems, setFavoriteItems, setAlertMessage } =
    useContext(DataContext);
  const navigation = useNavigation();

  const movie1 = {
    image: require('../assets/bizhu.png'),
    title: 'Bizhu Kruje',
    director: 'Shefqet Hidaj',
  };

  const movie2 = {
    image: require('../assets/cifteli.png'),
    title: 'Cifteli Puke',
    director: 'Ilir Tola',
  };

  const movie3 = {
    image: require('../assets/qilim.png'),
    title: 'Qilima Tradicionale',
    director: 'Moza Dane',
  };
  const movie4 = {
    image: require('../assets/enebalte.jpg'),
    title: 'Ene Balte',
    director: 'Arber Peleshi',
  };
  const movie5 = {
    image: require('../assets/Veshje_Tradicionale_Dardhare.jpg'),
    title: 'Veshje Tradicionale Dardhare',
    director: 'Filan Fisteku',
  };
  const movie6 = {
    image: require('../assets/lakror.jpg'),
    title: 'Lakror Korcar',
    director: 'Bedrije Koco',
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
  ]);

  const addToFavorites = (movie) => {
    if (
      Object.values(favoriteItems).find((item) => item.title === movie.title)
    ) {
      setAlertMessage('This post is already in your favorites.');
    } else {
      setFavoriteItems((prevItems) => ({ ...prevItems, [movie.title]: movie }));
      navigation.navigate('Favorites'); // Navigate to Tab 2
      setAlertMessage('The post has been added to your favorites.');
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);

    // Filter the movies based on the search query
    const filtered = [movie1, movie2, movie3, movie4, movie5, movie6].filter(
      (movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase()) ||
        movie.director.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredMovies(filtered);
  };
  const onPress = () => navigation.navigate('SellerPofile');
  const styles = {
    container: {
      backgroundColor: '#232358',
      flexGrow: 1,
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    searchInput: {
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      paddingHorizontal: 8,
      marginBottom: 16,
      color: 'white',
    },
    movieImage: {
      width: 200,
      height: 200,
      alignSelf: 'center',
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#232358',
    },
    button: {
      backgroundColor: '#FFDA0A',
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search artisans"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredMovies.map((movie) => (
        <View key={movie.title} style={styles.card}>
          <Image source={movie.image} style={styles.movieImage} />
          <br></br>
          <Text style={styles.text}>Caption: {movie.title}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SellerProfile')}>
            <Text style={styles.text}>Seller: {movie.director}</Text>
          </TouchableOpacity>
          <br></br>
          <Button
            title="Add to Favorites"
            color="#FFDA0A"
            onPress={() => addToFavorites(movie)}
          />
          <br></br>
        </View>
      ))}
      <AlertModal />
    </ScrollView>
  );
};

export default Tab1Screen;
