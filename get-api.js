import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 10,
    iterations: 20
}
const params = {
    headers: {
        'Authorization': 'Bearer 737433476'

    }
}
let headers_api = {
    'Authorization': 'Bearer 535534'
}

const url ="https://gorest.co.in/public/v2/users/"

export default function () {

    const response = http.get(url, params)
    check(response, {
        'status code validation': (response) => response.status === 200
    })
}
