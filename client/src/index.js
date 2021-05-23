import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

import './styles/index.module.scss'
import 'antd/dist/antd.css'

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
