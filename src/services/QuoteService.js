import ApiService from './ApiService'
import * as constants from '../constants/Constants';

class QuoteService extends ApiService{
    // esto es un ejemplo de uso
    getChatOfTheDay() {
        return this.__get(constants.QUOTE_BASE_URL)
    }
}

// exportamos un singleton...
export default new QuoteService()