import ApiService from './ApiService'
import * as constants from '../constants/Constants';

class ChatService extends ApiService{
    // esto es un ejemplo de uso
    getChatOfTheDay() {
        return this.__get(constants.CHAT_BASE_URL)
    }
}

// exportamos un singleton...
export default new ChatService()