const axios = require('axios')

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
})


export default class API {

    async login(payload) {
        try {
            return await instance.post('api/auth/login', payload)
        } catch (e) {
            console.log(e)
        }
    }

}