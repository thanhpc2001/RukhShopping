import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actSearchProduct } from './../../actions/index'

class HeaderSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            historySearch: localStorage.getItem('RUKHSHOPPING_HISTORY_SEARCH') ?? "[]"
        }
    }

    onChange = (e) => {
        this.setState({
            keyword: e.target.value,
            historySearch: this.state.historySearch
        })
    }

    findIndex = (keyword, listHis) => {
        for (let i = 0; i < listHis.length; i++) {
            if (listHis[i] === keyword)
                return i
        }
        return -1
    }

    onSearch = (keyword) => {

        if (keyword.trim()) {
            const historySearch = JSON.parse(this.state.historySearch)
            const index = this.findIndex(keyword, historySearch)
            if (index !== -1) {
                historySearch.splice(index, 1)
            }
            historySearch.unshift(keyword)
            this.setState({
                keyword: '',
                historySearch: JSON.stringify(historySearch)
            })
            localStorage.setItem('RUKHSHOPPING_HISTORY_SEARCH', JSON.stringify(historySearch))

            this.props.onSearch(keyword)
        }

        // document.querySelector('input.header-search-input').classList.remove('active')
    }

    showHistorySearch(historySearch) {
        const numOfHis = 7
        const len = historySearch.length
        if (len > 0) {
            var result = []
            if (numOfHis > len) {
                for (let i = 0; i < len; i++) {
                    result.push(<li key={i}>
                        <Link to='/results'
                            onClick={() => this.onSearch(historySearch[i])}
                        >{historySearch[i]}</Link>
                        <ion-icon name="close"
                            onClick={() => this.deleteHistorySearch(historySearch[i])}
                        />
                    </li>)
                }
            }
            else {
                for (let i = 0; i < numOfHis; i++) {
                    result.push(<li key={i}>
                        <Link to='/results'
                            onClick={() => this.onSearch(historySearch[i])}
                        >{historySearch[i]}</Link>
                        <ion-icon name="close"
                            onClick={() => this.deleteHistorySearch(historySearch[i])}
                        />
                    </li>)
                }
            }
            return result
        }
        else {
            return <li>Ch??a c?? s???n ph???m</li>
        }
    }

    handleFocus(e) {
        e.target.classList.add('active')
    }

    deleteHistorySearch = (keyword) => {
        const historySearch = JSON.parse(this.state.historySearch)
        const index = this.findIndex(keyword, historySearch)
        historySearch.splice(index, 1)
        this.setState({
            keyword: this.state.keyword,
            historySearch: JSON.stringify(historySearch)
        })
        localStorage.setItem('RUKHSHOPPING_HISTORY_SEARCH', JSON.stringify(historySearch))
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            document.querySelector('.search-icon').click()
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="header-search">
                    <input type="text" className="header-search-input" placeholder="T??m ki???m s???n ph???m ch???t l?????ng ..."
                        value={this.state.keyword}
                        onChange={this.onChange}
                        onFocus={this.handleFocus}
                        onKeyDown={this.handleKeyDown}
                    />
                    <Link
                        to="/results"
                        className="search-icon"
                        onClick={() => this.onSearch(this.state.keyword)}
                    >
                        <ion-icon name="search" />
                    </Link>
                    <div className="history-search">
                        <p>L???ch s??? t??m ki???m</p>
                        <ul>
                            {this.showHistorySearch(JSON.parse(this.state.historySearch))}

                            {/* <li>
                                ???c g?? n???c
                                <ion-icon name="close" />
                            </li>
                            <li>
                                Th???t b?? wagyu
                                <ion-icon name="close" />
                            </li>
                            <li>
                                Tr???ng g?? ba hu??n
                                <ion-icon name="close" />
                            </li>
                            <li>
                                M?? h???o h???o
                                <ion-icon name="close" />
                            </li>
                            <li>
                                S???a t????i kh??ng ???????ng
                                <ion-icon name="close" />
                            </li> */}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actSearchProduct(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);