import React, { Component } from 'react';

import ProductsItem from './../../components/Main/ProductsItem';
import ShowMoreProducts from './../../components/Main/ShowMoreProducts';

class HomePageItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numShow: 20
        }
    }

    setNumShow = (num) => {
        this.setState({
            numShow: num
        })
    }

    render() {
        const { products, codeId } = this.props
        const { numShow } = this.state
        return (
            <React.Fragment>
                {this.showContent(products, numShow)}
                <ShowMoreProducts
                    numOfProducts={products.length}
                    numShow={numShow}
                    setNumShow={this.setNumShow}
                    codeId={codeId}
                />
            </React.Fragment>
        );
    }

    // showContent(products) {
    //     var result = null
    //     if (products.length > 0) {
    //         result = products.map((product, index) => {
    //             return <ProductsItem
    //                 key={index}
    //                 product={product}
    //             />
    //         })
    //     }
    //     return result
    // }

    showContent(products, numShow) {
        var result = []
        const len = products.length
        if (len > 0) {
            if (len > numShow) {
                for (let i = 0; i < numShow; i++) {
                    result.push(<ProductsItem
                        key={i}
                        product={products[i]}
                    />)
                }
            }
            else {
                for (let i = 0; i < len; i++) {
                    result.push(<ProductsItem
                        key={i}
                        product={products[i]}
                    />)
                }
            }
        }
        return result
    }
}

export default HomePageItem;