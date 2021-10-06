import React, { Component } from 'react';
import ProductsRelative from './ProductsRelative';
import SortPrice from './SortPrice';

class FilterProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col wide l-12 m-12 c-12">
                    <div className="filter-products">
                        <ProductsRelative />
                        <SortPrice />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FilterProducts;