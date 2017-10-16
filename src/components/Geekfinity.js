import React, { Component } from 'react';

import locationService from '../services/LocationService'
import forecastService from '../services/WeatherService'
import backgroundService from '../services/BackgroundService'
import quoteService from '../services/QuoteService'

class Geekfinity extends Component {

    constructor() {
        super()

        this.state ={
            location: {
                ip: '',
                country_code: '',
                country_name: '',
                region_code: '',
                region_name: '',
                city: '',
                time_zone: '',
                latitude: 0,
                longitude: 0
            },
        }
    }

    componentWillMount() {
        locationService.getLocation()
            .then(location => {
                console.log(location)
                this.setState(location)
            })
            .catch(function(error) {
                console.error(error)
            })
    }

    render() {
        return (
            <div>Geekfinity</div>
        )
    }
}

export default Geekfinity