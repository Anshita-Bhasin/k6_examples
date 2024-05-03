import http from 'k6/http'
import { check } from 'k6'



const url = "https://gorest.co.in/public/v2/users"
const payload = {

    "name": "AB Automation Hub",
    "email": "AB_6May@dispostable.com",
    "gender": "female",
    "status": "active"


}
export default function () {
    const response = http.post(url, payload, { headers: { 'Authorization': 'Bearer 96096fd0358d8c24b76' } })
    console.log("*** printing response ***", JSON.stringify(response.body))
    check(response, { "status code validation": (response) => response.status === 201 })
}