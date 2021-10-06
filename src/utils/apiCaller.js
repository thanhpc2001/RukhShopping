import axios from 'axios'
import * as Config from './../constants/ConfigApi'

export default function callApi(endpoint, method = 'get', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}
