import React, { Component } from 'react';
// import apiCaller from './../../utils/apiCaller'

import { connect } from 'react-redux'
// import { actFetchCategoriesRequest } from './../../actions/index'

import CategoryItem from './CategoryItem'

class Category extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: []
    //     }
    // }

    handleToggleMenu = (e) => {
        const category = document.querySelector('.category')
        category.classList.toggle('active')
    }

    handleCloseMenu = (e) => {
        const category = document.querySelector('.category.active')
        category.classList.remove('active')
    }

    // async componentDidMount() {
    //     const res = await apiCaller('categories', 'get', null)
    //     var data = []
    //     res.data.forEach(async category => {
    //         const temp = await apiCaller(`categories/${category.id}/codes`, 'get', null)
    //         data = [...data, { category, codes: temp.data }]
    //         this.setState({ data })
    //     })
    // }
    // componentDidMount() {
    //     this.props.onFetchCategories()
    // }

    // async componentDidUpdate(prevProps){
    //     if(this.props.categories!==prevProps.categories){
    //         var data = []
    //         const {categories}=this.props
    //         categories.forEach(async category=>{
    //             const temp = await apiCaller(`categories/${category.id}/codes`, 'get', null)
    //             data = [...data, {category, codes: temp.data}]
    //             this.setState({data})
    //         })
    //     }
    // }

    render() {
        const { data } = this.props
        // const {categories}=this.props
        // console.log({categories})
        return (
            <React.Fragment>
                <nav className="category">
                    <h3 className="category-heading">Danh mục <br /> sản phẩm</h3>
                    <div className="mobile-menu">
                        <ion-icon name="menu" id="open-menu" onClick={this.handleToggleMenu} />
                        <ion-icon name="close" id="close-menu" onClick={this.handleCloseMenu} />
                    </div>
                    <ul className="category-list">
                        {this.showContent(data)}
                    </ul>
                </nav>
            </React.Fragment>
        );
    }

    showContent(data) {
        var result = null
        if (data.length > 0) {
            result = data.map((item, index) => {
                return <CategoryItem
                    key={index}
                    item={item}
                />
            })
        }
        return result
    }
}

const mapStateToProp = state => {
    return {
        data: state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // onFetchCategories: () => {
        //     dispatch(actFetchCategoriesRequest())
        // }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Category)
// export default Category;