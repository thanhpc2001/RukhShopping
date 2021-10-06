import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col wide l-12 m-12 c-12">
                        <h2 className="header-title">Trải nghiệm tại <span>RukhShopping</span></h2>
                    </div>
                    <div className="col wide l-4 m-4 c-12">
                        <div className="feature">
                            <div className="feature-img" style={{ backgroundImage: 'url(https://www.greenqueen.com.hk/wp-content/uploads/2020/02/organic-food-getty-images.jpg)' }} />
                            <h3 className="feature-title">Tươi và Sạch</h3>
                            <p className="feature-description">Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!</p>
                            <button className="feature-read-more-btn">Xem thêm</button>
                        </div>
                    </div>
                    <div className="col wide l-4 m-4 c-12">
                        <div className="feature">
                            <div className="feature-img" style={{ backgroundImage: 'url(https://www.study.ru/uploads/server/8212fJL8iA2dQOK2.jpg)' }} />
                            <h3 className="feature-title">Miễn phí vận chuyển</h3>
                            <p className="feature-description">Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!</p>
                            <button className="feature-read-more-btn">Xem thêm</button>
                        </div>
                    </div>
                    <div className="col wide l-4 m-4 c-12">
                        <div className="feature">
                            <div className="feature-img" style={{ backgroundImage: 'url(https://img.timviecbanhang.com/2020/04/thanh-toan-dien-tu-la-gi-1.jpg)' }} />
                            <h3 className="feature-title">Thanh toán dễ dàng</h3>
                            <p className="feature-description">Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!</p>
                            <button className="feature-read-more-btn">Xem thêm</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Feature;