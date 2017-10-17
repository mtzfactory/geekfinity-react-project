import React, { Component } from 'react';

import Quotes from './Quotes/Quotes'
import Forecast from './Forecast/Forecast'
import Time from './Time/Time'


class Geekfinity extends Component {

    render() {
        return (
            <main>
                <h1>Geekfinity</h1>
                <Forecast foreColor='black'/>
                <Quotes foreColor='black'/>
                <Time />
            </main>
        )
    }
}

export default Geekfinity