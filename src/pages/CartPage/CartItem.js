import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actDeleteProductInCart, actUpdateProductInCart } from './../../actions/index'

class CartItemPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }

    render() {
        var { product } = this.props.item
        var quantity = this.props.item.quantity > 0 ? this.props.item.quantity : this.state.quantity
        return (
            <div className="cart-product-item">
                <div className="cart-product-item-wrapper">
                    <img className="cart-product-item-img" src={product.image} alt={product.name} />
                    <div className="cart-product-item-wrapper-info">
                        <h4 className="cart-product-item-name">{product.name}</h4>
                        <h5 className="cart-product-item-price">{Intl.NumberFormat('de-DE').format(product.price)} vnđ</h5>
                    </div>
                </div>
                <div className="cart-product-item-wrapper">
                    <p>x</p>
                    <div className="cart-product-item-quantity-group">
                        <button
                            onClick={() => this.onUpdateQuantity(product, quantity - 1)}
                        >-</button>
                        <span className="cart-product-item-quantity">{quantity}</span>
                        <button
                            onClick={() => this.onUpdateQuantity(product, quantity + 1)}
                        >+</button>
                    </div>
                    <p>=</p>
                    <h5 className="cart-product-item-total">{Intl.NumberFormat('de-DE').format(this.showSubTotal(product.price, quantity))} vnđ</h5>
                    <button
                        className="cart-remove-product-item-btn"
                        onClick={() => this.onDeleteInCart(product)}
                    >
                        <i className="fas fa-trash" />
                    </button>
                </div>
            </div>
        );
    }

    showSubTotal(price, quantity) {
        return price * quantity
    }

    onDeleteInCart(product) {
        this.props.onDeleteInCart(product)
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                quantity: quantity
            })
            this.props.onUpdateProductInCart(product, quantity)
        }
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        onDeleteInCart: product => {
            dispatch(actDeleteProductInCart(product))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(null, mapDispatchToProp)(CartItemPage);