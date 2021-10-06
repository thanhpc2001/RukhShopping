import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actGetProductRequest } from './../../actions/index'

class BuyNowPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }

    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id
            this.props.onGetProduct(id)
        }
    }

    render() {
        var { product } = this.props
        var { quantity } = this.state
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
                            <button className="pay-btn">Thanh toán ngay</button>
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
                quantity: quantity
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        product: state.productItem
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProduct: (id) => {
            dispatch(actGetProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyNowPage);