import axios from "axios";

const $authHost = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})
const $authHostWithoutHeaders = axios.create({
    baseURL: 'http://localhost:5000/'
})

export {
    $authHost,
    $authHostWithoutHeaders
}