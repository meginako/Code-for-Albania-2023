import { createStackNavigator } from '@react-navigation/stack';
import Clothes from './Products/Clothes'
import Devices from './Products/Devices'
import Accessories from './Products/Accessories'
import Furniture from './Products/Furniture'

const Stack = createStackNavigator();

function Navi() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen screen='clothes' name="Clothes" component={Clothes} />
      <Stack.Screen screen='devices' name="Devices" component={Devices} />
      <Stack.Screen screen='accessories' name="Accessories" component={Accessories} />
      <Stack.Screen screen='furniture' name="Furniture" component={Furniture} />
    </Stack.Navigator>
  );
}

export default Navi;
