import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import image from './../../../no_cart.png'
import CardBoardItem from './CardBoardItem';
import * as msg from './../../../constants/Message'

class CardBoard extends Component {
    render() {
        const { cart } = this.props
        return <React.Fragment>
            {this.showNumOfCart(cart)}

            <div className="cart-board">
                <p>{cart.length > 0 ? 'Sản phẩm đã thêm' : msg.MSG_CART_EMPTY}</p>
                <ul className="cart-board-list">
                    {cart.length > 0 ? this.showCartItem(cart) : this.showEmptyCartItem()}
                </ul>
                <Link to="/cart" className="card-board-review">Xem giỏ hàng</Link>
            </div>
        </React.Fragment>
    }

    showCartItem(cart) {
        var result = cart.map((item, index) => {
            return (
                <CardBoardItem
                    key={index}
                    item={item}
                />
            )
        })
        return result
    }

    showEmptyCartItem() {
        return (
            <div className="cart-board-empty">
                <img src={image} alt="Empty Cart" />
            </div>
        )
    }

    showNumOfCart(cart) {
        const numOfCart = cart.length
        if (numOfCart > 0)
            return (
                <div className="num-of-list-cart">{numOfCart}</div>
            )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps, null)(CardBoard);