import React, { Component } from 'react';
import { connect } from 'react-redux'
// import * as msg from './../../constants/Message'

class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flag: -1,
            name: '',
            email: '',
            phone: '',
            address: '',
            note: '',
            option: 'normal'
        }
    }

    setStateDefault = () => {
        this.setState({
            flag: -1,
            name: '',
            email: '',
            phone: '',
            address: '',
            note: '',
            option: 'normal'
        })
        const inputs = document.querySelectorAll('.modal-form-control input')
        inputs.forEach(input => {
            input.classList.remove('error')
        })
    }

    addDay(days) {
        var result = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
        return (result.getDate() + "/" + (result.getMonth() + 1) + "/" + result.getFullYear())
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value

        this.setState({
            [name]: value
        })
    }

    onConfirm = (e) => {
        e.preventDefault()
        var data = this.state
        data.products = this.props.productsOfModal
        const check = this.onCheck()
        check === 1 && this.onCloseModal()
    }

    onCloseModal() {
        this.setStateDefault()
        document.querySelector('.modal-container').classList.remove('active')
    }

    onCheck = () => {
        const inputs = document.querySelectorAll('.modal-form-control input')
        var result = 1
        inputs.forEach(input => {
            if (input.name === 'email') {
                const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                if (!regexEmail.test(input.value)) {
                    result = -1
                    input.classList.add('error')
                }
                else {
                    input.classList.remove('error')
                }
            }
            else if (input.name === 'phone') {
                const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
                if (regexPhone.test(input.value) && input.value.length >= 10 && input.value.length <= 11) {
                    input.classList.remove('error')
                }
                else {
                    result = -1
                    input.classList.add('error')
                }
            }
            else {
                if (input.value === "") {
                    result = -1
                    input.classList.add('error')
                }
                else {
                    input.classList.remove('error')
                }
            }
        })
        return result
    }

    render() {
        const { option } = this.state
        const price = this.computTotalPrice(this.props.productsOfModal)
        return (
            <div className="modal-container">
                <form className="modal-form">
                    <div className="modal-header">
                        <p>Thông tin mua hàng</p>
                        <ion-icon name="close-outline" onClick={() => this.onCloseModal()}></ion-icon>
                    </div>
                    <div className="modal-form-control">
                        <label>Tên khách hàng (*)</label>
                        <input
                            name="name" type="text" className="modal-name-user"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="modal-form-control">
                        <label>Email (*)</label>
                        <input
                            name="email" type="text" className="modal-email-user"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="modal-form-control">
                        <label>Số điện thoại (*)</label>
                        <input
                            name="phone" type="text" className="modal-phone-user"
                            value={this.state.phone}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="modal-form-control">
                        <label>Địa chỉ (*)</label>
                        <input
                            name="address" type="text" className="modal-address-user"
                            value={this.state.address}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="modal-form-control">
                        <label>Yêu cầu của khách hàng</label>
                        <textarea
                            name="note" rows="3" className="modal-note-user"
                            value={this.state.note}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="modal-form-control">
                        <label>Hình thức giao hàng</label>
                        <select
                            name="option"
                            value={this.state.option}
                            onChange={this.onChange}
                        >
                            <option value="normal" className="modal-delivery-option">Giao hàng tiết kiệm</option>
                            <option value="fast" className="modal-delivery-option">Giao hàng nhanh</option>
                        </select>
                    </div>
                    <div className="modal-form-control">
                        <label>Ngày giao hàng dự kiến</label>
                        <p className="modal-delivery-date">{this.showDeliveryDate(option)}</p>
                    </div>
                    <div className="modal-form-control">
                        <label>Tổng giá trị sản phẩm</label>
                        <p className="modal-price-products">{Intl.NumberFormat('de-DE').format(price)} vnđ</p>
                    </div>
                    <div className="modal-form-control">
                        <label>Phí vận chuyển<br /><span>(miễn phí vận chuyển cho đơn hàng từ 300.000 vnđ)</span></label>
                        <p className="modal-delivery-price">
                            {price > 300000 ? 'Miễn phí' : `${Intl.NumberFormat('de-DE').format(this.showDeliveryPrice(option))} vnđ`}
                        </p>
                    </div>
                    <div className="modal-form-control">
                        <label>Tổng tiền</label>
                        <p className="modal-total-price">{Intl.NumberFormat('de-DE').format(this.showTotalPrice(price, option))} vnđ</p>
                    </div>
                    <button
                        className="modal-confirm"
                        onClick={e => this.onConfirm(e)}
                    >
                        Xác nhận</button>
                </form>
            </div>
        );
    }

    showDeliveryDate(option) {
        if (option === 'normal')
            return `${this.addDay(4)} - ${this.addDay(7)}`
        else
            return `${this.addDay(1)} - ${this.addDay(3)}`
    }

    showDeliveryPrice(option) {
        if (option === 'normal')
            return 14000
        else
            return 30000
    }

    showTotalPrice(price, option) {
        if (price > 300000) {
            return price
        }
        else {
            if (option === 'normal')
                return price + 14000
            else
                return price + 30000
        }
    }

    computTotalPrice(products) {
        var result = null
        if (products.length > 0) {
            result = products.reduce((temp, product) => {
                return temp + (product.product.price * product.quantity)
            }, 0)
        }
        return result
    }
}

const mapStateToProp = state => {
    return {
        productsOfModal: state.productsOfModal,
    }
}

export default connect(mapStateToProp, null)(Modal);