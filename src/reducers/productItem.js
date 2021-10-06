import * as types from './../constants/ActionTypes'

var initialState = {}

const productItem = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT:
            return action.product
        default:
            return state
    }
}

export default productItem;