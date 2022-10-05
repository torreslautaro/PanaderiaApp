import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const CartItem = ({item}) => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.containerDetails}>
          <View>
            <Text style={styles.text}>Cantidad:<Text style={styles.text}>{item.quantity}</Text></Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      </View>
      <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Borrar</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem