const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const keys = require('./config/keys')
const authRoutes = require('./routes/auth')
const orderRoutes = require('./routes/order')
const categoryRoutes = require('./routes/category')
const positionRoutes = require('./routes/position')
const analyticsRoutes = require('./routes/analytics')
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
 
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use('/api/auth', authRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/analytics', analyticsRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

module.exports = app