import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 10,
    iterations: 20
}
const params = {
    headers: {
        'Authorization': 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'

    }
}
let headers_api = {
    'Authorization': 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
}

const url ="https://gorest.co.in/public/v2/users/"

export default function () {

    const response = http.get(url, params)
    check(response, {
        'status code validation': (response) => response.status === 200
    })
}