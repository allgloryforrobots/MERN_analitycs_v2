const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const {check, validationResult} = require('express-validator')

const keys = require('../config/keys')
const error = require('../utils/error')
const User = require('../models/user')

module.exports.login = async function (req, res) {
  console.log('server', req.body)
  // Валидация
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    const result = bcrypt.compareSync(req.body.password, candidate.password)
    if (result) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id,
      },  process.env.JWT, {expiresIn: 60 * 60})
      const createTime = Date.now()
      res.status(200).json({token: `Bearer ${token}`, userId: candidate._id, createTime})
    } else {
      res.status(401).json({message: 'Пароль неверный'})
    }
  } else {
    res.status(404).json({message: 'Пользователь не найден'})
  }

}

module.exports.register = async function (req, res) {
    // Валидация
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    res.status(409).json({message: 'Такой email уже занят'})
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt)
    })

    try {
      await user.save()
      res.status(201).json(user)
    } catch(e) {
      error(res, e)
    }
  }
}