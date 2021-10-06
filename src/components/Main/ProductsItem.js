import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { actAddToCart } from './../../actions/index'

class ProductsItem extends Component {
    render() {
        const { product } = this.props
        return (
            <React.Fragment>
                <div className="col wide l-3 m-4 c-6">
                    <div className="product-item">
                        <div className="product-item-img" style={{ backgroundImage: `url(${product.image})` }} />
                        <h4 className="product-item-name">{product.name}</h4>
                        <p className="product-item-date">HSD: {product.date}</p>
                        <h5 className="product-item-price">{Intl.NumberFormat('de-DE').format(product.price)} vnđ</h5>
                        <div className="product-item-wrapper">
                            <Link to={`/product/${product.id}/buy-now`} className="product-item-buy-btn">Mua ngay</Link>
                            <button
                                className="product-item-cart-btn"
                                onClick={() => this.onAddToCart(product)}
                            >
                                <ion-icon name="cart" />
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product, 1)
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        }
    }
}

export default connect(null, mapDispatchToProp)(ProductsItem);