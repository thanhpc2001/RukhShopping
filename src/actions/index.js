import * as types from './../constants/ActionTypes'
import apiCaller from './../utils/apiCaller'


export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return apiCaller('products', 'get', null).then(res => {
            dispatch(actFetchProducts(res ? res.data : []))
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products,
    }
}

export const actGetProductRequest = (id) => {
    return (dispatch) => {
        return apiCaller(`products/${id}`, 'get', null).then(res => {
            dispatch(actGetProduct(res.data))
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type: types.GET_PRODUCT,
        product,
    }
}

export const actGetCategoryRequest = () => {
    return (dispatch) => {
        return apiCaller('categories', 'get', null).then(res => {
            dispatch(actGetCategory(res.data))
        })
    }
}

export const actGetCategory = (category) => {
    return {
        type: types.FETCH_CATEGORY,
        category,
    }
}

export const actGetCodesRequest = () => {
    return (dispatch) => {
        return apiCaller('codes', 'get', null).then(res => {
            dispatch(actGetCodes(res.data))
        })
    }
}

export const actGetCodes = (codes) => {
    return {
        type: types.GET_CODES,
        codes,
    }
}

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: types.DELETE_IN_CART,
        product,
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_IN_CART,
        product,
        quantity,
    }
}
