import React, { Component } from 'react';
import './Quotes.css'

import quoteService from '../../services/QuoteService'

class Quotes extends Component {

    constructor() {
        super()

        this.state ={
            quote: '',
        }
    }

    componentWillMount() {

        quoteService.getQuoteOfTheDay()
            .then(quote => {
                //console.log(quote)
                this.setState({quote})
            })
            .catch(function(error) {
                console.error(error)
            })
    }

    render() {
        return (
            <div className="foot-quote" style={{color: this.props.foreColor, backGround: this.props.backColor}}>
                <p>{this.state.quote}</p>
            </div>
        )
    }
}

export default Quotes