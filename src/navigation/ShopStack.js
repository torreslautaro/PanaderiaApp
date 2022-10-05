import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Categories, Products, ProductsDetails} from '../screens'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name='Categories' component={Categories} />
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='ProductsDetails' component={ProductsDetails} />
    </Stack.Navigator>
  )
}

export default ShopStack