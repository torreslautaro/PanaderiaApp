import {  FlatList } from "react-native"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem"
import { filteredProducts } from "../../store/actions";

const Products = ({navigation, route}) => {
  const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.categories.selected);

    const productsFiltered = useSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id))
    }, []);
  const renderItem = ({item}) => <ProductItem item={item} />

  return (
      <FlatList 
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
  )
}

export default Products