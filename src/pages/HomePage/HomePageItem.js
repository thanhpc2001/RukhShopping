import React, { Component } from 'react';

import ProductsItem from './../../components/Main/ProductsItem';

class HomePageItem extends Component {
    render() {
        const { products } = this.props
        return (
            <React.Fragment>
                {this.showContent(products)}
            </React.Fragment>
        );
    }

    showContent(products) {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductsItem
                    key={index}
                    product={product}
                />
            })
        }
        return result
    }
}

export default HomePageItem;