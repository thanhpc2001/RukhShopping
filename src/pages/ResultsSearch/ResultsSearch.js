import React, { Component } from 'react';

import { connect } from 'react-redux'
import SortPrice from '../../components/Main/SortPrice';
import ProductsItem from './../../components/Main/ProductsItem'

class ResultsSearch extends Component {



    render() {
        var { products, keyword, sort } = this.props
        if (keyword && products.length > 0) {
            products = products.filter(product => {
                return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            })
        }

        if (sort) {
            products.sort((a, b) => {
                if (a.price > b.price) return sort.value
                else if (a.price < b.price) return - sort.value
                else return 0
            })
        }

        return (
            <div className="row">
                <div className="col wide l-12 m-12 c-12">
                    <div className="filter-products resultsSearch">
                        <SortPrice />
                    </div>
                </div>
                {this.showContent(products)}
            </div>
        );
    }

    showContent(products) {
        var result = <h1 
            style={{color: 'var(--text-color)'}}
        >
            Rất tiếc! Sản phẩm bạn cần tìm không có trong Shop :((
        </h1>
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

const mapStateToProps = state => {
    return {
        products: state.products,
        keyword: state.searchProduct,
        sort: state.sortProducts,
    }
}

export default connect(mapStateToProps, null)(ResultsSearch);