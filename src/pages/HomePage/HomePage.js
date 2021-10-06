import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProductsItem from './../../components/Main/ProductsItem';
import ShowMoreProducts from './../../components/Main/ShowMoreProducts';
import { actFetchProductsRequest } from './../../actions/index'
import apiCaller from './../../utils/apiCaller'


class HomePage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts()
    }

    render() {

        var { products, categories } = this.props

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col wide l-12 m-12 c-12">
                        <h3 className="title-header-all-products">Thịt, cá, trứng, rau</h3>
                    </div>
                    {this.showProducts(products)}
                    <ShowMoreProducts />
                    {/* {this.showContent(categories)} */}
                </div>
            </React.Fragment>
        );
    }

    showProducts(products) {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductsItem
                        key={index}
                        product={product}
                    />
                )
            })
        }
        return result
    }

    showContent(categories){
        var result = null
        result = categories.map((category,index)=>{
            var temp
            apiCaller(`categories/${category.id}/products`, 'get', null).then(res=>{
                temp = this.showProducts(res.data)
            })
            return <React.Fragment key={index}>
                <div className="col wide l-12 m-12 c-12">
                        <h3 className="title-header-all-products">{category.name}</h3>
                    </div>
                    {temp}
                    <ShowMoreProducts />
            </React.Fragment>
        })
        return result
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        categories: state.categories,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);