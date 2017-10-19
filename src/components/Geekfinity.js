import React, { Component } from 'react';
import './Geekfinity.css'

import backgroundService from '../services/BackgroundService'

import Wellcome from './Wellcome/Wellcome'
import Quotes from './Quotes/Quotes'
import Forecast from './Forecast/Forecast'
import Search from './Search/Search'
import Time from './Time/Time'
import Github from './Github/Github'

class Geekfinity extends Component {

    constructor() {
        super()

        this.timerId = 0

        this.intervalBackground = 60
        this.intervalForecast = 600
        this.intervalQuote = 60

        this.state = {
            name: '',
            username: '',
            image: ''
        }
    }

    updateBackground() {
        backgroundService.getBackground()
        .then(image => {
            this.setState({ image })
        })
        .catch(function(error) {
            console.error(error)
        })
    }

    handleSaveConfig = (newState) => {
        this.setState(newState, () => {
            if (typeof(Storage) !== "undefined") {
                localStorage['geekfinity.config'] = JSON.stringify({ name: this.state.name, username: this.state.username })
            }
        })
    }

    componentDidMount() {
        this.updateBackground()

        this.timerId = setInterval(() => {
            this.updateBackground()
        }, this.intervalBackground * 1000)
        
        if (typeof(Storage) !== "undefined") {
            if (localStorage['geekfinity.config']) {
                const config = JSON.parse(localStorage['geekfinity.config']);
                this.setState(config)
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <main className="geekfinity bg-full appear-hide" style = {{ backgroundImage: "url(" + this.state.image + ")" }}>
                <Wellcome onSaveConfig={ this.handleSaveConfig } name={this.state.name} username={this.state.username}  foreColor="white"/>
                { this.state.username !== '' &&
                    <Github user={ this.state.username }/>
                }
                <Search foreColor='white'/>
                <Forecast foreColor='white' interval={ this.intervalForecast }/>
                <Time foreColor='white'/>
                <Quotes foreColor='white' interval={ this.intervalQuote }/>
            </main>
        )
    }
}

export default Geekfinity