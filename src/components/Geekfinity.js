import React, { Component } from 'react';

import Quotes from './Quotes/Quotes'
import Forecast from './Forecast/Forecast'
import Time from './Time/Time'
import Github from './Github/Github'



class Geekfinity extends Component {

    render() {
        return (
            <main>
            	<Github />
                <Forecast foreColor='black'/>
                <Time />
                <Quotes foreColor='black'/>
            </main>
        )
    }
}

export default Geekfinity