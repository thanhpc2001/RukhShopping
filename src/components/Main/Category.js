import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actGetCategoryRequest, actGetCodesRequest } from './../../actions/index'

import CategoryItem from './CategoryItem'

class Category extends Component {

    handleToggleMenu = (e) => {
        const category = document.querySelector('.category')
        category.classList.toggle('active')
    }

    handleCloseMenu = (e) => {
        const category = document.querySelector('.category.active')
        category.classList.remove('active')
    }

    componentDidMount() {
        this.props.onGetCategory()
        this.props.onGetCodes()
    }

    render() {
        var { categories, codes } = this.props
        return (
            <React.Fragment>
                <nav className="category">
                    <h3 className="category-heading">Danh mục <br /> sản phẩm</h3>
                    <div className="mobile-menu">
                        <ion-icon name="menu" id="open-menu" onClick={this.handleToggleMenu} />
                        <ion-icon name="close" id="close-menu" onClick={this.handleCloseMenu} />
                    </div>
                    <ul className="category-list">
                        {this.showContent(categories, codes)}
                    </ul>
                </nav>
            </React.Fragment>
        );
    }

    showContent = (categories, codes) => {
        var result = null
        if (categories.length > 0) {
            result = categories.map((item, index) => {
                return <CategoryItem
                    key={index}
                    item={item}
                    codes={codes}
                />
            })
        }
        return result
    }

    
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        codes: state.codes,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetCategory: () => {
            dispatch(actGetCategoryRequest())
        },
        onGetCodes: () => {
            dispatch(actGetCodesRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);