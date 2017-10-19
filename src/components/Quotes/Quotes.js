import React, { Component } from 'react';
import './Quotes.css'

import withInterval from '../../hoc/EnhancerHoc'
import quoteService from '../../services/QuoteService'

class Quotes extends Component {

    constructor() {
        super()

        this.state ={
            quote: '',
        }
    }

    updateQuote() {
        quoteService.getQuoteOfTheDay()
        .then(quote => {
            this.setState({quote})
        })
        .catch(function(error) {
            console.error(error)
        })
    }

    componentDidMount() {
        console.log('Quotes', 'componentDidMount')
        this.updateQuote()
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.timestamp !== nextProps.timestamp) {
            console.log('Quotes', 'componentWillReceiveProps')
            this.updateQuote()
        }
    }

    render() {
        return (
            <section className="quote" style={{ color: this.props.foreColor, backGround: this.props.backColor }}>
                <p>{this.state.quote}</p>
            </section>
        )
    }
}

export default withInterval(Quotes)