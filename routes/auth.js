const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()
const {check} = require('express-validator')

router.post('/login',
    [
        check('email', 'Введите корректный email').isEmail(),
        check('password', 'Пароль должен содержать цифры, заглавную и строчную буквы, длина 8-15 символов, только латиница').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/, "i")
    ],
    controller.login)

router.post('/register',
    [
        check('email', 'Введите корректный email').isEmail(),
        check('password', 'Пароль должен содержать цифры, заглавную и строчную буквы, длина 8-15 символов, только латиница').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/, "i")
    ],
 controller.register)

module.exports = router 