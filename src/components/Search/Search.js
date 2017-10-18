import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Search.css'

import { Switch, Route, withRouter } from 'react-router-dom'

import SearchEngine from '../SearchEngine/SerachEngine'

class Search extends Component {

    constructor() {
        super()

        this.state = {
            active: ''
        }
    }

    handleOnKeyPress = (event) =>  {
        if (event.key.toLowerCase() === 'enter' && event.target.value) {
            event.target.blur()
            this.props.history.push('/search/' + encodeURI(event.target.value))
        }
    }

    handleOnFocus = (event) => {
        if (event.type === 'focus') event.target.select()
        
        this.refs.underline.classList.toggle('active')
        //ReactDOM.findDOMNode(this.refs.underline).classList.toggle('active')
    }

    // componentDidMount() {
    //     const input = ReactDOM.findDOMNode(this.refs.query);
    //     input.value = ''
    //     ReactDOM.findDOMNode(this.refs.query).addEventListener('focus', this.handleOnFocus);   
    // }

    // componentWillUnmount() {
    //     const input = ReactDOM.findDOMNode(this.refs.query); 
    //     ReactDOM.findDOMNode(this.refs.query).removeEventListener('focus', this.handleOnFocus)
    // }

    render() {
        return (
            <section className="search">
                <span ref="underline" className="search-underline"></span>
                <i className="search-icon fa fa-search" aria-hidden="true"></i>
                <input
                    onKeyPress = { this.handleOnKeyPress }
                    onFocus = { this.handleOnFocus }
                    onBlur = { this.handleOnFocus }
                    ref="query"
                    className="search-input"
                    placeholder="search"
                    type="text" autoComplete="off"/>                
                <Switch>
                    <Route exact path="/search/:query" component = { SearchEngine }/>
                </Switch>
            </section>
        )
    }
}

export default withRouter(Search)