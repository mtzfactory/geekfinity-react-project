import ApiService from './ApiService'
import * as constants from '../constants/GithubConstants';

class GithubService extends ApiService {

    getProfile(user) {
        return this.__get(constants.GITHUB_BASE_URL + user)
    }
}

// exportamos un singleton...
export default new GithubService()