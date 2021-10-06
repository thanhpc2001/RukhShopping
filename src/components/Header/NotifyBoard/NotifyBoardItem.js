import React, { Component } from 'react';

class NotifyBoardItem extends Component {
    render() {
        return (
            <li className="notify-board-item">
                <img className="notify-board-img" src="http://gofood.vn/uploads/news/phan-biet-thit-bo-kobe-wagyu-gofood-1.jpg" alt="Bò Wagyu" />
                <div className="notify-board-info">
                    <h5>Bò Wagyu giảm giá lên đến 50%</h5>
                    <p>Khuyến mãi cực sốc khi mua combo 5 miếng bò wagyu 150 gram!!</p>
                </div>
            </li>
        );
    }
}

export default NotifyBoardItem;