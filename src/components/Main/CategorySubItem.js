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
        var { codes } = this.props
        return (
            <ul className="category-item-sub-list">
                {this.showContents(codes)}
            </ul>
        );
    }

    showContents = (codes) => {
        var result = null
        if (codes.length > 0) {
            result = codes.map((code, index) => {
                return (
                    <li
                        key={index}
                        className="category-item-sub-item"
                    >
                        <Link to={`/codes/${code.id}/products`} className="category-item-link" onClick={this.handleRemoveActive}>
                            {code.name}
                        </Link>
                    </li>
                )
            })
        }
        return result
    }
}

export default CategorySubItem;