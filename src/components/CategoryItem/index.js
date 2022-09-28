import { View, TouchableOpacity,Text } from "react-native"
import styles from "./style"

const CategoryItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={{...styles.touchableContainer, backgroundColor: item.color}}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryItem