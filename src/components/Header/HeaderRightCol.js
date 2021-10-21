import React, { Component } from 'react';
import CardBoard from './CartBoard/CardBoard';
import MobileSearch from './MobileSearch';
import NotifyBoard from './NotifyBoard/NotifyBoard';
import UserBoard from './UserBoard/UserBoard';

class HeaderRightCol extends Component {

    handleToggleActive = (e) => {
        const iconsActive = document.querySelector('.icons.active')
        if (iconsActive && !e.target.matches('.icons.active') && !e.target.parentElement.matches('.icons.active') && !e.target.matches('.mobile-header-search-input')) {
            iconsActive.classList.remove('active')
        }

        if (e.target.matches('.icons')) {
            e.target.classList.toggle('active')
        }
        else if (e.target.parentElement.matches('.icons')) {
            e.target.parentElement.classList.toggle('active')
        }
    }

    render() {
        return (
            <React.Fragment>
                <ul className="header-right">
                    <li className="icons" id="mobile-search-btn" onClick={(e) => this.handleToggleActive(e)}>
                        {/* <ion-icon name="search" /> */}
                        <ion-icon name="search-outline"></ion-icon>
                        <MobileSearch />
                    </li>
                    <li className="icons" id="notify-btn" onClick={(e) => this.handleToggleActive(e)}>
                        <ion-icon name="notifications" />
                        <NotifyBoard />
                    </li>
                    <li className="icons" id="cart-btn" onClick={(e) => this.handleToggleActive(e)}>
                        <ion-icon name="cart" />
                        <CardBoard />
                    </li>
                    <li className="icons" id="user-btn" onClick={(e) => this.handleToggleActive(e)}>
                        <ion-icon name="person-sharp" />
                        <UserBoard />
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default HeaderRightCol;