import { View, TouchableOpacity, Text } from "react-native";
import styles from "./style";

const ProductItem = ({item}) => {

  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.touchableContainer}
        onPress={() => onSelected(item)}
      >
        <View style={styles.informationContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.detailContainer}>
            <Text>{item.price}</Text>
            <Text>{item.weight}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductItem