import React, { Component } from 'react';

import { connect } from 'react-redux'


import CategorySubItem from './CategorySubItem'

class CategoryItem extends Component {

    componentDidMount(){
        // console.log('ss',this.props.categories)
    }

    handleToggleActive = (e) => {
        if (e.target.matches('.category-item-header')) {
            e.target.classList.toggle('active')
        }
        else if (e.target.parentElement.matches('.category-item-header')) {
            e.target.parentElement.classList.toggle('active')
        }
    }

    render() {
        const {category,codes}=this.props.item
        return (
            <li className="category-item">
                <div href="/products" className="category-item-header" onClick={this.handleToggleActive}>
                    {category.name}
                    <ion-icon name="caret-down" />
                </div>
                <CategorySubItem codes={codes}/>
            </li>
        );
    }
}

const mapStateToProp = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // onFetchCategories: () => {
        //     dispatch(actGetCategoryRequest())
        // }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(CategoryItem)
// export default CategoryItem;