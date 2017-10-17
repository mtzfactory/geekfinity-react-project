import React, { Component } from 'react';
import './ForecastIcon.css'

import { dayIcons, nightIcons, defaultIcon } from '../../constants/ForecastIconsConstants'

class ForecastIcon extends Component {

    getIcon(iconName) {
        let icon = {}

        switch(iconName) {
            case 'chanceflurries': icon = dayIcons.chanceFlurries; break;
            case 'chancerain': icon = dayIcons.chanceRain; break;
            case 'chancesleet': icon = dayIcons.chanceSleet; break;
            case 'chancesnow': icon = dayIcons.chanceSnow; break;
            case 'chancetstorms': icon = dayIcons.chanceTStorms; break;
            case 'clear': icon = dayIcons.clear; break;
            case 'cloudy': icon = dayIcons.cloudy; break;
            case 'flurries': icon = dayIcons.flurries; break;
            case 'fog': icon = dayIcons.fog; break;
            case 'hazy': icon = dayIcons.hazy; break;
            case 'mostlycloudy': icon = dayIcons.mostlyCloudy; break;
            case 'mostlysunny': icon = dayIcons.mostlySunny; break;
            case 'partlycloudy': icon = dayIcons.partlyCloudy; break;
            case 'partlysunny': icon = dayIcons.partlySunny; break;
            case 'sleet': icon = dayIcons.sleet; break;
            case 'rain': icon = dayIcons.rain; break;
            case 'snow': icon = dayIcons.snow; break;
            case 'sunny': icon = dayIcons.sunny; break;
            case 'tstorms': icon = dayIcons.tStorms; break;
            
            case 'nt_chanceflurries': icon = nightIcons.nt_chanceFlurries; break;
            case 'nt_chancerain': icon = nightIcons.nt_chanceRain; break;
            case 'nt_chancesleet': icon = nightIcons.nt_chanceSleet; break;
            case 'nt_chancesnow': icon = nightIcons.nt_chanceSnow; break;
            case 'nt_chancetstorms': icon = nightIcons.nt_chanceTStorms; break;
            case 'nt_clear': icon = nightIcons.nt_clear; break;
            case 'nt_cloudy': icon = nightIcons.nt_cloudy; break;
            case 'nt_flurries': icon = nightIcons.nt_flurries; break;
            case 'nt_fog': icon = nightIcons.nt_fog; break;
            case 'nt_hazy': icon = nightIcons.nt_hazy; break;
            case 'nt_mostlycloudy': icon = nightIcons.nt_mostlyCloudy; break;
            case 'nt_mostlysunny': icon = nightIcons.nt_mostlySunny; break;
            case 'nt_partlycloudy': icon = nightIcons.nt_partlyCloudy; break;
            case 'nt_partlysunny': icon = nightIcons.nt_partlySunny; break;
            case 'nt_sleet': icon = nightIcons.nt_sleet; break;
            case 'nt_rain': icon = nightIcons.nt_rain; break;
            case 'nt_snow': icon = nightIcons.nt_snow; break;
            case 'nt_sunny': icon = nightIcons.nt_sunny; break;
            case 'nt_tstorms': icon = nightIcons.nt_tStorms; break;
                        
            default: icon = defaultIcon
        }

        return (
            <div className="forecast-icon">
                { icon }
            </div>
        )
    }

    render() {
        return this.getIcon(this.props.icon)
    }
}

export default ForecastIcon