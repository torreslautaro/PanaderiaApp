import { FlatList } from "react-native"
import CategoryItem from "../../components/CategoryItem"
import {categories} from '../../constants'
import styles from "../../components/CategoryItem/style"

const Categories = ({navigation, route}) => {
  const onSelected = (item) => {
    console.warn(item)
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