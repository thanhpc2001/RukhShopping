import React, { Component } from 'react';

class SortPrice extends Component {

    handleToggleActive = (e) => {
        if (e.target.matches('.sort-price-btn')) {
            e.target.classList.toggle('active')
        }
        else if (e.target.parentElement.matches('.sort-price-btn')) {
            e.target.parentElement.classList.toggle('active')
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="sort-price">
                    <h5 className="sort-price-btn" onClick={this.handleToggleActive}>
                        Sắp xếp theo
                        <ion-icon name="caret-down" />
                    </h5>
                    <ul className="sort-price-option">
                        <li className="sort-price-select">
                            Giá tăng dần
                            <ion-icon name="arrow-up" />
                        </li>
                        <li className="sort-price-select">
                            Giá giảm dần
                            <ion-icon name="arrow-down" />
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default SortPrice;