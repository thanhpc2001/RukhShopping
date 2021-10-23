import React, { Component } from 'react';
import Category from './Category';
import Feature from '../Feature/Feature';
import routes from './../../routes'
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux'
import { actFetchCategoriesRequest, actFetchProductOfCategoriesRequest, actFetchProductsRequest } from './../../actions/index'

class Main extends Component {

    componentDidMount() {
        this.props.onFetchCategories()
        this.props.onFetchProductsOfCategories()
        this.props.onFetchAllProducts()
    }

    onTop() {
        window.scrollTo(0, 0);
    }

    onBotton() {
        window.scrollTo(0, 10000);
    }

    render() {
        return (
            <section className="main">
                <div className="grid wide">
                    <div className="row">
                        <div className="col wide l-12 m-12 c-12">
                            <h2 className="header-title">Các sản phẩm tại <span>RukhShopping</span></h2>
                        </div>
                        <div className="col wide l-2 m-12 c-12">
                            <Category />
                        </div>
                        <div className="col wide l-10 m-12 c-12">
                            {this.showContents(routes)}

                        </div>
                    </div>
                    <Feature />

                    <div className="action-page">
                        <button className="top-page" onClick={this.onTop}>
                            <ion-icon name="chevron-up-outline"></ion-icon>
                        </button>
                        <button className="botton-page" onClick={this.onBotton}>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    showContents = (routes) => {
        var result = null
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return <Switch>{result}</Switch>
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchCategories: () => {
            dispatch(actFetchCategoriesRequest())
        },
        onFetchProductsOfCategories: () => {
            dispatch(actFetchProductOfCategoriesRequest())
        },
        onFetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
    }
}

export default connect(null, mapDispatchToProps)(Main);