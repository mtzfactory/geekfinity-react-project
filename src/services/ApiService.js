import axios from 'axios'

class ApiService {

    __get(url) {
        return axios.get(url)
            .then(function({ data }) {
                return data
            })
    }

}

export default ApiService