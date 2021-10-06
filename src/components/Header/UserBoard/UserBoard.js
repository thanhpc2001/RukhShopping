import React, { Component } from 'react';

class UserBoard extends Component {
    render() {
        return (
            <div className="user-board">
                <ul className="user-board-list">
                    <li className="user-board-item">
                        Tài khoản của tôi
                                </li>
                    <li className="user-board-item">
                        Cài đặt tài khoản
                                </li>
                    <li className="user-board-item">
                        Đăng xuất
                                </li>
                </ul>
            </div>
        );
    }
}

export default UserBoard;