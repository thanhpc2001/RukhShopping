import React, { Component } from 'react';

class BuyNow extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row bg-pay">
                    <div className="col l-7 m-7 c-12">
                        <div className="pay-left">
                            <img src="https://cdn.tgdd.vn/Products/Images/8139/248986/bhx/than-bo-nhap-khau-dong-lanh-tui-1kg-202108191034181328.jpg" alt="Bo" />
                        </div>
                    </div>
                    <div className="col l-5 m-5 c-12">
                        <div className="pay-right">
                            <h4 className="pay-product-name">Thăn bò nhập khẩu đông lạnh túi 1kg</h4>
                            <h5 className="pay-product-price">Giá: 305.000đ</h5>
                            <div className="pay-wrapper-price">
                                <input type="number" className="pay-product-quantity" />
                                <p>x 305.000đ</p>
                            </div>
                            <h5 className="pay-total-price">Tổng tiền: 305.000đ</h5>
                            <button className="pay-btn">Thanh toán ngay</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BuyNow;