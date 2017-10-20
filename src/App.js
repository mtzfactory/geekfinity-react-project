import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';

import Geekfinity from './components/Geekfinity'

class App extends Component {

    constructor() {
        super()

        this.intervals = {
            intervalBackground: 60,
            intervalForecast: 600,
            intervalQuote: 90
        }
    }

    render() {
        return (
            <HashRouter>
                <Geekfinity interval={ this.intervals.intervalBackground } intervals={ this.intervals }/>
            </HashRouter>
        )
    }
}

export default App;
