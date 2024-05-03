import http from 'k6/http'
import { check } from 'k6'



export const options = {
    duration: '2s'
}

const url = "https://reqres.in/api/users"
const payload = {
    "name": "Anshita",
    "job": "QA"
}


export default function () {
    const response = http.post(url, payload)
    console.log("*** printing payload ***", payload)
    console.log("*** printing response ***", response.body)

check(response,{
    'Status Code Validation': (response) => response.status === 201,
    'Response Validation': (response) => response.body.includes('id')
})


}