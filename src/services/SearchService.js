import ApiService from './ApiService'
import * as constants from '../constants/SearchConstants';

class SearchService extends ApiService{

    search(query) {
        const engine = Math.floor(Math.random() * constants.SEARCH_BASE_URL.length)

        window.open(constants.SEARCH_BASE_URL[engine] + query.split(' ').join('+'), '_self')
    }

    searchBing(query) {
        window.open(constants.BING_BASE_URL + query.split(' ').join('+'), '_self')
    }

    searchGoogle(query) {
        window.open(constants.GOOGLE_BASE_URL + query.split(' ').join('+'), '_self')
    }

    searchYahoo(query) {
        window.open(constants.YAHOO_BASE_URL + query.split(' ').join('+'), '_self')
    }

}

// exportamos un singleton...
export default new SearchService()
