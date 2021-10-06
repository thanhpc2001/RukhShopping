import React, { Component } from 'react';

class CardBoardItem extends Component {
    render() {

        const { product, quantity } = this.props.item
        return (
            <li className="cart-board-item">
                <img className="cart-board-img" src={product.image} alt={product.name} />
                <div className="cart-board-info">
                    <h5>{product.name}</h5>
                    <div className="cart-board-price-wrap">
                        <span className="cart-board-item-price">{Intl.NumberFormat('de-DE').format(product.price)}</span> x <span>{quantity}</span>
                    </div>
                </div>
                {/* <i className="fas fa-trash" /> */}
            </li>
        );
    }
}

export default CardBoardItem;