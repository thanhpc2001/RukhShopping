import React, { Component } from 'react';

import { connect } from 'react-redux'
import { actSortProduct } from './../../actions/index'

class SortPrice extends Component {

    handleToggleActive = (e) => {
        if (e.target.matches('.sort-price-btn')) {
            e.target.classList.toggle('active')
        }
        else if (e.target.parentElement.matches('.sort-price-btn')) {
            e.target.parentElement.classList.toggle('active')
        }
    }

    onClick = (value) => {
        this.props.onSort(value)
    }

    render() {
        var { sort } = this.props
        return (
            <React.Fragment>
                <div className="sort-price">
                    <h5 className="sort-price-btn" onClick={this.handleToggleActive}>
                        Sắp xếp theo
                        <ion-icon name="caret-down" />
                    </h5>
                    <ul className="sort-price-option">
                        <li className="sort-price-select"
                            onClick={() => this.onClick(1)}
                        >
                            Giá tăng dần
                            <ion-icon name="arrow-up" />
                            {sort.value === 1 ? <ion-icon name="checkmark-outline"></ion-icon> : null}
                        </li>
                        <li className="sort-price-select"
                            onClick={() => this.onClick(-1)}
                        >
                            Giá giảm dần
                            <ion-icon name="arrow-down" />
                            {sort.value === -1 ? <ion-icon name="checkmark-outline"></ion-icon> : null}
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sortProducts,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (value) => {
            dispatch(actSortProduct(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortPrice);