import * as types from './../constants/ActionTypes'

var initialState = []

const productsOfModal = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCTS_TO_MODAL:
            state = action.products
            return [...state]
        default:
            return [...state]
    }
}

export default productsOfModal;