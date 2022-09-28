import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "./ShopStack";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopStack />
    </NavigationContainer>
  )
}

export default AppNavigator