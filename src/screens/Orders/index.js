import { View,FlatList } from "react-native";
import styles from "./styles";
import { orders } from "../../constants";
import { OrderItem } from "../../components";

const Orders = ({navigation}) => {

  const renderItem = ({item}) => <OrderItem order={item} />

  return(
    <View style={styles.container}>
      <FlatList 
      data={orders}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Orders