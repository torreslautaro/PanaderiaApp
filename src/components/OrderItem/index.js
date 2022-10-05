import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const OrderItem = ({order}) => {

  const convertToDate= date => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString()
  }

  return(
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text>{convertToDate(order.date)}</Text>
        <Text>{order.total}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OrderItem