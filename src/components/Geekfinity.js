import React, { Component } from 'react';
import './Geekfinity.css'

import withInterval from '../hoc/EnhancerHoc'
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

        this.state = {
            name: '',
            username: '',
            image: ''
        }
    }

    updateBackground(origin) {
        backgroundService.getBackground()
        .then(image => {
            this.setState({ image })
        })
        .catch(function(error) {
            console.error(error)
        })

        //console.log('updateBackground', origin)
    }

    handleSaveConfig = (newState) => {
        this.setState(newState, () => {
            if (typeof(Storage) !== "undefined") {
                localStorage['geekfinity.config'] = JSON.stringify({ name: this.state.name, username: this.state.username })
            }
        })
    }

    componentDidMount() {
        this.updateBackground('componentDidMount')
        
        if (typeof(Storage) !== "undefined") {
            if (localStorage['geekfinity.config']) {
                const config = JSON.parse(localStorage['geekfinity.config']);
                this.setState(config)
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.timestamp !== nextProps.timestamp) {
            this.updateBackground('componentWillReceiveProps')
        }
    }

    render() {
        //console.log('Geekfinity', 'render')

        return (
            <main className="geekfinity bg-full appear-hide" style = {{ backgroundImage: "url(" + this.state.image + ")" }}>
                <Wellcome onSaveConfig={ this.handleSaveConfig } name={this.state.name} username={this.state.username}  foreColor="white"/>
                { this.state.username !== '' &&
                    <Github user={ this.state.username }/>
                }
                <Search foreColor='white'/>
                <Forecast foreColor='white' interval={ this.props.intervals.intervalForecast }/>
                <Time foreColor='white'/>
                <Quotes foreColor='white' interval={ this.props.intervals.intervalQuote }/>
            </main>
        )
    }
}

export default withInterval(Geekfinity)