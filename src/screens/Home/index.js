import { Button,View } from "react-native"
import { styles } from "./style"

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Categories" onPress={() => navigation.navigate('Categories')} />
      <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
    </View>
  )
}

export default Home