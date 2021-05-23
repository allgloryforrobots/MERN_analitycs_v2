const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
require('dotenv').config()

const keys = require('../config/keys')
const User = mongoose.model('users')
 
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT
}

module.exports = passport => {
  passport.use(new JwtStrategy(opts, async (payload, done) => {
    try {
      const user = await User.findById(payload.userId).select('email id')
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    } catch (e) {
      console.log(e)
    }
  }))
}