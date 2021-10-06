import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'
import CartTotal from './CartTotal'
import * as msg from './../../constants/Message'

class CartPage extends Component {
    render() {
        const { cart } = this.props
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        <div className="bg-cart">
                            {cart.length > 0 ? this.showCartItem(cart) : this.showCartEmpty()}
                            <CartTotal
                                cart={cart}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    showCartEmpty() {
        return (
            <div className="cart-empty-product-item">
                <p>{msg.MSG_CART_EMPTY}</p>
                <Link to="/">{msg.MSG_GO_SHOPPING}</Link>
            </div>
        )
    }

    showCartItem(cart) {
        var result = cart.map((item, index) => {
            return (
                <CartItem
                    key={index}
                    item={item}
                />
            )
        })
        return result
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps, null)(CartPage);