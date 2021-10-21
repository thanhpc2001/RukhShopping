import * as types from './../constants/ActionTypes'

var initialState = { value: 0 }

const SortProducts = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_PRODUCT:
            return { value: action.sort }
        default:
            return state
    }
}

export default SortProducts;