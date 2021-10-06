import React, { Component } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ScrollToTop from './effectivePage/ScrollToTop'
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                {/* Start Header */}
                <Header />
                {/* End Header */}
                {/* Start Body */}
                <ScrollToTop />
                <Main />
                {/* End Body */}
                {/* Start Footer */}
                <Footer />
            </Router>
        );
    }
}

export default App;
