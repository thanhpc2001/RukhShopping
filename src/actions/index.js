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

export const actFetchProductOfCategoriesRequest = () => {
    return (dispatch) => {
        return apiCaller('categories', 'get', null).then(res => {
            var data = []
            res.data.forEach(async category => {
                const temp = await apiCaller(`categories/${category.id}/products`, 'get', null)
                data = [...data, { category, products: temp.data }]
                dispatch(actFetchProductOfCategories(data))
            })
        })
    }
}

export const actFetchProductOfCategories = (data) => {
    return {
        type: types.FETCH_PRODUCTS_OF_CATEGORIES,
        data,
    }
}

export const actFetchCategoriesRequest = () => {
    return (dispatch) => {
        return apiCaller('categories', 'get', null).then(res => {
            var data = []
            res.data.forEach(async category => {
                const temp = await apiCaller(`categories/${category.id}/codes`, 'get', null)
                data = [...data, { category, codes: temp.data }]
                dispatch(actFetchCategories(data))
            })
        })
    }
}

export const actFetchCategories = (data) => {
    return {
        type: types.FETCH_CATEGORIES,
        data,
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

export const actSearchProduct = (keyword)=>{
    return {
        type: types.SEARCH_PRODUCT,
        keyword,
    }
}

export const actSortProduct = (sort)=>{
    return {
        type: types.SORT_PRODUCT,
        sort,
    }
}
