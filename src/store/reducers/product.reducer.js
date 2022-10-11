import {products} from '../../constants/data/products'
import { productsTypes } from '../types/products.types';
const { SELECTED_PRODUCT, FILTERED_PRODUCTS } = productsTypes;

const INITIAL_STATE = {
  products : products,
  selectedProducts: [],
  filteredProducs: null
}

const ProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
        return {
            ...state,
            selected: state.products.find(
                (product) => product.id === action.productId
            )
        }
    case FILTERED_PRODUCTS:
        return {
            ...state,
            filteredProducts: state.products.filter(
                (product) => product.categoryId === action.categoryId
            ),
        }
    default:
        return state;
}
}

export default ProductReducer