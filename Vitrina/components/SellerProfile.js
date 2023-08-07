import { Text, View, StyleSheet, Image } from 'react-native';

export default function SellerProfile(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={
          'https://shiko.news/wp-content/uploads/2022/07/hgsfjsyjhd.png'
        } /*{props.imgpath}*/
      />
      <Text style={styles.paragraph}>{props.sellername}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.paragraph}>Bio:</Text>
        <Text style={styles.text}>
          I'm Shefqeti Hidaj, I'm 65 years old and I play the cifteli.
          {/*{props.bio}*/}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.paragraph}>Location:</Text>
        <Text style={styles.text}>
          Korçë, Korçë District, Albania {/*{props.location}*/}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  paragraph: {
    alignSelf: 'flex-start',
    margin: 24,
    marginTop: 0,
    fontSize: 16,
    textAlign: 'flex-start',
    fontWeight: 'bold',
    color: '#232358',
  },
  logo: {
    height: 128,
    width: 128,
    borderWidth: 1,
    borderRadius: 100,
  },
  text: {
    fontSize: 15,
    color: '#232358',
    fontWeight: 'semi-bold',
  },
});
