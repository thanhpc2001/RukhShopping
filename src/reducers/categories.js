import * as types from './../constants/ActionTypes'

var initialState = []

const products = (state=initialState, action)=>{
    switch(action.type){
        case types.FETCH_CATEGORIES:
            return action.data
        default:
            return [...state]
    }
}

export default products;