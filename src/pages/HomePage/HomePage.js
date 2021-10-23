import React, { Component } from 'react';
import { connect } from 'react-redux'

// import ProductsItem from './../../components/Main/ProductsItem';
// import { actSearchProduct } from './../../actions/index'
// import apiCaller from './../../utils/apiCaller'
import HomePageItem from './HomePageItem'


class HomePage extends Component {

    // componentDidMount() {
    //     this.props.onSearch('')
    // }

    render() {
        const { data } = this.props
        return (
            <div className="row">
                {this.showContent(data)}
            </div>
        );
    }

    showContent(data) {
        var result = null
        if (data.length > 0) {
            result = data.map((item, index) => {
                return <React.Fragment key={index}>
                    <div className="col wide l-12 m-12 c-12">
                        <h3 className="title-header-all-products">{item.category.name}</h3>
                    </div>
                    <HomePageItem products={item.products} codeId={index} />
                </React.Fragment>
            })
        }
        return result
    }
}

const mapStateToProps = state => {
    return {
        data: state.productsOfCategories
    }
}

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onSearch: (keyword) => {
//             dispatch(actSearchProduct(keyword))
//         }
//     }
// }

export default connect(mapStateToProps, null)(HomePage);