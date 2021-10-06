import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        <div className="bg-cart">
                            {/* No product */}
                            {/* <p>Chưa có sản phẩm trong giỏ hàng</p> */}
                            {/* have product */}
                            <div className="cart-product-item">
                                <div className="cart-product-item-wrapper">
                                    <img className="cart-product-item-img" src="https://cdn.tgdd.vn/Products/Images/8781/249011/bhx/suon-non-heo-nhap-khau-dong-lanh-tui-1kg-202108281826406412.jpeg" alt="Bo" />
                                    <div className="cart-product-item-wrapper-info">
                                        <h4 className="cart-product-item-name">Sườn non heo nhập khẩu đông lạnh túi 1kg</h4>
                                        <h5 className="cart-product-item-price">175.000đ</h5>
                                    </div>
                                </div>
                                <div className="cart-product-item-wrapper">
                                    <p>x</p>
                                    <input type="number" className="cart-product-item-quantity" />
                                    <p>=</p>
                                    <h5 className="cart-product-item-total">175.000đ</h5>
                                </div>
                            </div>
                            <div className="cart-product-item">
                                <div className="cart-product-item-wrapper">
                                    <img className="cart-product-item-img" src="https://cdn.tgdd.vn/Products/Images/8781/249011/bhx/suon-non-heo-nhap-khau-dong-lanh-tui-1kg-202108281826406412.jpeg" alt="Bo" />
                                    <div className="cart-product-item-wrapper-info">
                                        <h4 className="cart-product-item-name">Sườn non heo nhập khẩu đông lạnh túi 1kg</h4>
                                        <h5 className="cart-product-item-price">175.000đ</h5>
                                    </div>
                                </div>
                                <div className="cart-product-item-wrapper">
                                    <p>x</p>
                                    <input type="number" className="cart-product-item-quantity" />
                                    <p>=</p>
                                    <h5 className="cart-product-item-total">175.000đ</h5>
                                </div>
                            </div>
                            <div className="cart-product-item">
                                <div className="cart-product-item-wrapper">
                                    <img className="cart-product-item-img" src="https://cdn.tgdd.vn/Products/Images/8781/249011/bhx/suon-non-heo-nhap-khau-dong-lanh-tui-1kg-202108281826406412.jpeg" alt="Bo" />
                                    <div className="cart-product-item-wrapper-info">
                                        <h4 className="cart-product-item-name">Sườn non heo nhập khẩu đông lạnh túi 1kg</h4>
                                        <h5 className="cart-product-item-price">175.000đ</h5>
                                    </div>
                                </div>
                                <div className="cart-product-item-wrapper">
                                    <p>x</p>
                                    <input type="number" className="cart-product-item-quantity" />
                                    <p>=</p>
                                    <h5 className="cart-product-item-total">175.000đ</h5>
                                </div>
                            </div>
                            <div className="cart-total-price">
                                <h5>Tổng hóa đơn: 175.000đ</h5>
                                <button>Thanh toán ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Cart;