import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Categories, Products, ProductsDetails} from '../screens'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Categories' component={Categories} />
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='ProductsDetails' component={ProductsDetails} />
    </Stack.Navigator>
  )
}

export default ShopStack