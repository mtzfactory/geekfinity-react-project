import React, { Component } from 'react';
import './SearchEngine.css'

import searchService from '../../services/SearchService'

class SearchEngine extends Component {
    
    constructor() {
        super()

        this.state = { redirecting: '' }
    }

    search(query) {
        const q = query.split('!')
        
        switch (q[0].trim()) {
            case 'g': searchService.searchGoogle(q[1].trim()); break;
            case 'y': searchService.searchYahoo(q[1].trim()); break;
            case 'b': searchService.searchBing(q[1].trim()); break;
            default: searchService.search(query)
        }
    }

    componentDidMount() {
        if (this.state.redirecting === '') {
            this.setState({ redirecting: 'Redirecting...' })
            
            this.search(this.props.match.params.query)

            this.setState({ redirecting: '' })
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.state.redirecting === '') {
            this.setState({ redirecting: 'Redirecting...' })
            
            this.search(newProps.match.params.query)

            this.setState({ redirecting: '' })
        }
    }

    render() {
        return (
            <section className="redirecting"> { this.state.redirecting } </section>
        )
    }

}

export default SearchEngine