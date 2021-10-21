import React, { Component } from 'react';

import FilterProducts from './../../components/Main/FilterProducts';
import ProductsItem from './../../components/Main/ProductsItem';
import ShowMoreProducts from './../../components/Main/ShowMoreProducts';
import apiCaller from './../../utils/apiCaller'
import { connect } from 'react-redux'

class GroupProductsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            classifyId: 0,
            data: []
        }
    }

    async componentDidMount() {
        const { match } = this.props
        if (match) {
            // const id = match.params.id
            // const res = await apiCaller(`codes/${id}/products`, 'get', null)
            // this.setState({
            //     data: res.data
            // })
            this.getDataById(match.params.id)
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props.match !== prevProps.match) {
            // const newmatch = this.props.match
            // const newid = newmatch.params.id
            // const newres = await apiCaller(`codes/${newid}/products`, 'get', null)
            // this.setState({
            //     data: newres.data
            // })
            this.getDataById(this.props.match.params.id)
        }
    }

    getDataById = async (id) => {
        const res = await apiCaller(`codes/${id}/classifies`, 'get', null)
        var data = []
        res.data.forEach(async classify => {
            const temp = await apiCaller(`classifies/${classify.id}/products`, 'get', null)
            data = [...data, { classify, products: temp.data }]
            this.setState({ classifyId: this.state.classifyId || 0, data })
        })

    }

    setClassifyId = (id) => {
        this.setState({
            classifyId: id,
            data: this.state.data
        })
    }

    render() {
        // var { products } = this.props
        var { classifyId, data } = this.state
        // console.log(data, classifyId)
        // data.length>0 ? console.log(data[0].products) : console.log('hi')
        // var { sort } = this.props
        // if (sort && data.length>0) {
        //     data.sort((a, b) => {
        //         if (a.products.price > b.products.price) return sort.value
        //         else if (a.products.price < b.products.price) return - sort.value
        //         else return 0
        //     })
        // }
        return (
            <React.Fragment>
                <div className="row">
                    <FilterProducts data={data} classifyId={classifyId} setClassifyId={this.setClassifyId} />
                    {data.length > 0 ? this.showProducts(data[classifyId].products) : null}
                    <ShowMoreProducts numOfProducts={data.length > 0 ? data[classifyId].products.length : null} />
                </div>
            </React.Fragment>
        );
    }

    showProducts(products) {
        var result = null
        var { sort } = this.props
        if (sort) {
            products.sort((a, b) => {
                if (a.price > b.price) return sort.value
                else if (a.price < b.price) return - sort.value
                else return 0
            })
        }
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductsItem
                        key={index}
                        product={product}
                    />
                )
            })
        }
        return result
    }
}

const mapStateToProps = state => ({ sort: state.sortProducts })

export default connect(mapStateToProps, null)(GroupProductsPage);