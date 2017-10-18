import React, { Component } from 'react';
import './Geekfinity.css'

import Wellcome from './Wellcome/Wellcome'
import backgroundService from '../services/BackgroundService'

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

    componentDidMount() {
       
        backgroundService.getBackground()
            .then(image => {
                this.setState({ image })
            })
            .catch(function(error) {
                console.error(error)
            })
        
        if (typeof(Storage) !== "undefined") {
            if (localStorage['geekfinity.config']) {
                const config = JSON.parse(localStorage['geekfinity.config']);
                this.setState(config)
            }
        }
    }

    handleUpdateState = (newState) => {
        
        this.setState(newState, () => {
            if (typeof(Storage) !== "undefined") {
                localStorage['geekfinity.config'] = JSON.stringify({ name: this.state.name, username: this.state.username })
            }
        })
    }

    render() {
        return (
            <main className="geekfinity bg-full appear-hide" style = {{ backgroundImage: "url(" + this.state.image + ")" }}>
                <h1>Geekfinity</h1>
                { this.state.name === '' && 
                    <Wellcome onUpdate={ this.handleUpdateState } foreColor="white"/>
                }
                { this.state.username !== '' &&
                    <Github user={ this.state.username }/>
                }
                <Search foreColor='white'/>
                <Forecast foreColor='white'/>
                <Time foreColor='white'/>
                <Quotes foreColor='white'/>
            </main>
        )
    }
}

export default Geekfinity