import ApiService from './ApiService'
import * as constants from '../constants/GithubConstants';

class GithubService extends ApiService {
    // esto es un ejemplo de uso
    getProfile() {
        return this.__get(constants.GITHUB_BASE_URL)
    }
}

// exportamos un singleton...
export default new GithubService()