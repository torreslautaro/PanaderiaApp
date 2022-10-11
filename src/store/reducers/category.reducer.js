import { categories } from "../../constants/data/categories";
import { categoryTypes } from '../types/category.types'

const { SELECT_CATEGORY } = categoryTypes;

const INITIAL_STATE = {
  categories : categories,
  selectedCategory : null
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
        const indexCategory = state.categories.findIndex(
            (category) => category.id === action.categoryId
        );
        if(indexCategory === -1) return state;
        return {
            ...state,
            selected: state.categories[indexCategory]
        }
    default:
        return state;
}
}

export default CategoryReducer