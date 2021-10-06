import React, { Component } from 'react';
import NotifyBoardItem from './NotifyBoardItem';

class NotifyBoard extends Component {
    render() {
        return (
            <div className="notify-board">
                <p>Thông báo mới nhất</p>
                <ul className="notify-board-list">
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                    <NotifyBoardItem />
                </ul>
                <p>Hiển thị tất cả</p>
            </div>
        );
    }
}

export default NotifyBoard;