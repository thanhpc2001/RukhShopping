import * as types from './../constants/ActionTypes'

var initialState = ''

const SearchProduct = (state=initialState, action)=>{
    switch(action.type){
        case types.SEARCH_PRODUCT:
            return action.keyword
        default:
            return state
    }
}

export default SearchProduct;