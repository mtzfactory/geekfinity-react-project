import React, { Component } from 'react';
import './Geekfinity.css'

import Quotes from './Quotes/Quotes'
import Forecast from './Forecast/Forecast'
import Search from './Search/Search'

class Geekfinity extends Component {

    render() {
        return (
            <main className="geekfinity">
                <h1>Geekfinity</h1>
                <Search foreColor='black'/>
                <Forecast foreColor='black'/>
                <Quotes foreColor='black'/>
            </main>
        )
    }
}

export default Geekfinity