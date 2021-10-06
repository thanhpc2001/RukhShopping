import React, { Component } from 'react';
import FilterProducts from './FilterProducts';
import ProductsItem from './ProductsItem';
import ShowMoreProducts from './ShowMoreProducts';

class GroupProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <FilterProducts />
                    <ProductsItem />
                    <ShowMoreProducts />
                </div>
            </React.Fragment>
        );
    }
}

export default GroupProducts;