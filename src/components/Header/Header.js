import React, { Component } from 'react';
import HeaderRightCol from './HeaderRightCol';
import HeaderSearch from './HeaderSearch'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="grid wide">
                        <div className="header-nav">
                            <Link to="/" className="logo">
                                <p><span>Rukh</span>Shopping</p>
                            </Link>
                            <HeaderSearch />
                            <HeaderRightCol />
                        </div>
                    </div>
                </header>
            </React.Fragment>
        ); 
    }
}

export default Header;