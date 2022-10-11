import { FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import CategoryItem from "../../components/CategoryItem"
import styles from "../../components/CategoryItem/style"
import { selectCategory } from "../../store/actions";


const Categories = ({navigation}) => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories)

  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
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