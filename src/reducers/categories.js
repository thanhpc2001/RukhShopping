import * as types from './../constants/ActionTypes'

var initialState = []

const products = (state=initialState, action)=>{
    switch(action.type){
        case types.FETCH_CATEGORY:
            state = action.category
            return [...state]
        default:
            return [...state]
    }
}

export default products;