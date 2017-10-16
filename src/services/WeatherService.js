import ApiService from './ApiService'
import * as constants from '../constants/Constants';

class WeatherService extends ApiService{
    // esto es un ejemplo de uso
    getDailyWeatherForecast() {
        return this.__get(constants.WEATHER_BASE_URL)
    }
}

// exportamos un singleton...
export default new WeatherService()