import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CategorySubItem extends Component {

    handleRemoveActive = () => {
        const actives = document.querySelectorAll('.category-item-header.active')
        const categoryActive = document.querySelector('.category.active')
        actives && actives.forEach(active => {
            active.classList.remove('active')
        })
        categoryActive && categoryActive.classList.remove('active')
    }

    render() {
        var { code } = this.props
        return (
            <ul className="category-item-sub-list">
                {this.showContents(code)}
            </ul>
        );
    }

    showContents = (code) => {
        var result = null
        if (code.length > 0) {
            result = code.map((subcode, index) => {
                return (
                    <li
                        key={index}
                        className="category-item-sub-item"
                    >
                        <Link to="/products" className="category-item-link" onClick={this.handleRemoveActive}>
                            {subcode.name}
                        </Link>
                    </li>
                )
            })
        }
        return result
    }
}

export default CategorySubItem;