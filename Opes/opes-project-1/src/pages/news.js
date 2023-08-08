import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
} from 'react-native';


import Profile from '../pages/profile.js';
import Contact from '../pages/contact.js';
import Stocks from '../pages/allstockspage.js';


import { useState } from 'react';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function News({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable
          onPress={() => {
            navigation.navigate('News1');
          }}>
          <Text style={styles.button}>
            Tech stocks lead gains as Meta rallies, Fed hopes rise
          </Text>

          <View style={styles.separator} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('News2')}>
          <Text style={styles.button}>
            McDonald's earnings beat across the board with Grimace help
          </Text>
          <View style={styles.separator} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('News3')}>
          <Text style={styles.button}>
            Stock Futures Pop After Stronger-Than-Expected Economic Data
          </Text>
          <View style={styles.separator} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('News4')}>
          <Text style={styles.button}>
            Southwest Stock Falls. Earnings Had a Big Warning for Other Airlines
          </Text>
          <View style={styles.separator} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('News5')}>
          <Text style={styles.button}>
            UPDATE 1-Rouble weakens vs dollar, Russian stocks hit pre-invasion
            high
          </Text>
          <View style={styles.separator} />
        </Pressable>
      </ScrollView>
      <TouchableOpacity
        style={styles.stocksButton}
        onPress={() => {
          navigation.navigate('allstockspage');
        }}>
        <Text style={styles.buttonTxt}>Stocks</Text>
      </TouchableOpacity>
    </View>
  );
}

function News1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tech stocks lead gains as Meta rallies, Fed hopes rise
      </Text>
      <View style={styles.separator} />

      <ScrollView>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
          interdum velit euismod in pellentesque massa placerat duis. Egestas
          sed sed risus pretium quam vulputate dignissim suspendisse in.
          Convallis a cras semper auctor neque vitae tempus. Eget est lorem
          ipsum dolor sit amet consectetur adipiscing. Fringilla phasellus
          faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eu
          turpis egestas pretium aenean. Fermentum posuere urna nec tincidunt
          praesent semper feugiat. Eget duis at tellus at urna condimentum. Sed
          vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit
          amet commodo nulla facilisi nullam. Elit eget gravida cum sociis
          natoque. Volutpat commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque. Accumsan tortor posuere ac ut consequat semper.
          Orci porta non pulvinar neque laoreet suspendisse interdum consectetur
          libero. Pellentesque sit amet porttitor eget dolor morbi non arcu
          risus. Enim neque volutpat ac tincidunt vitae semper quis. Proin
          sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
          Bibendum neque egestas congue quisque egestas. Sed risus ultricies
          tristique nulla aliquet enim.
        </Text>
        <Text style={styles.paragraph}>
          Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Quam nulla
          porttitor massa id. Nisl vel pretium lectus quam. Tortor at risus
          viverra adipiscing at in tellus. Vel orci porta non pulvinar. Justo
          laoreet sit amet cursus sit. Pharetra sit amet aliquam id diam
          maecenas. Risus pretium quam vulputate dignissim suspendisse in. Ut
          consequat semper viverra nam libero justo laoreet sit. Ipsum dolor sit
          amet consectetur adipiscing elit. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Orci sagittis eu volutpat odio. Mauris
          commodo quis imperdiet massa tincidunt nunc.
        </Text>
        <Text style={styles.paragraph}>
          In vitae turpis massa sed elementum tempus. Nulla aliquet enim tortor
          at auctor urna nunc. Tortor dignissim convallis aenean et tortor at
          risus viverra. Cursus eget nunc scelerisque viverra mauris in. Aliquet
          bibendum enim facilisis gravida neque convallis a cras. In tellus
          integer feugiat scelerisque varius morbi enim nunc. Mauris augue neque
          gravida in fermentum et. Ultrices in iaculis nunc sed augue. Magna
          eget est lorem ipsum dolor sit amet consectetur adipiscing. Vivamus
          arcu felis bibendum ut tristique et. Pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras fermentum. Eget sit amet tellus cras
          adipiscing enim eu turpis. Viverra nibh cras pulvinar mattis. Etiam
          sit amet nisl purus in mollis nunc sed. Montes nascetur ridiculus mus
          mauris vitae ultricies. Amet facilisis magna etiam tempor orci eu. Sit
          amet consectetur adipiscing elit duis tristique sollicitudin nibh. Et
          odio pellentesque diam volutpat commodo.
        </Text>
      </ScrollView>
    </View>
  );
}

function News2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        McDonald's earnings beat across the board with Grimace help
      </Text>
      <View style={styles.separator} />

      <ScrollView>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
          interdum velit euismod in pellentesque massa placerat duis. Egestas
          sed sed risus pretium quam vulputate dignissim suspendisse in.
          Convallis a cras semper auctor neque vitae tempus. Eget est lorem
          ipsum dolor sit amet consectetur adipiscing. Fringilla phasellus
          faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eu
          turpis egestas pretium aenean. Fermentum posuere urna nec tincidunt
          praesent semper feugiat. Eget duis at tellus at urna condimentum. Sed
          vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit
          amet commodo nulla facilisi nullam. Elit eget gravida cum sociis
          natoque. Volutpat commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque. Accumsan tortor posuere ac ut consequat semper.
          Orci porta non pulvinar neque laoreet suspendisse interdum consectetur
          libero. Pellentesque sit amet porttitor eget dolor morbi non arcu
          risus. Enim neque volutpat ac tincidunt vitae semper quis. Proin
          sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
          Bibendum neque egestas congue quisque egestas. Sed risus ultricies
          tristique nulla aliquet enim.
        </Text>
        <Text style={styles.paragraph}>
          Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Quam nulla
          porttitor massa id. Nisl vel pretium lectus quam. Tortor at risus
          viverra adipiscing at in tellus. Vel orci porta non pulvinar. Justo
          laoreet sit amet cursus sit. Pharetra sit amet aliquam id diam
          maecenas. Risus pretium quam vulputate dignissim suspendisse in. Ut
          consequat semper viverra nam libero justo laoreet sit. Ipsum dolor sit
          amet consectetur adipiscing elit. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Orci sagittis eu volutpat odio. Mauris
          commodo quis imperdiet massa tincidunt nunc.
        </Text>
        <Text style={styles.paragraph}>
          In vitae turpis massa sed elementum tempus. Nulla aliquet enim tortor
          at auctor urna nunc. Tortor dignissim convallis aenean et tortor at
          risus viverra. Cursus eget nunc scelerisque viverra mauris in. Aliquet
          bibendum enim facilisis gravida neque convallis a cras. In tellus
          integer feugiat scelerisque varius morbi enim nunc. Mauris augue neque
          gravida in fermentum et. Ultrices in iaculis nunc sed augue. Magna
          eget est lorem ipsum dolor sit amet consectetur adipiscing. Vivamus
          arcu felis bibendum ut tristique et. Pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras fermentum. Eget sit amet tellus cras
          adipiscing enim eu turpis. Viverra nibh cras pulvinar mattis. Etiam
          sit amet nisl purus in mollis nunc sed. Montes nascetur ridiculus mus
          mauris vitae ultricies. Amet facilisis magna etiam tempor orci eu. Sit
          amet consectetur adipiscing elit duis tristique sollicitudin nibh. Et
          odio pellentesque diam volutpat commodo.
        </Text>
      </ScrollView>
    </View>
  );
}

function News3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Stock Futures Pop After Stronger-Than-Expected Economic Data
      </Text>
      <View style={styles.separator} />

      <ScrollView>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
          interdum velit euismod in pellentesque massa placerat duis. Egestas
          sed sed risus pretium quam vulputate dignissim suspendisse in.
          Convallis a cras semper auctor neque vitae tempus. Eget est lorem
          ipsum dolor sit amet consectetur adipiscing. Fringilla phasellus
          faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eu
          turpis egestas pretium aenean. Fermentum posuere urna nec tincidunt
          praesent semper feugiat. Eget duis at tellus at urna condimentum. Sed
          vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit
          amet commodo nulla facilisi nullam. Elit eget gravida cum sociis
          natoque. Volutpat commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque. Accumsan tortor posuere ac ut consequat semper.
          Orci porta non pulvinar neque laoreet suspendisse interdum consectetur
          libero. Pellentesque sit amet porttitor eget dolor morbi non arcu
          risus. Enim neque volutpat ac tincidunt vitae semper quis. Proin
          sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
          Bibendum neque egestas congue quisque egestas. Sed risus ultricies
          tristique nulla aliquet enim.
        </Text>
        <Text style={styles.paragraph}>
          Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Quam nulla
          porttitor massa id. Nisl vel pretium lectus quam. Tortor at risus
          viverra adipiscing at in tellus. Vel orci porta non pulvinar. Justo
          laoreet sit amet cursus sit. Pharetra sit amet aliquam id diam
          maecenas. Risus pretium quam vulputate dignissim suspendisse in. Ut
          consequat semper viverra nam libero justo laoreet sit. Ipsum dolor sit
          amet consectetur adipiscing elit. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Orci sagittis eu volutpat odio. Mauris
          commodo quis imperdiet massa tincidunt nunc.
        </Text>
        <Text style={styles.paragraph}>
          In vitae turpis massa sed elementum tempus. Nulla aliquet enim tortor
          at auctor urna nunc. Tortor dignissim convallis aenean et tortor at
          risus viverra. Cursus eget nunc scelerisque viverra mauris in. Aliquet
          bibendum enim facilisis gravida neque convallis a cras. In tellus
          integer feugiat scelerisque varius morbi enim nunc. Mauris augue neque
          gravida in fermentum et. Ultrices in iaculis nunc sed augue. Magna
          eget est lorem ipsum dolor sit amet consectetur adipiscing. Vivamus
          arcu felis bibendum ut tristique et. Pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras fermentum. Eget sit amet tellus cras
          adipiscing enim eu turpis. Viverra nibh cras pulvinar mattis. Etiam
          sit amet nisl purus in mollis nunc sed. Montes nascetur ridiculus mus
          mauris vitae ultricies. Amet facilisis magna etiam tempor orci eu. Sit
          amet consectetur adipiscing elit duis tristique sollicitudin nibh. Et
          odio pellentesque diam volutpat commodo.
        </Text>
      </ScrollView>
    </View>
  );
}

function News4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Southwest Stock Falls. Earnings Had a Big Warning for Other Airlines
      </Text>
      <View style={styles.separator} />

      <ScrollView>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
          interdum velit euismod in pellentesque massa placerat duis. Egestas
          sed sed risus pretium quam vulputate dignissim suspendisse in.
          Convallis a cras semper auctor neque vitae tempus. Eget est lorem
          ipsum dolor sit amet consectetur adipiscing. Fringilla phasellus
          faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eu
          turpis egestas pretium aenean. Fermentum posuere urna nec tincidunt
          praesent semper feugiat. Eget duis at tellus at urna condimentum. Sed
          vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit
          amet commodo nulla facilisi nullam. Elit eget gravida cum sociis
          natoque. Volutpat commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque. Accumsan tortor posuere ac ut consequat semper.
          Orci porta non pulvinar neque laoreet suspendisse interdum consectetur
          libero. Pellentesque sit amet porttitor eget dolor morbi non arcu
          risus. Enim neque volutpat ac tincidunt vitae semper quis. Proin
          sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
          Bibendum neque egestas congue quisque egestas. Sed risus ultricies
          tristique nulla aliquet enim.
        </Text>
        <Text style={styles.paragraph}>
          Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Quam nulla
          porttitor massa id. Nisl vel pretium lectus quam. Tortor at risus
          viverra adipiscing at in tellus. Vel orci porta non pulvinar. Justo
          laoreet sit amet cursus sit. Pharetra sit amet aliquam id diam
          maecenas. Risus pretium quam vulputate dignissim suspendisse in. Ut
          consequat semper viverra nam libero justo laoreet sit. Ipsum dolor sit
          amet consectetur adipiscing elit. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Orci sagittis eu volutpat odio. Mauris
          commodo quis imperdiet massa tincidunt nunc.
        </Text>
        <Text style={styles.paragraph}>
          In vitae turpis massa sed elementum tempus. Nulla aliquet enim tortor
          at auctor urna nunc. Tortor dignissim convallis aenean et tortor at
          risus viverra. Cursus eget nunc scelerisque viverra mauris in. Aliquet
          bibendum enim facilisis gravida neque convallis a cras. In tellus
          integer feugiat scelerisque varius morbi enim nunc. Mauris augue neque
          gravida in fermentum et. Ultrices in iaculis nunc sed augue. Magna
          eget est lorem ipsum dolor sit amet consectetur adipiscing. Vivamus
          arcu felis bibendum ut tristique et. Pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras fermentum. Eget sit amet tellus cras
          adipiscing enim eu turpis. Viverra nibh cras pulvinar mattis. Etiam
          sit amet nisl purus in mollis nunc sed. Montes nascetur ridiculus mus
          mauris vitae ultricies. Amet facilisis magna etiam tempor orci eu. Sit
          amet consectetur adipiscing elit duis tristique sollicitudin nibh. Et
          odio pellentesque diam volutpat commodo.
        </Text>
      </ScrollView>
    </View>
  );
}

function News5({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        UPDATE 1-Rouble weakens vs dollar, Russian stocks hit pre-invasion high
      </Text>
      <View style={styles.separator} />

      <ScrollView>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
          interdum velit euismod in pellentesque massa placerat duis. Egestas
          sed sed risus pretium quam vulputate dignissim suspendisse in.
          Convallis a cras semper auctor neque vitae tempus. Eget est lorem
          ipsum dolor sit amet consectetur adipiscing. Fringilla phasellus
          faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eu
          turpis egestas pretium aenean. Fermentum posuere urna nec tincidunt
          praesent semper feugiat. Eget duis at tellus at urna condimentum. Sed
          vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit
          amet commodo nulla facilisi nullam. Elit eget gravida cum sociis
          natoque. Volutpat commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque. Accumsan tortor posuere ac ut consequat semper.
          Orci porta non pulvinar neque laoreet suspendisse interdum consectetur
          libero. Pellentesque sit amet porttitor eget dolor morbi non arcu
          risus. Enim neque volutpat ac tincidunt vitae semper quis. Proin
          sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
          Bibendum neque egestas congue quisque egestas. Sed risus ultricies
          tristique nulla aliquet enim.
        </Text>
        <Text style={styles.paragraph}>
          Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Quam nulla
          porttitor massa id. Nisl vel pretium lectus quam. Tortor at risus
          viverra adipiscing at in tellus. Vel orci porta non pulvinar. Justo
          laoreet sit amet cursus sit. Pharetra sit amet aliquam id diam
          maecenas. Risus pretium quam vulputate dignissim suspendisse in. Ut
          consequat semper viverra nam libero justo laoreet sit. Ipsum dolor sit
          amet consectetur adipiscing elit. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Orci sagittis eu volutpat odio. Mauris
          commodo quis imperdiet massa tincidunt nunc.
        </Text>
        <Text style={styles.paragraph}>
          In vitae turpis massa sed elementum tempus. Nulla aliquet enim tortor
          at auctor urna nunc. Tortor dignissim convallis aenean et tortor at
          risus viverra. Cursus eget nunc scelerisque viverra mauris in. Aliquet
          bibendum enim facilisis gravida neque convallis a cras. In tellus
          integer feugiat scelerisque varius morbi enim nunc. Mauris augue neque
          gravida in fermentum et. Ultrices in iaculis nunc sed augue. Magna
          eget est lorem ipsum dolor sit amet consectetur adipiscing. Vivamus
          arcu felis bibendum ut tristique et. Pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras fermentum. Eget sit amet tellus cras
          adipiscing enim eu turpis. Viverra nibh cras pulvinar mattis. Etiam
          sit amet nisl purus in mollis nunc sed. Montes nascetur ridiculus mus
          mauris vitae ultricies. Amet facilisis magna etiam tempor orci eu. Sit
          amet consectetur adipiscing elit duis tristique sollicitudin nibh. Et
          odio pellentesque diam volutpat commodo.
        </Text>
      </ScrollView>
    </View>
  );
}

const NavMenu = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => { navigation.navigate('profile') }}>
        <Text style={styles.navMenu} >Profile</Text>
         <View style={styles.hr2}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('contact') }}>
        <Text style={styles.navMenu}>Contact</Text>
                 <View style={styles.hr2}/>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  return (
    
    <NavigationContainer>
    <View style={styles.stocksHeader}>
       <Text style={styles.news}>News</Text>
            <TouchableOpacity style={styles.navDots} onPress={() => setMenuVisible(true)}>
         <Image source={require('../media/navDots.png')} style={styles.navDots} />
      </TouchableOpacity>
      </View>

      <Modal visible={isMenuVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <NavMenu/>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Latest reports on Stocks',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
            headerTitleStyle: {
              paddingTop: 35,
              paddingLeft: 10,
              paddingBottom: 25,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'left',
              color: '#003B4A',
            },
          }}
          name="News"
          component={News}
        />

        <Stack.Screen
          options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="News1"
          component={News1}
        />

        <Stack.Screen
          options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="News2"
          component={News2}
        />

        <Stack.Screen
          options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="News3"
          component={News3}
        />

        <Stack.Screen
          options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="News4"
          component={News4}
        />

        <Stack.Screen
          options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="News5"
          component={News5}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#D8E9FD',
    padding: 8,
  },
  subtitle: {
    color: '#003B4A',
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  button: {
    color: '#003B4A',
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 15,
  },
  preview: {
    color: '#003B4A',
    fontSize: 13,
    paddingLeft: 10,
    padding: 10,
  },
  paragraph: {
    margin: 7,
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    padding: 3,
    color: '#003B4A',
  },
  title: {
    paddingTop: 30,
    paddingLeft: 10,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#003B4A',
    fontFamily: 'Times-New-Roman',
  },

  separator: {
    position: 'relative',
    bottom: 1,
    borderBottomColor: '#81B8F9',
    borderBottomWidth: 1,
    padding: '3%',
  },
  stocksButton: {
    backgroundColor: '#C5DFFC',
  },
  buttonTxt: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 13,
    color: '#002D38',
  },
  image: {
    position: 'absolute',
    top: 35,
    right: 15,
    width: 100,
    height: 100,
  },

  navDots: {
    opacity: 0.95,
    width: '25%',
    height: '10%',
    paddingTop: 25,
    paddingHorizontal: 23,
    alignSelf: 'left',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: '20%',
    paddingRight: '8%',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    textAlign: 'center',
    paddingTop: '10%',
  },
  modalContent: {
    backgroundColor: '#B1D4FB',
    opacity: 0.9,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  closeButton: {
    color: '#002D38',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  navMenu: {
    fontSize: 22,
    color: '#002D38',
  },
  hr2: {
    flex: 1,
    position: 'relative',
    paddingBottom: 3,
    borderBottomColor: '#81B8F9',
    borderBottomWidth: 0.5,
  },
  stocksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#D8E9FD',
    paddingTop: 5,
    zIndex: 1,
  },
    news: {
    paddingTop:15,
    paddingLeft:22,
    paddingRight:15,
    fontSize: 34,
    fontWeight: 'bold',
    color: '#002D38'
  },
});
