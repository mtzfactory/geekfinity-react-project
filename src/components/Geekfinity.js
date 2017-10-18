import React, { Component } from 'react';
import './Geekfinity.css'

import Quotes from './Quotes/Quotes'
import Forecast from './Forecast/Forecast'
import Search from './Search/Search'
import Time from './Time/Time'
import Github from './Github/Github'



class Geekfinity extends Component {

    render() {
        return (
            <main className="geekfinity">
                <h1>Geekfinity</h1>
                <Github />
                <Search foreColor='black'/>
                <Forecast foreColor='black'/>
                <Time />
                <Quotes foreColor='black'/>
            </main>
        )
    }
}

export default Geekfinity