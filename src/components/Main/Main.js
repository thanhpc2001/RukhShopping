import React, { Component } from 'react';
import Category from './Category';
import Feature from '../Feature/Feature';
import routes from './../../routes'
import { Switch, Route } from 'react-router-dom';

class Main extends Component {

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

export default Main;