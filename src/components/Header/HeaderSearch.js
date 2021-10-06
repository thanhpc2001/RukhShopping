import React, { Component } from 'react';

class HeaderSearch extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-search">
                    <input type="text" className="header-search-input" placeholder="Tìm kiếm sản phẩm chất lượng ..." />
                    <div className="search-icon">
                        <ion-icon name="search" />
                    </div>
                    <div className="history-search">
                        <p>Lịch sử tìm kiếm</p>
                        <ul>
                            <li>
                                Ức gà nạc
                                <ion-icon name="close" />
                            </li>
                            <li>
                                Thịt bò wagyu
                                <ion-icon name="close" />
                            </li>
                            <li>
                                Trứng gà ba huân
                                <ion-icon name="close" />
                            </li>
                            <li>
                                Mì hảo hảo
                                <ion-icon name="close" />
                            </li>
                            <li>
                                Sữa tươi không đường
                                <ion-icon name="close" />
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderSearch;