import { NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./TabsNavigation";


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  )
}

export default AppNavigator