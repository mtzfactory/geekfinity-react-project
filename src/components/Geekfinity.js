import React, { Component } from 'react';
import './Geekfinity.css'

import Wellcome from './Wellcome/Wellcome'
import Quotes from './Quotes/Quotes'
import Forecast from './Forecast/Forecast'
import Search from './Search/Search'
import Time from './Time/Time'
import Github from './Github/Github'


class Geekfinity extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            username: ''
        }
    }

    componentDidMount() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage['geekfinity.config']) {
                const config = JSON.parse(localStorage['geekfinity.config']);
                this.setState(config)
            }
        }
    }

    handleUpdateState = (newState) => {
        this.setState(newState)

        if (typeof(Storage) !== "undefined") {
            localStorage['geekfinity.config'] = JSON.stringify(this.state)
        }
    }

    render() {
        return (
            <main className="geekfinity">
                <h1>Geekfinity</h1>
                { this.state.name === '' && <Wellcome onUpdate={ this.handleUpdateState } foreColor="white"/> }
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