import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { actAddToCart, actAddProductsToModal } from './../../actions/index'

class ProductsItem extends Component {
    render() {
        const { product } = this.props
        return (
            <React.Fragment>
                <Link to={`/product/${product.id}/information`} className="col wide l-3 m-4 c-6" id="products-item">
                    <div className="product-item">
                        <div className="product-item-img" style={{ backgroundImage: `url(${product.image})` }} />
                        <h4 className="product-item-name">{product.name}</h4>
                        <p className="product-item-date">HSD: {product.date}</p>
                        <h5 className="product-item-price">{Intl.NumberFormat('de-DE').format(product.price)} vnđ</h5>
                        <div className="product-item-wrapper">
                            {/* <Link to={`/product/${product.id}/buy-now`} className="product-item-buy-btn">Mua ngay</Link> */}
                            <button
                                className="product-item-buy-btn"
                                onClick={(e) => this.onBuy(e, [{ product, quantity: 1 }])}
                            >
                                Mua ngay
                            </button>
                            <button
                                className="product-item-cart-btn"
                                onClick={(e) => this.onAddToCart(e, product)}
                            >
                                <ion-icon name="cart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        );
    }

    onAddToCart = (e, product) => {
        e.preventDefault()
        this.props.onAddToCart(product, 1)
    }

    onBuy = (e, products) => {
        e.preventDefault()
        this.props.onAddProductsToModal(products)
        document.querySelector('.modal-container').classList.add('active')
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onAddProductsToModal: (product) => {
            dispatch(actAddProductsToModal(product))
        }
    }
}

export default connect(null, mapDispatchToProp)(ProductsItem);