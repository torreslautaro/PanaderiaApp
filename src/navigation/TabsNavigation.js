import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import ShopStack from './ShopStack'

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
      name="ShopTab" 
      component={ShopStack}
      options={{tabBarIcon: ({focused}) => (
        <Ionicons name={focused ? 'home' : 'home-outline'} size={22} />
      )}}
      />
      <Tab.Screen 
      name="OrdersTab" 
      component={OrdersStack}
      options={{tabBarIcon: ({focused}) => (
        <Ionicons name={focused ? 'file-tray-full' : 'file-tray-full-outline'} size={22} />
      )}}
       />
      <Tab.Screen 
      name="CartTab" 
      component={CartStack}
      options={{tabBarIcon: ({focused}) => (
        <Ionicons name={focused ? 'cart' : 'cart-outline'} size={22} />
      )}}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigation