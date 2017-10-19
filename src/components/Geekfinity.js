import React, { Component } from 'react';
import './Geekfinity.css'

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
            
    }


    render() {
        return (
            <main className="geekfinity bg-full appear-hide" style = {{backgroundImage: "url(" + this.state.image + ")"}}>
                <Github />
                <Search foreColor='white'/>
                <Forecast foreColor='white'/>
                <Time foreColor='white'/>
                <Quotes foreColor='white'/>
            </main>
        )
    }
}

export default Geekfinity