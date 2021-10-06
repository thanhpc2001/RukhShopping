import React, { Component } from 'react';
import { connect } from 'react-redux'

import FilterProducts from './../../components/Main/FilterProducts';
import ProductsItem from './../../components/Main/ProductsItem';
import ShowMoreProducts from './../../components/Main/ShowMoreProducts';

class GroupProductsPage extends Component {
    render() {
        var { products } = this.props
        return (
            <React.Fragment>
                <div className="row">
                    <FilterProducts />
                    {this.showProducts(products)}
                    <ShowMoreProducts />
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
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps,null)(GroupProductsPage);