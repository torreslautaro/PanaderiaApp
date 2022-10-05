import { View,Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { cart } from "../../constants";
import { CartItem } from "../../components";

const Cart = ({navigation}) => {
  let total = 0
  cart.forEach(item => {
    total = total + item.price
  })

  const renderItem = ({item}) => <CartItem item={item} />

  return(
    <View style={styles.container}>
      <FlatList 
      data={cart}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
      <View style={styles.confirmContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.text}>Total:</Text>
          <Text style={styles.text}>${total}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.confirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart