import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actSearchProduct } from './../../actions/index'

class MobileSearch extends Component {
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
            return <li>Chưa có sản phẩm</li>
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
    render() {
        return (
            <React.Fragment>
                <div className="mobile-search-bar">
                    <input type="text" className="mobile-header-search-input" placeholder="Tìm kiếm sản phẩm chất lượng ..."
                        value={this.state.keyword}
                        onChange={this.onChange}
                        onFocus={this.handleFocus}
                        onKeyDown={this.handleKeyDown}
                    />
                    <Link
                        to="/results"
                        className="mobile-search-icon"
                        onClick={() => this.onSearch(this.state.keyword)}
                    >
                        <ion-icon name="search" />
                    </Link>
                    <div className="mobile-history-search">
                        <p>Lịch sử tìm kiếm</p>
                        <ul>
                            {this.showHistorySearch(JSON.parse(this.state.historySearch))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actSearchProduct(keyword))
        }
    }
}

export default connect(null, mapDispatchToProps)(MobileSearch);