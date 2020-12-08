import axios from 'axios'

const http = axios.create({
    baseUrl: 'https://api.exchangerate.host/'
})

function converter(de, para) {
    return http.get(`convert?from=${de}&to=${para}`)
}

export default {
    converter
}