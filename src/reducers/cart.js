import * as types from './../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('RUKHSHOPPING_CART'))
var initialState = data ? data : []

const cart = (state = initialState, action) => {
    var { product, quantity } = action
    var index = -1
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].quantity += quantity
            }
            else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('RUKHSHOPPING_CART', JSON.stringify(state))
            return [...state]
        case types.DELETE_IN_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('RUKHSHOPPING_CART', JSON.stringify(state))
            return [...state]
        case types.UPDATE_IN_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].quantity = quantity
            }
            localStorage.setItem('RUKHSHOPPING_CART', JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

var findProductInCart = (cart, product) => {
    var index = -1
    var n = cart.length
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if (cart[i].product.id === product.id) {
                index = i
                break
            }
        }
    }
    return index
}

export default cart;