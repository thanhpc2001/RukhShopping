import * as types from '../constants/ActionTypes'

var initialState = {}

const productItem = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_OF_CATEGORIES:
            return action.data
        default:
            return state
    }
}

export default productItem;