import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actAddProductsToModal } from './../../actions/index'

class CartTotal extends Component {
    render() {
        const { cart } = this.props
        return (
            <div className="cart-total-price">
                <h5>Tổng hóa đơn: {Intl.NumberFormat('de-DE').format(this.showTotal(cart))} vnđ</h5>
                <button
                    onClick={() => this.onBuy(cart)}
                >
                    Thanh toán ngay
                </button>
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

    onBuy = (products) => {
        this.props.onAddProductsToModal(products)
        document.querySelector('.modal-container').classList.add('active')
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        onAddProductsToModal: (product) => {
            dispatch(actAddProductsToModal(product))
        }
    }
}

export default connect(null, mapDispatchToProp)(CartTotal);