import React, { Component } from 'react';
import apiCaller from './../../utils/apiCaller'
import { connect } from 'react-redux'
import { actAddProductsToModal, actAddToCart } from './../../actions/index'

class BuyNowPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {},
            quantity: 1
        }
    }

    async componentDidMount() {
        const { match } = this.props
        if (match) {
            const id = match.params.id
            const res = await apiCaller(`products/${id}`, 'get', null)
            this.setState({
                product: res.data,
                quantity: this.state.quantity
            })
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props.match !== prevProps.match) {
            const id = this.props.match.params.id
            const res = await apiCaller(`products/${id}`, 'get', null)
            this.setState({
                product: res.data,
                quantity: this.state.quantity
            })
        }
    }

    render() {
        var { product, quantity } = this.state
        return (
            <React.Fragment>
                <div className="row bg-pay">
                    <div className="col l-7 m-7 c-12">
                        <div className="pay-left">
                            <img src={product.image} alt={product.name} />
                        </div>
                    </div>
                    <div className="col l-5 m-5 c-12">
                        <div className="pay-right">
                            <h4 className="pay-product-name">{product.name}</h4>
                            <h5 className="pay-product-price">{Intl.NumberFormat('de-DE').format(product.price)} vnđ</h5>
                            <div className="pay-wrapper-price">
                                {/* <input type="number" className="pay-product-quantity" /> */}
                                <button
                                    onClick={() => this.onUpdateQuantity(quantity - 1)}
                                >-</button>
                                <span className="pay-product-item-quantity">{quantity}</span>
                                <button
                                    onClick={() => this.onUpdateQuantity(quantity + 1)}
                                >+</button>
                                <p>x {Intl.NumberFormat('de-DE').format(product.price)} vnđ</p>
                            </div>
                            <h5 className="pay-total-price">
                                Tổng tiền: {Intl.NumberFormat('de-DE').format(this.showTotalPrice(product.price, quantity))} vnđ
                            </h5>
                            <div className="action-btn-wrapper">
                                <button
                                    className="pay-btn"
                                    onClick={() => this.onBuy([{ product, quantity }])}
                                >
                                    Thanh toán ngay
                                </button>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => this.onAddToCart(product, quantity)}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    showTotalPrice(price, quantity) {
        return price * quantity
    }

    onUpdateQuantity = (quantity) => {
        if (quantity > 0) {
            this.setState({
                product: this.state.product,
                quantity: quantity
            })
        }
    }

    onBuy = (products) => {
        this.props.onAddProductsToModal(products)
        document.querySelector('.modal-container').classList.add('active')
    }

    onAddToCart = (product, quantity) => {
        this.props.onAddToCart(product, quantity)
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        onAddToCart: (product, quantity) => {
            dispatch(actAddToCart(product, quantity))
        },
        onAddProductsToModal: (product) => {
            dispatch(actAddProductsToModal(product))
        }
    }
}

export default connect(null, mapDispatchToProp)(BuyNowPage);