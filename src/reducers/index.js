import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import productItem from './productItem'
import categories from './categories'
import codes from './codes'

const appReducers = combineReducers({
    products,
    productItem,
    cart,
    categories,
    codes,
})

export default appReducers;