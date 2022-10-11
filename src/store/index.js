import { createStore, combineReducers } from "redux";
import {CategoryReducer, ProductReducer} from './reducers'

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer
})

const Store = createStore(RootReducer)

export default Store