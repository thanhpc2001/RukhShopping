import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import GroupProductsPage from './pages/GroupProductsPage/GroupProductsPage'
import CartPage from './pages/CartPage/CartPage'
import BuyNowPage from './pages/BuyNowPage/BuyNowPage'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: () => <GroupProductsPage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
    },
    {
        path: '/product/:id/buy-now',
        exact: false,
        main: ({ match }) => <BuyNowPage match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes