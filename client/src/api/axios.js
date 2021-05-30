
const axios = require('axios')

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
})


export default class API {

    async login(payload) {
        try {
            return await instance.post('api/auth/login', payload)
        } catch (error) {
            console.log('axios error', error)
            return error
        }
    }

    async register(payload) {
        console.log('api/register/payload', payload)
        
        try {
            return await instance.post('api/auth/register', payload)
        } catch (error) {
            console.log('axios error', error)
            return error
        }
    }

}