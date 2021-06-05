const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()
const {check} = require('express-validator')

router.post('/login',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password must contain numbers, uppercase and lowercase letters, length 8-15 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/, "i")
    ],
    controller.login)

router.post('/register',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password must contain numbers, uppercase and lowercase letters, length 8-15 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/, "i")
    ],
 controller.register)

module.exports = router 