import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import apiCaller from './../../utils/apiCaller'

class ProductsRelative extends Component {

    onClick(id) {
        this.props.setClassifyId(id)
    }

    render() {
        const { data } = this.props

        return (
            <React.Fragment>
                <ul className="recommend-products-list">
                    {this.showRelativeProducts(data)}
                    {/* <li>
                        <a href="/#" className="recommend-products-item">Thịt heo các loại (30)</a>
                    </li>
                    <li>
                        <a href="/#" className="recommend-products-item">Thịt bò các loại (15)</a>
                    </li>
                    <li>
                        <a href="/#" className="recommend-products-item">Ếch, cá, tôm (32)</a>
                    </li> */}
                </ul>
            </React.Fragment>
        );
    }

    showRelativeProducts(data) {
        var result = null
        const { classifyId } = this.props
        if (data.length > 0) {
            result = data.map((item, index) => {
                return <li key={index}>
                    <button
                        className={classifyId === index ? "recommend-products-item active" : "recommend-products-item"}
                        onClick={() => { this.onClick(index) }}
                    >
                        {item.classify.name} ({item.products.length})</button>
                </li>
            })
        }
        return result
    }
}

export default ProductsRelative;