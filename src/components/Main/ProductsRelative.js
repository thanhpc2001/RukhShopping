import React, { Component } from 'react';

class ProductsRelative extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="recommend-products-list">
                    <li>
                        <a href="/#" className="recommend-products-item">Thịt heo các loại (30)</a>
                    </li>
                    <li>
                        <a href="/#" className="recommend-products-item">Thịt bò các loại (15)</a>
                    </li>
                    <li>
                        <a href="/#" className="recommend-products-item">Ếch, cá, tôm (32)</a>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default ProductsRelative;