import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import productsOfCategories from './productsOfCategories'
import categories from './categories'
import searchProduct from './searchProduct'
import sortProducts from './sortProducts'
import productsOfModal from './productsOfModal'

const appReducers = combineReducers({
    products,
    productsOfCategories,
    cart,
    categories,
    searchProduct,
    sortProducts,
    productsOfModal,
})

export default appReducers;