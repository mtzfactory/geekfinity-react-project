import ApiService from './ApiService'
import * as constants from '../constants/Constants';

class LocationService extends ApiService{
    // esto es un ejemplo de uso
    getLocation() {
        return this.__get(constants.LOCATION_BASE_URL)
    }
}

// exportamos un singleton...
export default new LocationService()