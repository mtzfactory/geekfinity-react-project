import React, { Component } from 'react';

import Forecast from './Forecast/Forecast'

class Geekfinity extends Component {

    render() {
        return (
            <main>
                <span>Geekfinity</span>
                <Forecast/>
            </main>
        )
    }
}

export default Geekfinity