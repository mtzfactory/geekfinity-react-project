import React, { Component } from 'react';

import Quotes from './Quotes/Quotes'

class Geekfinity extends Component {

    render() {
        return (
            <div>
            <h1>Geekfinity</h1>
            <Quotes foreColor='black'/>
            </div>
        )
    }
}

export default Geekfinity