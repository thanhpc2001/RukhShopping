import * as types from './../constants/ActionTypes'

var initialState = []

const products = (state=initialState, action)=>{
    switch(action.type){
        case types.GET_CODES:
            state = action.codes
            return [...state]
        default:
            return [...state]
    }
}

export default products;