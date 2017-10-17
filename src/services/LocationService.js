import ApiService from './ApiService'
import * as constants from '../constants/ForecastConstants';

class LocationService extends ApiService{

    getLocation() {
        return this.__get(constants.LOCATION_BASE_URL)
    }
}

// exportamos un singleton...
export default new LocationService()

/*

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
https://stackoverflow.com/questions/23942339/js-promise-geolocation-watchposition#23962828
https://www.zachleat.com/web/deferred-geolocation/
https://github.com/cujojs/when

*/