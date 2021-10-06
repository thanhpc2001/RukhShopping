import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
        const { cart } = this.props
        return (
            <div className="cart-total-price">
                <h5>Tổng hóa đơn: {Intl.NumberFormat('de-DE').format(this.showTotal(cart))} vnđ</h5>
                <button>Thanh toán ngay</button>
            </div>
        );
    }

    showTotal(cart) {
        var result = 0
        if (cart.length > 0) {
            cart.forEach(item => {
                result += item.quantity * item.product.price
            })
        }
        return result
    }
}

export default CartTotal;