import React, { Component } from 'react';

class ShowMoreProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col wide l-12 m-12 c-12">
                    <div className="show-more-all-products">
                        <h5 className="show-more-all-products-btn">Xem thêm 100 sản phẩm</h5>
                        <ul className="show-more-all-products-list">
                            <li className="show-more-all-products-item">
                                <a href="/#">Thịt, cá, trứng, rau</a>
                            </li>
                            <li className="show-more-all-products-item">
                                <a href="/#">Rau củ, rau nêm</a>
                            </li>
                            <li className="show-more-all-products-item">
                                <a href="/#">Trái cây</a>
                            </li>
                            <li className="show-more-all-products-item">
                                <a href="/#">Thực phẩm sơ chế</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ShowMoreProducts;