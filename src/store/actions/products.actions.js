import { productsTypes } from "../types/products.types"

const { SELECTED_PRODUCT, FILTERED_PRODUCTS } = productsTypes;


export const filteredProducts = (id) => ({
    type: FILTERED_PRODUCTS,
    categoryId: id
})