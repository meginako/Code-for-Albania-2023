import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LineChart } from 'react-native-chart-kit';

const Price = () => {
  return (
    <View style={styles.pricecomponents}>
      <Text style={styles.pricestyle}>$265.28</Text>
      <Text style={styles.pricechange}>0.00 (0.00%) today</Text>
    </View>
  );
};

const Chart = () => {
  return (
    <>
      <LineChart
        data={{
          labels: ['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
          datasets: [
            {
              data: [
                160, 209.25, 202.77, 200, 207.46, 194, 183, 161.83, 172, 206.52,
                261.57, 265,
              ],
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 60}
        height={180}
        chartConfig={{
          backgroundColor: '#D8E9FD',
          backgroundGradientFrom: '#D8E9FD',
          backgroundGradientTo: '#D8E9FD',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const Buttons = () => {
  return (
    <View style={styles.buttons}>
      <Button title="BUY"></Button>
      <Button title="SELL"></Button>
    </View>
  );
};

const Details = () => {
  return(
    <View>
      <View style={styles.detailsrow}>
        <Text>Volume:</Text>
        <Text>112,081,308</Text>
      </View>
      <View style={styles.detailsrow}>
        <Text>Low price:</Text>
        <Text>-</Text>
      </View>
      <View style={styles.detailsrow}>
        <Text>High price:</Text>
        <Text>-</Text>
      </View>
      <View style={styles.detailsrow}>
        <Text>Average price:</Text>
        <Text>265.28</Text>
      </View>
    </View>
  );
};

const Disclaimer = () => {
  return(
    <View>
      <Pressable>
        <Text style={styles.disclaimer}>*Before making a purchase, make sure to read our resources on safe investing.</Text>
      </Pressable>
    </View>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
        <NavigationContainer>

          {/*DUHET BERE NAVIGIMI NGA STOCKS -> STOCK SPECIFIC PAGE*/}
          
        </NavigationContainer>
        
        <Price />
        <View style={styles.separator} />
        <Chart />
        <View style={styles.separator} />
        <Buttons />
        <View style={styles.separator} />
        <Details />
        <Disclaimer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D8E9FD',
    textAlign: 'center',
    padding: 10,
  },
  pricecomponents: {
    alignItems: 'center',
    textAlign: 'center',

  },
  pricestyle: {
    textAlign: 'center',
    fontSize: 30,
  },
  pricechange: {
    textAlign: 'right',
    alignItems: 'center',
  },

  separator: {
    position: 'relative',
    bottom: 1,
    borderBottomColor: '#81B8F9',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',

  },
  buttons: {
    paddingTop: '2%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

  detailsrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
  disclaimer: {
    fontStyle: 'italic',
    paddingTop: '5%',
    opacity: '45%',
  },
});
