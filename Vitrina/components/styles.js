import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  removeButton: {
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
