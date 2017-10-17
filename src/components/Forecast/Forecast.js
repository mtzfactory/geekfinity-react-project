import React, { Component } from 'react';
import './Forecast.css'

import locationService from '../../services/LocationService'
import forecastService from '../../services/ForecastService'

import ForecastIcon from '../ForecatIcon/ForecastIcon'

class Forecast extends Component {

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
            forecast: {}
        }
    }

    componentWillMount() {
        const localState = {}

        locationService.getLocation()
            .then(location => {
                localState.location = location
                return forecastService.getForecast(location.country_code, location.city)
            })
            .then(({current_observation: forecast}) => {
                localState.forecast = forecast
                this.setState(localState)
            })
            .catch(function(error) {
                console.error(error)
            })
    }

    render() {
        const { forecast } = this.state

        return (
            <section className="forecast">
            {
                Object.keys(forecast).length &&
                <div className="wrapper">
                    <ForecastIcon icon={ forecast.icon }/>
                    <div className="wrapper move-right">
                        <p className="weather" style={{ color: this.props.foreColor }}>{ forecast.weather }</p>
                        <p className="temp" style={{ color: this.props.foreColor }}>{ forecast.feelslike_c }C</p>
                    </div>
                </div>
            }
            </section>
        )
    }
}

export default Forecast