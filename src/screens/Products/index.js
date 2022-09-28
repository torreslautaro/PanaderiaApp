import { View, Button } from "react-native"
import { styles } from "./style"

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Products Details" onPress={() => navigation.navigate('ProductsDetails')} />
    </View>
  )
}

export default Products