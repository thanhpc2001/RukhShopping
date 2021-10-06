import React, { Component } from 'react';

import CategorySubItem from './CategorySubItem'

class CategoryItem extends Component {

    handleToggleActive = (e) => {
        if (e.target.matches('.category-item-header')) {
            e.target.classList.toggle('active')
        }
        else if (e.target.parentElement.matches('.category-item-header')) {
            e.target.parentElement.classList.toggle('active')
        }
    }

    render() {

        const { item, codes } = this.props
        return (
            <li className="category-item">
                <div href="/products" className="category-item-header" onClick={this.handleToggleActive}>
                    {item.name}
                    <ion-icon name="caret-down" />
                </div>
                <CategorySubItem  item={item} code={this.getCodes(codes, item.id)}/>
            </li>
        );
    }

    getCodes = (codes, categoryId) => {
        var result = []
        if (codes.length > 0) {
            codes.forEach(code => {
                code.categoryId === categoryId && result.push(code)
            })
        }
        return result
    }
}

export default CategoryItem;