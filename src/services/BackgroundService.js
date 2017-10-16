import ApiService from './ApiService'
import * as constants from '../constants/Constants';

class BackgroundService extends ApiService {
    // esto es un ejemplo de uso
    getBackground() {
        return this.__get(constants.BACKGROUND_BASE_URL)
    }
}

// exportamos un singleton...
export default new BackgroundService()