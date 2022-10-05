import { View, Button, FlatList } from "react-native"
import { styles } from "./style"
import { products } from "../../constants"
import ProductItem from "../../components/ProductItem"

const Products = ({navigation, route}) => {
  const {categoryId} = route.params

  const productsToShow = products.filter(prd => prd.categoryId === categoryId)

  const renderItem = ({item}) => <ProductItem item={item} />

  return (
      <FlatList 
      data={productsToShow}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
  )
}

export default Products