import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import GroupProductsPage from './pages/GroupProductsPage/GroupProductsPage'
import CartPage from './pages/CartPage/CartPage'
import BuyNowPage from './pages/BuyNowPage/BuyNowPage'
import ResultsSearch from './pages/ResultsSearch/ResultsSearch'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/codes/:id/products',
        exact: false,
        main: ({ match }) => <GroupProductsPage match={match} />
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
        path: '/results',
        exact: false,
        main: () => <ResultsSearch />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes