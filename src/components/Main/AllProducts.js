import React, { Component } from 'react';
import ProductsItem from './ProductsItem';
import ShowMoreProducts from './ShowMoreProducts';

class AllProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col wide l-12 m-12 c-12">
                        <h3 className="title-header-all-products">Thịt, cá, trứng, rau</h3>
                    </div>
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                    <ShowMoreProducts />
                </div>
                <div className="row">
                    <div className="col wide l-12 m-12 c-12">
                        <h3 className="title-header-all-products">Sữa uống các loại</h3>
                    </div>
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                    <ShowMoreProducts />
                </div>
            </React.Fragment>
        );
    }
}

export default AllProducts;