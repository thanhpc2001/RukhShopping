import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ShowMoreProducts extends Component {

    onShowMore(numOfProducts, numShow) {
        const plus = 12
        if (numShow + plus > numOfProducts) {
            this.props.setNumShow(numOfProducts)
        }
        else {
            this.props.setNumShow(numShow + plus)
        }
    }

    onRelative(id) {
        this.props.setClassifyId(id)
    }

    render() {
        const { numOfProducts, numShow, classifyId, categories, data } = this.props
        return (
            <React.Fragment>
                <div className="col wide l-12 m-12 c-12">
                    <div className="show-more-all-products">
                        <h5
                            className="show-more-all-products-btn"
                            onClick={() => this.onShowMore(numOfProducts, numShow)}
                        >
                            {numOfProducts - numShow > 0 && `Xem thêm ${numOfProducts - numShow} sản phẩm`}
                        </h5>
                        <ul className="show-more-all-products-list">
                            {classifyId >= 0 ? this.showSubCategories(classifyId, categories) : null}
                            {data ? this.showRelativeProducts(data) : null}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    showSubCategories(classifyId, categories) {
        var result = []
        var codeId = 0
        categories.forEach((category, index) => {
            // console.log(classifyId,category.category.id)
            if (category.category.id === classifyId)
                codeId = index
        })
        if (categories[codeId]) {
            result = categories[codeId].codes.map((code, index) => {
                return <li key={index} className="show-more-all-products-item">
                    <Link to={`/codes/${code.id}/products`}>{code.name}</Link>
                </li>
            })
        }
        return result
    }

    showRelativeProducts(data) {
        var result = null
        // const { classifyId } = this.props
        if (data.length > 0) {
            result = data.map((item, index) => {
                return <li key={index} className="show-more-all-products-item">
                    <button
                        onClick={() => { this.onRelative(index) }}
                    >
                        {item.classify.name}</button>
                </li>
            })
        }
        return result
    }
}

const mapStateToProps = state => ({ categories: state.categories })

export default connect(mapStateToProps, null)(ShowMoreProducts);