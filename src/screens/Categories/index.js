import { FlatList } from "react-native"
import CategoryItem from "../../components/CategoryItem"
import {categories} from '../../constants'
import styles from "../../components/CategoryItem/style"

const Categories = ({navigation}) => {
  const onSelected = (item) => {
    navigation.navigate('Products', {categoryId : item.id})
  }

  const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />
  return (
    <FlatList
    data={categories}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    style={styles.container}
    />
  )
}

export default Categories