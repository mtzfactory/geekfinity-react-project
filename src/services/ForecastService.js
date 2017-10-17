import ApiService from './ApiService'
import * as constants from '../constants/ForecastConstants';

class ForecastService extends ApiService{
    // esto es un ejemplo de uso
    getForecast(countryCode, city) {
        return this.__get(constants.FORECAST_BASE_URL.replace('[countryCode]', countryCode).replace('[city]', city))
    }
}

// exportamos un singleton...
export default new ForecastService()